import React from 'react';
import Header from './components/header';
import ProfileBar from './components/profileBar';
import ItemBar from './components/itmeBar';
import DemoSlider from './components/slider';
import dataSlider from "./_data/slider-data.json";
import ImgBar from './components/imgItem';
import "./globals.css";
import Head from 'next/head';


const Page: React.FC = () => {
  return (
    <div className="page">
      <Head>
      <title>فروشگاه اینترنتی دیجی‌کالا</title>
      <meta name="description" content="Description of the new site" />
      <link rel="icon" href="/images/Site-Icon.png" />
      </Head>
      <Header />
      <hr />
      <ProfileBar/>
      <main>
      <DemoSlider data={dataSlider} />
    </main>
      <ItemBar/>
      <ImgBar/>
    </div>
  );
};

export default Page;
