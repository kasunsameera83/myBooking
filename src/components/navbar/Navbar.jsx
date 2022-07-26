const Navbar = () => {
return (
    <div className="
        h-70 
        flex 
        bg-skin-fill
        justify-center
        p-2
        ">
        <div  className="
            w-screen 
            max-w-[1024px] 
            flex 
            items-center 
            justify-between
            text-skin-base
        ">
        <span className="
            font-medium 
            text-2xl">
                My<strong>Booking</strong>
        </span>
            <div className="navItems">
                <button className="
                    ml-2
                    py-1
                    px-3
                    bg-skin-button-accent
                    text-skin-base
                    cursor-pointer
                    rounded-md
                ">
                    Register
                </button>
                <button className="
                    ml-2
                    py-1
                    px-3
                    bg-skin-button-accent
                    text-skin-base
                    cursor-pointer
                    rounded-md
                ">
                    Login
                </button>
            </div>
        </div>
    </div>
)
}

export default Navbar
