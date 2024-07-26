import acmeLogo from "@images/acme.png";
import quantumLogo from "@images/quantum.png";
import echoLogo from "@images/echo.png";
import celestialLogo from "@images/celestial.png";
import pulseLogo from "@images/pulse.png";
import apexLogo from "@images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

const LogoTicker = () => {
  return (
    <div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={50}
          height={50}
        />
      ))}
    </div>
  );
};

export default LogoTicker;
