import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="
                homeContainer 
                mt-12
                flex 
                flex-col 
                items-center 
                gap-3"
            >
                <Featured />
                <div className="w-full max-w-[1024px]">
                    <h1 className="text-2xl w-full text-skin-color-text-gray">Browse by propert type</h1>
                </div>
                <PropertyList />
                <div className="w-full max-w-[1024px]">
                    <h1 className="text-2xl w-full text-skin-color-text-gray">Browse by propert type</h1>
                </div>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home
