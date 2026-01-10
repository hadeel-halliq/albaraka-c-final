import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Button from "../../../Components/Common/Button";
import StatisticsButton from "./StatisticsButton";

import ironFactory from "../../../images//ironFactory.png";

const statisticsData = [
  { paragraphOne: "35 سنة", paragraphTwo: "من الخبرة" },
  { paragraphOne: "+150", paragraphTwo: "عميل دائم" },
  { paragraphOne: "+10.000", paragraphTwo: "مشروع ناجح" },
];

const containerVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-backGroundColor pt-40 pb-20 min-h-[500px]">
      <div className="container mx-auto px-10 overflow-hidden flex flex-col items-center gap-7 md:flex md:flex-row justify-between">
        <AnimatePresence>
          {show && (
            <>
              <motion.img
                key="image"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                src={ironFactory}
                alt="ironFactory"
                className="w-[336px] lg:w-[480px]"
              />

              <motion.div
                key="text"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-6 items-center md:items-start"
                dir="rtl"
              >
                <motion.h1
                  variants={childVariant}
                  className="font-bold text-xl sm:text-2xl lg:text-3xl"
                >
                  مرحبًا بكم في{" "}
                  <span className="text-primary">شركة البركة</span>
                </motion.h1>
                <motion.div
                  variants={childVariant}
                  className="text-lg text-[#5D5D5D] lg:text-xl"
                >
                  <p>لصناعة البروفيلات والأنابيب المعدنية</p>
                  <p>شركة رائدة في تصنيع الحديد بأحدث التقنيات</p>
                </motion.div>
                <div className="flex gap-3">
                  <Button buttonName="عرض المنتجات" buttonStyle="mainStyle" />
                  <Button
                    buttonName="اتصل بنا"
                    buttonStyle="secondStyle"
                    href="tel:+963948888330"
                  />
                </div>
                <div className="flex gap-3">
                  {statisticsData.map((item, index) => (
                    <StatisticsButton
                      key={index}
                      paragraphOne={item.paragraphOne}
                      paragraphTwo={item.paragraphTwo}
                      noHover
                    />
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
