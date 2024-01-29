import supply_1 from "../../assets/suppliers_1.png";
import supply_2 from "../../assets/suppliers_2.png";
import supply_3 from "../../assets/suppliers_3.png";
import supply_4 from "../../assets/suppliers_4.png";

const SupplySlide = () => {
  return (
    <div>
      <div className="flex justify-between pt-[100px]">
        <img src={supply_1} alt="" />
        <img src={supply_2} alt="" />
        <img src={supply_3} alt="" />
        <img src={supply_4} alt="" />
      </div>
    </div>
  );
};

export default SupplySlide;
