import Image from "next/image";
import { Head } from "next/document";
import Script from "next/script";

export default function Navigation() {
  return (
    <>
      <div className=" sticky top-0 z-50 bg-white">
        <nav className="border-b   z-50 py-2 px-4 flex justify-between w-full ">
          <div className="grow flex flex-wrap items-center justify-between">
            <div className="">
              <img src="r-paperpal-logo.svg" alt="" />
            </div>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="md:hidden ml-3 text-gray-400 hover:text-gray-900 py-2 px-3  focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-bold ml-2">Menu</span>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
              <ul className="flex-col pr-5 md:flex-row flex  mt-4 md:mt-0 md:text-sm md:font-medium justify-start items-center max-md:items-start">
                <li className="py-3">
                  <a
                    href="#"
                    className="py-3  md:text-lg sm:text-sm font-medium navlist-color focus:outline-none md:hidden"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="#"
                    className="py-3  md:text-lg sm:text-sm font-medium navlist-color focus:outline-none md:hidden"
                    aria-current="page"
                  >
                    New Web Document
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="#"
                    className="py-3 md:text-lg sm:text-sm font-medium navlist-color focus:outline-none md:hidden"
                    aria-current="page"
                  >
                    Install Word Add-in
                  </a>
                </li>
                <li className=" w-full">
                  <a
                    href="#"
                    className="py-3 max-md:block  border-b-2  md:text-lg sm:text-sm font-medium navlist-color focus:outline-none md:hidden"
                    aria-current="page"
                  >
                    Submission Check
                  </a>
                </li>
                <li className=" w-full">
                  <a
                    href="#"
                    className="py-3 max-md:block border-b-2  border-solid  md:text-lg sm:text-sm font-medium navlist-color focus:outline-none md:hidden"
                    aria-current="page"
                  >
                    Editing Services
                  </a>
                </li>
                <li className="py-3 px-6 max-md:px-0">
                  <a
                    href="#"
                    className="py-3 md:text-lg sm:text-sm font-medium navlist-color focus:outline-none"
                    aria-current="page"
                  >
                    Features
                  </a>
                </li>

                <li className="py-3 px-6 md:text-lg sm:text-sm font-medium navlist-color  max-md:px-0">
                 <a href=""> Pricing</a>
                </li>
                <li className="py-3 px-6 mr-5 md:text-lg sm:text-sm font-medium navlist-color  max-md:px-0">
                  <a href="">Blog</a>
                </li>
                <div className="max-md:w-full flex gap-3  justify-center items-center">
                  <button
                    type="button"
                    className="py-2 px-8 font-medium text-lg max-md:hidden navlist-color  border border-solid border-slate-300 rounded-lg"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="py-2 max-md:my-3 px-8 text-white text-lg font-medium btn-bg rounded-lg shrink-0   max-md:w-full"
                  >
                    Get Started
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Script  src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></Script>
    </>
  );
}
