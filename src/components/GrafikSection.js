import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { RightArrow, LeftArrow } from "../components/Carousel";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options1 = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Nilai Ekspor kuartal 1 dan 2 Periode 2021",
    },
  },
};

export const options2 = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Nilai Import kuartal 1 dan 2 Periode 2021",
    },
  },
};
export const options3 = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Laju Inflasi kuartal 1 dan 2 Periode 2021",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data1 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [80, 30, 56, 0, 40, 69, 90],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const data2 = {
  labels,
  datasets: [
    {
      label: "Dataset 3",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 4",
      data: [30, 10, 20, 0, 30, 80, 100],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const data3 = {
  labels,
  datasets: [
    {
      label: "Dataset 5",
      data: [50, 35, 70, 50, 65, 80, 90],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const data = [data1, data2];
const GrafikSection = () => {
  const [isGraphExpand, setIsGraphExpand] = useState(false);
  const [graphTabPanel, setGraphTabPanel] = useState("");
  const [graphSlideIndex, setGraphSlideIndex] = useState(0);
  const itemLength = data.length;
  function onArrowClickHandler(direction) {
    console.log("direction", direction, "clicked");
    if (direction === "left") {
      if (graphSlideIndex === 0) {
        setGraphSlideIndex(itemLength - 1);
      } else {
        setGraphSlideIndex(graphSlideIndex - 1);
      }
    } else {
      setGraphSlideIndex(0);

      if (graphSlideIndex === itemLength) {
      } else {
        setGraphSlideIndex(graphSlideIndex + 1);
      }
    }
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="h-fit w-full bg-blue-400">
      <div
        className={classNames(
          isGraphExpand ? "" : "",
          "bg-blue-900 py-2 duration-1000 ease-in-out"
        )}
      >
        <div className="w-11/12 m-auto duration-200 ease-in-out">
          <div className="flex w-full justify-between text-white items-center">
            <h1 className="font-regular text-3xl">Grafik</h1>
            <ChevronDownIcon
              className={classNames(
                isGraphExpand ? "rotate-180 " : "",
                "w-8 h-8 duration-200 ease-in-out rounded-full p-1 hover:cursor-pointer hover:bg-blue-900"
              )}
              onClick={() => setIsGraphExpand((prev) => !prev)}
            />
          </div>
          {isGraphExpand && (
            <div className="bg-white rounded-2xl h-fit m-auto text-center justify-center my-4 p-4 px-8 flex">
              {/* {grafik section start} */}
              <LeftArrow
                onClickCallback={() => onArrowClickHandler("left")}
              ></LeftArrow>
              <div className="h-[500px] flex m-auto items-center overflow-x-hidden gap-x-4 justify-between">
                <Line
                  data={data1}
                  options={options1}
                  className="snap-center duration-200 ease-in-out"
                  style={{
                    transform: `translateX(${graphSlideIndex * -100}%)`,
                    height: "100%",
                    position: "relative",
                  }}
                />
                <Line
                  data={data2}
                  options={options2}
                  className="snap-center duration-200 ease-in-out"
                  style={{
                    transform: `translateX(${graphSlideIndex * -100}%)`,
                    height: "100%",
                    position: "relative",
                  }}
                />
                <Line
                  data={data3}
                  options={options3}
                  className="snap-center duration-200 ease-in-out"
                  style={{
                    transform: `translateX(${graphSlideIndex * -100}%)`,
                    height: "100%",
                    position: "relative",
                  }}
                />
              </div>
              <RightArrow
                onClickCallback={() => onArrowClickHandler("right")}
              ></RightArrow>
              {/* grafik section end */}
            </div>
          )}
        </div>
      </div>
      <div className="bg-[url('../public/bg02.png')] h-fit w-full object-cover">
        <div className="w-11/12 flex flex-col gap-y-8 m-auto py-8">
          <h2 className="text-3xl text-white font-medium text-center">
            INFORMASI TERBARU
          </h2>
          <div className="h-[600px] w-full bg-white rounded-xl">tabPanel</div>
          <div className="h-20 w-full bg-blue-800 rounded-xl items-center text-white flex justify-between p-8">
            <h3 className="text-xl font-medium">Jadwal Jumpa Pers:</h3>
            <h3 className="text-2xl font-bold">
              15 Juni 2022(Berita Resmi Statistik)>
            </h3>
            <h3>
              <a className="underline" href="">
                Lihat jadwal terbit bulan ini
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrafikSection;
