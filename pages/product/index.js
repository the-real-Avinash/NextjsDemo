import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router';

const index = () => {
  const router = useRouter();
  const handleClick = () =>{
    console.log("placing your order");
    router.push('/')
  }
  return (
    <div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/product/1">
        <h1>Product 1</h1>
      </Link>
      <Link href="/product/2">
        <h1>Product 2</h1>
      </Link>
      <Link href="/product/3">
        <h1>Product 3</h1>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default index;
