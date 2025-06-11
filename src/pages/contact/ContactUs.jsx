import React from 'react';
import { Title } from 'react-head';
import { BsHeadset } from 'react-icons/bs'
import { MdDrafts } from 'react-icons/md';
import ContactCard from './ContactCard';
import { FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const ContactUs = () => {
    // Contact Cards Data
    const contactCards = [
        {
            icon: <FaMapMarkedAlt size={25} />,
            title: 'Location',
            details: <>
                <div className='text-center main-size'>
                    <a href="https://maps.app.goo.gl/4AacSv4HkyfR3LEV7" className='text-white block hover:text-blue-300' target='_blank'>Registered Address: Plot no 15, Greater Noida W Rd, opp. gaurecity 2, Yusufpur, Nai Basti Dundahera, Ghaziabad, Uttar Pradesh 201009</a>
                </div>
            </>,
            background: '/contact-us-images/1.png',
        },
        {
            icon: <MdDrafts size={25} />, title: 'Send an Email',
            details: <>
                <div className="text-center main-size">
                    <a href='mailto:info@rolifindia.com' className='text-white block hover:text-blue-300'>info@rolifindia.com</a>
                    <a href='mailto:rolifindia@gmail.com' className='text-white block hover:text-blue-300'>rolifindia@gmail.com</a>
                </div>
            </>,
            background: '/contact-us-images/2.png',
        },
        {
            icon: <BsHeadset size={25} />, title: 'Contact Us',
            details: <>
                <div className="text-center main-size">
                    <a href="tel:+08062679687" className='text-white hover:text-blue-300'>08062679687</a>
                </div>
            </>,
            background: '/contact-us-images/3.png',
        },
    ];

    return <>
        <Title>Contact Us</Title>
        <img src="/banners/contact.png" alt='image' className='w-full' />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-8 py-4">
            {contactCards.map((card, index) => (
                <ContactCard
                    key={index}
                    {...card}
                />
            ))}
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto px-4 lg:px-8 py-4 gap-6">
            {/* Contact Form */}
            <div className="w-full bg-white p-8 rounded-lg shadow-md">
                <ContactForm />
            </div>

            {/* Contact Details & Company Info */}
            <div className="w-full space-y-3">
                <ContactMap
                    width='100%'
                    height='100%'
                />
            </div>
        </main>
    </>
};

export default ContactUs;