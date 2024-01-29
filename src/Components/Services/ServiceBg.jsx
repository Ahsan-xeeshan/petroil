// eslint-disable-next-line react/prop-types, no-unused-vars
const ServiceBg = ({ className, children }) => {
  return (
    <div
      className={`bg-no-repeat bg-center bg-cover pt-[147px] pb-[139px] relative z-[1] after:z-[-1] after:content[''] after:w-full after:h-full after:absolute after:bg-black after:top-0 after:left-0 after:opacity-50 ${className}`}
    >
      {" "}
      {children}
    </div>
  );
};

export default ServiceBg;
