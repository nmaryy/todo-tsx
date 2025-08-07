import { lengthMeasure, variables } from '../store/store';
import type { NavBtnProps } from '../store/types';

const NavBtn = ({
  setDisplayState,
  displayState,
  state,
  tasksArr,
}: NavBtnProps) => {
  return (
    <button
      onClick={() => setDisplayState(state)}
      className={` hover:bg-black
                    hover:text-white
                    active:bg-black active:text-white
                  rounded-md py-1 px-2 text-black text-xs
                   max-sm:text-[10px]
                  ${
                    displayState === state
                      ? 'bg-black text-white'
                      : 'bg-slate-200 text-black'
                  }
                  `}
    >
      <span className="capitalize">{state.toLowerCase()}</span>
      <span>
        (
        {state === variables.all
          ? tasksArr.length
          : lengthMeasure(tasksArr, state)}
        )
      </span>
    </button>
  );
};

export default NavBtn;
