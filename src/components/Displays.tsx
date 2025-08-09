import { useContext } from 'react';
import { tasksFilter, variables } from '../store/util';
import type { DisplayProps } from '../store/types';
import { MyContext } from '../context/myContext';

const Displays = ({ displayState }: DisplayProps) => {
  const { tasksArr } = useContext(MyContext);

  let header: string;
  let desc: string;

  const noTasks = !tasksArr.length && displayState === variables.all;
  const noActive =
    !tasksFilter(tasksArr, variables.active).length &&
    displayState === variables.active;
  const noCompleted =
    !tasksFilter(tasksArr, variables.completed).length &&
    displayState === variables.completed;

  if (noTasks) {
    header = '+';
    desc = ' No tasks yet. Add your first todo above!';
  } else if (noActive) {
    header = '+';
    desc = 'No active tasks. Add one above!';
  } else if (noCompleted) {
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
};

export default Displays;
