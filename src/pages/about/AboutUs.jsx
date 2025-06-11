import { Title } from "react-head";
import Clientele from "../home/Clientele";
import ClientTestimonials from "../home/ClientTestimonials";
import WhyChooseUs from "../home/WhyChooseUs";
import AboutText from "../about/AboutText";
import OurProcess from "../../components/OurProcess";

const AboutUs = () => {
    return <>
        <Title>About Us</Title>
        <main className="w-full">
            <img src="/banners/About-us.png" alt="image" />
            <WhyChooseUs />
            <AboutText/>
            <ClientTestimonials />
            <OurProcess/>
            <Clientele />
        </main>
    </>
}

export default AboutUs;