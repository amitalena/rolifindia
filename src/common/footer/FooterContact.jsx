import FooterContactCard from "./FooterContactCard";

// icons
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import FooterMap from "./FooterMap";
import FooterForm from "./FooterForm";

const FooterContact = () => {
    const cards = [
        {
            icon: <IoLocationSharp size={25} />,
            title: "Address",
            content: <>
                <div className='text-sm'>
                    <a href="https://maps.app.goo.gl/4AacSv4HkyfR3LEV7" className='text-gray-900 block hover:text-blue-300 text-sm' target='_blank'>Plot no 15, Greater Noida W Rd, opp. gaurecity 2, Yusufpur, Nai Basti Dundahera, Ghaziabad, Uttar Pradesh 201009</a>
                </div>
            </>,
        },
        {
            icon: <IoIosCall size={25} />,
            title: 'Call Us',
            content: <>
                <div className=" text-main-size">
                    <a href="tel:+08062679687" className='text-gray-900 hover:text-blue-300'>08062679687</a>
                </div>
            </>
        },
        {
            icon: <MdEmail size={25} />,
            title: 'Email',
            content: <>
                <div className="text-main-size">
                    <a href='mailto:info@rolifindia.com' className='text-gray-900 block hover:text-blue-300'>info@rolifindia.com</a>
                    <a href='mailto:rolifindia@gmail.com' className='text-gray-900 block hover:text-blue-300'>rolifindia@gmail.com</a>
                </div>
            </>
        }
    ]

    return <>
        <section className="w-full flex flex-col justify-start items-start gap-y-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <FooterMap />
                <FooterForm />
            </div>
            <div className="w-full rounded-md gap-x-6 gap-y-4 grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                {
                    cards.map((item, index) => (
                        <FooterContactCard key={index} {...item} />
                    ))
                }
            </div>
        </section>
    </>
}

export default FooterContact;