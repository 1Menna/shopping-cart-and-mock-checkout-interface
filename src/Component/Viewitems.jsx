import React from 'react'

const Viewitems = ({product , increment , decrement, Delete}) => {
    return (
        //============================================
        <div className="card max-w-2xl bg-gray-400 w-80">
            <figure>
                <img src={product.src} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <div className='text-3xl text-center '>Product {product.id}</div>
                <p className='text-red-500'>Count : {product.count} </p>
                <p > price : {product.price}$ </p>
                <p className='text-3xl'>SubTotal : {product.subtotal}$ </p>
                <br />
                <div className="flex justify-between">
                     <button className='btn bg-success' onClick={()=>increment(product.id)}>Add</button>               
                     <button className='btn bg-warning' onClick={()=>decrement(product.id)}>remove</button>               
                     <button className='btn bg-error' onClick={()=>Delete(product.id)}>Del</button>               
                </div>
            </div>
        </div>
        // =============================================
    )
}

export default Viewitems