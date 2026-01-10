import { motion } from "framer-motion";

import ServicesCard from "./ServicesCard";

import iron1 from "../../../images/iron1.png";
import iron2 from "../../../images/iron2.png";
import iron3 from "../../../images/iron3.png";
import Tittle from "./Tittle";


const services = [
  {
    image: iron3,
    header: "تطعيج الحديد",
    paragraph:
      "ثني وتشكيل الحديد حسب المقاسات المطلوبة بدقة عالية باستخدام مكابس هيدروليكية متطورة.",
    buttonName: "تطعيج الحديد",
  },
  {
    image: iron2,
    header: "تطعيج الحديد",
    paragraph:
      "ثني وتشكيل الحديد حسب المقاسات المطلوبة بدقة عالية باستخدام مكابس هيدروليكية متطورة.",
    buttonName: "تطعيج الحديد",
  },
  {
    image: iron1,
    header: "تطعيج الحديد",
    paragraph:
      "ثني وتشكيل الحديد حسب المقاسات المطلوبة بدقة عالية باستخدام مكابس هيدروليكية متطورة.",
    buttonName: "تطعيج الحديد",
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariant = {
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

export default function ServicesSection() {
  return (
    <div className="bg-backGroundColor pt-12 pb-20">
      <div className="container mx-auto px-10 overflow-hidden">
        <Tittle text="خدماتنا" />

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0}}
          className="grid gap-5 place-items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariant}>
              <ServicesCard
                image={service.image}
                header={service.header}
                paragraph={service.paragraph}
                buttonName={service.buttonName}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
