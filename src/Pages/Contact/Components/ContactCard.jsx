export default function ContactCard({
  icon,
  title,
  paragraph,
  linkText,
  link,
}) {
  return (
    <div
      className="bg-white w-[240px] sm:w-[350px] p-5 my-9 flex flex-col place-items-center gap-3 rounded-xl border-t-4 border-t-primary shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.6)] transition duration-500 hover:-translate-y-2 cursor-pointer "
      dir="rtl"
    >
      <img src={icon} className="w-10" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-[rgba(83,74,64,1)] font-medium">{paragraph}</p>
      <a className="text-xs text-primary font-bold" dir="ltr" href={link} target="_blank">
        {linkText}
      </a>
    </div>
  );
}
