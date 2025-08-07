import type { TaskItemProps } from '../store/types';

const TaskItem = ({
  task,
  toggleCheckbox,
  itemDeleteHandler,
}: TaskItemProps) => {
  return (
    <li
      className=" list-none p-4 
    not-last-of-type:border-b-[1px] border-slate-200 
    text-xs
    entering
    "
    >
      <div className="flex flex-row items-center justify-between">
        <p className="flex flex-row items-center">
          <label
            htmlFor={`check--${task.id}`}
            className=" bg-slate-200 rounded-full w-4 aspect-square
          flex flex-row items-center 
          justify-center checked:bg-white"
          >
            <span
              className={`rounded-full w-2 aspect-square ${
                task.state === 'COMPELETED' ? 'bg-slate-200' : 'bg-white '
              }`}
            ></span>
          </label>
          <input
            id={`check--${task.id}`}
            name={`check--${task.id}`}
            checked={task.state === 'COMPELETED'}
            className="mr-2 appearance-none"
            type="checkbox"
            onChange={() => toggleCheckbox(task.id)}
          />
          <span
            className={`text-black capitalize
            ${
              task.state === 'COMPELETED'
                ? 'line-through decoration-1 text-slate-400'
                : ''
            }`}
          >
            {task.task}
          </span>
        </p>
        <button
          onClick={() => itemDeleteHandler(task.id)}
          className="mr-4 text-red-400
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
