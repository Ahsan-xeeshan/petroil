import SupplySlide from "../SupplySlide/SupplySlide";

const Suppliers = () => {
  return (
    <div className="pt-[78px]">
      <div className="max-w-container mx-auto">
        <div className="flex font-pops items-center">
          <div className="w-2/5">
            <h4 className="w-[289px] text-[48px] font-bold">
              The biggest supplier on the country
            </h4>
          </div>
          <div className="w-3/5">
            <p className="text-base text-secondary font-medium w-[651px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </div>
      <SupplySlide />
    </div>
  );
};

export default Suppliers;
