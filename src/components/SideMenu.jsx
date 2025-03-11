import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="flex flex-col px-4 h-max sticky top-8">
      {/* Heading-1 */}
      <h1 className="mb-4 font-medium">Search</h1>
      {/* Search bar */}
      <Search />

      {/* Heading-2 */}
      <h1 className="mb-4 mt-8 font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="newest"
            name="sort"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Newest
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="most-popular"
            name="sort"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Most Popular
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="trending"
            name="sort"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Trending
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="oldest"
            name="sort"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>

      {/* Heading-3 */}
      <h1 className="mb-4 mt-8 font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline text-blue-800" to="/posts">
          All
        </Link>
        <Link className="underline text-blue-800" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline text-blue-800" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline text-blue-800" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="underline text-blue-800" to="/posts?cat=seo">
          Search Engines
        </Link>
        <Link className="underline text-blue-800" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
