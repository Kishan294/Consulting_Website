import Card from "./Card";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const WhatWeDo = () => {
  return (
    <section className="lg:px-40 px-5">
      <h1 className="text-center lg:text-3xl text-lg text-[var(--heading-color)] font-semibold">
        What we do
      </h1>
      <div className="my-10 lg:grid flex-col flex lg:grid-cols-4 md:grid-cols-3 gap-8">
        {array.map((item) => (
          <Card key={item} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
