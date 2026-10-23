import { Fragment, type ReactNode } from "react";

export function Marquee({
  items,
  separator,
  className = "",
  trackClassName = "animate-marquee",
}: {
  items: string[];
  separator: ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  // Two identical halves so translating by -50% loops seamlessly.
  const half = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <Fragment key={i}>
          <span className="shrink-0 px-[0.25em] whitespace-nowrap">{item}</span>
          <span className="shrink-0 px-[0.25em]">{separator}</span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div aria-hidden="true" className={`flex w-max ${trackClassName}`}>
        {half}
        {half}
      </div>
    </div>
  );
}
