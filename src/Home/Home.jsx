import React from "react";
import Carousal from "../Carausal/Carousal";
import { Box, Center, Flex, Grid, Heading, HStack, Image, Text } from "@chakra-ui/react";

import "./Home.css";
import d1 from "./deal of the day/1.jpg";
import d2 from "./deal of the day/2.jpg";
import d3 from "./deal of the day/3.jpg";
import d4 from "./deal of the day/4.jpg";
import d5 from "./deal of the day/5.jpg";
import d6 from "./deal of the day/6.jpg";
import d7 from "./deal of the day/7.jpg";
import d8 from "./deal of the day/8.jpg";

import b1 from "./best/1.jpg"
import b2 from "./best/2.jpg"
import b3 from "./best/3.jpg"
import b4 from "./best/4.jpg"
import b5 from "./best/5.jpg"
import b6 from "./best/6.jpg"
import b7 from "./best/7.jpg"
import b8 from "./best/8.jpg"
import b9 from "./best/9.jpg"
import b10 from "./best/10.jpg"
import b11 from "./best/11.jpg"
import b12 from "./best/12.jpg"
import b13 from "./best/13.jpg"
import b14 from "./best/14.jpg"
import b15 from "./best/15.jpg"
import b16 from "./best/16.jpg";

import tp1 from "./top picks/1.jpg";
import tp2 from "./top picks/2.jpg";
import tp3 from "./top picks/3.jpg";
import tp4 from "./top picks/4.jpg";
import tp5 from "./top picks/5.jpg";
import tp6 from "./top picks/6.jpg";
import tp7 from "./top picks/7.jpg";


import ctb1 from "./catageories to bag/1.jpg";
import ctb2 from "./catageories to bag/2.jpg";
import ctb3 from "./catageories to bag/3.jpg";
import ctb4 from "./catageories to bag/4.jpg";
import ctb5 from "./catageories to bag/5.jpg";
import ctb6 from "./catageories to bag/6.jpg";
import ctb7 from "./catageories to bag/7.jpg";
import ctb8 from "./catageories to bag/8.jpg";
import ctb9 from "./catageories to bag/9.jpg";
import ctb10 from "./catageories to bag/10.jpg";
import ctb11 from "./catageories to bag/11.jpg";
import ctb12 from "./catageories to bag/12.jpg";
import ctb13 from "./catageories to bag/13.jpg";
import ctb14 from "./catageories to bag/14.jpg";
import ctb15 from "./catageories to bag/15.jpg";
import ctb16 from "./catageories to bag/16.jpg";
import ctb17 from "./catageories to bag/17.jpg";
import ctb18 from "./catageories to bag/18.jpg";
import ctb19 from "./catageories to bag/19.jpg";
import ctb20 from "./catageories to bag/20.jpg";
import ctb21 from "./catageories to bag/21.jpg";
import ctb22 from "./catageories to bag/22.jpg";
import ctb23 from "./catageories to bag/23.jpg";
import ctb24 from "./catageories to bag/24.jpg";

import dtp1 from "./Deals on top brands/1.jpg";
import dtp2 from "./Deals on top brands/2.jpg";
import dtp3 from "./Deals on top brands/3.jpg";
import dtp4 from "./Deals on top brands/4.jpg";
import dtp5 from "./Deals on top brands/5.jpg";
import dtp6 from "./Deals on top brands/6.jpg";
import dtp7 from "./Deals on top brands/7.jpg";
import dtp8 from "./Deals on top brands/8.jpg";
import dtp9 from "./Deals on top brands/9.jpg";
import dtp10 from "./Deals on top brands/10.jpg";
import dtp11 from "./Deals on top brands/11.jpg";
import dtp12 from "./Deals on top brands/12.jpg";
import dtp13 from "./Deals on top brands/13.jpg";
import dtp14 from "./Deals on top brands/14.jpg";
import dtp15 from "./Deals on top brands/15.jpg";
import dtp16 from "./Deals on top brands/16.jpg";
import dtp17 from "./Deals on top brands/17.jpg";
import dtp18 from "./Deals on top brands/18.jpg";
import dtp19 from "./Deals on top brands/19.jpg";
import dtp20 from "./Deals on top brands/20.jpg";
import dtp21 from "./Deals on top brands/21.jpg";
import dtp22 from "./Deals on top brands/22.jpg";
import dtp23 from "./Deals on top brands/23.jpg";
import dtp24 from "./Deals on top brands/24.jpg";

import basp1 from "./brands at slashed price/1.jpg";
import basp2 from "./brands at slashed price/2.jpg";
import basp3 from "./brands at slashed price/3.jpg";
import basp4 from "./brands at slashed price/4.jpg";
import basp5 from "./brands at slashed price/5.jpg";
import basp6 from "./brands at slashed price/6.jpg";
import basp7 from "./brands at slashed price/7.jpg";
import basp8 from "./brands at slashed price/8.jpg";
import basp9 from "./brands at slashed price/9.jpg";
import basp10 from "./brands at slashed price/10.jpg";
import basp11 from "./brands at slashed price/11.jpg";
import basp12 from "./brands at slashed price/12.jpg";
import basp13 from "./brands at slashed price/13.jpg";
import basp14 from "./brands at slashed price/14.jpg";
// import basp15 from "./brands at slashed price/15.jpg";
// import basp16 from "./brands at slashed price/16.jpg";

import bb1 from "./Best Buy/1.jpg";
import bb2 from "./Best Buy/2.jpg";
import bb3 from "./Best Buy/3.jpg";
import bb4 from "./Best Buy/4.jpg";
import bb5 from "./Best Buy/5.jpg";
import bb6 from "./Best Buy/6.jpg";
import bb7 from "./Best Buy/7.jpg";
import bb8 from "./Best Buy/8.jpg";
import bb9 from "./Best Buy/9.jpg";
import  bb10 from "./Best Buy/10.jpg";
import  bb11 from "./Best Buy/11.jpg";
import  bb12 from "./Best Buy/12.jpg";
import  bb13 from "./Best Buy/13.jpg";
import  bb14 from "./Best Buy/14.jpg";
import  bb15 from "./Best Buy/15.jpg";
import  bb16 from "./Best Buy/16.jpg";

import ml1  from "./Myntra Luxe/1.jpg";
import ml2  from "./Myntra Luxe/2.jpg";
import ml3  from "./Myntra Luxe/3.jpg";
import ml4  from "./Myntra Luxe/4.jpg";
import ml5  from "./Myntra Luxe/5.jpg";
import ml6  from "./Myntra Luxe/6.jpg";
import ml7  from "./Myntra Luxe/7.jpg";
import ml8  from "./Myntra Luxe/8.jpg";
import ml9  from "./Myntra Luxe/9.jpg";
import ml10 from "./Myntra Luxe/10.jpg";
import ml11 from "./Myntra Luxe/11.jpg";
import ml12 from "./Myntra Luxe/12.jpg";
import ml13 from "./Myntra Luxe/13.jpg";
import ml14 from "./Myntra Luxe/14.jpg";
import ml15 from "./Myntra Luxe/15.jpg";
import ml16 from "./Myntra Luxe/16.jpg";

import gc1 from "./Gifting Cards/1.jpg";
import gc2 from "./Gifting Cards/2.jpg";
import gc3 from "./Gifting Cards/3.jpg";
import gc4 from "./Gifting Cards/4.jpg";

import ss1  from "./spring summer/1.jpg";
import ss2  from "./spring summer/2.jpg";
import ss3  from "./spring summer/3.jpg";
import ss4  from "./spring summer/4.jpg";
import ss5  from "./spring summer/5.jpg";
import ss6  from "./spring summer/6.jpg";
import ss7  from "./spring summer/7.jpg";
import ss8  from "./spring summer/8.jpg";
import ss9  from "./spring summer/9.jpg";
import ss10 from "./spring summer/10.jpg";
import ss11 from "./spring summer/11.jpg";
import ss12 from "./spring summer/12.jpg";
import ss13 from "./spring summer/13.jpg";
import ss14 from "./spring summer/14.jpg";
import ss15 from "./spring summer/15.jpg";
import ss16 from "./spring summer/16.jpg";

import shf1  from "./Stylecast/1.jpg";
import shf2  from "./Stylecast/2.jpg";
import shf3  from "./Stylecast/3.jpg";
import shf4  from "./Stylecast/4.jpg";
import shf5  from "./Stylecast/5.jpg";
import shf6  from "./Stylecast/6.jpg";
import shf7  from "./Stylecast/7.jpg";

import tfh1  from "./Trends for her/1.jpg";
import tfh2  from "./Trends for her/2.jpg";
import tfh3  from "./Trends for her/3.jpg";
import tfh4  from "./Trends for her/4.jpg";
import tfh5  from "./Trends for her/5.jpg";
import tfh6  from "./Trends for her/6.jpg";
import tfh7  from "./Trends for her/7.jpg";
import tfh8  from "./Trends for her/8.jpg";


import tfhim1  from "./Trends for him/1.jpg";
import tfhim2  from "./Trends for him/2.jpg";
import tfhim3  from "./Trends for him/3.jpg";
import tfhim4  from "./Trends for him/4.jpg";
import tfhim5  from "./Trends for him/5.jpg";
import tfhim6  from "./Trends for him/6.jpg";
import tfhim7  from "./Trends for him/7.jpg";
import tfhim8  from "./Trends for him/8.jpg";

import bok1  from "./Best for Kids/1.jpg";
import bok2  from "./Best for Kids/2.jpg";
import bok3  from "./Best for Kids/3.jpg";
import bok4  from "./Best for Kids/4.jpg";
import bok5  from "./Best for Kids/5.jpg";
import bok6  from "./Best for Kids/6.jpg";
import bok7  from "./Best for Kids/7.jpg";

import nitb1  from "./New In top brands/1.jpg";
import nitb2  from "./New In top brands/2.jpg";
import nitb3  from "./New In top brands/3.jpg";
import nitb4  from "./New In top brands/4.jpg";
import nitb5  from "./New In top brands/5.jpg";
import nitb6  from "./New In top brands/6.jpg";
import nitb7  from "./New In top brands/7.jpg";
import nitb8  from "./New In top brands/8.jpg";

import sssc1  from "./spring summer season checklist/1.jpg";
import sssc2  from "./spring summer season checklist/2.jpg";
import sssc3  from "./spring summer season checklist/3.jpg";
import sssc4  from "./spring summer season checklist/4.jpg";
import sssc5  from "./spring summer season checklist/5.jpg";
import sssc6  from "./spring summer season checklist/6.jpg";
import sssc7  from "./spring summer season checklist/7.jpg";
import sssc8  from "./spring summer season checklist/8.jpg";


import nfeo1  from "./newnwss for every occassion/1.jpg";
import nfeo2  from "./newnwss for every occassion/2.jpg";
import nfeo3  from "./newnwss for every occassion/3.jpg";
import nfeo4  from "./newnwss for every occassion/4.jpg";
import nfeo5  from "./newnwss for every occassion/5.jpg";
import nfeo6  from "./newnwss for every occassion/6.jpg";
import nfeo7  from "./newnwss for every occassion/7.jpg";
import nfeo8  from "./newnwss for every occassion/8.jpg";


import libg1  from "./Latest in beauty & grooming/1.jpg";
import libg2  from "./Latest in beauty & grooming/2.jpg";
import libg3  from "./Latest in beauty & grooming/3.jpg";
import libg4  from "./Latest in beauty & grooming/4.jpg";
import libg5  from "./Latest in beauty & grooming/5.jpg";
import libg6  from "./Latest in beauty & grooming/6.jpg";
import libg7  from "./Latest in beauty & grooming/7.jpg";
import libg8  from "./Latest in beauty & grooming/8.jpg";


import uts1  from "./Unmissable this season/1.jpg";
import uts2  from "./Unmissable this season/2.jpg";
import uts3  from "./Unmissable this season/3.jpg";
import uts4  from "./Unmissable this season/4.jpg";
import uts5  from "./Unmissable this season/5.jpg";
import uts6  from "./Unmissable this season/6.jpg";
import uts7  from "./Unmissable this season/7.jpg";
import uts8  from "./Unmissable this season/8.jpg";


import cots1  from "./colours of the season/1.jpg";
import cots2  from "./colours of the season/2.jpg";
import cots3  from "./colours of the season/3.jpg";
import cots4  from "./colours of the season/4.jpg";
import cots5  from "./colours of the season/5.jpg";
import cots6  from "./colours of the season/6.jpg";
import cots7  from "./colours of the season/7.jpg";
import cots8  from "./colours of the season/8.jpg";

import ties1  from "./Top influncers exclusive styles/1.gif";
import ties2  from "./Top influncers exclusive styles/2.gif";
import ties3  from "./Top influncers exclusive styles/3.gif";
import ties4  from "./Top influncers exclusive styles/4.gif";
import ties5  from "./Top influncers exclusive styles/5.gif";
import ties6  from "./Top influncers exclusive styles/6.gif";

import bpil1  from "./Budget picks/1.jpg";
import bpil2  from "./Budget picks/2.jpg";
import bpil3  from "./Budget picks/3.jpg";
import bpil4  from "./Budget picks/4.jpg";
import bpil5  from "./Budget picks/5.jpg";
import bpil6  from "./Budget picks/6.jpg";
import bpil7  from "./Budget picks/7.jpg";
import bpil8  from "./Budget picks/8.jpg";


import tobi1  from "./trending outfits by influencers/1.jpg";
import tobi2  from "./trending outfits by influencers/2.jpg";
import tobi3  from "./trending outfits by influencers/3.jpg";
import tobi4  from "./trending outfits by influencers/4.jpg";
import tobi5  from "./trending outfits by influencers/5.jpg";
import tobi6  from "./trending outfits by influencers/6.jpg";
import tobi7  from "./trending outfits by influencers/7.jpg";
import tobi8  from "./trending outfits by influencers/8.jpg";
import { Link } from "react-router-dom";

// import tp1 from ".//1.jpg";
// import tp2 from ".//2.jpg";
// import tp3 from ".//3.jpg";
// import tp4 from ".//4.jpg";
// import tp5 from ".//5.jpg";
// import tp6 from ".//6.jpg";
// import tp7 from ".//7.jpg";
// import tp8 from ".//8.jpg";
const Home = () => {
  return (
   <Link to="/products"> <Box >
      <Box  >
       <Center w={{base:"93%",lg:"98%"}}><Carousal /></Center> 
      </Box>
      {/* deal of the day */}
      
      <Box mt={"50px"}  >
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">DEAL OF THE DAY</Heading>
        </Box>
    <Box  className="dealofthe">
   
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={d1} />
        </Box>
        <Box>
          <Image src={d2} />
        </Box>
        <Box>
          <Image src={d3} />
        </Box>
        <Box>
          <Image src={d4} />
        </Box>
        <Box>
          <Image src={d5} />
        </Box>
        <Box>
          <Image src={d6} />
        </Box>
        <Box>
          <Image src={d7} />
        </Box>
        <Box>
          <Image src={d8} />
        </Box>
      </Grid>
    </Box>
    {/* Best of myntra exclusive brands */}
    <Box mt={"50px"}  >
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">BEST OF MYNTRA EXCLUSIVE BRANDS</Heading>
        </Box>
   
    <Box >
      
      <Grid mt={"50px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={b1} />
        </Box>
        <Box>
          <Image src={b2} />
        </Box>
        <Box>
          <Image src={b3} />
        </Box>
        <Box>
          <Image src={b4} />
        </Box>
        <Box>
          <Image src={b5} />
        </Box>
        <Box>
          <Image src={b6} />
        </Box>
        <Box>
          <Image src={b7} />
        </Box>
        <Box>
          <Image src={b8} />
        </Box>
      </Grid>
      </Box>
      <Box>
      <Flex>
       
       <Box>
         <Image src={b9} />
       </Box>
       <Box>
         <Image src={b10} />
       </Box>
       <Box>
         <Image src={b11} />
       </Box>
       <Box>
         <Image src={b12} />
       </Box>
       <Box>
         <Image src={b13} />
       </Box>
       <Box>
         <Image src={b14} />
       </Box>
       <Box>
         <Image src={b15} />
       </Box>
       <Box>
         <Image src={b16} />
       </Box>
     </Flex>
      </Box>
      
      {/* TOP PICKS */}

      <Box mt={"50px"} >
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">TOP PICKS</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(7,1fr)"}}>
       
        <Box>
          <Image src={tp1} />
        </Box>
        <Box>
          <Image src={tp2} />
        </Box>
        <Box>
          <Image src={tp3} />
        </Box>
        <Box>
          <Image src={tp4} />
        </Box>
        <Box>
          <Image src={tp5} />
        </Box>
        <Box>
          <Image src={tp6} />
        </Box>
        <Box>
          <Image src={tp7} />
        </Box>
        {/* <Box>
          <Image src={tp8} />
        </Box> */}
      </Grid>
    </Box>
 
 {/* catagories to bag */}
 <Box mt={"50px"}  letterSpacing={"3.5px"} >
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152" >CATEGORIES TO BAG</Heading>
        </Box>
   
    <Box >
      
      <Grid mt={"50px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={ctb1} />
        </Box>
        <Box>
          <Image src={ctb2} />
        </Box>
        <Box>
          <Image src={ctb3} />
        </Box>
        <Box>
          <Image src={ctb4} />
        </Box>
        <Box>
          <Image src={ctb5} />
        </Box>
        <Box>
          <Image src={ctb6} />
        </Box>
        <Box>
          <Image src={ctb7} />
        </Box>
        <Box>
          <Image src={ctb8} />
        </Box>
      </Grid>
      </Box>
      <Box>
      <Flex>
       
       <Box>
         <Image src={ctb9} />
       </Box>
       <Box>
         <Image src={ctb10} />
       </Box>
       <Box>
         <Image src={ctb11} />
       </Box>
       <Box>
         <Image src={ctb12} />
       </Box>
       <Box>
         <Image src={ctb13} />
       </Box>
       <Box>
         <Image src={ctb14} />
       </Box>
       <Box>
         <Image src={ctb15} />
       </Box>
       <Box>
         <Image src={ctb16} />
       </Box>
     </Flex>
     <Box>
      <Flex>
       
       <Box>
         <Image src={ctb17} />
       </Box>
       <Box>
         <Image src={ctb18} />
       </Box>
       <Box>
         <Image src={ctb19} />
       </Box>
       <Box>
         <Image src={ctb20} />
       </Box>
       <Box>
         <Image src={ctb21} />
       </Box>
       <Box>
         <Image src={ctb22} />
       </Box>
       <Box>
         <Image src={ctb23} />
       </Box>
       <Box>
         <Image src={ctb24} />
       </Box>
     </Flex>
      </Box>

    </Box>

    {/* Deals On top brands */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">DEALS ON TOP BRANDS</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={dtp1} />
        </Box>
        <Box>
          <Image src={dtp2} />
        </Box>
        <Box>
          <Image src={dtp3} />
        </Box>
        <Box>
          <Image src={dtp4} />
        </Box>
        <Box>
          <Image src={dtp5} />
        </Box>
        <Box>
          <Image src={dtp6} />
        </Box>
        <Box>
          <Image src={dtp7} />
        </Box>
         <Box>
          <Image src={dtp8} />
        </Box> 
      </Grid>
      <Box>
      <Flex>
       
       <Box>
         <Image src={dtp9} />
       </Box>
       <Box>
         <Image src={dtp10} />
       </Box>
       <Box>
         <Image src={dtp11} />
       </Box>
       <Box>
         <Image src={dtp12} />
       </Box>
       <Box>
         <Image src={dtp13} />
       </Box>
       <Box>
         <Image src={dtp14} />
       </Box>
       <Box>
         <Image src={dtp15} />
       </Box>
       <Box>
         <Image src={dtp16} />
       </Box>
     </Flex>
     <Box>
      <Flex>
       
       <Box>
         <Image src={dtp17} />
       </Box>
       <Box>
         <Image src={dtp18} />
       </Box>
       <Box>
         <Image src={dtp19} />
       </Box>
       <Box>
         <Image src={dtp20} />
       </Box>
       <Box>
         <Image src={dtp21} />
       </Box>
       <Box>
         <Image src={dtp22} />
       </Box>
       <Box>
         <Image src={dtp23} />
       </Box>
       <Box>
         <Image src={dtp24} />
       </Box>
     </Flex>
    </Box>
 </Box>
    </Box>
    {/* BRANDS AT SLASHED PRICES */}
    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">BRANDS AT SLASHED PRICES</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={basp1} />
        </Box>
        <Box>
          <Image src={basp2} />
        </Box>
        <Box>
          <Image src={basp3} />
        </Box>
        <Box>
          <Image src={basp4} />
        </Box>
        <Box>
          <Image src={basp5} />
        </Box>
        <Box>
          <Image src={basp6} />
        </Box>
        <Box>
          <Image src={basp7} />
        </Box>
         <Box>
          <Image src={basp8} />
        </Box> 
      </Grid>
      <Box>
      <Flex>
       
       <Box>
         <Image src={basp9} />
       </Box>
       <Box>
         <Image src={basp10} />
       </Box>
       <Box>
         <Image src={basp11} />
       </Box>
       <Box>
         <Image src={basp12} />
       </Box>
       <Box>
         <Image src={basp13} />
       </Box>
       <Box>
         <Image src={basp14} />
       </Box>
        <Box>
         <Image src={basp2} />
       </Box>
       <Box>
         <Image src={basp4} />
       </Box> 
     </Flex>

    </Box>
    </Box>

    {/* BEST BUY */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152" >BEST BUY</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={bb1} />
        </Box>
        <Box>
          <Image src={bb2} />
        </Box>
        <Box>
          <Image src={bb3} />
        </Box>
        <Box>
          <Image src={bb4} />
        </Box>
        <Box>
          <Image src={bb5} />
        </Box>
        <Box>
          <Image src={bb6} />
        </Box>
        <Box>
          <Image src={bb7} />
        </Box>
         <Box>
          <Image src={bb8} />
        </Box> 
      </Grid>
      <Box>
      <Flex>
       
       <Box>
         <Image src={bb9} />
       </Box>
       <Box>
         <Image src={bb10} />
       </Box>
       <Box>
         <Image src={bb11} />
       </Box>
       <Box>
         <Image src={bb12} />
       </Box>
       <Box>
         <Image src={bb13} />
       </Box>
       <Box>
         <Image src={bb14} />
       </Box>
        <Box>
         <Image src={bb15} />
       </Box>
       <Box>
         <Image src={bb16} />
       </Box> 
     </Flex>

    </Box>
    </Box>

    {/* MYNTRA LUXE */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152"> MYNTRA LUXE</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={ml1} />
        </Box>
        <Box>
          <Image src={ml2} />
        </Box>
        <Box>
          <Image src={ml3} />
        </Box>
        <Box>
          <Image src={ml4} />
        </Box>
        <Box>
          <Image src={ml5} />
        </Box>
        <Box>
          <Image src={ml6} />
        </Box>
        <Box>
          <Image src={ml7} />
        </Box>
         <Box>
          <Image src={ml8} />
        </Box> 
      </Grid>
      <Box>
      <Flex>
       
       <Box>
         <Image src={ml9} />
       </Box>
       <Box>
         <Image src={ml10} />
       </Box>
       <Box>
         <Image src={ml11} />
       </Box>
       <Box>
         <Image src={ml12} />
       </Box>
       <Box>
         <Image src={ml13} />
       </Box>
       <Box>
         <Image src={ml14} />
       </Box>
        <Box>
         <Image src={ml15} />
       </Box>
       <Box>
         <Image src={ml16} />
       </Box> 
     </Flex>

    </Box>
    </Box>

    {/* GIFTING CARDS */}
    
    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">GIFTING CARDS</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
       
        <Box>
          <Image src={gc1} />
        </Box>
        <Box>
          <Image src={gc2} />
        </Box>
        <Box>
          <Image src={gc3} />
        </Box>
        <Box>
          <Image src={gc4} />
        </Box>
        
        </Grid>
    </Box>

    {/* SPRING SUMMER 2022-FIRST ON MYNTRA  */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">SPRING SUMMER 2022-FIRST ON MYNTRA</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={ss1} />
        </Box>
        <Box>
          <Image src={ss2} />
        </Box>
        <Box>
          <Image src={ss3} />
        </Box>
        <Box>
          <Image src={ss4} />
        </Box>
        <Box>
          <Image src={ss5} />
        </Box>
        <Box>
          <Image src={ss6} />
        </Box>
        <Box>
          <Image src={ss7} />
        </Box>
         <Box>
          <Image src={ss8} />
        </Box> 
      </Grid>
      <Box>
      <Flex>
       
       <Box>
         <Image src={ss9} />
       </Box>
       <Box>
         <Image src={ss10} />
       </Box>
       <Box>
         <Image src={ss11} />
       </Box>
       <Box>
         <Image src={ss12} />
       </Box>
       <Box>
         <Image src={ss13} />
       </Box>
       <Box>
         <Image src={ss14} />
       </Box>
        <Box>
         <Image src={ss15} />
       </Box>
       <Box>
         <Image src={ss16} />
       </Box> 
     </Flex>

    </Box>
    </Box>

    {/* STYLECAST HOTTEST FINDS */}

    <Box mt={"50px"} letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">STYLECAST HOTTEST FINDS</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(7,1fr)"}}>
       
        <Box>
          <Image src={shf1} />
        </Box>
        <Box>
          <Image src={shf2} />
        </Box>
        <Box>
          <Image src={shf3} />
        </Box>
        <Box>
          <Image src={shf4} />
        </Box>
        <Box>
          <Image src={shf5} />
        </Box>
        <Box>
          <Image src={shf6} />
        </Box>
        <Box>
          <Image src={shf7} />
        </Box>
        </Grid>
    </Box>

    {/* TRENDS FOR HER */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">TRENDS FOR HER</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={tfh1} />
        </Box>
        <Box>
          <Image src={tfh2} />
        </Box>
        <Box>
          <Image src={tfh3} />
        </Box>
        <Box>
          <Image src={tfh4} />
        </Box>
        <Box>
          <Image src={tfh5} />
        </Box>
        <Box>
          <Image src={tfh6} />
        </Box>
        <Box>
          <Image src={tfh7} />
        </Box>
        <Box>
          <Image src={tfh8} />
        </Box>
        </Grid>
     </Box>

{/* TRENDS FOR HIM */}
    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">TRENDS FOR HIM</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={tfhim1} />
        </Box>
        <Box>
          <Image src={tfhim2} />
        </Box>
        <Box>
          <Image src={tfhim3} />
        </Box>
        <Box>
          <Image src={tfhim4} />
        </Box>
        <Box>
          <Image src={tfhim5} />
        </Box>
        <Box>
          <Image src={tfhim6} />
        </Box>
        <Box>
          <Image src={tfhim7} />
        </Box>
        <Box>
          <Image src={tfhim8} />
        </Box>
        </Grid>
    </Box>

    {/* BEST OF KIDSWEAR */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152" > BEST OF KIDSWEAR</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(7,1fr)"}}>
       
        <Box>
          <Image src={bok1} />
        </Box>
        <Box>
          <Image src={bok2} />
        </Box>
        <Box>
          <Image src={bok3} />
        </Box>
        <Box>
          <Image src={bok4} />
        </Box>
        <Box>
          <Image src={bok5} />
        </Box>
        <Box>
          <Image src={bok6} />
        </Box>
        <Box>
          <Image src={bok7} />
        </Box>
        
        </Grid>
     </Box>

     {/* NEW IN TOP BRANDS */}

     <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152" >NEW IN TOP BRANDS</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={nitb1} />
        </Box>
        <Box>
          <Image src={nitb2} />
        </Box>
        <Box>
          <Image src={nitb3} />
        </Box>
        <Box>
          <Image src={nitb4} />
        </Box>
        <Box>
          <Image src={nitb5} />
        </Box>
        <Box>
          <Image src={nitb6} />
        </Box>
        <Box>
          <Image src={nitb7} />
        </Box>
        <Box>
          <Image src={nitb8} />
        </Box>
        </Grid>
    </Box>

    {/* SPRING SUMMER SEASON CHECKLIST */}
     <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">SPRING SUMMER SEASON CHECKLIST</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={sssc1} />
        </Box>
        <Box>
          <Image src={sssc2} />
        </Box>
        <Box>
          <Image src={sssc3} />
        </Box>
        <Box>
          <Image src={sssc4} />
        </Box>
        <Box>
          <Image src={sssc5} />
        </Box>
        <Box>
          <Image src={sssc6} />
        </Box>
        <Box>
          <Image src={sssc7} />
        </Box>
        <Box>
          <Image src={sssc8} />
        </Box>
        </Grid>
    </Box>

    {/* NEWNESS FOR EVERY OCCASION */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">NEWNESS FOR EVERY OCCASION</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
       
        <Box>
          <Image src={nfeo1} />
        </Box>
        <Box>
          <Image src={nfeo2} />
        </Box>
        <Box>
          <Image src={nfeo3} />
        </Box>
        <Box>
          <Image src={nfeo4} />
        </Box>
        </Grid>
        <Flex>
        <Box>
          <Image src={nfeo5} />
        </Box>
        <Box>
          <Image src={nfeo6} />
        </Box>
        <Box>
          <Image src={nfeo7} />
        </Box>
        <Box>
          <Image src={nfeo8} />
        </Box>
        </Flex>
    </Box>

    {/* LATEST IN BEAUTY & GROOMING */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">LATEST IN BEAUTY & GROOMING</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
       
        <Box>
          <Image src={libg1} />
        </Box>
        <Box>
          <Image src={libg2} />
        </Box>
        <Box>
          <Image src={libg3} />
        </Box>
        <Box>
          <Image src={libg4} />
        </Box>
        </Grid>
        <Flex>
        <Box>
          <Image src={libg5} />
        </Box>
        <Box>
          <Image src={libg6} />
        </Box>
        <Box>
          <Image src={libg7} />
        </Box>
        <Box>
          <Image src={libg8} />
        </Box>
        </Flex>
    </Box>

   {/* UNMISSABLE THIS SEASON */}


    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152"> UNMISSABLE THIS SEASON</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={uts1} />
        </Box>
        <Box>
          <Image src={uts2} />
        </Box>
        <Box>
          <Image src={uts3} />
        </Box>
        <Box>
          <Image src={uts4} />
        </Box>
        <Box>
          <Image src={uts5} />
        </Box>
        <Box>
          <Image src={uts6} />
        </Box>
        <Box>
          <Image src={uts7} />
        </Box>
        <Box>
          <Image src={uts8} />
        </Box>
        </Grid>
    </Box>

    {/* COLOURS OF THE SEASON */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">COLOURS OF THE SEASON</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
       
        <Box>
          <Image src={cots1} />
        </Box>
        <Box>
          <Image src={cots2} />
        </Box>
        <Box>
          <Image src={cots3} />
        </Box>
        <Box>
          <Image src={cots4} />
        </Box>
        </Grid>
        <Flex>
        <Box>
          <Image src={cots5} />
        </Box>
        <Box>
          <Image src={cots6} />
        </Box>
        <Box>
          <Image src={cots7} />
        </Box>
        <Box>
          <Image src={cots8} />
        </Box>
        </Flex>
    </Box>


{/* TOP INFLUNENCERS EXCLUSIVE STYLES */}

<Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">TOP INFLUNENCERS EXCLUSIVE STYLES</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(3,1fr)",lg:"repeat(6,1fr)"}}>
       
        <Box>
          <Image src={ties1} />
        </Box>
        <Box>
          <Image src={ties2} />
        </Box>
        <Box>
          <Image src={ties3} />
        </Box>
        <Box>
          <Image src={ties4} />
        </Box>
        <Box>
          <Image src={ties5} />
        </Box>
        <Box>
          <Image src={ties6} />
        </Box>
        </Grid>
    </Box>

    {/* BUDGET PICKS INFLUENCERS LOVE */}

    <Box mt={"50px"}  letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">BUDGET PICKS INFLUENCERS LOVE</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={bpil1} />
        </Box>
        <Box>
          <Image src={bpil2} />
        </Box>
        <Box>
          <Image src={bpil3} />
        </Box>
        <Box>
          <Image src={bpil4} />
        </Box>
        <Box>
          <Image src={bpil5} />
        </Box>
        <Box>
          <Image src={bpil6} />
        </Box>
        <Box>
          <Image src={bpil7} />
        </Box>
        <Box>
          <Image src={bpil8} />
        </Box>
        </Grid>
    </Box>

    {/* TRENDING OUTFITS BY INFLUENCERS */}

    <Box mt={"50px"} letterSpacing={"3.5px"}>
        <Heading fontSize={"30px"} textAlign="start" ml="3%" color="#3e4152">TRENDING OUTFITS BY INFLUENCERS</Heading>
        </Box>
   
    <Box >
      <Grid mt={"100px"} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
       
        <Box>
          <Image src={tobi1} />
        </Box>
        <Box>
          <Image src={tobi2} />
        </Box>
        <Box>
          <Image src={tobi3} />
        </Box>
        <Box>
          <Image src={tobi4} />
        </Box>
        <Box>
          <Image src={tobi5} />
        </Box>
        <Box>
          <Image src={tobi6} />
        </Box>
        <Box>
          <Image src={tobi7} />
        </Box>
        <Box>
          <Image src={tobi8} />
        </Box>
        </Grid>
    </Box>
    
    </Box></Link>
    
  );
};

export default Home;
