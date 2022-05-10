<<<<<<< HEAD
import { Box, Flex,  } from '@chakra-ui/react'
=======
import { Box, Center, Flex, Heading, Link, } from '@chakra-ui/react'
>>>>>>> cc49bc45493d26d276331b8519647306f07b7b05
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from '../partials/ProductCard'
import { API } from "../../API/api_url";
import { Link, useParams } from 'react-router-dom';



export default function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const { shop_id } = useParams();

  var response = '';
  const fetchAllProducts = async () => {
    console.log("Fating all data", shop_id);
    if (shop_id != null) {
      response = await axios.get(`${API}/api/getShopProducts/${shop_id}`);
    } else {
      response = await axios.get(`${API}/api/getShopProducts`);
    }
    console.log(response.data);
    if (response.data.statusCode === 200) {
      setProducts(response.data.products);
    } else {
      alert("Not able to fetch all products");
    }
  }
  useEffect(() => {
    fetchAllProducts();
    console.log(products)
  }, [])


  return (
    <>
      <Heading mt={'20px'} mb={'10px'} isTruncated>
        <Center>
          Shop Products
        </Center>
      </Heading>
      <Flex justifyContent={'space-around'} alignContent={'space-between'} wrap={'wrap'}>
        {
          products.length > 0 ? products.map((value, index) => (
            <Box key={index}>
<<<<<<< HEAD
              <Link to={`/product/${value.shop_id}/${value._id}`}>
=======
              {shop_id != null ?

                <Link href={`/product/${value.shop_id}/${value._id}`}>
                  <Product
                    name={value.name}
                    imageURL={value.image ? process.env.PUBLIC_URL + `/upload/images/${value.image.imgId}` : ""}
                    price={value.price}
                    description={value.description}
                  />
                </Link>
                :
>>>>>>> cc49bc45493d26d276331b8519647306f07b7b05
                <Product
                  name={value.name}
                  imageURL={value.image ? process.env.PUBLIC_URL + `/upload/images/${value.image.imgId}` : ""}
                  price={value.price}
                  description={value.description}
                />}
            </Box>
          ))
            : <h3>No products found</h3>
        }


      </Flex>
    </>
  )
}