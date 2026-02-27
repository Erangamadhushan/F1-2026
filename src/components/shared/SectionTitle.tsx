interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-5xl font-bold tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;