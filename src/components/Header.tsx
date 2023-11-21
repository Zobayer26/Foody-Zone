'use client'
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
// import data from '../data/data.json'
const navdata = [
    {
        title: "All",
        path: "/"
    },
    {
        title: "BreakFast",
        path: "/breakfast"
    },
    {
        title: "Lunch",
        path: "/lunch"
    },
    {
        title: "Dinner",
        path: "/dinner"
    }

]
const Header = () => {
    // const [filterData, setFilterData] = useState(null)
    const [search, setsearch] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setsearch(val)
        // if (filterData === "") {
        //     setFilterData(null)
        // }
        // const filter= data?.filter((foodItem) => foodItem.name.toLowerCase().includes(search.toLowerCase()));
        
    }
    return (
        <header className="  min-h-60 bg-gray-700 p-4 flex flex-col gap-8">
            <div className="container mx-auto flex flex-col justify-center items-center gap-4 mt-20 sm:flex-row sm:justify-between">
                <Image src="/Foody Zone.svg" alt=" Logo_pic" width={185} height={40} />
                <input className="bg-gray-700 border text-white border-red-500 rounded-md px-2 max-w-xs min-h-10 py-1"
                    value={search} onChange={handleChange} type="text" placeholder="Search Food..." />
            </div>
            <div className="w-80 mx-auto flex gap-3 mb-4">
                {
                    navdata.map((item) => (
                        <div key={item.title} className="bg-red-500 py-1.5 px-3 rounded text-white">
                            <Link href={item.path}> {item.title} </Link>
                        </div>
                    ))
                }
            </div>
        </header>
    );
};

export default Header;