import { useState } from 'react'
import { Button } from './components/ui/button'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage '

function App() {
  const [count, setCount] = useState(0);
  const product = {
    image: "https://via.placeholder.com/400",
    name: "Fresh Organic Tomatoes",
    description:
      "High-quality organic tomatoes sourced from local farms. Perfect for your daily cooking needs.",
    price: 4.99,
  };

  return (
    <>
    {/* <Home /> */}
    <ProductDetailsPage product={product} />
    </>
  )
}

export default App
