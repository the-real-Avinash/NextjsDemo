import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
      <Link href="/product" legacyBehavior>
        <a>Product</a>
      </Link>
    </>
  );
}
