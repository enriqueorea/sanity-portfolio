export const metadata = {
  title: "Awesome Next.js portfolio",
  description: "A portfolio built with Next.js and Sanity.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
