const Heading = ({ title }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center font-extrabold text-black">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
