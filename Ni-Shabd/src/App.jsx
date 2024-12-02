import { useState } from 'react'
import { Button } from './Customer Comp/ui/button'
import Home from './Consumer Pages/Home'
import ProductDetailsPage from './Consumer Pages/ProductDetailsPage '
import LoginPage from './Consumer Pages/LoginPage';
import SignUpPage from './Consumer Pages/SignUpPage';
import AboutPage from './Consumer Pages/AboutPage';

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
      <Home />
      {/* <ProductDetailsPage product={product} /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <AboutPage/> */}
    </>
  )
}

export default App
