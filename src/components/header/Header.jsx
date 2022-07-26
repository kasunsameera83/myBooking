import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom'

const Header = ({type}) => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [destination, setDestination] = useState("");

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [options, setOptions] =  useState({
        adult:1,
        children:0,
        room:1
    });

    const [openOptions, setOpenOptions] = useState(false);

    const handleOptions = (name, operation) => {
        console.log(name ,operation )
        setOptions((prev) => {
            return{
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] -1, 
            };
        });
    };
      
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate("/hotels", {state:{destination, date, options}})
    }

    return (
        <div className="
            bg-skin-fill
            text-skin-base
            flex 
            justify-center
            relative"
        >
            <div className= { type === "list" ? 
                "w-full max-w-[1024px] mt-2 mx-0" : 
                "w-full max-w-[1024px] mt-2 mb-10 mx-0"}
            >
                <div className="
                    flex 
                    gap-4 
                    mb-14"
                >
                    <div className="
                            flex 
                            items-center 
                            gap-2 
                            active:
                            p-2
                            rounded 
                            text-skin-color-text-secondory
                            border 
                            border-skin-menu-border ">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div> 
                </div>
                { type !== 'list' &&
                    <>
                    <h1 className="text-3xl">
                        HOTELS, RESORTS, HOSTELS AND MORE
                    </h1>
                    <p className="my-1 mx-0 text-base">
                        Enter your dates and choose from 17,278 hotels and other places to stay! 
                    </p>
                    <button className="
                        mt-10
                        border-0 
                        py-2 
                        px-4 
                        cursor-pointer 
                        text-skin-base
                        bg-skin-button-accent
                        font-semibold
                        rounded
                        mb-14"
                    >
                            Sing in / Register
                    </button>
                    <div className="
                        h-20
                        bg-white 
                        border-4 
                        flex 
                        items-center 
                        border-skin-menu-border
                        justify-around
                        py-2
                        px-0
                        rounded-lg
                        drop-shadow-md
                        absolute
                        w-full
                        max-w-[1024px]
                        z-10"
                    >
                        <div className="headerSearchItem flex items-center gap-2">
                            <FontAwesomeIcon icon={faBed} className="text-skin-color-text-gray"/>
                            <input 
                                type="text" 
                                placeholder="Where are you going?" 
                                className=" border-none outline-none text-[#524364]" 
                                onChange={e => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-skin-color-text-gray"/>
                            <span className="text-skin-color-text-gray cursor-pointer" 
                                onClick={() => setOpenCalendar(!openCalendar)}
                            >
                                {`${format(date[0].startDate, "MM/dd/yyy")} 
                                to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                                
                            </span>
                            {
                                openCalendar &&
                                <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                rangeColors={["#6639b6"]}
                                className="absolute top-20 z-10"
                                minDate = {new Date()}
                            />
                            }
                            
                        </div>
                        <div className="headerSearchItem flex items-center gap-2">
                            <FontAwesomeIcon icon={faPerson} className="text-skin-color-text-gray"/>
                            <span className="text-skin-color-text-gray cursor-pointer"
                                onClick={() => setOpenOptions(!openOptions)}
                            >
                                {`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}
                            </span>
                            {
                                openOptions &&
                                <div className="
                                    option 
                                    absolute 
                                    top-20
                                    bg-white 
                                    text-skin-color-text-gray 
                                    rounded
                                    shadow-md
                                    z-10"
                                >
                                    <div className="optionItem w-[200px] flex justify-between m-2">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCouter flex items-center gap-3 text-black">
                                            <button 
                                            disabled={options.adult <= 1}
                                            onClick={() => handleOptions("adult" , "d")} 
                                            className="
                                                optionCouterBtn 
                                                w-10 
                                                h-10 
                                                border-2 
                                                text-skin-base
                                                border-skin-menu-border
                                                rounded 
                                                bg-skin-button-accent"
                                            >
                                                -
                                            </button>
                                            <span className="optionCouterNumber text-skin-color-text-gray">{options.adult}</span>
                                            <button onClick={() => handleOptions("adult" , "i")} className="
                                                optionCouterBtn 
                                                w-10 
                                                h-10 
                                                border-2 
                                                text-skin-base
                                                border-skin-menu-border
                                                rounded 
                                                bg-skin-button-accent"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem w-[200px] flex justify-between m-2">
                                        <span className="optionText">Children</span>
                                        <div className="optionCouter flex items-center gap-3 text-black">
                                            <button 
                                                disabled={options.children < 1}
                                                onClick={() => handleOptions("children" , "d")} 
                                                className="
                                                optionCouterBtn 
                                                w-10 
                                                h-10 
                                                border-2 
                                                text-skin-base
                                                border-skin-menu-border
                                                rounded 
                                                bg-skin-button-accent"
                                            >
                                                -
                                            </button>
                                            <span className="optionCouterNumber text-skin-color-text-gray">{options.children}</span>
                                            <button onClick={() => handleOptions("children" , "i")} className="
                                                optionCouterBtn 
                                                w-10 
                                                h-10 
                                                border-2 
                                                text-skin-base
                                                border-skin-menu-border
                                                rounded 
                                                bg-skin-button-accent"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem w-[200px] flex justify-between m-2">
                                        <span className="optionText">Room</span>
                                        <div className="optionCouter flex items-center gap-3 text-black">
                                            <button 
                                                disabled={options.room <= 1}
                                                onClick={() => handleOptions("room" , "d")} 
                                                className="
                                                optionCouterBtn 
                                                w-10 
                                                h-10 
                                                border-2 
                                                text-skin-base
                                                border-skin-menu-border
                                                rounded 
                                                bg-skin-button-accent"
                                            >
                                                -
                                            </button>
                                            <span className="optionCouterNumber text-skin-color-text-gray">{options.room}</span>
                                            <button onClick={() => handleOptions("room" , "i")} className="
                                                optionCouterBtn 
                                                w-10 
                                                h-10 
                                                border-2 
                                                text-skin-base
                                                border-skin-menu-border
                                                rounded 
                                                bg-skin-button-accent"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            }
                            
                        </div>
                        <div className="headerSearchItem flex items-center gap-2">
                            <button className="
                                border-0 
                                py-2 
                                px-4 
                                cursor-pointer 
                                text-skin-base
                                bg-skin-button-accent
                                font-semibold
                                rounded"
                                onClick={ handleSearch }
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Header