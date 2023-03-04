import { Box, Button, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import Footer from "../Components/Footer";
import Navbar2 from "../Navbar/Navbar2";
import ProductDetail from "../Component/ProductDetail";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    return fetch(`https://json-8pz0.onrender.com/all/cart`).then((res) => res.json());
  };
  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);
  console.log(products);
  return (
    <div>
      <Box style={{height:"2000px"}}>
      <Navbar2 />
      <Container maxW={"7xl"} >
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
          {products.map((e) => (
            <ProductDetail
              key={e.id}
              image={e.Image}
              noIdea={e.Name}
              description={e.Brand}
              price={e.Price}
              originalPrice={e.OriginalPrice}
              // offer={e.offer}
              // id={e.id}
            />
          ))}
        </SimpleGrid>
        <Button>CheckOut</Button>
      </Container>

      {/* <Footer /> */}
      </Box>
    </div>
  );
};

export default Cart;
