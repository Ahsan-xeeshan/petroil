import { BiSolidChevronRight } from "react-icons/bi";
import Blog_cnt from "./Blog_cnt";

const Blog = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="max-w-container mx-auto">
        <div className="flex pt-[110px] justify-between">
          <div className="w-1/3 ">
            <Blog_cnt className="bg-blog_1" />
          </div>
          <div className="w-1/3">
            <Blog_cnt className="bg-blog_2" />
          </div>
          <div className="w-1/3">
            <Blog_cnt className="bg-blog_3" />
          </div>
        </div>
        <div className="flex pt-[29px] pb-[109px] items-center justify-end">
          <div className="inline">
            <a href="#">
              <p className="uppercase font-pops font-bold hover:underline transition duration-500">
                more from the blog
              </p>
            </a>
          </div>
          <div className="pr-[25px]">
            <BiSolidChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
