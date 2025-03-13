import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <BistroBoss/>
            <PopularMenu/>
            <CallUs/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;