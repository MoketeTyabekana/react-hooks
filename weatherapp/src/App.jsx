import './App.css'

function App() {


  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div className='bg-blue-800 h-screen flex justify-center items-center'>
     <div className='bg-blue-300 p-4 rounded-lg w-2/5 grid gap-3 shadow-lg'> 
     <h1 className='text-xl font-bold text-blue-950 text'>Weather App</h1>
     <input type="text" placeholder='Enter CIty Name' className='p-3 w-full bg-white rounded border-none' />
     <button className='p-3 w-full bg-blue-800 rounded border-none text-white font-bold hover:bg-blue-900'>
      Submit
     </button>
     </div>
    </div>
  )
}

export default App
