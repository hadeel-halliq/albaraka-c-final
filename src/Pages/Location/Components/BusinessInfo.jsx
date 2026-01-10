import { motion } from "framer-motion";

import InfoItem from "./InfoItem";

import manager from "../../../images/manager.png";
import phone from "../../../images/phone.png";
import time from "../../../images/time.png";
import locationIcon from "../../../images/locationIcon.png";

const infoData = [
  {
    icon: time,
    title: "ساعات العمل : ",
    label: "8:00 صباحاً _ 4:00 مساً (الأحد-الخميس)",
  },
  {
    icon: phone,
    title: "الهاتف : ",
    label: "330 888 948 963+",
    labelType: "link",
    href: "tel:+963948888330",
  },
  {
    icon: locationIcon,
    title: "العنوان : ",
    label: "حي السريان، شارع المكتب، حلب، سوريا",
    labelType: "link",
    href: "https://www.google.com/maps/@36.218774,37.158682,1238m/data=!3m1!1e3?hl=ar&entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: manager,
    title: "المدير : ",
    label: "محمد محمد محمد",
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function BusinessInfo() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      className="bg-backGroundColor mt-6 p-5 rounded-xl flex flex-col-reverse  lg:flex lg:flex-row lg:justify-between"
    >
      {infoData.map((item, index) => (
        <motion.div key={index} variants={itemVariant}>
          <InfoItem
            icon={item.icon}
            title={item.title}
            label={item.label}
            labelType={item.labelType}
            href={item.href}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
