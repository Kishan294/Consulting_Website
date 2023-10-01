const Card = () => {
  return (
    <div className=" hover:shadow-none cursor-pointer transition-all ease-in-out duration-300 shadow-xl bg-white shadow-[var(--secondary-color)] rounded-lg p-4 text-center space-y-2 ">
      <h1 className="text-xl font-semibold border-b text-[var(--heading-color)]  ">
        Title
      </h1>
      <p className="text-sm text-gray-500 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus,
        tenetur!
      </p>
    </div>
  );
};

export default Card;
