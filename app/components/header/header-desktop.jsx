import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../utils/nav-links";

function HeaderDesktop({ openMobileNav }) {
  return (
    <header className="flex items-center justify-between bg-primary px-6 py-6 lg:px-10">
      {/* menu button */}
      <button
        aria-label="menu"
        className="text-background focus-visible:outline-offset-2 lg:hidden"
        onClick={openMobileNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-justify"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>

      {/* logo */}
      <div className="hidden items-center gap-8 lg:flex">
        <Link href="#" className="relative h-[1rem] w-[10rem] object-cover">
          <Image src="/logo.png" alt="Logo" className="" fill sizes="100vw" />
        </Link>
      </div>

      {/* navlinks */}
      <nav className="hidden items-center justify-between lg:flex">
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className={"capitalize text-background"}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* call to actions */}
      <div className="flex items-center gap-4 text-sm uppercase lg:gap-8">
        <Link
          href="#"
          className="text-secondary rounded bg-background px-6 py-3"
        >
          sign up
        </Link>

        <Link
          href="#"
          className="bg-secondary rounded-md px-6  py-3 text-background"
        >
          login
        </Link>
      </div>
    </header>
  );
}

export default HeaderDesktop;
