import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  User,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="stick top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-10 cursor-pointer object-contain opacity-75 transition hover:opacity-100">
            <Image
              src="https://www.pngrepo.com/download/416309/mango-summer-fruit.png"
              fill
              alt="mango"
            />
          </div>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="">
        <MagnifyingGlassIcon className="headerLink" />
      </div>
    </header>
  );
}
export default Header;
