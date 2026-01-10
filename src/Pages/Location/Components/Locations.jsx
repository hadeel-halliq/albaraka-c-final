import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Locations({ mapSrc, imageSrc }) {
  const style =
    "w-[200px] h-[150px] sm:w-[290px] lg:w-[400px] xl:w-[480px]  md:h-[169px] lg:h-[234px] xl:h-[281px] rounded-xl";

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const mapVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full overflow-hidden flex flex-col-reverse items-center gap-10 md:flex-row justify-center mt-9 ">
      <AnimatePresence>
        {show && (
          <>
            <motion.iframe
              title="موقع الشركة على الخريطة"
              src={mapSrc}
              className={style}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              variants={mapVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            ></motion.iframe>
            <motion.img
              src={imageSrc}
              className={style}
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
