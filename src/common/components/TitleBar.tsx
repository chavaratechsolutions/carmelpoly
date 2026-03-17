import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

// Define the type for the props
interface TitlebarProps {
  title?: string;
  bgColor?: string;
  className?: string;
}

// The Titlebar component accepts props for flexibility and reusability
const Titlebar: React.FC<TitlebarProps> = ({
  title = "Titlebar",
  className = "text-primary",
}) => {
  return (
    <div
      className={` ${className} uppercase flex items-center justify-between`}
    >
      <div
        className={`${className} items-center justify-center flex gap-3 font-unbounded text-primary text-sm md:text-xl font-semibold`}
      >
        <FaRegDotCircle className={`${className}`} />
        {title}
      </div>
    </div>
  );
};

export default Titlebar;
