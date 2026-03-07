import { motion } from "motion/react";

const Stat = () => {
    return (
        <div className="px-4 md:px-16 py-10">
            <motion.section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.05 }}
      >
        <motion.div whileHover={{ scale: 1.05,  }}  transition={{ duration: 0.5 }} className="p-6 bg-blue-50 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-blue-600">500+</h2>
          <p>Volunteers</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="p-6 bg-green-50 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-green-600">120+</h2>
          <p>Events</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="p-6 bg-orange-50 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-orange-600">15K+</h2>
          <p>People Helped</p>
        </motion.div>
      </motion.section>
        </div>
    )
}
export default Stat;