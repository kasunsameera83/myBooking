import React from 'react'

const Featured = () => {
  return (
    <div className='w-full max-w-[1024px] flex justify-between gap-3 z-0'>
        <div className="featuredItem relative rounded-md overflow-hidden bg-white drop-shadow-lg">
            <img className='w-full object-cover' src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className="featuredTitles  absolute bottom-3 p-3 text-skin-base">
                <h1 className='text-3xl'>Dublin</h1>
                <h2 className='text-base'>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem relative rounded-md overflow-hidden bg-white drop-shadow-lg">
            <img className='w-full object-cover' src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className="featuredTitles absolute bottom-3 p-3 text-skin-base">
                <h1 className='text-3xl'>Dublin</h1>
                <h2 className='text-base'>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem relative rounded-md overflow-hidden bg-white drop-shadow-lg">
            <img  className='w-full object-cover' src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className="featuredTitles absolute bottom-3 p-3 text-skin-base">
                <h1 className='text-3xl'>Dublin</h1>
                <h2 className='text-base'>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured