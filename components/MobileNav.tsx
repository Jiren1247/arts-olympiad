"use client";
import React, {useState} from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
// import { HeartIconWhite } from "./svgs/HeartIconWhite";
import { LoginIcon } from "./svgs/LoginIcon";
import { DownIcon } from "./svgs/DownIcon";
import { UpIcon } from "./svgs/UpIcon";
import Image from "next/image";
import { useGlobalContext } from "@/app/GlobalContext";
import {useRouter} from "next/navigation";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isAuthenticated, signOut} = useGlobalContext();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    closeMenu();
    router.push("/");
  }

  const links1 = [
    { name: "About", url: "/about" },
    { name: "Contest", url: "/contest" },
    { name: "Sponsor", url: "/sponsor" }
  ];
  const links2 = [
    { name: "Impact", url: "/impact" },
    { name: "FAQ's", url: "/faq" }
  ];
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleStateChange = (state : {isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  return (
    <div className="md:hidden">
      <Menu 
        isOpen={isOpen} 
        onStateChange={handleStateChange} 
        right 
        styles={styles} 
        customCrossIcon={<Image src="/svgs/close.svg" alt="Close navigation menu" className="" width={30} height={30}/>}
        customBurgerIcon={<Image src="/svgs/burger.svg" alt="Open navigation menu" className="p-4" width={30} height={30} />}
      >

        <div className="logo-bg w-[60px] h-[90px] mx-auto my-2"></div>

        <hr className="my-2 border-new-black border-t-0.5 w-full"></hr>

        {links1.map(link => (
          <Link 
            key={link.name} 
            href={link.url} 
            onClick={closeMenu} 
            className="text-black tracking-widest text-sm px-8 py-4 hover:text-new-blue hover:font-bold hover:bg-gradient-to-b drop-shadow-md from-light-blue to-neutral-white"
          >
            {link.name}
          </Link>
        ))}

        <div className="group relative">
          <button className="tracking-widest text-sm w-fit h-fit px-8 py-4 rounded-xl text-neutral-black text-center items-center inline-flex">
            Gallery
            <DownIcon />
            <UpIcon />
          </button>
          <nav tabIndex={0} className="bg-neutral-white hidden w-full relative left-0 top-full group-hover:block">
            <ul className="py-1">
              <li>
                <Link href="/gallery" className="text-new-blue block px-12 py-4 w-full h-fit tracking-widest text-sm hover:bg-gradient-to-b drop-shadow-md from-light-blue focus-within:text-new-blue focus-within:font-bold">
                  Active Entries to Vote on
                </Link>
              </li>
              <li>
                <Link href="/past-entries" className="text-new-blue block px-12 py-4 w-full h-fit tracking-widest text-sm hover:bg-gradient-to-b drop-shadow-md from-light-blue focus-within:text-new-blue focus-within:font-bold">
                  Past Entries for Inspiration
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-wrap">
            {links2.map(link => (
              <Link 
                key={link.name} 
                href={link.url} 
                onClick={closeMenu} 
                className="text-black tracking-widest w-full text-sm px-8 py-4 hover:text-new-blue hover:font-bold hover:bg-gradient-to-b from-light-blue to-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <hr className="my-4 mx-auto w-5/6 border-new-black border-t-0.5"></hr>

        {/* <a href="https://icaf.org/donate" className="group mx-auto mb-4 w-5/6 h-fit border-neutral-white border rounded text-center py-2 px-4 text-sm cursor-pointer tracking-wide bg-new-blue text-neutral-white">
          <HeartIconWhite />
          Donate
        </a> */}
        <a href="https://icaf.org/donate" className="group mx-auto mb-4 w-5/6 h-fit border-neutral-white border rounded text-center py-2 px-4 text-sm cursor-pointer tracking-wide bg-new-blue active:scale-95 text-neutral-white">
          Donate
        </a>
        <div className="heart-black me-auto ml-4"></div>
        
        <Link onClick={closeMenu} href={isAuthenticated ? "/dashboard" : "/login"} className="group mx-auto mb-4 h-fit w-5/6 border-new-blue border rounded text-center py-2 px-3 text-xs cursor-pointer tracking-wide text-new-blue active:scale-95">
          Upload
        </Link>

        <Link onClick={closeMenu} href="/gallery" className="group mx-auto mb-4 h-fit w-5/6 border-new-blue border rounded text-center py-2 px-3 text-xs cursor-pointer tracking-wide text-new-blue active:scale-95">
          Vote
        </Link>

        {isAuthenticated === true ? (
          <a onClick={handleSignOut} style={{display: "flex"}} className="group items-center justify-center flex gap-2 mx-auto mb-4 h-fit w-5/6 border-new-blue border rounded text-center py-2 px-3 text-xs cursor-pointer tracking-wide text-new-blue">
            <p>Logout</p>
            <LoginIcon transform="scale(-0.9, 0.9)" />
          </a>
        ) : (
          <Link onClick={closeMenu} href={"/login"} style={{display: "flex"}} className="group flex gap-1 items-center justify-center mx-auto mb-4 h-fit w-5/6 border-new-blue border rounded text-center py-2 px-3 text-xs cursor-pointer tracking-wide text-new-blue active:scale-95">
            <p>Login</p>
            <LoginIcon transform="scale(0.9, 0.9)" />
          </Link>
        )

        }

        {/* <a href="/login" className="group mx-auto mb-2 h-fit w-5/6 text-center py-2 px-3 text-xs cursor-pointer tracking-wide text-new-blue hidden md:block">
          Login
          <LoginIcon />
        </a> */}

      </Menu>
    </div>
  );
};

// Custom CSS
const styles = {
  bmMenuWrap: {
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "auto"
  },
  bmMenu: {
    background: "#F9FAF6",
  },
  bmCrossButton: {
    top: "1.5rem"
  },
  bmBurgerButton: {
    position: "absolute",
    top: "20px",
    right:"10px",
  },
  bmOverlay: {
    position: "fixed",
    left: "0",
    bottom: "0",
    background: "#F9FAF6",
    zIndex: "20",
  }
};

export default MobileNav;