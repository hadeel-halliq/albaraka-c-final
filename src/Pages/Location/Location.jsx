import location1 from "../../images/location1.png";
import location2 from "../../images/location2.jpg";
import location3 from "../../images/location3.jpg";

import LocationCard from "./Components/LocationCard";
import { useEffect } from "react";

const locations = [
  {
    text: "المقر الرئيسي - حلب",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.508416128124!2d37.1586816!3d36.2187738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a46a253b2f87f%3A0xc10d18d79c4c5e4d!2z2KfZhNmF2Yog2KfZhNio2YbYq!5e0!3m2!1sar!2s!4v1699889000000!5m2!1sar!2s",
    image: location1,
  },
  {
    text: "المنشأة الصناعي - حلب",
    mapSrc:
      "https://www.google.com/maps/@36.248861,37.257278,2475m/data=!3m1!1e3?hl=ar&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D",
    image: location2,
  },
  {
    text: "المنشأة الصناعي - طرطوس",
    mapSrc:
      "https://www.google.com/maps/@35.002806,35.901806,2513m/data=!3m1!1e3?hl=ar&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D",
    image: location3,
  },
];
export default function Location() {
  useEffect(() => {
    document.title = "مراكز الشركة | معادن البركة";
  }, []);

  return (
    <div className="bg-backGroundColor  pt-40 pb-20">
      <div className="container mx-auto px-10 ">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            text={location.text}
            mapSrc={location.mapSrc}
            imageSrc={location.image}
          />
        ))}
      </div>
    </div>
  );
}
