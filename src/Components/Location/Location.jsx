import ContactBtn from "../Button/ContactBtn";

const Location = () => {
  return (
    <div>
      <div className="bg-map bg-cover bg-center bg-no-repeat w-full h-[450px]"></div>
      <div className="bg-primary border-b-[5px] border-yellow ">
        <div className="max-w-container mx-auto flex justify-between items-center py-[45px]">
          <div>
            <h4 className="font-pops text-white text-4xl font-bold ">
              Want to join as member branch in your area?
            </h4>
          </div>
          <div>
            <ContactBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
