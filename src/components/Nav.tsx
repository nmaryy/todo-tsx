type display = {
  setDisplayState: (state: 'All' | 'Active' | 'Completed') => void;
  displayState: 'All' | 'Active' | 'Completed';
  completedCount: number;
  activeCount: number;
  allCount: number;
  clearAll: () => void;
};

const Nav = ({
  setDisplayState,
  displayState,
  completedCount,
  activeCount,
  allCount,
  clearAll,
}: display) => {
  return (
    <nav
      className=" p-5 flex flex-row justify-between mt-4
            bg-white border-slate-200
             border-[1px] rounded-xl
              max-sm:mt-2
              max-sm:p-4"
    >
      <p
        className="
            max-w-full"
      >
        <button
          onClick={() => setDisplayState('All')}
          className={` hover:bg-black
                hover:text-white
                active:bg-black active:text-white
              rounded-md py-1 px-2 text-black text-xs
               max-sm:text-[10px]
              ${
                displayState === 'All'
                  ? 'bg-black text-white'
                  : 'bg-slate-200 text-black'
              }
              `}
        >
          All ({allCount})
        </button>
        <button
          onClick={() => setDisplayState('Active')}
          className={` hover:bg-black
                hover:text-white   mx-2
                active:bg-black active:text-white
              rounded-md py-1 px-2 text-black text-xs
               max-sm:text-[10px]
              ${
                displayState === 'Active'
                  ? 'bg-black text-white'
                  : 'bg-slate-200 text-black'
              }
              `}
        >
          Active ({activeCount})
        </button>
        <button
          onClick={() => setDisplayState('Completed')}
          className={` hover:bg-black
                hover:text-white text-black
                active:bg-black active:text-white
              rounded-md py-1 px-2  text-xs  max-sm:text-[10px]
            '
              ${
                displayState === 'Completed'
                  ? 'bg-black text-white'
                  : 'text-black bg-slate-200'
              }
              `}
        >
          Completed ({completedCount})
        </button>
      </p>
      <button
        onClick={clearAll}
        className=" hover:bg-black
              bg-slate-200
              hover:text-white
              active:bg-black active:text-white
            rounded-md py-1 px-2 text-red-500 text-xs
             max-sm:text-[10px]
             "
      >
        Clear All ({allCount})
      </button>
    </nav>
  );
};

export default Nav;
