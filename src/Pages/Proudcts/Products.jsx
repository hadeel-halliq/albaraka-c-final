import { motion } from "framer-motion";

import ProductsImages from "./Components/ProductsImages";
import ProductTable from "./Components/ProductTable";

const productTitles = [
  "20 × 20",
  "20 × 20",
  "20 × 20",
  "20 × 20",
  "20 × 20",
  "20 × 20",
];

const headers = ["الخاصية", "القيمة", "الوحدة"];

const data = [
  ["الطول", "6", "متر"],
  ["السماكة", "2", "مم"],
  ["الوزن", "1.25", "كغ"],
  ["السماكة", "2.5", "مم"],
  ["الوزن", "1.35", "كغ"],
  ["السماكة", "3", "مم"],
  ["الوزن", "-", "كغ"],
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const tableVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    document.title = "المنتجات | معادن البركة";
  }, []);

  return (
    <div className="bg-backGroundColor pt-24 pb-20">
      <div className="container mx-auto px-10 overflow-hidden">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid pt-14 gap-10 place-items-center grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]"
        >
          {productTitles.map((title, index) => (
            <motion.div key={index} variants={tableVariant}>
              <ProductTable
                key={index}
                title={title}
                headers={headers}
                data={data}
              />
            </motion.div>
          ))}
        </motion.div>
        <ProductsImages />
      </div>
    </div>
  );
}
