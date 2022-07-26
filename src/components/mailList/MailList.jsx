import React from 'react'

const MailList = () => {
  return (
    <div className='
        mail 
        w-full 
        max-w-[1024px] 
        mt-10 
        bg-skin-fill 
        text-skin-base 
        flex 
        flex-col 
        items-center 
        gap-2
        p-6'
    >
        <h1 className="
            mailTitle 
            text-2xl 
            mt-3"
        >
            Save time, save money!
        </h1>
        <span className="mailDesc text-base">Sing up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input className='
                w-80
                h-10
                p-2
                border-none
                mr-2
                rounded
                text-skin-color-text-gray' 
                type="text" 
                placeholder='Your Email' 
            />
            <button className='
                h-10
                bg-skin-button-accent
                text-skin-base
                font-bold
                border-none
                rounded
                px-2
                cursor-pointer
            '>
                Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
