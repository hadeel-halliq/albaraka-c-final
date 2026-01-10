export default function InfoItem({ icon, title, label, labelType, href }) {
  return (
    <div dir="rtl" className="mb-3 cursor-pointer">
      <div className="flex gap-2">
        <img src={icon} />
        <h2>{title}</h2>
      </div>
      {labelType === "link" ? <a href={href} target="_blank">{label}</a> : <p>{label}</p>}
    </div>
  );
}
