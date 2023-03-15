import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  grid,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import Footer from "../Components/Footer";
import Navbar2 from "../Navbar/Navbar2";
import ProductDetail from "../Component/ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, getProducts } from "../Redux/Cart/action";
// const getData = () => {
//   return fetch(`https://healthy-pike-sarong.cyclic.app/cart`).then((res) =>
//     res.json()
//   );
// };
import { Spinner } from "@chakra-ui/react";
const Cart = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const products = useSelector((store) => store.cartManager.data);
  useEffect(() => {
    // getData().then((res) => setProducts(res));
    dispatch(getProducts());
  }, []);
  // console.log(products);
  console.log(products);
  return (
    <div>
      <Box style={{ height: "2000px" }}>
        <Container maxW={"7xl"}>
          <Flex>
            <Text
              ml={"20px"}
              mt={"20px"}
              as="b"
              fontSize={"25px"}
              alignItems={"center"}
            >
              CART
            </Text>
          </Flex>
          <SimpleGrid columns={3} gap={5}>
            {products == "" ? (
              <Box
                style={{
                
                  width: "100vw",
                  height: "80vh",
                  
                  alignItems: "center",
                  marginTop:"200px"
                }}
              >
                {/* <Box> */}
                
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                
                {/* </Box> */}
              </Box>
            ) : (
              products.data.map((e) => (
                <SimpleGrid key={e._id}>
                  <Image src={e.Image} />
                  <h1>{e.Price}</h1>
                </SimpleGrid>
              ))
            )}
          </SimpleGrid>
          <Button>CheckOut</Button>
        </Container>
      </Box>
    </div>
  );
};

export default Cart;
