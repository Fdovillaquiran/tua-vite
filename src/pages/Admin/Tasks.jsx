import React, {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [showTable, setShowTable] = useState(true)
  const [textButton, setTextButton] = useState('Crear Tarea')
  const [colorButton, setColorButton] = useState('bg-orange-600')

  useEffect(()=>{
    const getTasks = async () => {
      const options = {method: 'GET', url: 'http://localhost:5000/api/tasks'};
  
      axios.request(options).then(function (response) {
        //console.log(response.data);
        setTasks(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }
    if(showTable){
      getTasks()
    }
  },[showTable])

  useEffect(() => {
    if (showTable){
      setTextButton('Crear Tarea')
      setColorButton('bg-orange-600')
    }
    else {
      setTextButton('Mostrar Tareas')
      setColorButton('bg-gray-600')
    }
  },[showTable])

  return (
    <div className='flex h-full w-full flex-col justify-start p-6'>
      <div className='flex flex-col w-full'>
        <h1 className='text-3xl font-extrabold'>MANAGER TASKS</h1>
        <button onClick={() => setShowTable(!showTable)} className={`${colorButton} text-white p-4 rounded-lg m-4 w-24 hover:bg-orange-700 self-end`}>{textButton}</button>
      </div>
      {
        showTable ? (
          <TableTasks listTasks = { tasks } /> 
        ):(
          <FormTask setShowTable = { setShowTable } />
        )
      }
      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
  )
}

const TableTasks = ({ listTasks } ) => {
  return(
    <div className=''>
      <h2 className='text-xl font-extrabold'>LIST OF TASKS</h2>
      <div className=''>
        <table className='tabla'>
          <thead>
            <tr>
                <th>Title</th>
                <th>Descriptión</th>
                <th>Status</th>
                <th>Options</th>  
            </tr>
          </thead>
          <tbody>
            {
              listTasks.map((task) => {
                return (
                  <RowTask key={nanoid()} task={task} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

const RowTask = ({task}) => {
  return(
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.status ? 'Complete' : ''}</td>
      <td>
        <div className='flex justify-evenly'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 hover:text-orange-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </div>
      </td>
    </tr>
  )
}

const FormTask  =({setShowTable}) => {
  const form = useRef(null)

  const submitTask = async (e) => {
    e.preventDefault()
    const values = new FormData(form.current)
    const newTask = []

    values.forEach((value, key) => {
      newTask[key] = value
    })

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/api/tasks',
      headers: {'Content-Type': 'application/json'},
      data: {title: newTask.title, description: newTask.description}
    };
    
    await axios.request(options).then(function (response) {
      //console.log(response.data);
      toast.success('Task add')
      setShowTable(true)
    }).catch(function (error) {
      console.error(error);
      toast.error('Task not saved')
    });
  }

  return(
    <div className=''>
      <h2 className=''>CREATE NEW TASK</h2>
      <form ref={form} onSubmit={submitTask} className>
        <div className='flex flex-col'>
          <label className='flex flex-col' htmlFor="title">Title: 
            <input 
              name='title'
              type='text' 
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              placeholder='Titulo de la tarea'
              required />
          </label>
          <label className='flex flex-col' htmlFor="">Description: 
            <input 
              name='description' 
              type='text' 
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              placeholder='Description of the task'
              required />   
          </label>
          <button
            type='submit'
            className=''
            >
            Save Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default Tasks