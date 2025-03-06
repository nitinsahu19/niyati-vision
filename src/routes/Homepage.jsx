import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList.jsx";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* BreadCrumb */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span className="">•</span>
        <span className="text-blue-800">Blog & Articles</span>
      </div>

      {/* Introduction */}
      <div className="flex items-center justify-between">
        {/* Titles */}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Ullamco dolor quis mollit anim incididunt aliqua et dolore.
          </h1>
          <p className="mt-8 text-md md:text-xl ">
            Aliqua nulla nostrud labore ad amet irure. Ea do voluptate tempor
            deserunt ad incididunt nulla aliquip irure ex. Laboris sint velit
            enim ex sunt laborum tempor in ullamco fugiat eiusmod ullamco.
          </p>
        </div>

        {/* Animated button */}
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            {" "}
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />{" "}
            {/* Text comes over the svg */}
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>{" "}
          {/* The inside arrow svg icon with button */}
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Main Categories */}
      <MainCategories />

      {/* Features post */}
      <FeaturedPosts />

      {/* Post list */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
