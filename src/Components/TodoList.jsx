import TodoItem from "./TodoItem"
import { useSelector } from "react-redux/es/hooks/useSelector"
function TodoList() {
  const data = useSelector((state) => state.todoList)
  const renderedList = data.map((item) => (
    <div key={item.id}>
      <TodoItem task={item.task} priority={item.priority} id={item.id} />
    </div>
  ))
  return <>{renderedList}</>
}
export default TodoList
