import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@chakra-ui/icons";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SearchForm = () => {
  return (
    <div className="w-full">
      <form action="" className="flex flex-col gap-y-8">
        <div className="w-full">
          <input
            name="kata-kunci"
            id="kata-kunci"
            type="text"
            placeholder="masukkan kata kunci.."
            className="w-full rounded p-3 focus:border-blue active:border-blue text-gray-600"
          />
        </div>
        <div className="flex gap-x-4 items-center w-full justify-between">
          <div>
            <select
              name="konten"
              id="konten"
              selected="konten"
              className="rounded p-3 text-gray-500 w-48"
            >
              <option value="a">fdsfdsaf</option>
              <option value="b">cgjhgnjbdvf</option>
              <option value="c">54326tyb</option>
              <option value="d">;,umlnkujr6b</option>
              <option value="e">653g75t</option>
            </select>
          </div>
          <div>
            <select
              name="wilayah"
              id="wilayah"
              selected="Wilayah"
              className="rounded p-3 text-gray-500 w-48"
            >
              <option value="a">fdsfdsaf</option>
              <option value="b">cgjhgnjbdvf</option>
              <option value="c">54326tyb</option>
              <option value="d">;,umlnkujr6b</option>
              <option value="e">653g75t</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              className="w-10 p-1 rounded text-cyan-500 text-3xl"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-36 p-2 bg-cyan-500 rounded-full text-white font-medium text-xl hover:bg-cyan-700 duration-200 ease-in-out"
          >
            Cari <SearchIcon></SearchIcon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
