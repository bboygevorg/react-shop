import React from "react";

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeToBasket,
        inqQuantity,
        decQuantity,
    } = props;

    return (
        <>
            <li className="collection-item">
                {name} <i className="material-icons basket-quantity" onClick={() => {decQuantity(id)}}>remove</i>X{quantity}{' '}<i className="material-icons basket-quantity" onClick={() => {inqQuantity(id)}}>add</i> = {price * quantity} руб.
                <span className="secondary-content"><i className="material-icons basket-delete" onClick={() => removeToBasket(id)}>close</i></span>
            </li>
        </>
    )
}

export default BasketItem;