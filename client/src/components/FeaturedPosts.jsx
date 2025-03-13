import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />

        {/* Details */}
        <div className="flex gap-4 items-center">
          <h1 className="font-semibold lg:text-lg">01</h1>
          <Link className="text-blue-800  lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        {/* Title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Voluptate est exercitation exercitation nulla eu dolore.
        </Link>
      </div>

      {/* Others   */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* Image */}
          <div className="w-1/3 aspect-video">
            <Image
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>

          {/* Details & Title */}
          <div className="w-2/3">
            {" "}
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base sm-text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Amet reprehenderit cillum duis fugiat Lorem aliqua consequat
              ipsum.
            </Link>
          </div>
        </div>

        {/* Third post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* Image */}
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>

          {/* Details & Title */}
          <div className="w-2/3">
            {" "}
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base sm-text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Amet reprehenderit cillum duis fugiat Lorem aliqua consequat
              ipsum.
            </Link>
          </div>
        </div>

        {/* Fourth post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* Image */}
          <div className="w-1/3 aspect-video">
            <Image
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>

          {/* Details & Title */}
          <div className="w-2/3">
            {" "}
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base sm-text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Amet reprehenderit cillum duis fugiat Lorem aliqua consequat
              ipsum.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
