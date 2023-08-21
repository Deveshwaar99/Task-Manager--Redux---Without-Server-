import Header from "./Header"
import TodoList from "./TodoList"
function Home() {
  return (
    <div className=" bg-slate-100 flex justify-center h-screen">
      <div className=" w-2/5">
        <Header />
        <TodoList />
      </div>
    </div>
  )
}
export default Home
