export default function Button({
  buttonName,
  buttonStyle = "mainStyle",
  onClick,
  children,
  href,
  noHover,
}) {
  const baseStyle =
    "inline-block text-center no-underline rounded-2xl px-3.5 py-2 font-bold leading-none ";

  const styleVariants = {
    mainStyle: "bg-primary text-white cursor-pointer",
    secondStyle: noHover
      ? "border border-primary bg-transparent cursor-default"
      : "border border-primary bg-[linear-gradient(to_left,_var(--color-primary)_50%,_transparent_50%)] bg-[length:200%_100%] bg-[position:left_bottom] transition-all duration-500 hover:bg-[position:right_bottom] cursor-pointer",
  };

  const resolvedStyle = `${baseStyle} ${styleVariants[buttonStyle] || ""}`;
  const content = children || buttonName;

  return href ? (
    <a href={href} className={resolvedStyle} target="_blank">
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={resolvedStyle}>
      {content}
    </button>
  );
}
