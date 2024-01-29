import client_1 from "../../assets/client_1.png";
import client_2 from "../../assets/client_2.png";
import client_3 from "../../assets/client_3.png";
import client_4 from "../../assets/client_4.png";
const Concern = () => {
  return (
    <div>
      <div className="max-w-container mx-auto">
        <div className="flex py-[112px] gap-[26px]">
          <div>
            <img src={client_1} alt="" />
          </div>
          <div>
            <img src={client_2} alt="" />
          </div>
          <div>
            <img src={client_3} alt="" />
          </div>
          <div>
            <img src={client_4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concern;
