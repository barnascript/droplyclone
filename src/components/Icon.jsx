import Image from "next/image";

const Icon = ({ width, height, alt, icon }) => {
  return (
    <div>
      <Image
        src={`/../assets/icons/${icon}`}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default Icon;
