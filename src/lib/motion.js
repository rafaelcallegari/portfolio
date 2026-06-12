export const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}
