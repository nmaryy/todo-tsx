import { useContext, useMemo, useState } from 'react';
import TaskItem from './components/TaskItem';
import Header from './components/Header';
import ItemAdder from './components/ItemAdder';
import Progress from './components/Progress';
import Nav from './components/Nav';
import Displays from './components/Displays';
import { variables, tasksFilter } from './store/util';
import { MyContext } from './context/myContext';

const App = () => {
  const [displayState, setDisplayState] = useState(variables.all);

  const { tasksArr } = useContext(MyContext);

  const displayedTasks = useMemo(() => {
    return tasksFilter(tasksArr, displayState);
  }, [tasksArr, displayState]);

  return (
    <main
      className="pt-4 flex flex-col justify-evenly
       w-full items-center min-h-screen
       bg-slate-100"
    >
      <Header />
      <div className=" max-md:w-3/5 min-md:w-3/5 min-lg:w-3/5 flex flex-col justify-evenly">
        <ItemAdder />

        <Nav setDisplayState={setDisplayState} displayState={displayState} />

        {<Displays displayState={displayState} />}

        {displayedTasks.length > 0 && (
          <ul
            className=" bg-white 
        border-slate-200 border-[1px]
        rounded-xl flex flex-col     
         my-4 max-sm:my-2 "
          >
            {displayedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        )}
        <Progress />
        <footer
          className="text-[0.6rem] my-4 self-center
      max-sm:my-2 "
        >
          {tasksFilter(tasksArr, variables.active).length} of {tasksArr.length}{' '}
          tasks remaining
        </footer>
      </div>
    </main>
  );
};

export default App;
