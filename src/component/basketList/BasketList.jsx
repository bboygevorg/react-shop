import React from "react";
import BasketItem from "./basketItem/BasketItem";

const BasketList = (props) => {
    const {order = [],
           handleBasketShow = Function.prototype,
           removeToBasket = Function.prototype,
           incQuantity = Function.prototype,
           decQuantity = Function.prototype,
    } = props
    const totalPrice = order.reduce((sum, element) => {
        return sum + element.price * element.quantity
    }, 0);

    return (
        <>
            <ul className="collection basket-list">
                <li className="collection-item active">Корзина</li>
                {
                    order.length ? order.map((item, index) => {
                        return <BasketItem key={item.id}
                                           {...item}
                                           removeToBasket={removeToBasket}
                                           inqQuantity={incQuantity}
                                           decQuantity={decQuantity}
                        />
                    }) : <li className="collection-item">Корзина пуста</li>
                }
                <li className="collection-item active">Общая стоимость: {totalPrice}</li>
                <li className="collection-item">
                    <button className="btn-small">Оформить</button>
                </li>
                <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
            </ul>
        </>
    )

}

export default BasketList;