import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    // Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link, useNavigate } from 'react-router-dom';
  import Signup from './Signup';
  import useToastCompo from "../CustomHook/useToast";
import { useState } from 'react';
  export default function Profile() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Toast } = useToastCompo();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    fetch(`https://healthy-pike-sarong.cyclic.app/users/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Toast(res?.msg, "success");
        if (res.token) {
          localStorage.setItem("token", res.token);
          navigate("/");
        }
      })
      .catch((err) => {
        Toast(err?.response?.data?.msg, "error");
      });
  };
    return (
      <Flex
     bg="white"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       > <h1>call</h1>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input  type="email"
                      value={email}
                      
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                  <Link to="/signup">Signup</Link>
                </Stack>
                <Button
                 onClick={handleSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }