import Image from "next/image";

const Icon = ({ icon, size }) => {
  const path = "/svg/" + icon + ".svg";
  return <img src={path} width={size} height={size} />;
};

export default Icon;
