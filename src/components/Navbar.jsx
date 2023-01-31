import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { Dropdown } from "flowbite-react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="my-4 text-black flex flex-col gap-2 md:my-4 md:flex-row md:items-center md:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-blue-700"
      >
        <Menu>
          <Menu placement="bottom" offset={10}>
            <MenuHandler>
              <MenuItem className="flex">
                Profile{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </MenuItem>
            </MenuHandler>
            <MenuList className="flex flex-col gap-1 py-3">
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Profile Universitas
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2">
                Visi dan Misi
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2">
                Lokasi Kampus
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2">
                Makna Logo UMP
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2">Organisisi</MenuItem>
            </MenuList>
          </Menu>
        </Menu>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto overflow-hidden max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img
          src="../../assets/ump-logo.png"
          alt="ump-logo"
          className="w-[13rem]"
        />
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
