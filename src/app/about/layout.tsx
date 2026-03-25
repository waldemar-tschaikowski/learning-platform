import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Link href={"/about/us"}>Us</Link>
      <Link href={"/about/me"}>Me</Link>
      {children}
    </div>
  );
}
