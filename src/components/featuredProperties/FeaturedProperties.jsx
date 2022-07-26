import React from 'react'

const FeaturedProperties = () => {
    return (
        <div className='fProp w-full max-w-[1024px] justify-between flex gap-3'>
            <div className="fPropItems flex-1 gap-3 flex flex-col rounded-md overflow-hidden">
                <img className='w-full object-cover h-[150px]' src="https://images.unsplash.com/photo-1573047330191-fb342b1be381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <span className="fPropName font-extrabold text-xl text-skin-color-text-gray">Singhagiri Hotel</span>
                <span className="fPropCity text-skin-color-text-gray text-base">Dambulla</span>
                <span className="fPropPrice text-skin-color-text-secondory text-base font-bold">Starting from $250</span>
                <div className="fPropRating text-skin-color-text-gray text-base">
                    <button className='px-2 py-1 border-none mr-2 bg-skin-button-excellent rounded text-skin-base font-medium'>9.4</button>
                    <span className='text-sm'>Excellent</span>
                </div>
            </div>

            <div className="fPropItems flex-1 gap-3 flex flex-col rounded-md overflow-hidden">
                <img className='w-full object-cover h-[150px]' src="https://images.unsplash.com/photo-1598598795009-f80c5072e665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                <span className="fPropName font-extrabold text-xl text-skin-color-text-gray">Singhagiri Hotel</span>
                <span className="fPropCity text-skin-color-text-gray text-base">Dambulla</span>
                <span className="fPropPrice text-skin-color-text-secondory text-base font-bold">Starting from $250</span>
                <div className="fPropRating text-skin-color-text-gray text-base">
                    <button className='px-2 py-1  border-none mr-2 bg-skin-button-excellent rounded text-skin-base font-medium'>9.4</button>
                    <span className='text-sm'>Excellent</span>
                </div>
            </div>
            <div className="fPropItems flex-1 gap-3 flex flex-col rounded-md overflow-hidden">
                <img className='w-full object-cover h-[150px]' src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <span className="fPropName font-extrabold text-xl text-skin-color-text-gray">Singhagiri Hotel</span>
                <span className="fPropCity text-skin-color-text-gray text-base">Dambulla</span>
                <span className="fPropPrice text-skin-color-text-secondory text-base font-bold">Starting from $250</span>
                <div className="fPropRating text-skin-color-text-gray text-base">
                    <button className='px-2 py-1  border-none mr-2 bg-skin-button-excellent rounded text-skin-base font-medium'>9.4</button>
                    <span className='text-sm'>Excellent</span>
                </div>
            </div>
            <div className="fPropItems flex-1 gap-3 flex flex-col rounded-md overflow-hidden">
                <img className='w-full object-cover h-[150px]' src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <span className="fPropName font-extrabold text-xl text-skin-color-text-gray">Singhagiri Hotel</span>
                <span className="fPropCity text-skin-color-text-gray text-base">Dambulla</span>
                <span className="fPropPrice text-skin-color-text-secondory text-base font-bold">Starting from $250</span>
                <div className="fPropRating text-skin-color-text-gray text-base">
                    <button className='px-2 py-1  border-none mr-2 bg-skin-button-excellent rounded text-skin-base font-medium'>9.4</button>
                    <span className='text-sm'>Excellent</span>
                </div>
            </div>
            
        </div>
    )
}

export default FeaturedProperties