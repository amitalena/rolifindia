import { BiSupport } from "react-icons/bi";
import { RiMedalLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { DiModernizr } from "react-icons/di";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const WhyChooseUs = () => {
    const images = [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://media.designcafe.com/wp-content/uploads/2019/12/17054440/living-room-furniture-design-for-your-home.jpg",
        "https://t3.ftcdn.net/jpg/05/28/57/64/360_F_528576447_j08koWfGyhXMweJzDz6qzx6yYBBKJSnM.jpg",
        "https://m.media-amazon.com/images/I/71YNXIXB6eL.jpg",
        "https://www.hansetile.com/Content/upload/2019321907/201905090904323559956.jpg",
    ];

    const images2 = [
        "https://sdtiles.in/wp-content/uploads/2024/09/SD-Tiles-11.jpg",
        "https://media.istockphoto.com/id/1156907176/vector/wall-switch-power-electrical-socket-electricity-turn-of-and-on-plug-vector-realistic-pictures.jpg?s=612x612&w=0&k=20&c=GDuNvSwQgGWl8xBgyhFvvll7x45zF4ytcZc2wexK66g=",
        "https://www.elesi.com/wp/wp-content/uploads/2021/01/lieberrange-1024x1024.jpg",
        "https://img.freepik.com/free-vector/electric-socket-cabel-plugged_1284-8828.jpg?semt=ais_country_boost&w=740",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEiBKwcbeYMSDSEYidW6QNmsM1tj9tBUeTw&s",
        "https://i0.wp.com/rbtautomate.com/wp-content/uploads/2023/02/Benefits-of-Commercial-Electrical-Services-for-Businesses--scaled.jpg?fit=2560%2C1707&ssl=1"
    ];

    const Card = ({ icon, title = "", description = "" }) => (
        <div className="flex flex-col justify-start items-start">
            <div className="flex justify-start text-[20px] gap-x-2 items-center">
                {icon}
                <h2 className="font-semibold text-main-color">{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    );

    return (
        <section className="bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/images/bg-image-2.jpg')] bg-cover bg-center flex justify-between items-start w-full px-4 py-5 gap-6 flex-wrap lg:flex-nowrap">
            <div className="flex flex-col justify-start items-start w-full lg:w-[55%] py-10">
                <h2 className="text-[20px] uppercase font-semibold text-main-color">Mindfully Made Interiors</h2>
                <p className="text-[30px] font-semibold leading-tight text-main-color py-2">
                    Our Anthem is ‘We’ll Lead with Innovative Excellence.’
                </p>
              
                <p className="pt-5">Choosing the right partner for your interior design or fit-out project makes all the difference — and that’s where we stand out. With years of expertise and hands-on experience in residential, commercial, and hospitality interiors, we bring a unique blend of creativity, precision, and professionalism to every space we transform. We understand that no two projects are alike, which is why we offer tailored solutions that align perfectly with your needs, preferences, and budget. Our team is dedicated to delivering projects on time without ever compromising on quality — because we know deadlines matter. We use only high-quality materials and trusted craftsmanship to ensure that every detail is durable, functional, and aesthetically pleasing. Above all, customer satisfaction is at the heart of everything we do. From concept to completion, we work closely with you to ensure your vision is realized and your expectations are exceeded.</p>

               

                  <div className="w-full grid grid-cols-2 my-3 gap-x-5 gap-y-3">
                  <Card icon={<RiMedalLine size={20} className="text-main-color" />} title="Purposeful Design" description=" Beauty meets function with every detail." />
                    <Card icon={<RiMedalLine size={20} className="text-main-color" />} title="Fully Customized" description="Spaces tailored to your style and needs." />
                    <Card icon={<RiMedalLine size={20} className="text-main-color" />} title="Quality Materials" description="Durable, sustainable, and elegant." />
                    <Card icon={<RiMedalLine size={20} className="text-main-color" />} title="Client-Centered" description=" Your vision, our priority — every step." />
                </div>
            </div>

            <div className="w-full flex justify-center items-center lg:w-[45%] gap-2">
                {/* Slider 1 - Bottom to Top */}
                <div className="w-1/2">
                    <Swiper
                        direction="vertical"
                        slidesPerView={2.5}
                        // spaceBetween={20}
                        spaceBetween={0}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            // reverseDirection: true, // Bottom to top
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="h-[600px] bg-gray-100"
                    >
                        {images.map((item, index) => (
                            <SwiperSlide key={index} className="!flex !justify-center !py-0 !my-0">
                                <img
                                    src={item}
                                    alt={`Slide ${index + 1}`}
                                    className="rounded-none w-full h-56 object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Slider 2 - Top to Bottom */}
                <div className="w-1/2">
                    <Swiper
                        direction="vertical"
                        slidesPerView={2}
                        spaceBetween={25}
                        speed={3000}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            reverseDirection: false, // Top to bottom
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="h-[600px] bg-gray-100"
                    >
                        {images2.map((item, index) => (
                            <SwiperSlide key={index} className="!flex !justify-center">
                                <img
                                    src={item}
                                    alt={`Slide ${index + 1}`}
                                    className="rounded-none w-full h-56 object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
