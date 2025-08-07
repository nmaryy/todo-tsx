import type { NavProps } from '../store/types';
import { variables } from '../store/store';
import NavBtn from './NavBtn';

const Nav = ({
  setDisplayState,
  displayState,
  tasksArr,
  clearAll,
}: NavProps) => {
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
        <NavBtn
          setDisplayState={setDisplayState}
          displayState={displayState}
          state={variables.all}
          tasksArr={tasksArr}
        />
        <NavBtn
          setDisplayState={setDisplayState}
          displayState={displayState}
          state={variables.active}
          tasksArr={tasksArr}
        />
        <NavBtn
          setDisplayState={setDisplayState}
          displayState={displayState}
          state={variables.compeleted}
          tasksArr={tasksArr}
        />
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
        Clear All ({tasksArr.length})
      </button>
    </nav>
  );
};

export default Nav;
