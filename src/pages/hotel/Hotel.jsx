
import Navbar from './../../components/navbar/Navbar';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import imageArray from '../../tempFiles/imageArray.json'
import MailList from './../../components/mailList/MailList';
import { useState } from 'react';


const Hotel = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [openSlider, setOpenSlider] = useState(false);

    const handleOpenSlider = (i) => {
        setSlideIndex(i)
        setOpenSlider(true)
    }


    return (
        <div>
            <Navbar />
            <Header type='list' />
            {
                openSlider && 
                <div className="
                    slider
                    fixed
                    top-0
                    left-0
                    w-full
                    h-full
                    items-center
                    bg-black/70
                    flex
                    z-50">
                    <FontAwesomeIcon 
                        onClick={() => setOpenSlider(false)} 
                        icon={faCircleXmark} 
                        className="
                            close
                            absolute
                            top-28
                            right-64
                            text-skin-color-text-secondory
                            text-2xl
                            cursor-pointer"/>
                    <FontAwesomeIcon icon={faCaretLeft} 
                        onClick={() => 
                        0 >= slideIndex ?  
                        setSlideIndex(slideIndex) : 
                        setSlideIndex(slideIndex - 1)} 
                        className="
                            arrow
                            m-5
                            text-4xl
                            text-skin-color-text-secondory
                            cursor-pointer"/>
                    <div className="
                        sliderWrapper
                        w-full
                        h-full
                        flex
                        justify-center
                        items-center">
                        <img src={imageArray[slideIndex].src} 
                            alt="" 
                            className="
                                sliderImage
                                w-[80%]
                                h-[80vh]"/>
                    </div>
                    <FontAwesomeIcon 
                        onClick={() => 
                            (imageArray.length -1) <= slideIndex ?  
                            setSlideIndex(slideIndex) : 
                            setSlideIndex(slideIndex + 1)} 
                        icon={faCaretRight} 
                        className="
                            arrow
                            m-5
                            text-4xl
                            text-skin-color-text-secondory
                            cursor-pointer"/>
                </div>
            }
            <div className="
                hotelContainer
                flex
                justify-center
                mt-2
                mb-2"
            >
                <div className="
                hotelWrapper
                w-full
                max-w-[1024px]
                flex
                flex-col
                gap-2
                relative
                text-skin-color-text-gray"
                >
                    <button className='
                        absolute
                        top-2
                        right-0
                        px-4
                        py-2
                        bg-skin-button-excellent
                        text-skin-base
                        font-extrabold
                        rounded-md
                    '>
                        Reserve or Book Now!
                    </button>
                    <h1 className="
                        hotelTitle
                        text-3xl
                        "
                    >Araliya Hotel</h1>
                    <div className="
                        hotelAddress
                        text-base
                        flex
                        items-center
                        gap-2">
                        <FontAwesomeIcon icon={faLocationDot} /> 
                        <span>#54, Thalapathpitiya Road, Polonnaruwa</span>
                    </div>
                    <span className="
                        hotelDistance
                        text-skin-color-text-secondory">
                        Excellent location - 500m from town
                    </span>
                    <span className="
                        hotelPriceHighlight
                        text-lg
                        text-skin-color-text-gray">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="
                        hotelImages
                        flex
                        flex-wrap
                        gap-1
                        justify-between">
                        {imageArray.map((image, index) => (
                            <div className="
                                hotelImageWarapper
                                w-[33%]"
                                key={index}
                            >
                                <img 
                                    
                                    onClick={() => handleOpenSlider(index)}
                                    className='
                                        w-full
                                        object-cover
                                        justify-between
                                        h-[200px]' 
                                src={image.src} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="
                        hotelDetails
                        flex
                        justify-between
                        gap-2
                        mt-2">
                        <div className="
                            hotelDetailsTexts
                            w-2/3">
                            <h1 className="
                                hotelTitle
                                text-3xl">
                                Stay in the heart of Krakow
                            </h1>
                            <p className="
                                1hotelDetail
                                text-base
                                mt-2
                                text-justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
                                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 
                                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written 
                                in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                            </p>
                        </div>
                        <div className="
                            hotelDetailsPrice
                            w-1/3
                            p-2
                            flex
                            flex-col
                            bg-skin-background-gray
                            gap-2">
                            <h1 className='
                                text-2xl
                                text-skin-color-text-gray
                            '>
                                Perfect for a 9-night stay!
                            </h1>
                            <span className='
                                text-base
                                text-skin-color-text-gray'>
                                Locatd in the real heart of Krakow, this property has an excellent location score of 9.8
                            </span>
                            <h2 className='
                                text-lg
                                text-skin-color-text-secondory'>
                                <b>$945</b>(9 nights)
                            </h2>
                            <button className='
                                border-none
                                py-2
                                px-4
                                bg-skin-button-excellent
                                text-skin-base
                                font-bold
                                rounded-lg'>
                                    Reserve or Book Now!
                            </button>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Hotel