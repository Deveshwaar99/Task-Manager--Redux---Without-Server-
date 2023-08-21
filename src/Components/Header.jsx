import { useState } from "react"
import ShowModal from "./ShowModal"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import { useDispatch } from "react-redux"
import { addTodo } from "../Store/index"

function Header() {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const callDispatch = (taskObject) => {
    dispatch(addTodo(taskObject))
  }
  const buttonStyles = {
    color: "white",
    backgroundColor: "#713fff",
    borderRadius: "14px",
    fontWeight: 600,
    fontSize: "16px",
    boxShadow: "0 6px 12px rgba(113,63,255,.25)",
  }
  return (
    <div>
      <div className="flex flex-row justify-between my-8">
        <h1 className="font-bold text-4xl mx-1">Task List</h1>
        <div className=" mx-1 mt-0">
          <Button
            style={buttonStyles}
            size="large"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setOpen(true)}
          >
            Add Task
          </Button>
        </div>
      </div>
      <ShowModal
        open={open || false}
        setOpen={setOpen}
        callDispatch={callDispatch}
        currentTask=""
        currentPriority="high"
      />
    </div>
  )
}
export default Header
