import { useState } from "react";
import hydraLogo from "../../../assets/hydraLogo.svg";
import search from "../../../assets/search.svg";
import styles from "./navbar.module.scss"; // Import the CSS module
import { useNavigate } from "react-router-dom";
import CButton from "../../reusables/CButton";
import { BUTTON_TYPES } from "../../../costants/types";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { name: "Swap", link: "/", scrollElement: "", active: false },
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
        <span>
          <img onClick={()=> navigate('/')} src={hydraLogo} alt="hydra logo" />
        </span>
        <span className={styles.tabs}>
          {tabs.map((tab, index) => (
            <p
              onClick={() => navigate(tab.link)}
              className={tab.active ? styles.tabActive : styles.tabInactive}
              key={index}
            >
              {tab.name}
            </p>
          ))}
        </span>
        <span className="flex gap-4 items-center">
          <img src={search} className={styles.searchIcon} alt="search icon" />
          <CButton primary type={BUTTON_TYPES.PILLED} gradient>
            CREATE ACCOUNT
          </CButton>
        </span>
      </div>

      {/* Mobile Navbar */}
      <div className={styles.mobileNavbar}>
        <span>
          <img onClick={()=> navigate('/')} src={hydraLogo} alt="hydra logo" />
        </span>
        <CButton
          onClick={() => toggleMobileMenu()}
          dynamicStyle={{
            backColor: "transparent",
          }}
        >
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </CButton>
      </div>

      {/* Mobile Menu - Sliding In/Out */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
          } transition-transform  z-[800] duration-300 ease-in-out`}
      >
        <div className="p-8 flex flex-col gap-6">
          {tabs.map((tab, index) => (
            <p
              onClick={() => navigate(tab.link)}
              key={index}
              className={tab.active ? "text-yellow-500" : "text-white"}
            >
              {tab.name}
            </p>
          ))}
          <CButton primary type={BUTTON_TYPES.PILLED} gradient>
            CREATE ACCOUNT
          </CButton>
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
