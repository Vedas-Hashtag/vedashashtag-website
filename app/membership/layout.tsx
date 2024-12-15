export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-w-screen">{children}</main>;
}
