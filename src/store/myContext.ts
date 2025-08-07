// import { createContext, type JSX, type ReactNode, useState } from 'react';
// import type { Task } from './type';
// type AppContextType = {
//   tasksArr: Task[];
//   setTasksArr: (value: Task[]) => void;
// };

// export const AppContext = createContext<AppContextType>({
//   tasksArr: [],
//   setTasksArr: () => {},
// });

// const AppProvider = ({ children }: { children: ReactNode }): JSX.Element => {
//   const [tasksArr, setTasksArr] = useState<Task[]>([]);
//   return (
//     <AppContext.Provider value={{ tasksArr, setTasksArr }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppProvider;
