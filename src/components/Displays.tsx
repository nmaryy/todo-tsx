import { lengthMeasure, variables } from '../store/store';
import type { DisplayProps } from '../store/types';

const Displays = ({ displayState, tasksArr }: DisplayProps) => {
  function displayRender() {
    let header;
    let desc;

    if (!tasksArr.length && displayState === variables.all) {
      header = '+';
      desc = ' No tasks yet. Add your first todo above!';
    } else if (
      !lengthMeasure(tasksArr, variables.active) &&
      displayState === variables.active
    ) {
      header = '+';
      desc = 'No active tasks. Add one above!';
    } else if (
      !lengthMeasure(tasksArr, variables.compeleted) &&
      displayState === variables.compeleted
    ) {
      header = '...';
      desc = 'No completed tasks yet...';
    } else {
      return null;
    }

    return (
      <section
        className=" bg-white l
       border-slate-200 border-[1px] rounded-xl
        flex flex-col
        my-4
        max-sm:my-2 "
      >
        <span
          className="text-5xl
         text-slate-300 pt-4 self-center max-sm:text-xl  "
        >
          {header}
        </span>
        <span
          className="font-light
         mt-2 mb-4 self-center max-sm:text-xs  "
        >
          {desc}
        </span>
      </section>
    );
  }

  return displayRender();
};

export default Displays;
