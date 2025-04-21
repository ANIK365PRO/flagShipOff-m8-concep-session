import React, { useState } from 'react';
import Hero from './../components/Hero';
import PhoneContainer from '../components/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    // console.log(text);

    if (text === '') return setPhones(data);

    const searchedPhones = data.filter(
      phone =>
        phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
    );
    console.log(searchedPhones);
    setPhones(searchedPhones);
  };

  return (
    <>
      <Hero handleSearch={handleSearch}></Hero>

      <PhoneContainer phones={phones}></PhoneContainer>
    </>
  );
};

export default Home;
