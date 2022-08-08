import React, { useState, useEffect } from "react";
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
    <div className="h-full w-48 border-x-1 border-gray-300 hover:border-blue-900 duration-200 ease-in-out text-center flex flex-col justify-between p-4 border-x">
      <img
        src={props.icon_url}
        className="w-3/5 object-cover w-20 self-center"
      ></img>
      <h1 className="text-xl text-blue-800 font-bold">
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
export const LeftArrow = (props) => {
  return (
    <div className="self-center " onClick={props.onClickCallback}>
      <ChevronLeftIcon className="h-8 w-8 shadow-lg text-white rounded-full bg-cyan-600 hover:bg-cyan-800 duration-200 ease-in-out hover:cursor-pointer"></ChevronLeftIcon>
    </div>
  );
};

export const RightArrow = (props) => {
  return (
    <div className="self-center " onClick={props.onClickCallback}>
      <ChevronRightIcon className="h-8 w-8 shadow-lg text-white rounded-full bg-cyan-600 hover:bg-cyan-800 duration-200 ease-in-out hover:cursor-pointer"></ChevronRightIcon>
    </div>
  );
};
const CarouselCards = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const itemLength = carouselData.length;
  const handleArrowClick = (direction) => {
    if (direction === "left") {
      if (slideIndex === 0) {
        setSlideIndex(itemLength - 1);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    } else {
      if (slideIndex === itemLength - 6) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }
  };

  return (
    <>
      <div className="h-full w-full flex gap-x-4">
        <LeftArrow onClickCallback={() => handleArrowClick("left")}></LeftArrow>
        <ul className="h-full rounded-lg flex px-4 snap-x overflow-x-hidden">
          {carouselData.map((data) => (
            <li
              className="snap-center duration-200 ease-in-out"
              id={data.id}
              key={data.id}
              style={{
                transform: `translateX(${slideIndex * -100}%)`,
              }}
            >
              {CarouselCard(data)}
            </li>
          ))}
        </ul>
        <RightArrow
          onClickCallback={() => handleArrowClick("right")}
        ></RightArrow>
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
