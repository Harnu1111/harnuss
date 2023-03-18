import React from 'react';
import Banner from '../components/shop/Banner';
import SmartPhoneShop from '../components/shop/SmartPhoneShop';
import Laptop from '../components/shop/Laptop'
import Speaker from '../components/shop/Speakers';
import Games from '../components/shop/Games';
import Televison from '../components/shop/Televison';



const Shop = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <SmartPhoneShop />
      </section>
      <section>
        <Laptop />
      </section>
      <section>
        <Speaker />
      </section>
      <section>
        <Games />
      </section>
      <section>
        <Televison />
      </section>
    </div>
  );
}

export default Shop