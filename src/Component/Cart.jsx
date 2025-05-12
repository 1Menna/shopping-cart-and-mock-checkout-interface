import Viewitems from "./Viewitems";
import CheckOut from "./CheckOut.jsx";
import { useNavigate } from 'react-router-dom';

const Cart = ({ products, TotalPaid, increment, decrement, Delete }) => {
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checkOut', { state: { TotalPaid, products } });
    };

    return (
        <div className="flex flex-col items-center px-4 py-6">
            <div className="flex gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product, index) => (
                    <Viewitems
                        product={product}
                        increment={increment}
                        decrement={decrement}
                        Delete={Delete}
                        key={index}
                    />
                ))}
            </div>

            <div className="mt-10 text-center">
                <span className="block text-3xl sm:text-2xl lg:text-3xl mb-4">
                    {TotalPaid === 0 ? "Empty Cart" : `Total Paid: $${TotalPaid}`}
                </span>
                <button
                    className="btn bg-red-400 text-white px-6 py-3 rounded disabled:opacity-50"
                    onClick={handleCheckout}
                    disabled={TotalPaid === 0}
                >
                    CheckOut
                </button>
            </div>
        </div>
    );
};

export default Cart;
