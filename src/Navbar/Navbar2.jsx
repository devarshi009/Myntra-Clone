import { Avatar, Box, Button, CloseButton, Flex, Grid, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Stack, Text, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react";
import { AiFillBell, AiFillHome, AiOutlineInbox, AiOutlineMenu, AiOutlineSearch,AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "./devshop.png";
const Navbar2=() => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    return (
      <>
        <header
        ZIndex="1000"
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
           
          }}
          py={4}
        //   shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto" >
            <HStack display="flex" spacing={3} alignItems="center" >
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                  
                />
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={"white"}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                  
                >
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                    
                  />
                  <Link to="/products" w="full"  ZIndex="10000">
                    MEN
                  </Link>
                  <Link to="/women"
                    w="full"
                    variant="solid"
                    colorScheme="brand"
                   
                  >
                   WOMEN 
                  </Link>
                  <Link to="/kids"
                    w="full"
                   
                
                  >
                    KIDS
                  </Link>
                  <Link
                    w="full"
                    to="/homeandliving"
                   
                   
                  >
                    HOME & LIVING
                  </Link>
                  <Link to="/beauty"
                    w="full"
                   
                   
                  >
                    BEAUTY
                  </Link>
                  <Link to="/studio"
                    w="full"
                   
                   
                  >
                    STUDIO
                  </Link>
                </VStack>
              </Box>
               
               
               <Image src= {logo} w="10%"/> 
                
               
                
             
  
              <HStack
                spacing={4}
                display={{
                  base: "none",
                  md: "inline-flex",
                }}

              >
                
                <Link to="/products"  size="sm">
                  MEN
                </Link>
                <Link
                  to="/products"
                  
                  size="sm"
                >
                  WOMEN
                </Link>
                <Link
                 to="/products"
                
                  size="sm"
                >
                KIDS
                </Link>
                <Link
                 
                //  to="/homeandliving"
                 to="/products"
                  size="sm"
                >
                HOME & LIVING
                </Link>
                <Link
                 
                //  to="/beauty"
                 to="/products"
                  size="sm"
                >
            BEAUTY
                </Link>
                <Link
                 
                //  to="/studio"
                 to="/products"
                  size="sm"
                >
                STUDIO
                </Link>
              </HStack>
              
            </HStack>
           
            <HStack
              spacing={3}
              display={mobileNav.isOpen ? "none" : "flex"}
              alignItems="center"
            >
              <InputGroup mr={{lg:"300px"}} px={{base:"10px",lg:"150px"}}   bg="#f5f5f6">
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..."  />
              </InputGroup>
  
              {/* <a
                p={3}
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                rounded="sm"
                _hover={{
                  color: "gray.800",
                  _dark: {
                    color: "gray.600",
                  },
                }}
                
              >
               
               
              </a> */}
     
              <Link path="/profile" to="profile"><CiUser style={{fontSize:"20",fontWeight:"bolder"}} />
          Profile
        </Link>
      
        <Link path="/wishlist" to="wishlist"><AiOutlineHeart style={{fontSize:"20",}}/>
          Wishlist
        </Link>
        <Link path="/bag" to="bag"><BiShoppingBag style={{fontSize:"20",fontWeight:"bolder"}}/>
          Bag
        </Link>
        
            </HStack>
          </Flex>
        </header>
      </>
    );
  };

  export default Navbar2