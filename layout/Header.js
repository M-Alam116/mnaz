import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiMenu, BiSolidUserDetail } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";
export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      className="container sticky top-0 z-[999999]"
      ref={headerRef}
    >
      <div className="bg-white text-[18px] py-[15px] px-5">
        <div className="flex justify-between items-center gap-[10px]">
          {/* ========== logo ============ */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                width={170}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          {/* ========== menu ========== */}
          <div className="navigation text-black font-[500]" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu relative flex gap-[20px] text-[16px] font-[600] opacity-80">
              <ImCross className="text-black block absolute top-5 left-5 md:hidden" />
              <Link href="/available-offerings">
                <li
                  className={
                    router.pathname === "/available-offerings"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  AVAILABLE OFFERINGS
                </li>
              </Link>
              <Link href="/completed-offerings">
                <li
                  className={
                    router.pathname === "/completed-offerings"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  PAST OFFERINGS
                </li>
              </Link>
              <Link href="/sell">
                <li
                  className={
                    router.pathname === "/sell"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  SELL
                </li>
              </Link>
              <Link href="/borrow">
                <li
                  className={
                    router.pathname === "/borrow"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  BORROW
                </li>
              </Link>
              <Link href="/how-it-works">
                <li
                  className={
                    router.pathname === "/how-it-works"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  EDUCATION
                </li>
              </Link>
              <Link href="/blog">
                <li
                  className={
                    router.pathname === "/blog"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  BLOG
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={
                    router.pathname === "/about"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  ABOUT
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className={
                    router.pathname === "/contact"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  CONTACT US
                </li>
              </Link>
            </ul>
          </div>

          {/* =========== right header =========== */}
          <div className="flex items-center gap-[10px] sm:gap-[30px]">
            <Link href="/login">
              <button className="border-[3px] border-secondaryColor px-[15px] py-[7px] font-[500] text-[15px]">
                Log In
              </button>
            </Link>

            <span className="hamburger" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
