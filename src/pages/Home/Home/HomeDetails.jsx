import React from 'react';
import { Link } from 'react-router-dom';

const HomeDetails = ({meals}) => {
    const {strCategory,strCategoryThumb,strCategoryDescription} = meals
    return (
        <div  className="p-5 rounded shadow-lg ">
            <img src={strCategoryThumb} alt="" />
            <h1 className="text-3xl font-bold py-5  text-center">
                {strCategory}
            </h1>
            <button className="w-full bg-orange-500 font-semibold text-white px-7 py-3 rounded-md hover:shadow-xl hover:bg-white hover:text-orange-500 duration-500">
                <Link to={`/category/${strCategory}`}> view our {strCategory} Meals</Link>
            </button>
        </div>
    );
};

export default HomeDetails;