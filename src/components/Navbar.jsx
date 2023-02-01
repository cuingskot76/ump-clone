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
      {/* profil */}
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
                Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </MenuItem>
            </MenuHandler>
            <MenuList className="flex flex-col gap-1 py-3 z-50 ">
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

      {/* fakultas */}
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
                Fakultas
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </MenuItem>
            </MenuHandler>
            <MenuList className="z-50">
              {/* fakultas keguruan */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Keguruan dan Ilmu Pendidikan
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Geografi
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Biologi
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Matematika
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Bahasa Inggris
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Bahasa dan Sastra Indonesia
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Sejarah
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Kewarganegaraan
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Anak Usia Dini
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Guru Sekolah Dasar
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Pendidikan Profesi Guru
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas ekonomi */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Ekonomi dan Bisnis
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Magister Manajemen (S2)
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Akuntansi (D3)
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Manajemen
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Akuntansi (S1)
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Bisnis Digital S1
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas teknik */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Teknik dan Sains
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Teknik Sipil
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Teknik Kimia
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Teknik Elektro
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Teknik Informatika
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Teknik Mesin
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas pertanian */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Pertanian dan Perikanan
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Agroteknologi
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Agribisnis
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Akuakultur
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas agama islam */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Agama Islam
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Pend. Agama Islam
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Hukum Ekonomi Syariah
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Magister Pendidikan Agama Islam
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas psikologi */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Psikologi
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Psikologi
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas farmasi */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Farmasi
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Farmasi
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Profesi Apoteker
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas ilmu budaya dan komunikasi */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Ilmu Budaya dan Komunikasi
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Sastra Inggris
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    BA English Literature
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas hukum */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Hukum
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Ilmu Hukum
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas ilmu kesehatan */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Ilmu Kesehatan
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Keperawatan (S1)
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Keperawatan (D3)
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Kebidanan (D3)
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Kebidanan (S1)
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Kebidanan D3
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Teknologi Laboratorium Medik D4
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Teknik Rekayasa Elektro Medis D4
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Teknologi radiologi Penditraan D4
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Manajemen Informasi Kesehatan D4
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Pendidikan Ners
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Pendidikan Profesi Bidan
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* fakultas pascasarjana */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Fakultas Pascasarjana
                  </MenuItem>
                </MenuHandler>
              </Menu>
              {/* fakultas kedokteran */}
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-blue-200 py-2 ">
                    Program Kedokteran
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Program Studi Kedokteran
                  </MenuItem>
                  <MenuItem className="hover:bg-blue-200 py-2">
                    Profesi Dokter
                  </MenuItem>
                </MenuList>
              </Menu>
            </MenuList>
          </Menu>
        </Menu>
      </Typography>

      {/* lembaga dan upt */}
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
                Lembaga & UPT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </MenuItem>
            </MenuHandler>
            <MenuList className="flex flex-col gap-1 py-3 z-50">
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Ma`had Al Imam Malik
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Lembaga Penelitian dan Pengabdian Masyarakat
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Lembaga Penjaminan Mutu dan Pengembangan Aktifitas Instruksional
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Lembaga Pengkajian dan Pengamalan Islam
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Lembaga Publikasi Ilmiah dan Penerbitan
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Language Development Center
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Pusat Kerja Sama Dalam Negeri
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Perpustakaan
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Student Advisory and Training Center (SATC)
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Career Development Center (CDC)
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Student Development Center (SDC)
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Student Scientific Center (SSC)
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Lembaga Sertifikasi Profesi (LSP)
              </MenuItem>
            </MenuList>
          </Menu>
        </Menu>
      </Typography>

      {/* biro ump */}
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
                Biro UMP
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </MenuItem>
            </MenuHandler>
            <MenuList className="flex flex-col gap-1 py-3 z-50">
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Aset dan Inventaris
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Sumber Daya Manusia
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Perencanaan dan Pengembangan
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Sistem Informasi
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Akademik
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Keuangan
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Kemahasiswaan dan Alumni
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Kantor Rektorat
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Humas dan Promosi
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Urusan Internasional
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Audit Internal
              </MenuItem>
              <MenuItem className="hover:bg-blue-200 py-2 ">
                Biro Publikasi dan Admisi
              </MenuItem>
            </MenuList>
          </Menu>
        </Menu>
      </Typography>

      {/* publikasi */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-blue-700"
      >
        <Menu>
          <Menu placement="bottom" offset={10}>
            <MenuHandler>
              <MenuItem className="flex">Publikasi</MenuItem>
            </MenuHandler>
          </Menu>
        </Menu>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="z-10 relative navbar overflow-hidden max-w-full py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img
          src="../../assets/logo/ump-logo.png"
          alt="ump-logo"
          className="w-[13rem]"
        />
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-black stroke-black fill-black"
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
              className="h-6 w-6 text-black stroke-black fill-black"
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
