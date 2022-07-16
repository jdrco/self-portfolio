import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="meat flex items-center flex-col">
      <div className="grid grid-cols-4 grid-rows-3 gap-3 sm:gap-7 w-full">
        <div className="card h-50 row-span-2 col-span-2 square"></div>
        <div className="card h-auto row-span-2 col-span-2"></div>
        <div className="card h-auto col-span-2"></div>
        <div className="card h-auto col-span-1"></div>
        <div className="card h-auto col-span-1"></div>
      </div>
    </div>
  );
}
