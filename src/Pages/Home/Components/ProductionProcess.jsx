import { motion } from "framer-motion";

import icon1 from "../../../images/icon1.png";
import icon2 from "../../../images/icon2.png";
import icon3 from "../../../images/icon3.png";
import icon4 from "../../../images/icon4.png";
import ironFactory from "../../../images/ironFactory.png";
// import albarakaVideo from "../../../videos/albarkaVideo.mp4";

import Steps from "./Steps";
import ServicesCard from "./ServicesCard";
import Tittle from "./Tittle";
import Button from "../../../Components/Common/Button";

import { FaWhatsapp } from "react-icons/fa6";

const stepsData = [
  {
    icon: icon1,
    header: "التصميم المبدئي",
    paragraph: "تصميم مخصص حسب متطلباتك بدقة متناهية باستخدام أحدث البرامج",
  },
  {
    icon: icon2,
    header: "مرحلة التصنيع",
    paragraph: "أحدث الآلات لتنفيذ التصاميم بدقة",
  },
  {
    icon: icon3,
    header: "مراقبة الجودة",
    paragraph: "فحص دقيق لكل مرحلة للتأكد من مطابقة أعلى معايير الجودة",
  },
  {
    icon: icon4,
    header: "التسليم النهائي",
    paragraph: "تغليف وتوصيل المنتج مع ضمان",
  },
];

const videoVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stepsContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const stepItemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    rotate: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ProductionProcess() {
  return (
    <div className="bg-white py-7 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] ">
      <div className="container mx-auto px-10 overflow-hidden">
        <Tittle text="  مراحل التصنيع في شركة البركة" />
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between lg:items-center">
          <motion.div
            dir="rtl"
            className="flex flex-col  gap-9"
            variants={stepsContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            {stepsData.map((step, index) => (
              <motion.div key={index} variants={stepItemVariant}>
                <Steps
                  icon={step.icon}
                  header={step.header}
                  paragraph={step.paragraph}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={videoVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            {/* <ServicesCard
              videoSrc={albarakaVideo}
              isVideo="true"
              header="شاهد كيف نصنع منتجاتنا"
              paragraph="فيديو توضيحي لمراحل التصنيع في مصانعنا المتطورة"
            /> */}
            <img src={ironFactory} className="w-lg" />
          </motion.div>
        </div>
        <div className="text-center mt-2.5">
          <p className="my-5 font-medium">
            تواصل معنا عبر الواتساب لمعرفة التفاصيل والحصول على استشارة مجانية
          </p>
          <Button buttonStyle="mainStyle" href="https://wa.me/963948888330">
            <div className="flex gap-1">
              <p className="">تواصل الان</p>
              <FaWhatsapp />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
