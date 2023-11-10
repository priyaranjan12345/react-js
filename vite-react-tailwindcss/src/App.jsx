
import './App.css'
import Card from './components/card'

function App() {
  let product = {
    product_name: "MackBook",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 299.90
  }

  // let arr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card product={product} />
    </>
  )
}

export default App
