import React, { useState } from 'react';
import bannerImg from '../assets/banner.png';
import Button from '../Ui/Button';

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');
  // console.log(searchText);

  return (
    <div className="py-12">
      <img
        src={bannerImg}
        alt="Banner image"
        className="w-full md:max-w-md mx-auto"
      />

      <div className="text-center space-y-4">
        <h2 className="font-thin text-7xl">Browse, Search, View, Buy</h2>
        <p>
          Best place to browse, search, view details and purchase of top
          flagship phones of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={e => {
            handleSearch(e, searchText);
            //reset search input
            setSearchText('');
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px24"
        >
          <input
            type="text"
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search phone by name"
            className="bg-white border border-gray-300 text-gray-900 w-3/5 h-12 p-4 px-8 rounded shadow-md focus:outline-none focus:shadow-outline mb-2 md:mb-0 md:mr-2"
          />

          {/* <button
            type="submit"
            className="relative inline-block text-lg group cursor-pointer"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button> */}

          <Button type="submit" lable="Search"></Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
