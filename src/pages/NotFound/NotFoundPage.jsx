import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRight } from "@/components/ui/Icons";

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6 text-center text-ink">
      <div className="max-w-xl">
        <p className="mb-5 font-mono text-xs font-extrabold uppercase tracking-[0.13em] text-brand">404 / Page not found</p>
        <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-black leading-[0.9] tracking-[-0.075em]">Wrong turn.</h1>
        <p className="mx-auto my-7 max-w-md text-base leading-7 text-muted">
          The page you requested does not exist. Return to the portfolio to explore Suriya&apos;s work.
        </p>
        <ButtonLink href="/">
          Back to portfolio <ArrowUpRight />
        </ButtonLink>
      </div>
    </main>
  );
}
