import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>

      {/* Dynamic button for filter */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 px-4 py-2 text-sm text-white rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>

      {/* Main container */}
      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* Left box for posts */}
        <div className="flex flex-col">
          <PostList />
        </div>

        {/* Right box for options */}
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
PostListPage;
