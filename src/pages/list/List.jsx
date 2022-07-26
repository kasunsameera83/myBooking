import React from 'react'
import Header from '../../components/header/Header';
import Navbar from './../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from "date-fns"
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [openCalendar, setOpenCalendar] = useState(false)
     console.log("TEst ---------------")
    return (
        <div>
            <Navbar />
            <Header type='list'/>
            <div className="
                listContainer
                flex
                justify-center
                mt-2"
            >
                <div className="
                    listSearchWrapper
                    w-full
                    max-w-[1024px]
                    flex
                    gap-2
                    text-skin-base"
                >
                    
                    <div className="
                        listSearch
                        bg-skin-button-accent
                        rounded-md
                        sticky
                        top-5
                        w-2/6 
                        h-max
                        p-3"
                    >
                        <h1 className="
                            lsTitle
                            text-xl
                            text-skin-base
                            font-extrabold"
                        >
                            Search
                        </h1>
                        <div className="
                            listItem
                            flex
                            flex-col
                            mb-2"
                        >
                            <label className='
                                text-base' 
                                htmlFor="">Destination</label>
                            <input 
                                className='
                                    h-10    
                                    p-1
                                    border-none
                                    text-skin-color-text-gray'
                                value={destination} 
                                type="text" />
                        </div>
                        <div className="
                            listItem
                            flex
                            flex-col
                            mb-2"
                        >
                            <label 
                                className="text-base" 
                                htmlFor=""
                            >
                                    Check-in Date
                            </label>
                            <span 
                                className='
                                    h-10 p-1 
                                    bg-white 
                                    flex 
                                    items-center
                                    cursor-pointer
                                    text-skin-color-text-gray'
                                onClick={() => {setOpenCalendar(!openCalendar)}}
                                >
                                    {`${format(date[0].startDate, "MM/dd/yyyy")} 
                                    to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                            </span>
                            { openCalendar &&

                                <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate = {new Date()}
                                ranges = {date}
                                />
                            }
                        </div>

                        <div 
                            className='
                                listItem
                                flex
                                flex-col
                                mb-2"'
                        >
                            <label 
                                htmlFor=""
                                className="text-base" 
                            >
                                    Options
                            </label>
                            <div 
                                className="
                                    listOptions
                                    p-2">
                                <div 
                                    className="
                                        listOptionItem 
                                        flex 
                                        justify-between 
                                        mb-2 
                                        text-base">
                                    <span className="listOptionText">Min Price
                                        <small>Per night</small>
                                    </span>
                                    <input 
                                        type="number" 
                                        className="
                                        listOptionInput
                                        w-20
                                        p-1
                                        text-skin-color-text-gray" />
                                </div>
                                <div 
                                    className="
                                        listOptionItem 
                                        flex 
                                        justify-between 
                                        mb-2 
                                        text-base"
                                >
                                    <span className="listOptionText">Max Price
                                        <small>Per night</small>
                                    </span>
                                    <input 
                                        type="number" 
                                        className="listOptionInput
                                        w-20
                                        p-1
                                        text-skin-color-text-gray" />
        
                                </div>
                                <div 
                                    className="
                                        listOptionItem 
                                        flex 
                                        justify-between 
                                        mb-2 
                                        text-base"
                                >
                                    <span className="listOptionText">
                                        Adult
                                    </span>
                                    <input 
                                        min={1} 
                                        placeholder={options.adult} 
                                        type="number" 
                                        className="listOptionInput
                                        w-20
                                        p-1
                                        text-skin-color-text-gray" />
                                </div>
                                <div 
                                    className="
                                        listOptionItem 
                                        flex 
                                        justify-between 
                                        mb-2 
                                        text-base"
                                >
                                    <span className="listOptionText">
                                        Children
                                    </span>
                                    <input 
                                        min={0} 
                                        placeholder={options.children} 
                                        type="number" 
                                        className="listOptionInput
                                        w-20
                                        p-1
                                        text-skin-color-text-gray" 
                                    />
                                </div>
                                <div 
                                    className="
                                        listOptionItem 
                                        flex 
                                        justify-between 
                                        mb-2 
                                        text-base"
                                >
                                    <span className="listOptionText">
                                        Room
                                    </span>
                                    <input 
                                        min={1} 
                                        placeholder={options.room} typ
                                        type="number" 
                                        className="listOptionInput
                                        w-20
                                        p-1
                                        text-skin-color-text-gray" />
                                </div>
                            </div>
                        </div>
                        <button
                            className='
                                w-full
                                p-3
                                bg-skin-fill
                                text-skin-base
                                border-none
                                rounded-md
                                font-extrabold'
                        >
                            Search
                        </button>
                    </div>
                    <div className="
                        listResult
                        w-4/6
                        text-skin-color-text-gray"
                    >
                         <SearchItem />
                         <SearchItem />
                         <SearchItem />
                         <SearchItem />
                         <SearchItem />
                         <SearchItem />
                         <SearchItem />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default List
