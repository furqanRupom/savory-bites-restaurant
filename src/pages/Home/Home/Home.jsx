import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from './HomeDetails';

const Home = () => {
    const mealsCategoryData = useLoaderData()
    return (
        <div className="my-20 ">
            <h2 className="text-5xl font-bold text-center py-12">
            Find Your Flavor
            </h2>

            <section className="grid grid-cols-3 gap-10">
                  {
                    mealsCategoryData.map((meals,id) => <HomeDetails key={id} meals={meals} />)
                  }
            </section>
        </div>
    );
};

export default Home;