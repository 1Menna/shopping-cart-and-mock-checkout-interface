import Viewitems from "./Viewitems";
import CheckOut from "./CheckOut.jsx";
import {useNavigate} from 'react-router-dom'
const Cart = ({products , TotalPaid , increment , decrement , Delete}) => {
    const navigate = useNavigate();
    const handleCheckout = () => {
         navigate('/checkOut');  
    };
    return (
        <div className="flex justify-evenly">
        {products.map((product,index)=>
            (
                <Viewitems product={product} increment={increment} decrement={decrement} Delete={Delete} key={index}/>
            )
        )}
        <div className="flex flex-col justify-evenly mt-5">
            <span className=" mt-5 text-center text-5xl">  {TotalPaid === 0 ? "Empty Cart" : `Total Paid: ${TotalPaid}`}</span>
            <button className="btn btn-dash bg-red-400 btn-lg"onClick={handleCheckout} disabled={TotalPaid === 0}>
                CheckOut
            </button>
        </div>
        </div>
        
    );
};

export default Cart;