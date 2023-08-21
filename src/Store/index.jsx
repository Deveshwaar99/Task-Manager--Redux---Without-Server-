import { configureStore } from "@reduxjs/toolkit"
import { listReducer } from "./Slice/listSlice"
import { addTodo, deleteTodo, editTodo } from "./Slice/listSlice"

const store = configureStore({
  reducer: {
    todoList: listReducer,
  },
})
export { addTodo, deleteTodo, editTodo }
export default store
