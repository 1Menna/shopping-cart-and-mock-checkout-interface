import Cart from "./Component/Cart.jsx";
import {useState } from 'react'
import {Header} from './Component/Header.jsx'
import {Routes,Route,useNavigate} from 'react-router-dom'
import CheckOut from "./Component/CheckOut.jsx";


const App = () => {
  let [products,setProducts] = useState(
    [
      {id:1 , src:'/public/product1.jpg' , price:100 , count:1 , subtotal:100},
      {id:2 , src:'/public/product2.jpg' , price:200 , count:1 , subtotal:200},
      {id:3 , src:'/public/product3.jpg' , price:300 , count:1 , subtotal:300},
    ]
  );
  let [TotalPaid,setTotalPaid] = useState(600);
  let [amount,setamount] = useState(3);

  // ===============================================
  const increment = (ID)=>{
    let updated_products = products.map((product)=>{
      if(product.id==ID){
        product.count++;
        product.subtotal=product.count*product.price;
        setTotalPaid(TotalPaid+=product.price);
        setamount(amount+1);
      }
      return product;
    });

    setProducts(updated_products);
  };
  // ===============================================
  const decrement = (ID)=>{
    let updated_products = products.map((product)=>{
      if(product.id==ID && product.count>1){
        product.count--;
        product.subtotal=product.count*product.price;
        setTotalPaid(TotalPaid-= product.price)
        if(amount-1>=0)setamount(amount-1);
      }
      return product;
    });

    setProducts(updated_products);
  };
  // ===============================================
  const Delete = (id) => {
    const productToDelete = products.find(product => product.id === id);
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setTotalPaid(prevTotal => prevTotal - (productToDelete?.price * productToDelete?.count || 0));
    setamount(amount-(productToDelete.count));
  };
  // ===============================================
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkOut');  
  };
  // ===============================================

  return(
    <>
    <Header amount={amount}/>
    <Cart products={products} increment={increment} decrement={decrement} Delete={Delete} />
    <Routes>
      <Route path="/CheckOut" element={<CheckOut/>}></Route>
    </Routes>
    <div className="flex justify-evenly mt-5">
        <span className=" mt-5 text-center text-5xl">  {TotalPaid === 0 ? "Empty Cart" : `Total Paid: ${TotalPaid}`}</span>
        <button className="btn btn-dash bg-red-400 btn-lg"onClick={handleCheckout} disabled={TotalPaid === 0}>
          CheckOut
        </button>
    </div>
    </>
  );
};

export default App;