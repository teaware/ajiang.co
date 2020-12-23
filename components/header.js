import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between">
      <h1 className="">
        <Link href="/">
          <a>阿江记事本</a>
        </Link>
      </h1>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
}
