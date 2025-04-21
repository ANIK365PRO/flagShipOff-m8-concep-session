import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Ui/Button';

const PhoneDetails = () => {
  const data = useLoaderData();
  const { phonesId } = useParams();

  const singlePhone = data.find(phone => phone.id === parseInt(phonesId));

  const {
    brand,
    camera_info,
    description,
    id,
    image,
    model,
    name,
    price,
    storage,
  } = singlePhone || {};

  console.log(singlePhone);

  console.log(typeof phonesId, phonesId);
  console.log(data);
  return (
    <div className="my-12">
      <img
        src={image}
        alt="Banner image"
        className="w-full md:w-auto mx-auto mb-12"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-4xl">{name}</h2>
        <aside>
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

          <Button lable="Cart"></Button>
          <Button lable="Favorite"></Button>
        </aside>
      </div>
    </div>
  );
};

export default PhoneDetails;
