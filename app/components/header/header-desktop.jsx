import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../utils/nav-links";
import { useEffect, useState } from "react";

function HeaderDesktop({ openMobileNav }) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Function to set the current hash
    const setHash = () => {
      setCurrentHash(window.location.hash);
    };

    // Set the current hash on initial load
    setHash();

    // Add event listener for hash change
    window.addEventListener("hashchange", setHash);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("hashchange", setHash);
    };
  }, [pathname]);

  return (
    <header className="bg-primary">
      <div className="container flex h-[5rem] items-center justify-between">
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
          <Link href="#" className="relative h-[1rem] w-[8rem] object-cover">
            <Image src="/logo.png" alt="Logo" className="" fill sizes="100vw" />
          </Link>
        </div>

        {/* navlinks */}
        <nav className="hidden items-center justify-between lg:flex">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={() => setCurrentHash(link.href)}
                  href={link.href}
                  className={`text-base capitalize ${currentHash === link.href ? "font-bold text-secondary" : "font-medium text-background"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* call to actions */}
        <div className="flex items-center gap-3 uppercase">
          <Link
            href="#"
            className="rounded bg-background px-8 py-3 text-sm font-semibold leading-6 text-secondary"
          >
            sign up
          </Link>

          <Link
            href="#"
            className="rounded bg-secondary px-8 py-3 text-sm font-semibold leading-6 text-background"
          >
            login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
