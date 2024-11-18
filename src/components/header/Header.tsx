import React from 'react';
import hydraLogo from "../../assets/hydraLogo.svg";
import styles from './Header.module.scss';
import { Outlet } from 'react-router-dom';
import one from "../../assets/footerimgs/one.svg";
import two from "../../assets/footerimgs/two.svg";
import three from "../../assets/footerimgs/three.svg";
import visa from "../../assets/footerimgs/visa.svg";
import apple from "../../assets/footerimgs/apple.svg";
import bubble1 from "../../assets/bubble1.svg";
import bubble2 from "../../assets/bubble2.svg";
import Navbar from './navbar/Navbar';

const Header: React.FC = () => {
  return (
    <div className={`${styles.headerContainer} relative overflow-hidden`}>
      <img src={bubble1} alt="" className="absolute right-[-3rem] top-[10%] scale-[0.8]" />
      <img src={bubble2} alt="" className="absolute left-[-3rem] top-[45%] scale-[0.8]" />
      <img src={bubble1} alt="" className="absolute right-[-3rem] top-[80%] scale-[0.8]" />
      <Navbar />
      <div className='w-full h-auto flex justify-center'>
        <Outlet />
      </div>
      <div className="w-full md:px-[5rem] max-w-[80rem] lg:max-w-[90rem] text-white">
        <img className='w-[7rem] mb-10 mx-auto md:mx-0' src={hydraLogo} alt="" />
        <div className="flex w-full justify-between flex-wrap md:flex-nowrap gap-8">
          <div className="flex items-center md:items-start gap-4 flex-col">
            <div className="flex items-center gap-4">
              <img className='w-[5rem]' src={one} alt="" />
              <img className='w-[4rem]' src={two} alt="" />
              <img className='w-[6rem]' src={three} alt="" />
            </div>
            <p className='font-medium text-center md:text-left'>BUY CRYPTO WITH</p>
            <div className="flex items-center gap-4">
              <img className='w-[5rem]' src={visa} alt="" />
              <img className='w-[3rem]' src={apple} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h4 className='font-medium'>KYC & AML</h4>
            <p className='cursor-pointer'>Legal & Compliance</p>
            <p className='cursor-pointer'>Bad Actors</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h4 className='font-medium'>FAQ</h4>
            <p className='cursor-pointer'>Fees</p>
            <p className='cursor-pointer'>How To Video</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className='font-medium'>EGLD</h4>
            <p className='cursor-pointer'>Bitcoin</p>
            <p className='cursor-pointer'>Ethereum</p>
            <p className='cursor-pointer'>Solana</p>
          </div>
          <div className="flex flex-row md:flex-col gap-4">
            <h4 className='font-medium'>BNB</h4>
            <p className='cursor-pointer'>ATA</p>
            <p className='cursor-pointer'>MATIC</p>
            <p className='cursor-pointer'>All Coins</p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:px-[5rem] font-medium justify-center p-4 bg-gradient-to-r mt-8 from-[#eeb91d] to-[#ffe878]">
        <div className="w-full flex flex-wrap justify-between items-center max-w-[80rem] lg:max-w-[90rem] text-center md:text-left">
          <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
            <p className="cursor-pointer">Terms of Use</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Contact Us</p>
          </div>
          <p className="mt-4 md:mt-0 text-center md:text-right">© 2023 Hydra | All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
