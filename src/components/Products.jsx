import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useEffect, useState } from "react"
import axios from "axios"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({cat, filter, sort}) => {

  const apiUrl = process.env.API_URL

  //console.log(cat,filter,sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
 

  useEffect(() => {

    const getProducts = async () => {
      try{
        const res = await axios.get(
          cat ? `http://${apiUrl}/products?category=${cat}` : `http://${apiUrl}/products`);
          const  newProducts = Object.values(res.data);
          setProducts(newProducts[0]);
          console.log(products);
      }catch(err){}
    };
    getProducts();

  } , [cat]); //this means "when the cxategory changes just run this function"

  

  //const newProducts = products[0]; //**methaninui hadune array ekethibba awla mekedi kale product.map is not a function kiyla watuna, e wateddi console.log ekn bluwa console ekt gihilla product eka array ekkd nadda kiyla . product eka array ekek wenne nha mokd api eken fetch wenne objcet ekak eka useState ekedi products array ekt watunam products array ekath automa object ekk wenwa . e hinda product array ekata object ekan ena dewal array ekak widiyt argena damma arrays dekk enwa product ekat. ekak awilla prototype kiyla ekak anika apita one krna detail thiyna oject eka.eken product[0] thamai apita one detail thiynne. eka aran damma newProducts array ekt. e newProducts array eka use kra items tika render krgnna gann
  console.log(products)
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key]?.includes(value)
          )
        )
      );
  }, [products, cat, filter]);

  //console.log(Object.keys(filter));

  useEffect(() => {
    if((sort === "newest")){
      setFilteredProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt))
    } else if((sort === "asc")) {
      setFilteredProducts(prev => [...prev].sort((a,b) => a.price - b.price))
    }else{
      setFilteredProducts(prev => [...prev].sort((a,b) => b.price - a.price))
    }
  } , [sort]);


  
  console.log(filteredProducts)
  return (
    <Container>
      {cat && filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {!cat && Array.isArray(products) && products.slice(0, 15).map((item) => (
        <Product item={item} key={item._id} />
      ))}

      {/* {filteredProducts.map((item) => (
        <Product item = {item} key = {item.id}/>
      ) )}  "this was used for debugging purposes" */}
    </Container>
  )
}

export default Products
