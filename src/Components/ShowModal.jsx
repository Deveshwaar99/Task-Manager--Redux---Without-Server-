import { useState, useEffect, useRef } from "react"
import { Button, Modal } from "antd"
import { Input } from "antd"
import Buttonmui from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import PropTypes from "prop-types"

const ShowModal = ({
  open,
  setOpen,
  currentTask,
  currentPriority,
  callDispatch,
}) => {
  const [task, setTask] = useState(currentTask || "")
  const [priority, setPriority] = useState(currentPriority || "High")
  const [confirmLoading, setConfirmLoading] = useState(false)

  // FOCUS ON THE INPUT FIELD
  const inputRef = useRef(null)
  useEffect(() => {
    if (open) {
      inputRef.current.focus()
    }
  })

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setConfirmLoading(false)
      callDispatch({
        task: task.toUpperCase(),
        priority: priority.toUpperCase(),
      })
      setOpen(false)
      setTask("")
      setPriority("High")
    }, 500)
  }

  const handleCancel = () => {
    setTask("")
    setPriority("High")
    setOpen(false)
  }

  return (
    <Modal
      centered
      width={575}
      open={open || false}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
      className="rounded-full"
      footer={
        <Button
          className="bg-indigo-600"
          type="primary"
          loading={confirmLoading}
          onClick={handleOk}
          disabled={!task}
        >
          Add
        </Button>
      }
    >
      <div>
        <h1 className="text-slate-950 text-2xl font-bold mb-7">Add Task</h1>
        <div>
          <h3 className="text-gray-500 text-lg mb-2">Task</h3>
          <Input
            ref={inputRef}
            maxLength={12}
            className="rounded-2xl w-11/12 p-4 shadow-md mb-4 text-md"
            placeholder="Type your task here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-gray-500 text-base mb-2">Priority</h3>
          <Stack direction="row" spacing={2}>
            <Buttonmui
              variant={priority === "High" ? "contained" : "outlined"}
              color="error"
              onClick={() => setPriority("High")}
            >
              High
            </Buttonmui>
            <Buttonmui
              variant={priority === "Medium" ? "contained" : "outlined"}
              color="secondary"
              onClick={() => setPriority("Medium")}
            >
              Medium
            </Buttonmui>
            <Buttonmui
              variant={priority === "Low" ? "contained" : "outlined"}
              color="success"
              onClick={() => setPriority("Low")}
            >
              Low
            </Buttonmui>
          </Stack>
        </div>
      </div>
    </Modal>
  )
}

ShowModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  currentTask: PropTypes.string.isRequired,
  currentPriority: PropTypes.string.isRequired,
  callDispatch: PropTypes.func.isRequired,
}

export default ShowModal
