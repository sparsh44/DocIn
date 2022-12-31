import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="flex justify-center align-center text-6xl mt-10 ">verifyMe</div>
      <div className="flex w-screen h-screen justify-center align-center">
        <Link href="./Customer">
          <div className="space-x-2 justify-center align-center mt-72">
            <button
              type="button"
              className="px-16 py-10 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login As Customer
            </button>
          </div>
        </Link>
        <Link href="./Admin">
          <div className="space-x-2 justify-center mt-72 ml-20">
            <button
              type="button"
              className="inline-block px-16 py-10 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login As Admin
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
