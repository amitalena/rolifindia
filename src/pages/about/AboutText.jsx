import React from 'react'
import { motion } from 'framer-motion'
import AboutCard from '../../components/AboutCard'

const AboutText = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4 shadow-sm">
          OUR EXPERTISE
        </span>
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 leading-tight">
          Where Vision Becomes Design and Design Becomes Reality
        </h1>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-4"></div>
        <p className="text-xl text-gray-600 max-w-3xl text-[15px] mx-auto">
          Transforming spaces with innovative design and impeccable execution
        </p>
      </motion.div>

      <div className="space-y-28">
        <AboutCard
          title="Interior & Fit-Out Works"
          content="At ROLIF INDIA, we specialize in delivering tailor-made interior and fit-out solutions that turn your unique vision into a beautifully crafted reality. Whether it's a residential, commercial, or corporate space, our expert team combines creativity, functionality, and precision to create environments that inspire and perform. From concept development and space planning to material selection and final execution, every project is handled with meticulous attention to detail. We focus on quality craftsmanship, efficient timelines, and seamless execution, ensuring a hassle-free experience. Let us help you transform ordinary spaces into extraordinary settings that reflect your style, brand, and purpose."
          image="/images/f2.jpg"
          reverse={false}
        />

        <AboutCard
          title="Residential Interior Design"
          content={
            <>
              <p className="mb-4">
                From stunning living rooms to serene bedrooms and functional kitchens, we bring comfort, elegance, and personality to every corner of your home. Whether you're refreshing a single room or undertaking a full home renovation, our expert designers blend aesthetics with functionality to match your lifestyle.
              </p>
              <p className="font-medium mb-2">We specialize in:</p>
              <ul className="space-y-3 pl-5 list-disc">
                <li><span className="font-semibold">Living Rooms:</span> Creating stylish, inviting spaces perfect for relaxing or entertaining guests.</li>
                <li><span className="font-semibold">Bed Rooms:</span> Designing peaceful sanctuaries tailored to your comfort and style preferences.</li>
                <li><span className="font-semibold">Kitchens:</span> Building practical, modern kitchens that inspire culinary creativity and family gatherings.</li>
                <li><span className="font-semibold">Dining Areas, Bathrooms & More:</span> Every detail thoughtfully planned and beautifully executed.</li>
              </ul>
            </>
          }
          image="/images/f3.jpg"
          reverse={true}
        />

        <AboutCard
          title="Commercial & Office Fit-Out"
          content="We design offices that drive productivity and retail spaces that inspire. Whether you're a startup or a corporate giant, we provide professional interiors tailored to your brand identity. Our commercial fit-outs are strategically planned to enhance workflow, boost team morale, and make a lasting impression on clients and visitors alike. From open-plan workspaces and executive suites to reception areas, conference rooms, and retail displays — every element is thoughtfully designed to reflect your company's culture and values. We also ensure practical considerations like lighting, acoustics, and ergonomics are integrated seamlessly into the design. With our end-to-end solutions, we transform commercial spaces into dynamic environments where innovation and collaboration thrive."
          image="/images/f4.jpg"
          reverse={false}
        />

        <AboutCard
          title="Hospitality & Restaurant Interiors"
          content="We create memorable experiences with restaurant and hotel interiors that combine ambiance, comfort, and functionality — aligned with your brand and customer expectations. From cozy cafés and boutique hotels to fine dining restaurants and luxury resorts, we craft spaces that not only look stunning but also enhance the overall guest experience. Our designs consider every detail — from lighting and acoustics to furniture layout, material selection, and flow of movement — ensuring that every guest feels welcomed and at ease. Whether it's creating an inviting atmosphere for casual dining or a sophisticated vibe for upscale hospitality, we tailor each project to reflect your brand's personality and story. We work closely with chefs, restaurateurs, and hospitality owners to bring their vision to life, turning ordinary spaces into unforgettable destinations that drive return visits and positive reviews."
          image="/images/f5.jpg"
          reverse={true}
        />

        <AboutCard
          title="MEP Services (Mechanical, Electrical, Plumbing)"
          content={
            <>
              <p className="mb-4">Reliable electrical, plumbing, and HVAC systems — seamlessly integrated into your design. We ensure safety, energy efficiency, and comfort across all property types.</p>
              <p className="font-medium mb-2">Our MEP services include:</p>
              <ul className="space-y-3 pl-5 list-disc">
                <li><span className="font-semibold">Mechanical Systems (HVAC):</span> Design and installation of efficient heating, ventilation, and air conditioning systems tailored to building size and usage.</li>
                <li><span className="font-semibold">Electrical Systems:</span> Safe and scalable power distribution, lighting design, energy-saving solutions, and smart automation integration.</li>
                <li><span className="font-semibold">Energy Efficiency:</span> Sustainable design practices that lower utility costs and support green building certifications.</li>
                <li><span className="font-semibold">System Coordination:</span> MEP solutions planned in harmony with architectural and interior design for a seamless, aesthetic outcome.</li>
              </ul>
              <p className="mt-4">We handle everything from concept to execution — ensuring your systems are not just functional, but future-ready.</p>
            </>
          }
          image="/images/f6.jpg"
          reverse={false}
        />
      </div>
    </div>
  )
}

export default AboutText