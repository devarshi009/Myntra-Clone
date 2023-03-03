import React,{useState} from "react";
import { Link } from "react-router-dom";
import {  Image,useDisclosure,IconButton, } from "@chakra-ui/react";
import { AiOutlineSearch,AiOutlineHeart } from "react-icons/ai";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { BiShoppingBag } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import "./Navbar.css"
import logo from "./devshop.png";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="main"
     
    >
      <div style={{ marginTop: "10px", marginLeft: "40px" }}>
        <Link path="/" to="Home">
          <Image w="" h="70" overflow={"hidden"} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={isOpen?"nav-toggle":"after-logo"}
      
      >
        <Link path="/men" to="men">
          MEN
        </Link>
        <Link path="/women" to="women">
          WOMEN
        </Link>
        <Link path="/kids" to="kids">
          KIDS
        </Link>
        <Link path="/homeandliving" to="homeandliving">
          HOME & LIVING
        </Link>
        <Link path="/beauty" to="beauty">
          BEAUTY
        </Link>
        <Link path="/studio" to="studio">
          STUDIO
        </Link>
      </div>
      <div className="input-box"
        style={{
         
        }}
      >
        <button><AiOutlineSearch style={{marginLeft:"20px",fontSize:"20px"}}/></button> 
        <input style={{  width: "400px",background:"#ede7f6"}} type="text" placeholder="Search for products,brands and more" />
      </div>
      <div className="profile"
        
      >
        <Link path="/profile" to="profile"><CiUser style={{fontSize:"20",marginLeft:"10",fontWeight:"bolder"}} />
          Profile
        </Link>
      
        <Link path="/wishlist" to="wishlist"><AiOutlineHeart style={{fontSize:"20",marginLeft:"15"}}/>
          Wishlist
        </Link>
        <Link path="/bag" to="bag"><BiShoppingBag style={{fontSize:"20",marginLeft:"",fontWeight:"bolder"}}/>
          Bag
        </Link>
        
      </div>
      {/* mobile-View */}
      <div className="nav-toggle"  >
        {/* <div className="bar" onClick={()=>{setIsOpen(isOpen? <CgMenu/>:<CgCloseR/>)}}> </div> */}
        <IconButton
            // size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            // aria-label={'Open Menu'}
            // display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
      
        {/* <div className="bar" >
         
        </div> */}
      </div>
     
    </div>
  );
};

export default Navbar;
