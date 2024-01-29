/* eslint-disable react/prop-types */
const CommonBtn = (props) => {
  return (
    <button className="bg-primary text-white px-[20px]  md:px-[40px] py-[7px] md:py-[13px] font-semibold font-pops  hover:bg-white hover:text-primary active:bg-red-700 transition-all duration-500">
      {props.text}
    </button>
  );
};

export default CommonBtn;
