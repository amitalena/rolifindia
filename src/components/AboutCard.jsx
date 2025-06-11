import { motion } from 'framer-motion'

const AboutCard = ({ title, content, image, reverse }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 my-10`}
    >
      <div className="md:w-1/2 relative group">
        <div className={`absolute -inset-2 bg-gradient-to-r rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300`}></div>
        <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" 
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="md:w-1/2 px-4">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-1 ${reverse ? 'bg-amber-500' : 'bg-blue-500'} mr-4`}></div>
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Specialization</span>
        </div>
        <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
          {title}
        </h2>
        <div className="prose prose-lg text-gray-600 text-main-size max-w-none">
          {typeof content === 'string' ? (
            <p className="leading-relaxed">{content}</p>
          ) : (
            <div className="space-y-4">{content}</div>
          )}
        </div>
        

      </div>
    </motion.div>
  )
}

export default AboutCard;