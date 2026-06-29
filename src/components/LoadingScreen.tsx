import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        >
          <div className="w-20 h-20 mx-auto relative">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[3px] rounded-2xl bg-dark flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text font-mono">{'</>'}</span>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            Loading Portfolio
          </h2>
          <div className="flex justify-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen