import ReadBtn from "../Button/ReadBtn";

// eslint-disable-next-line react/prop-types
const Blog_cnt = ({ className }) => {
  return (
    <div>
      <div
        className={`bg-blog_1 bg-cover bg-no-repeat bg-center w-[339px] h-[401px] relative after:absolute z-[1] after:content[''] after:z-[-1] after:bg-black after:w-full after:h-full after:top-0 after:left-0 after:opacity-60 pt-[75px] pl-[44px] ${className}`}
      >
        <h4 className="text-white  w-[249px] font-pops text-2xl font-bold pb-[52px]">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
        </h4>
        <ReadBtn />
      </div>
    </div>
  );
};

export default Blog_cnt;
