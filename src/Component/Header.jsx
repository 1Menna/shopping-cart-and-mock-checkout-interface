import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

export const Header = ({amount}) => {
  return (
  <div className="navbar bg-red-400 shadow-sm">
  {/*=============================================================*/}  
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Products</a>
  </div>
  {/*=============================================================*/}
  <div className="flex-none">
    <div><FaShoppingCart size={30}/></div>
    <div className='text-3xl'>{amount}</div>
  </div>
  {/*=============================================================*/}
</div>
  )
}
