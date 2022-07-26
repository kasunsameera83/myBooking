import React from 'react'

const PropertyList = () => {
    return (
        <div className='w-full max-w-[1024px] justify-between flex gap-3'>
            <div className="proListItem rounded-md overflow-hidden cursor-pointer flex-1">
                <img className='w-full h-[150px] object-cover' src="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80 " alt="" />
                <div className="proListTitles ">
                    <h1 className='text-xl text-skin-color-text-gray font-semibold'>Hotels</h1>
                    <h3 className='text-base text-skin-color-text-secondory'>123 hotels</h3>
                </div>
            </div>
            <div className="proListItem rounded-md overflow-hidden cursor-pointer flex-1">
                <img className='w-full h-[150px] object-cover' src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
                <div className="proListTitles ">
                    <h1 className='text-xl text-skin-color-text-gray font-semibold'>Hotels</h1>
                    <h3 className='text-base text-skin-color-text-secondory'>123 hotels</h3>
                </div>
            </div>
            <div className="proListItem rounded-md overflow-hidden cursor-pointer flex-1">
                <img className='w-full h-[150px] object-cover' src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className="proListTitles ">
                    <h1 className='text-xl text-skin-color-text-gray font-semibold'>Hotels</h1>
                    <h3 className='text-base text-skin-color-text-secondory'>123 hotels</h3>
                </div>
            </div>
            <div className="proListItem rounded-md overflow-hidden cursor-pointer flex-1">
                <img className='w-full h-[150px] object-cover' src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                <div className="proListTitles ">
                    <h1 className='text-xl text-skin-color-text-gray font-semibold'>Hotels</h1>
                    <h3 className='text-base text-skin-color-text-secondory'>123 hotels</h3>
                </div>
            </div>
        </div>
    )
}

export default PropertyList

