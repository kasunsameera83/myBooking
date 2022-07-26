
const SearchItem = () => {
  return (
    <div className="searchItem
        border-2
        w-full
        flex
        rounded-md
        justify-between
        gap-2
        p-2
        mb-2">
        <img 
            src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="" 
            className="
                itemImg
                w-[150px]
                h-[150px]
                object-cover
                " />
        <div className="
            flex
            itemDesc
            flex-col
            w-4/6
            "
        >
            <h1 className="
                itemTitle
                text-3xl"
            >
                Town Sreer Apartment
            </h1>
            <span className="itemDistance text-sm">500m from center</span>
            <span 
                className="
                    itemTaxiOption 
                    text-bace 
                    bg-skin-button-excellent
                    text-skin-base 
                    w-max 
                    p-1
                    rounded-md"
            >
                    Free airport taxi
            </span>
            <span className="
                siSubtitle 
                text-base 
                font-bold"
            >
                Studio apartment with Air conditioning
            </span>
            <span className="
                itemFeatures
                text-bace"
            >
                Entire Studio . 1bathroom .21m 1 full bed
            </span>
            <span className="
                itemCancelOption 
                text-base
                text-skin-color-text-secondory
                font-bold"
            >
                Free cancellation
            </span>
            <span className="
                itemCancelOptionSubtitle
                text-base
                text-skin-color-text-secondory"
            >
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="
            flex
            flex-col
            justify-between
            w-2/6"
        >
            <div className="
                itemRating
                flex
                justify-between"
            >
                <span className="font-extrabold">Excellent</span>
                <button className="
                    bg-skin-fill
                    text-skin-base
                    p-2
                    font-bold
                    border-none
                    rounded-lg"
                >9.7</button>
            </div>
            <div className="
                itemDetailsText
                text-right
                flex
                flex-col
                gap-2"
            >
                <span className="itemPrice text-3xl">$100</span>
                <span className="TaxOption text-base">Includes taxes and fees</span>
                <button className="
                    itemCheckBtn 
                    bg-skin-button-accent
                    text-skin-base
                    font-bold
                    p-2
                    border-none
                    rounded-lg"
                >
                    See Availability
                </button>
            </div>
        </div>

    </div>
  )
}

export default SearchItem 