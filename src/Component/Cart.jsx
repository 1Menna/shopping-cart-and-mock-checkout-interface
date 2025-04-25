import Viewitems from "./Viewitems";
const Cart = ({products , increment , decrement , Delete}) => {
    return (
        <div className="flex justify-evenly">
        {products.map((product,index)=>
            (
                <Viewitems product={product} increment={increment} decrement={decrement} Delete={Delete} key={index}/>
            )
        )}
        </div>
    );
};

export default Cart;