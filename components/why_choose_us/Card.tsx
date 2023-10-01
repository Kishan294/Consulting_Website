const Card = ({ title, content }: { title: string; content: string }) => (
  <div className=" lg:w-60 p-5 rounded-lg shadow-xl border h-fit shadow-[var(--secondary-color)] hover:shadow-none cursor-pointer transition-all duration-300 ease-linear hover:bg-[var(--main-color)] text-[var(--heading-color)] hover:text-white">
    <h1 className=" lg:text-xl text-lg  font-bold">{title}</h1>
    <p className="lg:text-base text-sm">{content}</p>
  </div>
);

export default Card;
