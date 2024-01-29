import ServiceTab from "./ServiceTab";

const Services = () => {
  return (
    <div className="pt-7">
      <div className="flex items-center flex-wrap">
        <div className="w-1/2 pl-[390px] py-[106px]">
          <h3 className="font-bold text-[64px] font-pops">Our Services</h3>
          <p className="text-base text-secondary font-medium w-[405px] font-pops pt-[5px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="w-1/2">
          <ServiceTab className="bg-service_1">
            <h4 className="font-pops font-bold text-[36px] text-white pb-[19px]">
              Modern natural oil and gas refineries.
            </h4>
          </ServiceTab>
        </div>
        <div className="w-1/2">
          <ServiceTab className="bg-service_3">
            <h4 className="font-pops font-bold text-[36px] text-white pb-[19px]">
              Supply of national industries.
            </h4>
          </ServiceTab>
        </div>
        <div className="w-1/2">
          <ServiceTab className="bg-service_2">
            <h4 className="font-pops font-bold text-[36px] text-white pb-[19px]">
              National fuel distribution and supply.
            </h4>
          </ServiceTab>
        </div>
      </div>
    </div>
  );
};

export default Services;
