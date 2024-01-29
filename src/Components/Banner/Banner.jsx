import CommonBtn from "../Button/CommonBtn";

const Banner = () => {
  return (
    <div className="bg-[url('assets/banner-img.png')] bg-no-repeat bg-center bg-cover w-full h-[450px] md:h-[783px] py-[80px] md:py-[258px] relative z-[1] after:z-[-1] after:content[''] after:w-full after:h-full after:absolute after:bg-black after:top-0 after:left-0 after:opacity-50">
      <div className="max-w-container mx-auto">
        <div className="mx-2 md:mx-0">
          <h1 className="font-pops text-white text-[28px] md:text-[64px] font-bold w-[300px] md:w-[842px] pb-[18px] md:pb-[31px]">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <CommonBtn text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
