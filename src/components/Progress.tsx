import { tasksFilter, variables } from '../store/util';
import { useContext } from 'react';
import { MyContext } from '../context/myContext';

const Progress = () => {
  const { tasksArr } = useContext(MyContext);

  const percent =
    tasksArr.length > 0
      ? Math.round(
          (tasksFilter(tasksArr, variables.completed).length /
            tasksArr.length) *
            100
        )
      : 0;

  return (
    <section
      className=" p-5 rounded-xl flex flex-col mt-0 
            border-[1px]
                bg-white border-slate-200  "
    >
      <h2 className="text-md mb-4 font-bold">Progress</h2>
      <ul className="text-xs">
        <li
          className="flex flex-row justify-between px-4
              py-2"
        >
          <span>Total Tasks</span>
          <span>{tasksArr.length}</span>
        </li>
        <li
          className="flex flex-row justify-between px-4
              py-2"
        >
          <span>Completed</span>
          <span>{tasksFilter(tasksArr, variables.completed).length}</span>
        </li>
        <li
          className="flex flex-row justify-between px-4
              py-2"
        >
          <span>Active</span>
          <span>{tasksFilter(tasksArr, variables.active).length}</span>
        </li>
        <li
          className="flex flex-row justify-between px-4
              py-2"
        >
          <span>Completeion Rate</span>
          <span>{percent}%</span>
        </li>
        <li
          className="flex flex-row justify-between px-4
              py-2"
        >
          <div className="bg-slate-200 h-2 w-full rounded-md">
            <div
              className={`bg-black h-2  rounded-md transition-all duration-250`}
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Progress;
