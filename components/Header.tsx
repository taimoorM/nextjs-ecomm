import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/">
        <div className="relative h-10 w-10 cursor-pointer object-contain opacity-75 transition hover:opacity-100">
          <Image
            src="https://www.pngrepo.com/download/416309/mango-summer-fruit.png"
            fill
            alt="mango"
          />
        </div>
      </Link>
    </header>
  );
}
export default Header;
