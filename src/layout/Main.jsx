import React from "react";
import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import Preloader from "../component/Preloader";
import GoodsList from "../component/goodList/GoodsList";
import axios from "axios";
import Cart from "../component/Cart";
import BasketList from "../component/basketList/BasketList";
import Alert from "../component/Alert";

const Main = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(() => {
        axios.get(API_URL, {
            headers:{
                'Authorization' : API_KEY,
            }
        }).then((response) => {
             setGoods(response.data.featured)
            setLoading(false)
        })

    }, []);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return  orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name)
    };

    const removeToBasket = (itemId) => {
        const newOrder = order.filter(element => element.id !== itemId)
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map(element => {
            if (element.id === itemId) {
                const newQuantity = element.quantity + 1;
                return {
                    ...element,
                    quantity: newQuantity,
                }
            } else {
                return element;
            }
        });
        setOrder(newOrder)
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map(element => {
            if (element.id === itemId) {
                const newQuantity = element.quantity - 1;
                return {
                    ...element,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
        } else {
                return element;
            }
        });
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setAlertName('');
    }

    return (
        <>
            <div className="container content">
                <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
                {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
                {isBasketShow && <BasketList order={order}
                                             handleBasketShow={handleBasketShow}
                                             removeToBasket={removeToBasket}
                                             incQuantity={incQuantity}
                                             decQuantity={decQuantity}
                />}
                {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
            </div>
        </>
    )
}

export default Main;