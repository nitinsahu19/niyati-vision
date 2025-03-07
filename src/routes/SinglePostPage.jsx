import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Top Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold ">
            Culpa et magna ut proident quis officia duis excepteur.
          </h1>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800 ">Nitin Sahu</Link>
            <span>on</span>
            <Link className="text-blue-800 ">Web design</Link>
            <span>2 days ago</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 font-medium">
            Anim sunt nostrud qui enim proident velit proident Lorem. Lorem
            irure est ex nostrud irure tempor irure laboris. Aliqua excepteur
            ullamco reprehenderit ad magna. Veniam qui in aute cupidatat irure
            id. Ea duis anim veniam ea excepteur velit irure nostrud aliqua
            labore.Ea duis anim veniam ea excepteur velit irure nostrud aliqua
            labore.Ea duis anim veniam ea excepteur velit irure nostrud aliqua
            labore.Ea duis anim veniam ea excepteur velit irure nostrud aliqua
            labore.
          </p>
        </div>

        {/* Image */}
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Text */}
        <div className="flex flex-col lg:text-lg gap-6 text-justify">
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
          <p>
            Irure ipsum exercitation tempor minim culpa anim excepteur
            incididunt aliqua Lorem dolore laborum adipisicing id. Eiusmod
            laboris sint commodo ex adipisicing dolore amet sit ex magna esse
            esse. Est adipisicing elit duis sint ea non consequat officia.
            Ullamco consequat tempor Lorem minim reprehenderit aute excepteur
            eu. Veniam aliquip sunt eiusmod ut id est do aliquip. Reprehenderit
            cupidatat non culpa tempor occaecat.
          </p>
        </div>

        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          {/* heading-1 */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.png"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">Nitin Sahu</Link>
            </div>
            <p className="text-sm text-gray-500">
              Anim elit culpa quis veniam voluptate adipisicing.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          {/* heading-2 */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
          <PostMenuActions />

          {/* heading-3 */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="underline">
              All
            </Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>

          {/* heading-4 */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* Comments section */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
