import Image from "./Image";

const Comment = () => {
  return (
    <div className="flex flex-col mb-8 bg-slate-50 rounded-xl p-4">
      {/* Details */}
      <div className="flex items-center gap-4">
        <Image
          src="userImg.png"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Nitin Sahu</span>
        <span className="text-gray-500 text-sm">2 days ago</span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p>
          Reprehenderit enim excepteur laboris labore nostrud do dolor mollit
          sint tempor et. Laboris dolor ex laboris Lorem sunt eiusmod irure
          labore sunt nulla ipsum. Deserunt fugiat fugiat consectetur sit
          excepteur pariatur nostrud amet cillum occaecat veniam culpa. Officia
          id laboris ea aliqua laboris veniam. Aliqua in enim ut officia
          proident est aute ullamco commodo ullamco anim irure.
        </p>
      </div>
    </div>
  );
};

export default Comment;
