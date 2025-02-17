import { motion } from "framer-motion";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
