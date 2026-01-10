import { motion } from "framer-motion";
import Button from "../../../Components/Common/Button";

import machin1 from "../../../images/machin1.png";
import machin2 from "../../../images/machin2.png";
import machin3 from "../../../images/machin3.png";

const createImageVariant = (direction) => {
  const directions = {
    left: { x: -50 },
    right: { x: 50 },
    center: { y: 30 },
  };

  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: {
      opacity: 1,
      ...(direction === "center" ? { y: 0 } : { x: 0 }),
      transition: { duration: 0.7 },
    },
  };
};

const machines = [
  {
    src: machin1,
    alt: "machin1",
    direction: "center",
    className: "absolute bottom-1/6 left-1/2 transform -translate-x-1/2 z-20",
  },
  {
    src: machin2,
    alt: "machin2",
    direction: "left",
    className: "absolute top-[100px] left-1/4 transform -translate-x-1/2 z-10",
  },
  {
    src: machin3,
    alt: "machin3",
    direction: "right",
    className: "absolute top-[100px] right-1/4 transform translate-x-1/2 z-10",
  },
];

const textContainer = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutSection() {
  return (
    <div className="bg-white py-7 shadow-[34px_0_13px_0_rgba(0,0,0,0.25)]">
      <div className="container mx-auto px-10 overflow-hidden flex flex-col items-center gap-7 md:flex-row">
       
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          {machines.map(({ src, alt, direction, className }, index) => (
            <motion.img
              key={index}
              variants={createImageVariant(direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              src={src}
              alt={alt}
              className={`${className} w-[140px] sm:w-[180px] md:w-[230px]`}
            />
          ))}
        </div>

        <motion.div
          dir="rtl"
          className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] flex flex-col gap-8 items-center md:items-start"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          <motion.h2
            variants={textItem}
            className="font-bold text-xl sm:text-2xl lg:text-3xl"
          >
            شركة البركة لصناعات الحديد:
          </motion.h2>

          <motion.p
            variants={textItem}
            className="font-medium md:text-sm lg:text-lg"
          >
            رواد في تصنيع الحديد والهياكل المعدنية منذ عام 1985 نقدم حلولاً
            متكاملة تشمل التصميم والتنفيذ والتركيب جميع منتجاتنا تتميز بجودة
            معتمدة منتجاتنا تتوافق مع أعلى المعايير المحلية والدولية نمتلك طاقات
            إنتاجية ضخمة نلبي احتياجات المشاريع الكبرى بفضل خطوط إنتاج حديثة
          </motion.p>

          <motion.p variants={textItem} className="font-medium text-lg">
            للطلب أو الاستفسار تواصل معنا عبر
          </motion.p>

          <motion.div variants={textItem} className="flex gap-3">
            <Button
              buttonName="تواصل عبر الوتس اب"
              buttonStyle="mainStyle"
              href="https://wa.me/963948888330"
            />
            <Button
              buttonName="اتصل بنا"
              buttonStyle="secondStyle"
              href="tel:+963948888330"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

