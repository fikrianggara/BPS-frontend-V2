import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  console.log("rendered");
  return (
    <Popover className="bg-blue-900 w-full">
      <div className="flex justify-between w-11/12 items-center mx-auto">
        <a href="/">
          <div className="font-bold text-white text-xl flex items-center justify-between space-x-4">
            <img
              className="w-12 aspect-square"
              src="/bps-logo.png"
              alt="logo bps"
            />

            <h1 className="text-xl italic">BADAN PUSAT STATISTIK</h1>
          </div>
        </a>
        <ul className="font-medium text-white flex space-x-6 text-sm items-center ">
          <li
            id="beranda"
            className="p-4 hover:bg-darkBlueHover duration-200 ease-in-out"
          >
            Beranda
          </li>
          <li
            id="senarai"
            className="p-4 hover:bg-darkBlueHover duration-200 ease-in-out"
          >
            Senarai Rencana Terbit
          </li>
          <li
            id="produk-statistik"
            className="p-4 hover:bg-darkBlueHover duration-200 ease-in-out"
          >
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    // className={classNames(
                    //   open ? "text-gray-900" : "text-gray-500",
                    //   "group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // )}
                    className="group rounded inline-flex items-center font-medium focus:outline-none "
                  >
                    <span>Produk Statistik</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180 " : "",
                        "ml-2 h-5 w-5 duration-200 ease-in-out"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 min-w-[200px] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-2 py-4 sm:gap-6 sm:p-4">
                          <ul className="text-gray-600">
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Publikasi
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Berita Resmi Statistik
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Tabel Statistik
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Infografis
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Indikator Strategis
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Metadata
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Direktori
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </li>
          <li>Layanan</li>
          <li
            id="about"
            className="p-4 hover:bg-darkBlueHover duration-200 ease-in-out"
          >
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    // className={classNames(
                    //   open ? "text-gray-900" : "text-gray-500",
                    //   "group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // )}
                    className="group rounded-md inline-flex items-center font-medium focus:outline-none"
                  >
                    <span>Tentang Kami</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180 " : "",
                        "ml-2 h-5 w-5 duration-200 ease-in-out"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 min-w-[200px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-2 py-4 sm:gap-6 sm:p-4">
                          <ul className="text-gray-600">
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              fdsafdsafds
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              fdsafds
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              fdsafds
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </li>
          <li
            id="ppid"
            className="p-4 hover:bg-darkBlueHover duration-200 ease-in-out"
          >
            PPID
          </li>
          <li
            id="language"
            className="p-4 hover:bg-darkBlueHover duration-200 ease-in-out"
          >
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    // className={classNames(
                    //   open ? "text-gray-900" : "text-gray-500",
                    //   "group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // )}
                    className="group rounded-md inline-flex items-center font-medium focus:outline-none"
                  >
                    <span>Bahasa</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180 " : "",
                        "ml-2 h-5 w-5 duration-200 ease-in-out"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 min-w-[200px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-2 py-4 sm:gap-6 sm:p-4">
                          <ul className="text-gray-600">
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Indonesia
                            </li>
                            <li className="-m-3 p-3 flex items-start rounded-md hover:bg-gray-50">
                              Inggris
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </li>
        </ul>
      </div>
    </Popover>
  );
};

export default Navbar;
