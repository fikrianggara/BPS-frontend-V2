import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
const carouselData = [
  {
    id: 1,
    icon_url: "/icon/ind_07.png",
    statistik: "Nilai Ekspor",
    nilai: "20 472,90",
    satuan: "Juta US$",
    tanggal: "Februari 2022",
  },
  {
    id: 2,
    icon_url: "/icon/ind_08.png",
    statistik: "Nilai Impor",
    nilai: "16 638,50",
    satuan: "Juta US$",
    tanggal: "Februari 2022",
  },
  {
    id: 3,
    icon_url: "/icon/ind_01.png",
    statistik: "Pertumbuhan Ekonomi",
    nilai: "5,02",
    satuan: "Perseb",
    tanggal: "Februari 2022",
  },

  {
    id: 4,
    icon_url: "/icon/ind_02.png",
    statistik: "Nilai Inflasi",
    nilai: "-0,02",
    satuan: "Persen",
    tanggal: "Februari 2022",
  },
  {
    id: 5,
    icon_url: "/icon/ind_03.png",
    statistik: "Persentase Penduduk Miskin",
    nilai: "9,71",
    satuan: "Persen",
    tanggal: "September 2021",
  },
  {
    id: 6,
    icon_url: "/icon/ind_04.png",
    statistik: "Gini Rasio",
    nilai: "0,38",
    satuan: "Persen",
    tanggal: "September 2021",
  },
  {
    id: 7,
    icon_url: "/icon/ind_07.png",
    statistik: "Nilai Ekspor",
    nilai: "20 472,90",
    satuan: "Juta US$",
    tanggal: "Februari 2022",
  },
  {
    id: 8,
    icon_url: "/icon/ind_08.png",
    statistik: "Nilai Impor",
    nilai: "16 638,50",
    satuan: "Juta US$",
    tanggal: "Februari 2022",
  },
  {
    id: 9,
    icon_url: "/icon/ind_01.png",
    statistik: "Pertumbuhan Ekonomi",
    nilai: "5,02",
    satuan: "Perseb",
    tanggal: "Februari 2022",
  },

  {
    id: 10,
    icon_url: "/icon/ind_02.png",
    statistik: "Nilai Inflasi",
    nilai: "-0,02",
    satuan: "Persen",
    tanggal: "Februari 2022",
  },
  {
    id: 11,
    icon_url: "/icon/ind_03.png",
    statistik: "Persentase Penduduk Miskin",
    nilai: "9,71",
    satuan: "Persen",
    tanggal: "September 2021",
  },
  {
    id: 12,
    icon_url: "/icon/ind_04.png",
    statistik: "Gini Rasio",
    nilai: "0,38",
    satuan: "Persen",
    tanggal: "September 2021",
  },
];
const CarouselCard = (props) => {
  return (
    <div className="h-full w-48 bg-white border-x-1 text-center flex flex-col justify-between p-4 border-x">
      <img
        src={props.icon_url}
        className="w-3/5 object-cover w-20 self-center"
      ></img>
      <h1 className="text-xl text-blue-700 font-medium">
        {props.statistik && props.statistik}
      </h1>
      <h2 className="text-2xl text-orange-500 font-medium">
        {props.nilai && props.nilai}
      </h2>
      <h3 className="text-lg text-gray-400">{props.satuan && props.satuan}</h3>
      <h4 className="text-lg text-gray-700">
        {props.tanggal && props.tanggal}
      </h4>
    </div>
  );
};
const LeftArrow = () => {
  return (
    <div className="self-center">
      <ChevronLeftIcon
        onClick={() =>
          document.getElementById("1").scrollIntoView({ behavior: "smooth" })
        }
        className="h-8 w-8 text-white rounded-full bg-cyan-600 "
      ></ChevronLeftIcon>
    </div>
  );
};
const RightArrow = () => {
  return (
    <div className="self-center">
      <ChevronRightIcon className="h-8 w-8 text-white rounded-full bg-cyan-600"></ChevronRightIcon>
    </div>
  );
};
const CarouselCards = () => {
  return (
    <>
      <div className="h-full flex gap-x-4">
        <LeftArrow></LeftArrow>
        <ul className="h-full rounded-lg px-4 flex justify-center snap-x overflow-auto">
          {carouselData.map((data) => (
            <li className="snap-center" id={data.id} key={data.id}>
              {CarouselCard(data)}
            </li>
          ))}
        </ul>
        <RightArrow></RightArrow>
      </div>
    </>
  );
};
const Carousel = () => {
  return (
    <div className="h-80 w-11/12 m-auto">
      <CarouselCards></CarouselCards>
    </div>
  );
};

export default Carousel;
