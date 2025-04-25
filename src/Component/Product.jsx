import Viewitems from "./Viewitems";
const Product = ({products , increment}) => {
    return (
        <div>
        {products.map((product,index)=>
            (
                <Viewitems product={product} increment={increment} key={index}/>
            )
        )}
        </div>
    );
};

export default Product;