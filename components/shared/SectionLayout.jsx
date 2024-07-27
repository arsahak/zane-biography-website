const SectionLayout = ({ children, img, bg }) => {
  return (
    <section
      className={`${img} ${bg} mx-auto flex justify-center items-center w-full `}
    >
      <div className="container py-[3.5rem] mx-5 lg-mx-0">{children}</div>
    </section>
  );
};

export default SectionLayout;
