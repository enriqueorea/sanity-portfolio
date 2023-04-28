import Link from "next/link";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Awesome Next.js portfolio",
  description: "A portfolio built with Next.js and Sanity.io",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const page = await getPages();

  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto py-10">
        <header>
          <Link
            href={"/"}
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-700 bg-clip-text text-transparent text-lg font-bold"
          >
            enrirqueorea
          </Link>
          <div>
            {page.map((item) => (
              <Link href={`/${item.slug}`} key={item._id}>
                {item.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
