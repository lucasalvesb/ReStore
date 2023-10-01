import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(data => setProducts(data))
}, [])

  function addProduct() {
    setProducts(prevState =>  [...prevState,
       {id: prevState.length + 101,
        name: 'product' + (prevState.length + 1), 
       price: (prevState.length * 100) + 100,
       brand: 'some brand',
       description: 'some description',
       pictureUrl: 'https://picsum.photos/200/300'
      }])
  }

  return (
    <>
      <Typography variant="h1">Re-Store</Typography> 
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
