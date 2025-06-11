const ContactMap = ({
    width = '600',
    height = "450"
}) => {
    return <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2649032308072!2d77.4158795!3d28.621821699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44d95555555%3A0x43246d52f006956c!2sRolif%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1745403317678!5m2!1sen!2sin" width={width} height={height} style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
}

export default ContactMap;