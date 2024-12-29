import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <p>This is a blog page.</p>
      <Link href="/">Back to homepage</Link>
    </div>
  );
}
