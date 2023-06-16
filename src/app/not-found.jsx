import React from "react";
import styles from "./styles/common.module.css";
import Link from "next/link";
const NotFound = () => {
  return (
    <section className="flex justify-center items-center">
      <div className=" w-full h-[60vh] ml-[600px] mt-72">
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find the requested page(Content)</p>
        <Link href={"/"}>
          <button>Go to Home Page</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
