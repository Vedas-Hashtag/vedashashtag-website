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
      className={`md:text-[20px] text-[16px] font-medium mb-4 uppercase ${variantClasses} ${className}`}
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
      className={`font-medium md:text-[46px] text-[24px] text-center ${variantClasses} ${className}`}
    >
      {children}
    </p>
  );
};
