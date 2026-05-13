import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useLogin } from "../hooks/useLoginHook";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isLogin, logout } = useLogin();

  return (
    <Disclosure
      as="nav"
      className="bg-slate-900 border-b border-slate-700"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* NAV CONTAINER */}
        <div className="flex h-16 items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-10">

            {/* MOBILE MENU BUTTON */}
            <div className="sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-slate-800 hover:text-white transition">
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-open:hidden"
                />

                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>

            {/* LOGO */}
            <Link to="/">
              <h1 className="text-2xl font-extrabold tracking-wide text-cyan-400 hover:text-cyan-300 transition">
                TO-DO
              </h1>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden sm:flex items-center gap-3">
              
              <Link
                to="/"
                className="rounded-md px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition duration-200"
              >
                Home
              </Link>

              {isLogin && (
                <Link
                  to="/dashboard"
                  className="rounded-md px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition duration-200"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center">

            <Menu as="div" className="relative">
              
              <MenuButton className="flex rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-9 w-9 rounded-full border-2 border-slate-600 hover:border-cyan-400 transition"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-slate-800 py-2 shadow-lg ring-1 ring-black/30 focus:outline-none transition"
              >

                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition"
                  >
                    Your Profile
                  </a>
                </MenuItem>

                <MenuItem>
                  {isLogin ? (
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500 hover:text-white transition"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-green-400 hover:bg-green-500 hover:text-white transition"
                    >
                      Login
                    </Link>
                  )}
                </MenuItem>

              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <DisclosurePanel className="sm:hidden bg-slate-900 border-t border-slate-700">
        <div className="space-y-1 px-2 pt-2 pb-3">

          <DisclosureButton
            as={Link}
            to="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition"
          >
            Home
          </DisclosureButton>

          {isLogin && (
            <DisclosureButton
              as={Link}
              to="/dashboard"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              Dashboard
            </DisclosureButton>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}