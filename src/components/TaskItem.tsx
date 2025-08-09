import { useContext } from 'react';
import type { TaskItemProps } from '../store/types';
import { MyContext } from '../context/myContext';

const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleCheckbox, itemDeleteHandler } = useContext(MyContext);
  return (
    <li
      className=" list-none p-4 
    not-last-of-type:border-b-[1px] border-slate-200 
    text-xs
    entering
    "
    >
      <div className="flex flex-row items-center justify-between">
        <p className="flex flex-row items-start">
          <span className="mr-2 ">
            <label
              htmlFor={`check--${task.id}`}
              className=" bg-slate-200 rounded-full w-4 aspect-square
          flex flex-row items-center 
          justify-center checked:bg-white"
            >
              <span
                className={`rounded-full w-2 aspect-square ${
                  task.completed ? 'bg-slate-200' : 'bg-white '
                }`}
              ></span>
            </label>
            <input
              id={`check--${task.id}`}
              name={`check--${task.id}`}
              checked={task.completed}
              className="appearance-none"
              type="checkbox"
              onChange={() => toggleCheckbox(task.id)}
            />
          </span>

          <span
            className={`text-black capitalize wrap-anywhere
            ${
              task.completed ? 'line-through decoration-1 text-slate-400' : ''
            }`}
          >
            {task.task}
          </span>
        </p>
        <button
          onClick={() => itemDeleteHandler(task.id)}
          className="mr-4 text-red-400 text-[14px] 
        hover:scale-120
        transition-transform duration-150"
        >
          x
        </button>
      </div>
      <p className="ml-5 mt-2 text-[0.65rem]">{task.date}</p>
    </li>
  );
};

export default TaskItem;
