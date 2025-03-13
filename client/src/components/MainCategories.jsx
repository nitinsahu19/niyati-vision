import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex items-center justify-center p-4 bg-white rounded-3xl xl:rounded-full shadow-lg gap-8">
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white px-4 py-2 rounded-full"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Web design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Developement
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Marketing
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Web design
        </Link>
      </div>

      {/* Seprator */}
      <span className="text-xl font-medium">|</span>

      {/* Search bar */}
      <div className="bg-gray-100 rounded-full p-2 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>

        <input
          type="text"
          className="bg-transparent "
          placeholder="Search a post..."
        />
      </div>
    </div>
  );
};

export default MainCategories;
