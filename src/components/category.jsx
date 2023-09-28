import { CheckIcon } from "@heroicons/react/24/outline";
import Modal from "./modal";
import { useState } from "react";
import { createTask, deleteTask } from "@services/api/task/task";

export default function Category({ category, fetchData }) {
    const [openCreateTask, setOpenCreateTask] = useState(false)
    const [task, setTask] = useState({
        name: "",
        description: "",
    })

    const handleDeleteTask = (id) => {
        deleteTask(category._id, id).then(() => {alert('se ha eliminado correctamente'); fetchData()}).catch((err) => alert("error"))
      }
  
      const handleCreateTask = () => {
          createTask(task, category._id).then(() => {
              alert('Task created')
              fetchData();
              setOpenCreateTask(false);
          }).catch(() => {
              alert('Task not created')
          })
  
      }

    return (
        <>
        <div key={category._id} className="mx-auto max-w-2xl   rounded-3xl ring-1 ring-gray-200 my-4 lg:mx-0 lg:flex lg:max-w-none">
          <div  className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{category.name}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {category.description}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Lista de tareas</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6"
            >
              {category?.task?.map((task) => (
                <li key={task._id} className="flex justify-between gap-x-3">
                    <div className="flex">

                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {task.name}
                    </div>
                    <a
                  onClick={() => handleDeleteTask(task._id)}
                  className="relative z-10 cursor-pointer rounded-full bg-red-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-red-500"
                >
                  Eliminar
                </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Crea una nueva tarea</p>
                <a
                  href="#"
                  onClick={() => setOpenCreateTask(true)}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Crear tarea
                </a>
              </div>
            </div>
          </div>
        </div>
        <Modal titulo="Crear Tablero" onClick={() => handleCreateTask()} open={openCreateTask} setOpen={setOpenCreateTask} >
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre de la tarea
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="text"
                  type="text"
                  onChange={(e) => setTask({...task, name: e.target.value})}
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Descripcion de la tarea
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="text"
                  type="text"
                  onChange={(e) => setTask({...task, description: e.target.value})}
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      
        </Modal>
        </>
    )
}