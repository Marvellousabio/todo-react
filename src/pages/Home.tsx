
import Navbar from '../components/Navbar'
import Alert from '../components/Alert'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'
import FilterButtons from '../components/FilterButtons'
import TodoCounter from '../components/TodoCounter'

const Home = () => {
  return (
    <div className="w-full m-0 ">
      <Navbar/>
      <div className="max-w-md mx-auto md:mt-10">
      <h1 className="text-2xl font-bold mb-4 flex md:hidden">Todo App</h1>
      <Alert />
      <TodoInput />
      <TodoList />
      <FilterButtons />
      <TodoCounter />
      </div>
      </div>
  )
}

export default Home