export const SectionTitle = ({
  children,
  variants = "primary",
  className,
}: {
  children: React.ReactNode;
  variants?: "primary" | "secondary";
  className?: string;
}) => {
  // Define classes based on variants
  const variantClasses =
    variants === "primary" ? "text-muted-foreground " : "text-muted ";

  return (
    <h2
      className={`lg:text-[20px] md:text-[18px] text-[16px] font-medium mb-4 uppercase ${variantClasses} ${className}`}
    >
      {children}
    </h2>
  );
};

export const SectionDescription = ({
  children,
  variants = "primary",
  className,
}: {
  children: React.ReactNode;
  variants?: "primary" | "secondary";
  className?: string;
}) => {
  // Define classes based on variants
  const variantClasses =
    variants === "secondary"
      ? "text-background font-medium"
      : "text-foreground font-medium";

  return (
    <p
      className={`font-medium lg:text-[46px] md:text-[36px] text-[24px] text-center ${variantClasses} ${className}`}
    >
      {children}
    </p>
  );
};
