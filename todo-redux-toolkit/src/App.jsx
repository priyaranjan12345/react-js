import { Provider } from 'react-redux'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <> 
      <Provider store={store}>
        <div className="bg-[#172842] min-h-screen py-20">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-slate-700">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <AddTodo />
            </div>
            <div className="flex flex-wrap gap-y-3">
              <Todos />
            </div>
          </div>
        </div>
      </Provider>
    </>
  )
}

export default App
