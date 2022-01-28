import React from 'react';
import Image from 'next/image';
import Camera from "../images/camera.jpg"
import Flask from "../images/flask.jpg"
import Redlabel from "../images/redlabel.jpg"
import Shoes from "../images/shoes.jpg"
import Cocacola from "../images/cocacola.jpg"
import Headphone from "../images/headphone.jpg"

import Fullstar from "../images/star.svg"
import Emptystar from "../images/star-no-fill.svg"
import Halfstar from "../images/star-half-fill.svg"
import Eye from "../images/eye.svg"
import Heart from "../images/love.svg"
const productCard = () => {
  return (
    <div className="flex flex-wrap md:h-full  m-5   items-center  justify-center gap-10 ">
  <div className ="card ">
  <Image
  className ="  object-cover"
  src ={Camera}
  width={1200}
  height={800}
  alt ="camera photo"
  />
  <div className="p-5 flex flex-col gap-3">
    {/* badge */}
    <div className=" flex items-center gap-2">
    <span className="badge"> stock ready</span>
   <span className="badge"> official store</span>
    </div> 
    {/* product title  */}
    <h2 className="product-title">
    Best Camera
    </h2>
    {/* product price */}
    <div>
    <span className="text-xl font-semibold">
    Ksh. 4000
    </span>
    <div className="flex items-center gap-2 mt-1">
    <span  className="text-sm line-through opacity-50">  
    Ksh. 5000
    </span>
    <span className="discount-percentage">
    save 10%
    </span>
    </div>
    </div>
{/* product rating */}

<span className="flex items-center mt-1">
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Emptystar} alt="star" />
<span className="text-xs ml-2 text-gray-500 " >
 20K views
</span>
</span>
{/* action button */}
<div className=" mt-5 flex gap-2">
<button className="button-primary button-gradient">
Add to cart
</button>
<button className="button-icon">
<Image 
src={Heart}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
<button className="button-icon">
<Image 
src={Eye}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
</div>
  </div>
  </div> 
  {/* second card  */}


  <div className ="card ">
  <Image
  className =" object-cover"
  src ={Flask}
    width={1200}
  height={800}
  alt ="camera photo"
  />
  <div className="p-5 flex flex-col gap-3">
    {/* badge */}
    <div className=" flex items-center gap-2">
    <span className="badge"> stock ready</span>
   <span className="badge"> official store</span>
    </div> 
    {/* product title  */}
    <h2 className="product-title">
    Flask
    </h2>
    {/* product price */}
    <div>
    <span className="text-xl font-semibold">
    Ksh. 4000
    </span>
    <div className="flex items-center gap-2 mt-1">
    <span  className="text-sm line-through opacity-50">  
    Ksh. 5000
    </span>
    <span className="discount-percentage">
    save 10%
    </span>
    </div>
    </div>
{/* product rating */}

<span className="flex items-center mt-1">
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Emptystar} alt="star" />
<span className="text-xs ml-2 text-gray-500 " >
 20K views
</span>
</span>
{/* action button */}
<div className=" mt-5 flex gap-2">
<button className="button-primary bg-green-700 hover:bg-green-400">
Add to cart
</button>
<button className="button-icon">
<Image 
src={Heart}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
<button className="button-icon">
<Image 
src={Eye}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
</div>
  </div>
  </div> 
  {/* third card  */}
  <div className ="card ">
  <Image
  className =" object-cover"
  src ={Redlabel}
    width={1200}
  height={800}
  alt ="camera photo"
  />
  <div className="p-5 flex flex-col gap-3">
    {/* badge */}
    <div className=" flex items-center gap-2">
    <span className="badge"> stock ready</span>
   <span className="badge"> official store</span>
    </div> 
    {/* product title  */}
    <h2 className="product-title">
    Red Label
    </h2>
    {/* product price */}
    <div>
    <span className="text-xl font-semibold">
    Ksh. 4000
    </span>
    <div className="flex items-center gap-2 mt-1">
    <span  className="text-sm line-through opacity-50">  
    Ksh. 5000
    </span>
    <span className="discount-percentage">
    save 10%
    </span>
    </div>
    </div>
{/* product rating */}

<span className="flex items-center mt-1">
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Emptystar} alt="star" />
<span className="text-xs ml-2 text-gray-500 " >
 20K views
</span>
</span>
{/* action button */}
<div className=" mt-5 flex gap-2">
<button className="button-primary bg-black hover:bg-red-900">
Add to cart
</button>
<button className="button-icon">
<Image 
src={Heart}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
<button className="button-icon">
<Image 
src={Eye}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
</div>
  </div>
  </div>  
  {/* forth card */}
  <div className ="card ">
  <Image
  className =" object-cover"
  src ={Shoes}
    width={1200}
  height={800}
  alt ="camera photo"
  />
  <div className="p-5 flex flex-col gap-3">
    {/* badge */}
    <div className=" flex items-center gap-2">
    <span className="badge"> stock ready</span>
   <span className="badge"> official store</span>
    </div> 
    {/* product title  */}
    <h2 className="product-title">
    Shoes
    </h2>
    {/* product price */}
    <div>
    <span className="text-xl font-semibold">
    Ksh. 4000
    </span>
    <div className="flex items-center gap-2 mt-1">
    <span  className="text-sm line-through opacity-50">  
    Ksh. 5000
    </span>
    <span className="discount-percentage">
    save 10%
    </span>
    </div>
    </div>
{/* product rating */}

<span className="flex items-center mt-1">
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Emptystar} alt="star" />
<span className="text-xs ml-2 text-gray-500 " >
 20K views
</span>
</span>
{/* action button */}
<div className=" mt-5 flex gap-2">
<button className="button-primary bg-gray-500 hover:bg-gray-600">
Add to cart
</button>
<button className="button-icon">
<Image 
src={Heart}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
<button className="button-icon">
<Image 
src={Eye}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
</div>
  </div>
  </div>  
  {/* fifth card */}
  <div className ="card ">
  <Image
  className =" object-cover"
  src ={Headphone}
    width={1200}
  height={800}
  alt ="camera photo"
  />
  <div className="p-5 flex flex-col gap-3">
    {/* badge */}
    <div className=" flex items-center gap-2">
    <span className="badge"> stock ready</span>
   <span className="badge"> official store</span>
    </div> 
    {/* product title  */}
    <h2 className="product-title">
    Headphone
    </h2>
    {/* product price */}
    <div>
    <span className="text-xl font-semibold">
    Ksh. 4000
    </span>
    <div className="flex items-center gap-2 mt-1">
    <span  className="text-sm line-through opacity-50">  
    Ksh. 5000
    </span>
    <span className="discount-percentage">
    save 10%
    </span>
    </div>
    </div>
{/* product rating */}

<span className="flex items-center mt-1">
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Emptystar} alt="star" />
<span className="text-xs ml-2 text-gray-500 " >
 20K views
</span>
</span>
{/* action button */}
<div className=" mt-5 flex gap-2">
<button className="button-primary bg-yellow-400 hover:bg-yellow-500">
Add to cart
</button>
<button className="button-icon">
<Image 
src={Heart}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
<button className="button-icon">
<Image 
src={Eye}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
</div>
  </div>
  </div>  
  {/* sixth card */}
  <div className ="card ">
  <Image
  className =" object-cover"
  src ={Cocacola}
    width={1200}
  height={800}
  alt ="camera photo"
  />
  <div className="p-5 flex flex-col gap-3">
    {/* badge */}
    <div className=" flex items-center gap-2">
    <span className="badge"> stock ready</span>
   <span className="badge"> official store</span>
    </div> 
    {/* product title  */}
    <h2 className="product-title">
    Cocacola
    </h2>
    {/* product price */}
    <div>
    <span className="text-xl font-semibold">
    Ksh. 4000
    </span>
    <div className="flex items-center gap-2 mt-1">
    <span  className="text-sm line-through opacity-50">  
    Ksh. 5000
    </span>
    <span className="discount-percentage">
    save 10%
    </span>
    </div>
    </div>
{/* product rating */}

<span className="flex items-center mt-1">
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Fullstar} alt="star" />
<Image src ={Emptystar} alt="star" />
<span className="text-xs ml-2 text-gray-500 " >
 20K views
</span>
</span>
{/* action button */}
<div className=" mt-5 flex gap-2">
<button className="button-primary bg-black hover:bg-red-700">
Add to cart
</button>
<button className="button-icon">
<Image 
src={Heart}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
<button className="button-icon">
<Image 
src={Eye}
alt ="add to wishlist"
className="opacity-1"
/>
</button>
</div>
  </div>
  </div>  
  </div>
  )};

export default productCard;
