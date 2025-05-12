import React from 'react'

const Viewitems = ({product , increment , decrement, Delete}) => {
    return (
         //============================================
<div className="card bg-gray-400 w-60"> {/* Reduced width from w-80 to w-60 */}
    <figure>
        <img src={product.src} alt="Shoes" className="h-32 object-cover" /> {/* Added fixed height */}
    </figure>
    <div className="card-body text-center p-4"> {/* Added padding control */}
        <div className='text-xl text-center'>Product {product.id}</div> {/* Reduced text size */}
        <p className='text-red-500 text-sm'>Count : {product.count} </p> {/* Smaller text */}
        <p className='text-sm'> price : {product.price}$ </p> {/* Smaller text */}
        <p className='text-xl'>SubTotal : {product.subtotal}$ </p> {/* Reduced from text-3xl */}
        <div className="flex justify-between mt-2"> {/* Added margin top */}
            <button className='btn bg-success btn-sm' onClick={()=>increment(product.id)}>Add</button> {/* Added btn-sm */}           
            <button className='btn bg-warning btn-sm' onClick={()=>decrement(product.id)}>remove</button> {/* Added btn-sm */}           
            <button className='btn bg-error btn-sm' onClick={()=>Delete(product.id)}>Del</button> {/* Added btn-sm */}           
        </div>
    </div>
</div>
// =============================================
    )
}

export default Viewitems