import { useState, useEffect } from "react"
import Products from './components/Products/Products'
import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"

const dummy_products = [
    {
      id: "p1",
      name: "EGR Valve",
      description: "exhaust gas recirculation",
      price: 110.7,
      category: 'engine'
    },
    {
      id: "p2",
      name: "DPF",
      description: "diesel particulate filter",
      price: 790,
      category: 'filter'
    },
    {
      id: "p3",
      name: "Clutch",
      description: "clucth kits",
      price: 180.5,
      category: 'gearbox'
    },
    {
      id: 'p4',
      name: 'Oil filter',
      description: 'Engine oil filter',
      price: 5.70,
      category: 'filter'
    }
]

const App = () => {
    const [availableProducts, setAvailableProducts] = useState([])

    const [cart, setCart] = useState([])
    const [cartIsShow, setCartIsShow] = useState(false)

    useEffect(() => {
      setAvailableProducts(dummy_products)
    }, [])

    const addProductToCart = (product) => {
       const existingCartProduct = cart.find(item => item.id === product.id)
    
       if(existingCartProduct) {
            
            setCart(cart.map((item) => item.id === existingCartProduct.id ? {...item, amount: existingCartProduct.amount + 1} : item))
       } else {
            setCart([...cart, product])
       }
        
    }

    const removeProductFromCart = (id) => {
        const existingCartProduct = cart.find((item) => item.id === id)

        if(existingCartProduct.amount === 1) {
            setCart(cart.filter((item) => item.id !== id))
        } else {
            setCart(cart.map((item) => item.id === id ? {...item, amount: existingCartProduct.amount - 1} : item))
        }
    }
    
    const showCartHandler = () => {
        setCartIsShow((prevState) => !prevState)
    }
    
    return (
      <Layout cart={cart} onShow={showCartHandler}>
          {cartIsShow && <Cart cart={cart} onRemove={removeProductFromCart} onAdd={addProductToCart} />}
          <Products products={availableProducts} onAdd={addProductToCart} />
      </Layout>     
    )
}

export default App