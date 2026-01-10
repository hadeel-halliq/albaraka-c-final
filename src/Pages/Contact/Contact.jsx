import { motion } from "framer-motion";
import { useEffect } from "react";

import ContactCard from "./Components/ContactCard";

import locationIcon2 from "../../images/locationIcon2.png";
import phoneIcon from "../../images/phoneIcon.png";
import emailIcon from "../../images/emailIcon.png";
import EmailContactForm from "./Components/EmailContactForm";



const contactDetails = [
  {
    icon: locationIcon2,
    title: "زيارتنا",
    paragraph: "يمكنك زيارتنا في مقرنا الرئيسي خلال أوقات العمل",
    linkText: "عرض موقع على الخريطة",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.508416128124!2d37.1586816!3d36.2187738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a46a253b2f87f%3A0xc10d18d79c4c5e4d!2z2KfZhNmF2Yog2KfZhNio2YbYq!5e0!3m2!1sar!2s!4v1699889000000!5m2!1sar!2s",
  },
  {
    icon: emailIcon,
    title: "البريد الإلكتروني",
    paragraph: "أرسل لنا رسالة وسنرد عليك في أسرع وقت ممكن",
    linkText: "info@albarakametal.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=info@albarakametal.com",
  },
  {
    icon: phoneIcon,
    title: "اتصل بنا",
    paragraph: "لدينا فريق دعم متاح خلال أوقات العمل الرسمية",
    linkText: "+963 948 888 330",
    link: "tel:+963948888330",
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
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export default function Contact() {
  useEffect(() => {
    document.title = "تواصل معنا | معادن البركة";
  }, []);


  return (
    <div className="bg-backGroundColor pt-28 pb-20">
      <div className="container mx-auto px-10 overflow-hidden">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid gap-5 place-items-center grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]"
        >
          {contactDetails.map((item, index) => (
            <motion.div key={index} variants={cardVariant}>
              <ContactCard
                icon={item.icon}
                title={item.title}
                paragraph={item.paragraph}
                linkText={item.linkText}
                link={item.link}
              />
            </motion.div>
          ))}
        </motion.div>
        <EmailContactForm />
      </div>
    </div>
  );
}
