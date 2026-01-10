import Button from "../../../Components/Common/Button";

export default function ServicesCard({
  image,
  header,
  paragraph,
  buttonName,
  isVideo,
  videoSrc
}) {
  return (
    <div
      dir="rtl"
      className={`
      bg-white w-full h-fit rounded-2xl overflow-hidden mb-[30px]
        shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
        transition duration-300
        ${isVideo ? 'max-w-[450px] cursor-default' : 'max-w-[300px] cursor-pointer hover:-translate-y-2.5 hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.6)]'}
      `}
    >
        {!isVideo ? 
          <img src={image} className={`mb-5 rounded-xl w-full`} />
        : 
          <video controls>
            <source  src={videoSrc} type="video/mp4"/>
          </video>
        }

      
      <div dir="rtl" className=" px-4 pb-5">
        <h2 className="font-bold text-lg mb-2">{header}</h2>
        <p className="mb-5">{paragraph}</p>
        {buttonName && (
          <Button buttonName={buttonName} buttonStyle="mainStyle" />
        )}
      </div>
    </div>
  );
}