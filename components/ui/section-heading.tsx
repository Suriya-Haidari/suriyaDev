type SectionHeadingProps = {
  headingId: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  headingId,
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <p className="kicker">{index} / {eyebrow}</p>
        <h2 id={headingId}>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
