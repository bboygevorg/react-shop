import React from "react";
import GoodsItem from "./goodsItem/GoodsItem";

const GoodsList = (props) => {
    const {goods = [], addToBasket = Function.prototype} = props;

    return (
        <>
            <div className="goods">
                {goods.map((item, index) => {
                    return <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
                })}
            </div>
        </>
    )

}

export default GoodsList;