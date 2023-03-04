import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Toast,
    GridItem,
    Grid,
    
  } from '@chakra-ui/react';
  import { Link, useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import useToastCompo from "../CustomHook/useToast";
  import { isAllPresent } from "./Signuplogic";
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { Toast } = useToastCompo();
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!isAllPresent(password)) {
          Toast(
            "Password should contain one uppecase,lowercase,number and special character",
            "success"
          );
          return;
        }
        const payload = {
          name,
          email,
          password,
        };
        fetch(`https://healthy-pike-sarong.cyclic.app/users/register`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            Toast(res.msg, "success");
            if (res.msg === `Hello! ${name} Your Account is created`) {
              navigate("/login");
            }
          })
          .catch((err) => {
            Toast(err?.response?.data?.msg, "error");
                console.log(err);
          });
      };
    
    return (
        <Grid>
        <GridItem w="100%" h="800px">
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"xl"} color={"gray.600"}>
                Create An Account
              </Heading>
              
              
            </Stack>
            <Box rounded={"lg"} p={8}>
              <Box>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      paddingRight={"200px"}
                      paddingLeft={"30px"}
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      paddingRight={"200px"}
                      paddingLeft={"30px"}
                      placeholder="Email"
                    />
                  </FormControl>
                  {/* <Text>{formErrors.email}</Text> */}
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                 
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                    
                      </Stack>

                    <Button
                      bg={"black"}
                      color={"white"}
                      _hover={{
                        bg: "black",
                      }}
                      onClick={handleSubmit}
                    >
                      SIGN UP
                    </Button>
                  </Stack>
                </Stack>
              </Box>
              

             
              <Link to="/login">
                <Text mt="20px" textAlign={"center"}>
                  Already have an account? Please sign in
                </Text>
              </Link>
            </Box>
          </Stack>
        </Flex>
      </GridItem>
      </Grid>
  
);
};
