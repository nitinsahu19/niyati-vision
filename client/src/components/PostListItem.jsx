import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Eiusmod anim do nostrud est labore Lorem cupidatat.
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Nitin Sahu</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>

        <p className="">
          Ex eu irure aute esse sit do sit et. Tempor do exercitation occaecat
          dolor eiusmod aliqua incididunt amet. Reprehenderit elit minim
          exercitation adipisicing ut id aute labore non laborum do enim.
        </p>

        <Link to="/test" className="text-blue-800 underline text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
