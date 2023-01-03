import React from "react";
import { useRouter } from "next/router";

const productId = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product details {productId}</h1>
    </div>
  );
};

export default productId;
