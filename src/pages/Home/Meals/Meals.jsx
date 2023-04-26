import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealsDetails from './MealsDetails';
import bg from '../../../assets/restaurant-interior.jpg'
import { FaSadTear } from 'react-icons/fa';


const Meals = () => {
    const MealsData = useLoaderData()
    console.log(MealsData[0])
    return (
        <section className="relative">
            <img src={bg} alt="" />
            <div className="inset-0 absolute w-full h-full backdrop-blur-sm pt-32 bg-slate-900/25">

            {
                !MealsData[0] ?
                 <h1 className="text-7xl flex flex-col items-center w-full h-full  font-bold text-center text-white">
                            <p className="text-orange-500">
                                <FaSadTear />
                            </p>
                        <p>
                        there is no Meals Available
                        </p>
                   </h1> :
                <>
                <h1 className="text-6xl font-italianno  font-bold text-center text-white">Our Menu card</h1>
                <p className="text-4xl font-semibold text-center font-[sans-serif] tracking-wider text-white py-4">
                   {MealsData[0] && MealsData[0].strCategory}
                </p>
                </>

            }
            <div className="grid grid-cols-2 gap-y-5">

            {
                MealsData && MealsData.map(meals => <MealsDetails key={meals?.idMeal} meals={meals} />)
            }

            </div>
            </div>
        </section>
    );
};

export default Meals;