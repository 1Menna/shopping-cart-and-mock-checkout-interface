import React from 'react';

const CheckOut = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden border">
      <div className="bg-gray-300 p-6 border-b">
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>
        {/*________________________________________________*/}
        <div className="mb-3">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Product 1</p>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
            </div>
            <p className="font-semibold">$200</p>
          </div>
        </div>
        {/*________________________________________________*/}
        <div className="mb-3">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Product 2</p>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
            </div>
            <p className="font-semibold">$120</p>
          </div>
        </div>
        {/*________________________________________________*/}
        <div className="border-t pt-3 flex justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">$320</p>
        </div>
        {/*________________________________________________*/}
      </div>
      {/*==================================================================================*/}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Credit Card Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-500 block mb-1">Card Holder</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Card Holder"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 block mb-1">Expiration Date</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="w-1/2 border rounded px-3 py-2 focus:outline-none"
                placeholder="MM"
              />
              <input
                type="text"
                className="w-1/2 border rounded px-3 py-2 focus:outline-none"
                placeholder="YY"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-500 block mb-1">Card Number</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              placeholder="Card Number"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 block mb-1">CVC</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              placeholder="CVC"
            />
          </div>
        </div>
        {/*==================================================================================*/}
        <button className="w-full bg-red-400 text-white py-2 rounded transition">
          Proceed
        </button>
        {/*==================================================================================*/}
      </div>
    </div>
  );
};

export default CheckOut;


 