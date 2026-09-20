import { ArrowUpRight, Mail } from "@/components/ui/Icons";
import { containerClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";

function HeroProfileVisual() {
  return (
    <div className="relative mx-auto min-h-[23rem] w-full max-w-[33rem] sm:min-h-[28rem]">
      <svg
        className="absolute left-1/2 top-1/2 h-[20rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 sm:h-[25rem] sm:w-[27rem]"
        viewBox="0 0 440 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M38 238C18 154 86 92 181 73C274 54 383 73 405 151C428 233 351 282 245 278C153 275 71 310 38 238Z"
          fill="#f4b000"
        />
      </svg>

      <div
        className="absolute left-1/2 top-1/2 h-[19rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[48%] border-4 border-white shadow-[0_22px_45px_rgba(65,52,18,0.18)] motion-safe:animate-[hero-in_0.7s_0.2s_ease-out_both] sm:h-[24rem] sm:w-[19rem]"
        aria-label="Portrait of Suriya Haidari"
      >
        <img
          src="/profile.jpg"
          alt="Suriya Haidari"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <span className="absolute left-0 top-[24%] rounded-full bg-[#173b2a] px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_20px_rgba(23,59,42,0.18)] motion-safe:animate-[hero-float-left_6s_ease-in-out_infinite] sm:left-2">
        Full-Stack Developer
      </span>

      <span className="absolute right-0 top-[16%] rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#173b2a] shadow-[0_10px_20px_rgba(65,52,18,0.13)] motion-safe:animate-[hero-float-right_6.8s_ease-in-out_infinite] sm:right-2">
        React · Node.js
      </span>

      <span className="absolute bottom-[13%] right-[2%] rounded-full border border-[#173b2a]/15 bg-[#fffdf8] px-4 py-2.5 text-xs font-bold text-[#173b2a] shadow-[0_10px_20px_rgba(65,52,18,0.1)] motion-safe:animate-[hero-float-left_7.2s_ease-in-out_infinite] sm:right-[7%]">
        Product-minded
      </span>

      <span
        className="absolute bottom-[12%] left-[13%] grid size-9 place-items-center rounded-full border-4 border-white bg-[#e97a45] shadow-[0_8px_15px_rgba(65,52,18,0.12)] motion-safe:animate-[hero-float-dot_5.5s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        <i className="size-2 rounded-full bg-[#173b2a]" />
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[#fffdf8] pb-16 pt-28 sm:pb-24 sm:pt-36"
    >
      <div
        className={`${containerClass} grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}
      >
        <div className="max-w-[34rem]">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#617267] motion-safe:animate-[hero-in_0.5s_ease-out_both]">
            Hello, I&apos;m Suriya
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-[clamp(2.45rem,4.5vw,4.55rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-[#173b2a] motion-safe:animate-[hero-in_0.6s_0.08s_ease-out_both]"
          >
            Full-stack developer building{" "}
            <span className="text-[#e6a400]">useful</span> web products.
          </h1>

          <p className="mt-6 max-w-[30rem] text-[0.95rem] leading-7 text-[#626b64] motion-safe:animate-[hero-in_0.6s_0.16s_ease-out_both]">
            I build clear React interfaces and dependable Node.js services for
            products with real user journeys, workflows, and admin tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 motion-safe:animate-[hero-in_0.6s_0.24s_ease-out_both]">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#173b2a] px-5 text-sm font-bold text-white transition hover:bg-[#285440]"
            >
              View my projects <ArrowUpRight size={17} />
            </a>

            <a
              href={siteConfig.emailHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#173b2a]/25 bg-white px-5 text-sm font-bold text-[#173b2a] transition hover:border-[#173b2a] hover:bg-[#f7f3e8]"
            >
              <Mail size={17} /> Hire me
            </a>
          </div>

          <p className="mt-8 text-sm font-medium text-[#626b64] motion-safe:animate-[hero-in_0.6s_0.32s_ease-out_both]">
            React · Node.js · Express · MongoDB · Remote
          </p>
        </div>

        <HeroProfileVisual />
      </div>
    </section>
  );
}