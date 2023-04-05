import { useRouter } from "next/router";
import React, { useEffect } from "react";
function UsescrollTop() {
  const page = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 0);
  }, [page]);
}

export default UsescrollTop;
