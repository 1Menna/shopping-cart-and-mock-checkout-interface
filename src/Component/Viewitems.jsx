import React from 'react'

const Viewitems = ({product , increment}) => {
    return (
        <div className='flex justify-evenly bg-slate-500 text-gray-50 mb-3'>
        <span>name : {product.name}</span>
        <span>price : {product.price}</span>
        <span>count : {product.count}</span>
        <button className='btn bg-success' onClick={()=>increment(product.id)}>+</button>
        <button className='btn bg-warning'>-</button>
        <button className='btn bg-error'>Del</button>
        <span> total : 100</span>
        <br/>
        </div>
    )
}

export default Viewitems