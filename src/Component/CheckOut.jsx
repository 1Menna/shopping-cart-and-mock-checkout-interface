import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from '@material-tailwind/react';

const CheckOut = () => {
  const location = useLocation();
  const TotalPaid = location.state?.TotalPaid || 0;
  const products = location.state?.products || [];

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <>
      {/* Checkout Form */}
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden border">
        <div className="bg-gray-300 p-6 border-b">
          <h2 className="text-xl font-semibold mb-4">Checkout</h2>

          {/* Product List */}
          {products.map((product, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">Product {product.id}</p>
                  <p className="text-sm text-gray-500">count: {product.count}</p>
                </div>
                <p className="font-semibold">${product.subtotal}</p>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="border-t pt-3 flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">${TotalPaid}</p>
          </div>
        </div>

        {/* Credit Card Form */}
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

          {/* Proceed Button */}
          <button
            onClick={handleDialogOpen}
            className="w-full bg-red-400 text-white py-2 rounded transition"
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Centered Dialog */}
      <Dialog open={dialogOpen} handler={handleDialogClose} size="md">
        <DialogHeader>Confirm Payment</DialogHeader>
        <DialogBody>
          You're about to pay <strong>${TotalPaid}</strong> for{' '}
          <strong>{products.length}</strong> items.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleDialogClose}
            className="mr-1"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleDialogClose();
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CheckOut;
