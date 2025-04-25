import Product from "./Component/Product";
import {useState} from 'react'

const App = () => {
  let [products,setProducts] = useState(
    [
      {id:1 , name:'pepsi' , price:12 , count:1},
      {id:2 , name:'chpsi' , price:12 , count:1},
      {id:3 , name:'cola' , price:12 , count:1},
      {id:4 , name:'juice' , price:12 , count:1}
    ]
  );
  
  const increment = (ID)=>{
    let updated_products = products.map((product)=>{
      if(product.id==ID){
        product.count+=1;
      }
      return product;
    });

    setProducts(updated_products);
  };

  

  return(
    <>
    <Product products={products} increment={increment} />
    </>
  );
};

export default App;