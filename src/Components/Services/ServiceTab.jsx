import CommonBtn from "../Button/CommonBtn";
import ServiceBg from "./ServiceBg";

// eslint-disable-next-line react/prop-types
const ServiceTab = ({ className, children }) => {
  return (
    <div>
      <ServiceBg className={className}>
        <div className="ml-[120px]">
          {children}

          <CommonBtn text="Learn More" />
        </div>
      </ServiceBg>
    </div>
  );
};

export default ServiceTab;
