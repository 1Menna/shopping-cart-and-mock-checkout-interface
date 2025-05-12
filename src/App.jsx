import Cart from "./Component/Cart.jsx";
import {useState } from 'react'
import {Header} from './Component/Header.jsx'
import {Routes,Route,useNavigate} from 'react-router-dom'
import CheckOut from "./Component/CheckOut.jsx";


const App = () => {
  let [products,setProducts] = useState(
    [
      {id:1 , src:'/product1.jpg' , price:100 , count:1 , subtotal:100},
      {id:2 , src:'/product2.jpg' , price:200 , count:1 , subtotal:200},
      {id:3 , src:'/product3.jpg' , price:300 , count:1 , subtotal:300},
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
 
  // ===============================================

  return(
    <>
    <Header amount={amount}/>
    <Routes>
      <Route path="/" element={<Cart products={products} TotalPaid={TotalPaid}  increment={increment} decrement={decrement} Delete={Delete} />}></Route>
      <Route path="/CheckOut" element={<CheckOut/>}></Route>
    </Routes>
    
    </>
  );
};

export default App;