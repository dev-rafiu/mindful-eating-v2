import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../utils/nav-links";
import { usePathname } from "next/navigation";
import Backdrop from "../backdrop";

function HeaderMobile({ closeMobileNav, isNavbarOpen, toggleMobileNav }) {
  const pathname = usePathname();

  return (
    <Backdrop className="lg:hidden" onClick={toggleMobileNav}>
      <aside
        className="container fixed inset-y-0 left-0 z-50 min-h-screen w-10/12 overflow-y-auto overscroll-y-contain bg-primary duration-200 ease-linear"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-8">
          {/* logo & close button */}
          <div className="flex items-center justify-between">
            <Link href="#" className="relative h-[1rem] w-[10rem] object-cover">
              <Image
                src="/logo.png"
                alt="Logo"
                className=""
                fill
                sizes="100vw"
              />
            </Link>

            <button
              onClick={closeMobileNav}
              className="ml-auto block py-10 text-base text-background focus-visible:outline-offset-2"
              aria-label="close menu"
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
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* navlinks */}
          <ul className="flex flex-col gap-4 capitalize">
            {navLinks.map((link) => (
              <li key={link.id} className="capitalize">
                <Link
                  onClick={closeMobileNav}
                  href={link.href}
                  className={`${pathname === link.href && "text-gold"} hover:text-gold text-lg text-background focus-visible:outline-offset-4 lg:text-base`}
                  tabIndex={isNavbarOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </Backdrop>
  );
}

export default HeaderMobile;
