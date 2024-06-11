import { useContext } from "react";
import useTitle from "../../../hooks/useTitle";
import Feedback from "../FeedBack/Feedback";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { AuthContext } from "../../../providers/AuthProvider";

const Home = () => {
    useTitle('Home');
    const {loading} = useContext(AuthContext);
    if (loading) {
        return <p className="m-24">Loading <progress className=" progress h-6 w-56"></progress></p>
    }
    
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <Header></Header>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Services></Services>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;