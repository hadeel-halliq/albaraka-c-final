import { motion } from "framer-motion";

import Tittle from "../../Home/Components/Tittle";
import FormInput from "./FormInput";
import Button from "../../../Components/Common/Button";

const inputVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function EmailContactForm() {
  return (
    <div className="bg-white my-10 rounded-xl border-t-4 border-t-primary shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ">
      <Tittle text="أرسل لنا رسالة" />
      <p className="text-center my-8 text-sm sm:text-lg">
        املأ النموذج التالي وسيقوم أحد ممثلينا بالتواصل بك في أقرب وقت ممكن
      </p>
      <form className="flex flex-col place-items-center gap-7 lg:grid lg:grid-cols-2 ">
        <FormInput
          label="البريد الالكتروني"
          id="2"
          type="email"
          name="email"
          placeholder="example@domain.com"
        />

        <FormInput
          label="الاسم كامل"
          id="1"
          type="text"
          name="name"
          placeholder="ادخل اسمك كامل"
        />
        <motion.div
          variants={inputVariant}
          initial="hidden"
          animate="visible"
          className="w-fit flex flex-col gap-1 text-right lg:col-span-3"
        >
          <label htmlFor="message" className="font-semibold lg:mr-5 xl:mr-[23px]">
            الرسالة
          </label>
          <textarea
            rows={2}
            className="p-2 pr-3 w-[240px] sm:w-[280px] lg:w-[760px] lg:mr-4 xl:w-[890px] xl:mr-5 border rounded-lg text-right focus:outline-none focus:border-primary focus:border-2"
            id="message"
            name="message"
            placeholder="اكتب رسالتك هنا"
            required
          ></textarea>
        </motion.div>
        <motion.div
          variants={inputVariant}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3 mb-14"
        >
          <Button buttonName="إرسال رسالتك" buttonStyle="mainStyle" />
        </motion.div>
      </form>
    </div>
  );
}
