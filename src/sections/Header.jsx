import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/languages",
    name: "Languages",
  },
  {
    href: "/clients",
    name: "Clients",
  },
  {
    href: "/contact",
    name: "Contact Me",
  },
];

export default function Header() {
  return (
    <Popover className="relative bg-gray-700">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">adrea</span>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            {navigation.map((navlink) => (
              <Link
                key={navlink.name}
                to={navlink.href}
                className="text-lg text-gray-300 hover:text-gray-400"
              >
                {navlink.name}
              </Link>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-700 divide-y-2 divide-gray-500">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <Popover.Button className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6"></div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {navigation.map((navlink) => (
                  <Link
                    key={navlink.name}
                    to={navlink.href}
                    className="text-lg text-gray-300 hover:text-gray-400"
                  >
                    {navlink.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
