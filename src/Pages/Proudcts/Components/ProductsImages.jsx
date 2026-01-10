import { motion } from "framer-motion";

import product5 from "../../../images/product5.png";
import product6 from "../../../images/product6.png";
import product7 from "../../../images/product7.png";
import product8 from "../../../images/product8.png";
import product9 from "../../../images/product9.png";
import product10 from "../../../images/product10.png";
import Tittle from "../../Home/Components/Tittle";

const productsImages = [
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProductsImages() {
  return (
    <div className="bg-backGroundColor pt-12 pb-20">
      <div className="container mx-auto px-10 overflow-hidden">
        <Tittle text="صور من المنتجات" />
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid place-items-center sm:grid-cols-2 gap-5 md:gap-3 lg:gap-4 xl:gap-5 md:grid-cols-[repeat(auto-fit,minmax(290px,1fr))] "
        >
          {productsImages.map((product, index) => (
            <motion.img
              variants={imageVariant}
              src={product}
              key={index}
              className="w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
