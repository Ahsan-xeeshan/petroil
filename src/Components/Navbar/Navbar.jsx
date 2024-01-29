import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../assets/Logo.png";
import ContactBtn from "../Button/ContactBtn";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="bg-primary py-[15px] md:py-[30px] ">
      <div className="max-w-container mx-auto">
        <div className="md:flex md:items-center mx-2 md:mx-0">
          <div className="md:w-1/4 ">
            <div className="flex justify-between items-center z-10">
              <span className="cursor-pointer">
                <img src={Logo} alt="Logo" />
              </span>
              <span
                className="text-white cursor-pointer md:hidden"
                onClick={handleClick}
              >
                {show == true ? <RxCross1 /> : <AiOutlineMenu />}
              </span>
            </div>
          </div>
          <div className="md:w-3/4">
            <ul
              className={`md:flex md:items-center md:justify-end text-white font-pops text-base font-semibold gap-x-12 items-center z-[10] md:z-auto md:static absolute bg-primary w-full left-0 md:w-auto py-4 md:py-0 pl-7 md:pl-0 md:opacity-100 transition-all ease-in duration-500 ${
                show ? "opacity-100 top-[187px]" : "opacity-0 top-[-100px]"
              }`}
            >
              <a href="#">
                <li className="py-1 md:py-0">Home</li>
              </a>
              <a href="#">
                <li className="py-1 md:py-0">About</li>
              </a>
              <a href="#">
                <li className="py-1 md:py-0">Services</li>
              </a>
              <a href="#">
                <li className="py-1 md:py-0">Gallery</li>
              </a>
              <a href="#">
                <li className="py-1 md:py-0">Blog</li>
              </a>
              <ContactBtn />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
