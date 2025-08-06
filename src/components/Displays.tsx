type props = {
  displayState: string;
  completedCount: number;
  activeCount: number;
  allCount: number;
};
const Displays = ({
  displayState,
  allCount,
  completedCount,
  activeCount,
}: props) => {
  function displayRender() {
    let header;
    let desc;

    if (!allCount && displayState === 'All') {
      header = '+';
      desc = ' No tasks yet. Add your first todo above!';
    } else if (!activeCount && displayState === 'Active') {
      header = '+';
      desc = 'No active tasks. Add one above!';
    } else if (!completedCount && displayState === 'Completed') {
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
        my-4"
      >
        <span className="text-5xl text-slate-300 pt-4 self-center">
          {header}
        </span>
        <span className="font-light mt-2 mb-4 self-center">{desc}</span>
      </section>
    );
  }

  return displayRender();
};

export default Displays;
