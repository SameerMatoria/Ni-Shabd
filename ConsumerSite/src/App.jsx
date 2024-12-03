import { useState } from 'react'
import { Button } from './components/ui/button'
import Home from './Pages/Home'
import ProductDetailsPage from './Pages/ProductDetailsPage '
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AboutPage from './Pages/AboutPage';
import BillingPage from './Pages/BillingPage';

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
      {/* <BillingPage/> */}
    </>
  )
}

export default App
