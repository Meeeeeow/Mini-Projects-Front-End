import React from 'react'

export const TotalPrice = ({item_price = 0}) => {
    return (
        <div className="total">
            <div>Total Price</div>
            <div>{item_price.toFixed(2)} Tk</div>
        </div>
    )
}
