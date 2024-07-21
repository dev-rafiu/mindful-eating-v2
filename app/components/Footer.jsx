import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../utils/nav-links";

function Footer() {
  return (
    <footer className="">
      <div className="grid gap-5 bg-[#BF7E2E] px-5 py-12 text-background lg:grid-cols-[auto,_1fr,_1fr,_1fr,_auto]">
        {/* col 1 */}
        <div className="space-y-4">
          <Image
            src="/logo-footer.png"
            alt="Logo"
            width={150}
            height={50}
            sizes="100vw"
          />

          <p className="max-w-sm text-base">
            Lose weight, gain energy, and feel amazing with our personalized
            diet program. Our expert coaches and supportive community will guide
            you every step of the way.
          </p>
        </div>

        {/* col 2 */}
        <div className="space-y-4">
          <h3 className="">Navigation</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className={"capitalize text-background"}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* cols 3 */}
        <div className="space-y-4">
          <h3 className="">Help</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="">FAQ</Link>
            </li>
            <li>
              <Link href="">Terms of Service</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* cols 4*/}
        <div className="space-y-4">
          <h3 className="">Social</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Twitter</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Youtube</Link>
            </li>
          </ul>
        </div>

        {/* cols 5*/}
        <div className="space-y-4">
          <h3 className="">Newsletter</h3>
          <div className="space-y-5">
            <p className="max-w-sm">
              Subscribe for Exclusive Offers, Cleaning Tips, and More! Join our
              community and stay updated with the latest news and special
              promotions.
            </p>
            <form className="relative overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded p-2"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 top-0 rounded bg-[#4F771C] p-2 px-4 text-sm uppercase text-background"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#292120] py-2 text-center text-sm text-background">
        <p>&copy; {new Date().getFullYear()} Quickly. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
