const FooterMap = () => {
    return <>
        <div className="w-full rounded-l-lg px-4 py-2 bg-gray-200 border border-solid border-gray-200 border-r-0 flex flex-col justify-start items-start gap-y-2">
            <h2 className="font-bold text-[24px]">Get in Touch with us today for any assistance</h2>
            <p className="font-medium text-[16px]">Feel free to get in touch with us today for any inquiries</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2649032308072!2d77.4158795!3d28.621821699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44d95555555%3A0x43246d52f006956c!2sRolif%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1745403317678!5m2!1sen!2sin" height="180" style={{ border: 0, }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-lg w-full md:w-[600px] bg-gray-300"></iframe>
        </div>
    </>
}

export default FooterMap;