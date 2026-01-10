import Locations from "./Locations";
import Title from "./Title";
import BusinessInfo from "./BusinessInfo";

export default function LocationCard({ text, mapSrc, imageSrc }) {
  return (
    <div className="container mx-auto mb-16 px-10 py-10 bg-white rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <Title text={text} />
      <Locations mapSrc={mapSrc} imageSrc={imageSrc} />
      <BusinessInfo />
    </div>
  );
}
