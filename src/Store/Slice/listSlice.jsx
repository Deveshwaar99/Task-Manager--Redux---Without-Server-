import { createSlice, nanoid } from "@reduxjs/toolkit"

const listSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({ ...action.payload, id: nanoid() })
    },
    deleteTodo(state, action) {
      //recieve id,task,priority as payload
      return state.filter((todo) => todo.id !== action.payload)
    },
    editTodo(state, action) {
      //recieve id as payload
      const { payload } = action
      return state.map((item) => {
        if (payload.id === item.id) {
          return { ...item, task: payload.task, priority: payload.priority }
        }
        return item
      })
    },
  },
})

export const { addTodo, deleteTodo, editTodo } = listSlice.actions
export const listReducer = listSlice.reducer
