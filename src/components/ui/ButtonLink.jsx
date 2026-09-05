const variants = {
  primary:
    "border-transparent bg-ink text-canvas shadow-[0_12px_30px_rgba(17,17,24,0.15)] hover:bg-brand hover:text-white",
  secondary: "border-line bg-surface text-ink hover:border-brand",
  light: "border-transparent bg-white text-[#111118] hover:bg-mint",
  outline: "border-white/20 text-white hover:border-mint"
};

export function ButtonLink({ variant = "primary", className = "", children, ...props }) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[0.875rem] border px-5 text-sm font-extrabold transition duration-300 hover:-translate-y-1 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
