import { motion } from "framer-motion";

import Tittle from "./Tittle";

import product1 from "../../../images/product1.png";
import product2 from "../../../images/product2.png";
import product3 from "../../../images/product3.png";
import product4 from "../../../images/product4.png";
import Button from "../../../Components/Common/Button";

const productsImages = [product1, product2, product3, product4];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const productVariant = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function ProductsSection() {
  return (
    <div className="bg-backGroundColor pt-12 pb-20">
      <div className="container mx-auto px-10 overflow-hidden">
        <Tittle text="صور من المنتجات" />
        <motion.div
          className="grid place-items-center sm:grid-cols-2 gap-5 md:gap-3 lg:gap-0 md:grid-cols-[repeat(auto-fit,minmax(290px,1fr))] "
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {productsImages.map((product, index) => (
            <motion.div key={index} variants={productVariant}>
              <img
                src={product}
                className="w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px]"
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          <Button buttonName="انقر لعرض المزيد" buttonStyle="mainStyle" />
        </div>
      </div>
    </div>
  );
}
