import React from 'react';

const Viewitems = ({ product, increment, decrement, Delete }) => {
    return (
        <div className="card bg-gray-100 shadow-2xl shadow-gray-800 w-full max-w-sm mx-auto">
            <figure className="p-4">
                <img src={product.src} alt={`Product ${product.id}`} className="w-full h-48 object-cover rounded" />
            </figure>
            <div className="card-body text-center px-4">
                <h2 className="text-xl font-semibold">Product {product.id}</h2>
                <p className="text-red-500">Count: {product.count}</p>
                <p>Price: ${product.price}</p>
                <p className="text-xl font-bold">SubTotal: ${product.subtotal}</p>

                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                    <button className="btn bg-green-700 text-white px-4 py-2 rounded" onClick={() => increment(product.id)}>Add</button>
                    <button className="btn bg-amber-700 text-white px-4 py-2 rounded" onClick={() => decrement(product.id)}>Remove</button>
                    <button className="btn bg-red-700 text-white px-4 py-2 rounded" onClick={() => Delete(product.id)}>Del</button>
                </div>
            </div>
        </div>
    );
};

export default Viewitems;
