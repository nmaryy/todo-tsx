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
            bg-white border-slate-200 
            border-[1px] h-full
           max-sm:p-4 
           max-sm:mt-0  "
    >
      <p
        className="mb-4
      max-sm:text-xs
      max-sm:mb-2
      "
      >
        Add A New Task
      </p>
      <div className="flex flex-row justify-between">
        <input
          ref={input}
          className="bg-slate-100 p-3
            text-sm font-light
            rounded-xl w-4/5 outline-none
               border-1 border-slate-200
               max-sm:text-[10px]
               max-sm:h-8
               max-sm:p-1"
          type="text"
          placeholder="What needs to be done?"
        />
        <button
          onClick={handleClick}
          onKeyDown={handleClick}
          className="p-2
            text-sm font-bold
            rounded-xl w-1/5 ml-2 add--btn
            flex flex-row items-center
            justify-center
         bg--multi--addBtn
               max-sm:h-8
               max-sm:p-1"
        >
          <span
            className="text-lg mr-2 
          font-light          
          max-sm:text-[8px]
          max-sm:mr-0.5"
          >
            +
          </span>
          <span
            className="text-xs 
          font-bold          max-sm:text-[8px]
"
          >
            Add
          </span>
        </button>
      </div>
    </section>
  );
};

export default ItemAdder;
