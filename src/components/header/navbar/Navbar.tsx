import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import hydraLogo from "@assets/hydraLogo.svg";
import styles from "./navbar.module.scss";
import CButton from "../../reusables/CButton";
import CInput from "@components/reusables/CInput";
import SVGIcon from "@components/reusables/SVGIcon";
import { ICON_NAMES } from "@constants/config";

const Navbar = () => {
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { name: "Swap", link: "/", scrollElement: "", active: true },
    {
      name: "How It Works",
      link: "/how-it-works",
      scrollElement: "",
      active: false,
    },
    {
      name: "Why Privacy Matters",
      link: "/privacy",
      scrollElement: "",
      active: false,
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      {/* Desktop Navbar */}
      <div className={styles.navbarContainer}>
        <span className="cursor-pointer">
          <img onClick={() => navigate("/")} src={hydraLogo} alt="hydra logo" />
        </span>
        <span className={styles.tabs}>
          {tabs.map((tab, index) => (
            <p
              onClick={() => {
                if (index === 1)
                  window.open("https://docs.hydraswap.xyz/", "_blank");
                else navigate(tab.link);
              }}
              className={
                pathname === tab.link ? styles.tabActive : styles.tabInactive
              }
              key={index}
            >
              {tab.name}
            </p>
          ))}
          <CInput
            big
            pilled
            value={search}
            onChange={setSearch}
            placeholder="Search Order"
            containerClassName="bg-[#FFFFFF14]"
            suffix={
              <div
                className="cursor-pointer rounded-[30px] bg-[#FFE87830] p-[5px]"
                onClick={() => {
                  if (search) navigate(`/checkout/${search}`);
                }}
              >
                <SVGIcon name={ICON_NAMES.SEARCH} active />
              </div>
            }
          />
        </span>
        {/* <span className="flex gap-4 items-center">
          <CInput
            big
            pilled
            value={search}
            onChange={setSearch}
            placeholder="Search Order"
            containerClassName="bg-[#FFFFFF14]"
            suffix={
              <div
                className="cursor-pointer rounded-[30px] bg-[#FFE87830] p-[5px]"
                onClick={() => {
                  navigate(`/checkout/${search}`);
                }}
              >
                <SVGIcon name={ICON_NAMES.SEARCH} active />
              </div>
            }
          />
        </span> */}
      </div>

      {/* Mobile Navbar */}
      <div className={styles.mobileNavbar}>
        <span>
          <img onClick={() => navigate("/")} src={hydraLogo} alt="hydra logo" />
        </span>
        <CButton
          onClick={() => toggleMobileMenu()}
          dynamicStyle={{
            backColor: "transparent",
          }}
        >
          <SVGIcon
            name={isMobileMenuOpen ? ICON_NAMES.CLOSE : ICON_NAMES.HAMBURGER}
            size={30}
          />
        </CButton>
      </div>

      {/* Mobile Menu - Sliding In/Out */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
        } transition-transform  z-[800] duration-300 ease-in-out`}
      >
        <div className="p-8 flex flex-col gap-6 justify-center items-center mt-[100px]">
          {tabs.map((tab, index) => (
            <p
              onClick={() => {
                if (index === 1)
                  window.open("https://docs.hydraswap.xyz/", "_blank");
                else navigate(tab.link);
              }}
              key={index}
              className={tab.active ? "text-yellow-500" : "text-white"}
            >
              {tab.name}
            </p>
          ))}
          <CInput
            pilled
            value={search}
            onChange={setSearch}
            placeholder="Search Order"
            containerClassName="bg-[#FFFFFF14]"
            suffix={
              <div
                className="cursor-pointer rounded-[30px] bg-[#FFE87830] p-[5px]"
                onClick={() => {
                  if (search) navigate(`/checkout/${search}`);
                }}
              >
                <SVGIcon name={ICON_NAMES.SEARCH} active />
              </div>
            }
          />
        </div>
      </div>

      {/* Overlay to close the menu */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={toggleMobileMenu} />
      )}
    </>
  );
};

export default Navbar;
