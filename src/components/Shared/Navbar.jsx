import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import MyContainer from "./MyContainer";
import SmallMenu from "./SmallMenu";
import { IoMdHome } from "react-icons/io";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <div className="border-b-2 border-[#E9E9E9]">
      <MyContainer>
        <div className="py-5 flex sm:gap-5 items-center justify-between">
          {/* Left side */}
          <div className="flex gap-2 items-center">
            <SmallMenu />
            <Link
              href="/"
              className="bg-linear-to-r from-[#1F2937] to-[#244D3F] font-bold text-transparent bg-clip-text text-2xl"
            >
              KeenKeeper
            </Link>
          </div>
          {/* Right side */}
          <div className="">
            <NavLinks />
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
