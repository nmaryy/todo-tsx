import { useRef } from 'react';

type Add = {
  addBtnHandler: (input: HTMLInputElement) => void;
};

const ItemAdder = ({ addBtnHandler }: Add) => {
  const input = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (input.current) {
      addBtnHandler(input.current);
    }
  }

  return (
    <section
      className="p-5 rounded-xl flex flex-col mt-4 
            bg-white border-slate-200 border-[1px] h-full  "
    >
      <p className="mb-4">Add A New Task</p>
      <div className="flex flex-row justify-between">
        <input
          ref={input}
          className="bg-slate-100 p-3
            text-sm font-light
            rounded-xl w-4/5 outline-none
               border-1 border-slate-200"
          type="text"
          placeholder="What needs to be done?"
        />
        <button
          onClick={handleClick}
          className="p-2
            text-sm font-bold
            rounded-xl w-1/5 ml-2 add--btn
            flex flex-row items-center
            justify-center
         bg--multi--addBtn"
        >
          <span
            className="text-lg mr-2 
          font-light"
          >
            +
          </span>
          <span
            className="text-xs 
          font-bold"
          >
            Add
          </span>
        </button>
      </div>
    </section>
  );
};

export default ItemAdder;
