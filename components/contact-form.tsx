"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "@/app/actions";
import { Arrow, PaperPlane, Sparkle } from "./doodles";

const serviceOptions = ["Marketing", "Design", "Development", "The whole pipeline"];

const field =
  "w-full rounded-xl border border-ink/10 bg-white px-4 py-3.5 text-base text-ink shadow-[0_2px_6px_-2px_rgba(13,11,26,0.12)] outline-none transition placeholder:text-ink/40 focus:border-brand focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-[#d6304f]";

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-[#d6304f]">
      {children}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, {
    status: "idle",
  });

  if (state.status === "success") {
    return (
      <div className="flex min-h-[26rem] flex-col items-start justify-center" role="status">
        <PaperPlane className="size-16 -rotate-12 text-brand" />
        <h3 className="headline mt-6 text-5xl text-ink md:text-6xl">
          It&apos;s in the pipe{state.message ? `, ${state.message}` : ""}!
        </h3>
        <p className="mt-4 max-w-md text-lg text-ink/70">
          Thanks for reaching out. Your message is on its way to us and
          we&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  const v = state.values;
  const e = state.errors ?? {};

  return (
    <form action={formAction} className="space-y-5">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-ink/70">I&apos;m interested in…</legend>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="checkbox"
                name="services"
                value={option}
                defaultChecked={v?.services.includes(option)}
                className="peer sr-only"
              />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink/80 transition peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25 hover:border-ink/40">
                <Sparkle className="size-3 opacity-70" />
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">Your name</label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            defaultValue={v?.name}
            aria-invalid={!!e.name}
            aria-describedby={e.name ? "name-error" : undefined}
            className={field}
          />
          <FieldError id="name-error">{e.name}</FieldError>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            defaultValue={v?.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? "email-error" : undefined}
            className={field}
          />
          <FieldError id="email-error">{e.email}</FieldError>
        </div>
      </div>

      <div>
        <label htmlFor="company" className="sr-only">Company or website (optional)</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Company or website (optional)"
          defaultValue={v?.company}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Tell us about your brand and where you want it to go"
          defaultValue={v?.message}
          aria-invalid={!!e.message}
          aria-describedby={e.message ? "message-error" : undefined}
          className={`${field} resize-y`}
        />
        <FieldError id="message-error">{e.message}</FieldError>
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message && (
        <p className="text-sm font-medium text-[#d6304f]" role="alert">
          {state.message}
        </p>
      )}

      <div className="flex flex-col-reverse items-start gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-ink/50">
          We&apos;ll only use your details to reply to you. No spam, no
          mailing lists.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-3 rounded-2xl bg-brand px-8 py-4.5 text-lg font-semibold text-white shadow-[0_14px_40px_-10px_rgba(58,34,242,0.75)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(58,34,242,0.9)] disabled:translate-y-0 disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send it down the pipe"}
          <Arrow className={`size-5 transition-transform group-hover:translate-x-1 ${pending ? "animate-pulse" : ""}`} />
        </button>
      </div>
    </form>
  );
}
