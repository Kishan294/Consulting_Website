export const CustomCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="  bg-gray-100 shadow-lg p-4 border-2 rounded-xl hover:bg-[var(--main-color)] transition-all duration-300 ease-in-out hover:text-gray-100 hover:shadow-none border-white">
    <h1 className="text-xl font-bold ">{title}</h1>
    <p>{content}</p>
  </div>
);
