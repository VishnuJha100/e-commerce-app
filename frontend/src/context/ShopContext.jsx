import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 100;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState('true');
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async(itemId) => {
        let cartData = structuredClone(cartItems);
        
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
    
        setCartItems(cartData);
    }
    
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            try {
                if (cartItems[itemId] > 0) {
                    totalCount += cartItems[itemId];
                }
            } catch (error) {
                console.error(error);
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            
            try {
                if (cartItems[itemId] > 0) {
                    totalAmount += itemInfo.price * cartItems[itemId];
                }
            } catch (error) {
                console.error(error);
            }
        }
    
        return totalAmount;
    }
    
    
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
