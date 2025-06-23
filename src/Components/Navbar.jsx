// components/Navbar.jsx
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#service", label: "Service" },
  { href: "#review", label: "Review" },
  { href: "#contactus", label: "Contact Us" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-lg bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 text-xl">
        <div className="text-blue-600 font-bold">🏛 River Bank</div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="text-3xl focus:outline-none">&#9776;</button>
        </div>

        <ul
          className={`md:flex md:items-center gap-6 absolute md:static left-0 top-16 w-full md:w-auto bg-white md:bg-transparent px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-blue-600 block py-2">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button className="px-4 py-1 rounded-xl bg-blue-500 text-white hover:bg-blue-600 w-full md:w-auto">
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


{/* <nav className="shadow-lg">
          <div className="flex justify-between mx-10 text-2xl items-center py-4 ">
            <div className="text-blue-600  cursor-pointer">🏛 River Bank</div>
            <ul className="flex gap-4  cursor-pointer">
              <li>
                <a href="#home" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-blue-600">
                  Service
                </a>
              </li>
              <li>
                <a href="#review" className="hover:text-blue-600">
                  Review
                </a>
              </li>
              <li>
                <a href="#contactus" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li className="hover:text-blue-600">
                <button className="px-4 py-1  rounded-xl bg-blue-500 cursor-pointer text-white">
                  Log In
                </button>
              </li>
            </ul>
          </div>
        </nav> */}
        