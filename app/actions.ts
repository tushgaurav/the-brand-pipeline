"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: {
    name: string;
    email: string;
    company: string;
    message: string;
    services: string[];
  };
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Honeypot: real people never see this field.
  if (formData.get("website")) return { status: "success" };

  const values = {
    name: String(formData.get("name") ?? "").trim().slice(0, 120),
    email: String(formData.get("email") ?? "").trim().slice(0, 200),
    company: String(formData.get("company") ?? "").trim().slice(0, 200),
    message: String(formData.get("message") ?? "").trim().slice(0, 5000),
    services: formData.getAll("services").map(String).slice(0, 4),
  };

  const errors: EnquiryState["errors"] = {};
  if (!values.name) errors.name = "We'd love to know who we're talking to.";
  if (!EMAIL.test(values.email)) errors.email = "That email doesn't look quite right.";
  if (values.message.length < 10) errors.message = "Tell us a little more — a sentence or two is perfect.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "A couple of things need a look.", errors, values };
  }

  // Set CONTACT_WEBHOOK_URL (Slack, Zapier, Make, your CRM…) to receive enquiries.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, submittedAt: new Date().toISOString() }),
    }).catch(() => null);

    if (!res?.ok) {
      return {
        status: "error",
        message: "Something clogged the pipe on our end. Please try again, or email us directly.",
        values,
      };
    }
  } else {
    console.warn("[enquiry] CONTACT_WEBHOOK_URL is not set — enquiry not delivered:", values);
  }

  return { status: "success", message: values.name.split(" ")[0] };
}
