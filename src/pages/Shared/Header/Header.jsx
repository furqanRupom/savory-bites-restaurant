import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    const searchRef = useRef();
    const [searchMeals,setSearchMeals] = useState('')
     const  handleSearchSubmit = (e)=>{
         e.preventDefault()
         const getMeals = searchRef.current.value
         setSearchMeals(getMeals)
     }


    return (
        <header className="font-[sans-serif] flex flex-col items-center lg:flex-row justify-between space-x-5 absolute w-full bg-slate-900 bg-opacity-10 right-0 left-0 py-5 text-white z-10 px-20 max-w-7xl mx-auto">
                <h2  className="text-4xl px-3 font-semibold ">SavoryBites</h2>
                <nav className="flex space-x-5 text-lg">
                    <Link className="hover:text-orange-500 transition-all" to="/">Home</Link>
                    <Link className="hover:text-orange-500 transition-all" to="/user/SignIn">Login</Link>
                    <Link className="hover:text-orange-500 transition-all" to="/user/SignUp">Register</Link>
                </nav>
                <form onSubmit={handleSearchSubmit} className="flex items-center justify-center space-x-3 text-black" action="">
                    <input className="px-2 py-2 rounded-md focus:ring focus:ring-orange-500 border-0  outline-none" ref={searchRef} type="text" placeholder='Search Your Meal'/>

                    <button className="px-1"  type='submit'>
                    <Link to={`/category/search/${searchMeals}`}>
                    <FaSearch className="text-lg text-orange-500" />
                    </Link>
                    </button>

                </form>
        </header>
    );
};

export default Header;