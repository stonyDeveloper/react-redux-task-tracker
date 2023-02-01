import './App.css';
import AddTask from './components/AddTask';
import AppShell from './components/AppShell';
import Input from './components/Input';
import Task from './components/Task';
import Tasks from './components/Tasks';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

function App() {
  const [ showAddTask, setShowAddTask ] = useState(false)
  const loading = useSelector(state => state.loading)
  
  
  return (
    <div className="App w-[100vw] h-[100vh] flex pt-[100px] pb-[400px] justify-center">
      <AppShell
        showAddTask={showAddTask}
        setShowAddtask={setShowAddTask}
      >
       { showAddTask && <AddTask />}
       <Tasks />
       {loading && 
       <div className='absolute top-[20px] left-[150px]'>
       <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  "#FFFFFF",
                  "#FFFFFF",
                  "#FFFFFF",
                  "#FFFFFF",
                  "#FFFFFF",
                ]}
              /> 
              </div>
        }
       
      </AppShell>
    </div>
  );
}

export default App;
