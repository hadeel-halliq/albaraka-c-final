export default function Steps({ icon, header, paragraph }) {
  return (
    <div className="flex gap-2.5 p-4 border border-r-2  border-r-[var(--color-primary)] border-gray-100 rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-1.5 cursor-pointer">
      <img src={icon} className="w-10 h-10" />
      <div>
        <h2 className="font-bold">{header}</h2>
        <p className="text-xs md:text-[16px]">{paragraph}</p>
      </div>
    </div>
  );
}
