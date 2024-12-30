import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const storedCart = localStorage.getItem("cart")
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const cartCount = () => {
            const quantities = cart.map((item) => item.quantity);
            const sum = quantities.reduce((acc, curr) => acc + curr, 0);
            setCount(sum);
        }
        const cartTotalPrice = () => {
            const prices = cart.map((item) => item.price * item.quantity);
            const sum = prices.reduce((acc, curr) => acc + curr, 0);
            setTotalPrice(sum);
        }
        cartCount();
        cartTotalPrice();
    }, [cart])

    const addToCart = (newProduct) => {
        const existingProduct = cart.find((item) => item.id === newProduct.id);
        if (existingProduct) {
            const updated = cart.filter((item) => {
                if(item.id === existingProduct.id) {
                    return {...existingProduct, quantity: existingProduct.quantity++};
                }
                else {
                    return item;
                }
            });
            setCart(updated);
        }
        else {
            setCart([...cart, {...newProduct,  quantity: 1}]);

        }
    };

    //decrement function
    const decrement = (product) => {
        console.log(product);
        if(product.quantity > 1) {
            const updated = cart.filter((item) => {
                if(item.id === product.id) {
                    return {...product, quantity: product.quantity--};
                }
            })
            setCart(updated);
        }
    }

    //increment
    const increment = (product) => {
        console.log(product);
            const updated = cart.filter((item) => {
            if(item.id === product.id) {
                    return {...product, quantity: product.quantity--};
            }
            else {
                return item;
            }
        })
            setCart(updated);
    }

    const removeFromCart = (id) => {
        const updated = cart.filter((item) => item.id !== id);
        setCart(updated);
    }

    return (
        <CartContext.Provider
        value={{
            cart,
            setCart,
            count,
            setCount,
            totalPrice,
            setTotalPrice,
            addToCart,
            removeFromCart,
            decrement,
            increment,
    }}
    >
    {children}
    </CartContext.Provider>
)
}

