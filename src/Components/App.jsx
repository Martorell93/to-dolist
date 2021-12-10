import { useState } from "react";
import UserContextProvider from "../Context/UserContext"
import Content from "./Content/Content"
import Header from "./Header/Header"
import Tools from "./Tools/Tools"
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { tasks as tasks_ } from '../Models/tasks'


function App() {

  const section0Tasks = tasks_.filter(task => task.section == 0);
    const section1Tasks = tasks_.filter(task => task.section == 1);
    const section2Tasks = tasks_.filter(task => task.section == 2);
    const section3Tasks = tasks_.filter(task => task.section == 3);

    const [state, setState] = useState([section0Tasks, section1Tasks, section2Tasks, section3Tasks]);
  
  const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;
        console.log(result);

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter(group => group.length));
        }
    }

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Tools />
        <DragDropContext onDragEnd={onDragEnd}>
          <Content />
        </DragDropContext>
      </UserContextProvider>
    </div>
  )
}

export default App
