import { RepeatClockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import "./Women.css";
const getData = async () => {
  let res = await fetch(
    `https://persian-blue-betta-cuff.cyclic.app/d?&_limit=50`
  );
  let data = await res.json();
  return data;
};
const Kurta = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAndUpdate();
  }, []);
  const fetchAndUpdate = async () => {
    const data = await getData();
    setData(data);
  };
  console.log(data);
  return (
    <Box className="kurta">
      {data.map((e) => (
        <Box key={e.id}>
          <Image src={e.img} />
          <Button
            style={{
               display: "flex",
               gap: "10px",
              background: "white.100",
              position: "relative",
               bottom: "50px",
               left: "10px",
               height:"30px",
               width:"120px",borderRadius:"none"
            }}
          >
            <span>{e.rating}</span>
            <span>
              <AiFillStar />
            </span>
            <span>{e.separator}</span>
            
            <span>{e.ratingsCount}</span>
          </Button>
          <Heading fontSize={15}>{e.brand}</Heading>
          <h3>{e.product}</h3>
          <h1 style={{ display: "flex", gap: "5px" }}>
            <span style={{ fontWeight: "bold" }}>{e.discountedPrice}</span>
            <span style={{ textDecoration: "line-through" }}>{e.strike}</span>
            <span style={{ color: "orange" }}>{e.discountPercentage}</span>
          </h1>
        </Box>
      ))}
    </Box>
  );
};

export default Kurta;
