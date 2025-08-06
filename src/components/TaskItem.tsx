type prop = {
  task: string;
  id: string;
  date: string;
  state: 'Active' | 'Completed';
  toggleCheckbox: (id: string) => void;
  itemDeleteHandler: (id: string) => void;
};
const TaskItem = ({
  task,
  id,
  date,
  state,
  toggleCheckbox,
  itemDeleteHandler,
}: prop) => {
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
            htmlFor={`check--${id}`}
            className=" bg-slate-200 rounded-full w-4 aspect-square
          flex flex-row items-center 
          justify-center checked:bg-white"
          >
            <span
              className={`rounded-full w-2 aspect-square ${
                state === 'Completed' ? 'bg-slate-200' : 'bg-white '
              }`}
            ></span>
          </label>
          <input
            id={`check--${id}`}
            name={`check--${id}`}
            checked={state === 'Completed'}
            className="mr-2 appearance-none"
            type="checkbox"
            onChange={() => toggleCheckbox(id)}
          />
          <span
            className={`text-black capitalize
            ${
              state === 'Completed'
                ? 'line-through decoration-1 text-slate-400'
                : ''
            }`}
          >
            {task}
          </span>
        </p>
        <button
          onClick={() => itemDeleteHandler(id)}
          className="mr-4 text-red-400
        hover:scale-120
        transition-transform duration-150"
        >
          x
        </button>
      </div>
      <p className="ml-5 mt-2 text-[0.65rem]">{date}</p>
    </li>
  );
};

export default TaskItem;
