import React from "react";
import SearchForm from "../components/SearchForm";

const Hero = () => {
  //
  return (
    <div className="h-[450px] bg-[url('../public/bg01.png')] object-fit object-left w-screen rounded-b-2xl relative m-auto items-center justify-center">
      <div className="h-[400px] flex flex-col items-center justify-center w-[50%] m-auto gap-y-8">
        <div>
          <h1 className="text-xl text-white font-medium">
            Apa yang ingin anda cari hari ini?
          </h1>
        </div>
        <div className="w-2/3">
          <SearchForm></SearchForm>
        </div>

        <div className="text-white">
          Kunjungi{" "}
          <a href="#" className="underline font-bold">
            Pelayanan Statistik Terpadu BPS
          </a>
        </div>
      </div>
      <div className="lg:h-24 flex flex-col lg:flex-row justify-between w-10/12 gap-y-4 lg:gap-y-0 lg:gap-x-8 m-auto">
        <a
          href="#"
          className="h-24 bg-[url('../public/banner_01.png')] object-cover rounded-lg w-full shadow hover:shadow-lg hover:shadow-blue-400 duration-300 ease-in-out"
        ></a>
        <a
          href="#"
          className="h-24 bg-[url('../public/banner_02.png')] object-cover rounded-lg w-full shadow hover:shadow-lg duration-300 ease-in-out"
        ></a>
      </div>
    </div>
  );
};

export default Hero;
