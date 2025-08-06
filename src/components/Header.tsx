const Header = () => {
  return (
    <section
      className="flex flex-col 
      items-center "
    >
      <header
        className="font-bold m-2 
              text-3xl  text-black
              max-sm:text-xl
 "
      >
        Tasks
      </header>
      <p
        className="text-sm 
           text-black
           max-sm:text-xs"
      >
        Stay organized and get things done
      </p>
    </section>
  );
};

export default Header;
