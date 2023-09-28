import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
  {name: 'product1', price: 1},
  {name: 'product2', price: 2},
]);

useEffect(() => {
  fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(data => setProducts(data))
}, [])

  function addProduct() {
    setProducts(prevState =>  [...prevState, {name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
  }

  return (
    <div>
      <h1>Re-Store</h1> 
      <ul>
        {products.map(item => (
          <li key={item.name}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
