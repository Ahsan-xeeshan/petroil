import CommonBtn from "../Button/CommonBtn";
const About = () => {
  return (
    <div className="bg-[#C4C4C4] py-[136px]">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-2/5 bg-primary text-white font-pops text-[36px] py-[100px] px-[74px] font-bold">
            Learn more about our company
          </div>
          <div className="w-3/5">
            <div className="bg-about bg-cover bg-no-repeat bg-center w-[726px] h-[361px] pl-[282px] pt-[168px]">
              <CommonBtn text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
