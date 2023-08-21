import { useState } from "react"
import ShowModal from "./ShowModal"
import { useDispatch } from "react-redux"
import { deleteTodo, editTodo } from "../Store/index"
import { Button, Progress } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
// eslint-disable-next-line react/prop-types
function TodoItem({ task, priority, id }) {
  const dispatch = useDispatch()
  const color = () => {
    if (priority === "MEDIUM") {
      return " text-yellow-400"
    } else if (priority === "LOW") {
      return " text-green-500"
    } else {
      return "text-red-500"
    }
  }
  //Progress button and Progress bar
  const [progress, setProgress] = useState("To Do")
  const [percent, setPercent] = useState(0)
  function handleProgress() {
    if (progress === "To Do") {
      setProgress(() => "In Progress")
      setPercent(50)
    } else if (progress === "In Progress") {
      setProgress(() => "Completed")
      setPercent(100)
    } else {
      setProgress(() => "To Do")
      setPercent(0)
    }
  }
  // Show Modal for Edit
  const [open, setOpen] = useState(false)
  function handleEdit() {
    setOpen(true)
  }

  //Delete a Todo
  function handleDelete() {
    dispatch(deleteTodo(id))
  }

  //callDispatch for edit
  function callDispatch(taskobject) {
    dispatch(editTodo({ id, ...taskobject }))
  }

  return (
    <div className="bg-white mt-4 py-6 px-8 flex flex-row justify-between rounded-3xl items-center">
      <div className=" w-1/5 flex flex-col">
        <span className="mb-2 text-sm font-normal text-slate-500">Task</span>
        <span className="text-base font-bold leading-tight">{task}</span>
      </div>
      <div className=" w-1/5 flex flex-col">
        <span className="mb-2 text-sm font-normal text-slate-500">
          Priority
        </span>
        <span className={` text-base font-bold leading-tight ${color()}`}>
          {priority}
        </span>
      </div>
      <div className=" w-1/5 cursor-pointer rounded-lg text-xs font-bold outline-none">
        <Button onClick={handleProgress}>{progress}</Button>
      </div>
      <div className=" w-1/5 py-3 flex flex-row justify-center">
        <Progress size={20} type="circle" percent={percent} />
      </div>
      <div className=" w-1/5 flex flex-row justify-around">
        <EditOutlined style={{ fontSize: 25 }} onClick={handleEdit} />
        <DeleteOutlined onClick={handleDelete} style={{ fontSize: 25 }} />
      </div>
      <ShowModal
        open={open || false}
        setOpen={setOpen}
        currentTask={task}
        currentPriority={priority}
        callDispatch={callDispatch}
      />
    </div>
  )
}

export default TodoItem
