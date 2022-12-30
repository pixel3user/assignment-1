import './App.css';
import { useState } from 'react';
import {AiOutlineMenu, AiFillCloseCircle} from "react-icons/ai"

function App() {

  const [menuVisible, setmenuVisible] = useState(false)
  const [dropdown1Visibility, setdropdown1Visibility] = useState(false)
  const [dropdown2Visibility, setdropdown2Visibility] = useState(false)


  const openMenu = (e) => {
    e.preventDefault()
    setmenuVisible(prev => !prev)
  }

  if(menuVisible){
    return(
      <div className='flex flex-col'>
        <div className='flex justify-end w-full'>
          <span onClick={openMenu} className="m-6">
            <AiFillCloseCircle size={30} />
          </span>
        </div>

        <div className='mt-12 flex flex-col'>
          <span className='mx-12 my-2 font-semibold'>Home</span>
          <span className='mx-12 my-2 font-semibold'>Dropdown menu</span>
          <span className='mx-12 my-2 font-semibold'>Logout</span>
        </div>
        
      </div>
    )
  }

  return (
    <div className="w-full">
      <header className="w-full flex flex-col md:px-28">

        <div className='md:hidden flex justify-end w-full'>
          <span onClick={openMenu} className="m-6">
            <AiOutlineMenu size={30} />
          </span>
        </div>

        <div className='hidden md:flex justify-end w-full md:py-8'>
          <span className='mx-6 font-semibold'>Home</span>
          <span className='mx-6 font-semibold'>Dropdown</span>
          <span className='mx-6 font-semibold'>Logout</span>
        </div>

        <div className='w-full flex flex-col justify-center items-center md:items-start mt-28 mb-4'>
          <input className='w-[90%] md:w-[25%] border-[1px] border-black rounded-md px-7 py-1 shadow-md shadow-gray-400' placeholder='Search' />
        </div>

      </header>
      <div className='md:px-28'>

        <div className='flex flex-row overflow-x-auto py-2 md:border-y-0 border-y-2 border-black'>
          
          <div className='flex flex-col'>
            <span onClick={() => setdropdown1Visibility(prev => !prev)} className='mx-3 font-semibold'>Dropdown</span>
              {
                dropdown1Visibility && (
                  <div className="z-10 w-48 bg-white border-2 mx-1 rounded shadow-md">
                    <ul className="p-3 text-sm text-gray-700">
                      <li>
                        <div className="flex items-center p-2 rounded">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 " />
                          <label className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Option 1</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center p-2 rounded">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 " />
                            <label className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Option 2</label>
                          </div>
                      </li>
                      <li>
                        <div className="flex items-center p-2 rounded">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 " />
                          <label className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Option 3</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                )
              }
          </div>
          
          <span className='mx-6 font-semibold flex flex-row'>
            <span>Filter</span>
            <span>-</span>
            <span>2</span>
          </span>
          <span className='mx-6 font-semibold flex flex-row'>
            <span>Filter</span>
            <span>-</span>
            <span>3</span>
          </span>
          <span className='mx-6 font-semibold flex flex-row'>
            <span>Filter</span>
            <span>-</span>
            <span>4</span>
          </span>
          <span className='mx-6 font-semibold flex flex-row'>
            <span>Filter</span>
            <span>-</span>
            <span>5</span>
          </span>
          <div className='flex flex-col'>
            <span onClick={() => setdropdown2Visibility(prev => !prev)} className='mx-3 font-semibold flex flex-row'>
              <span>Dropdown</span>
              <span>-</span>
              <span>2</span></span>
              {
                dropdown2Visibility && (
                  <div className="z-10 w-48 bg-white border-2 mx-1 rounded shadow-md">
                    <ul className="p-3 text-sm text-gray-700">
                      <li>
                        <div className="flex items-center p-2 rounded">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 " />
                          <label className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Option 1</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center p-2 rounded">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 " />
                            <label className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Option 2</label>
                          </div>
                      </li>
                      <li>
                        <div className="flex items-center p-2 rounded">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 " />
                          <label className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Option 3</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                )
              }
          </div>
        </div>

        <div className='flex items-center justify-center my-9 mx-6 bg-[#d9d9d9] h-52 md:mx-0 md:rounded-md md:w-[40%] md:border-2 md:border-gray-500 md:bg-white md:shadow-md md:shadow-gray-400 '>
          <span className='md:hidden'>one</span>
        </div>

        <div className='flex items-start justify-end p-3 my-9 mx-6 bg-[#d9d9d9] h-52 md:mx-0 md:rounded-md md:w-[40%] md:border-2 md:border-gray-500 md:bg-white md:shadow-md md:shadow-gray-400 '>
          <span className='md:hidden'>two</span>
        </div>

        <div className='flex flex-col items-start justify-end p-3 my-9 mx-6 bg-[#d9d9d9] h-52 md:mx-0 md:rounded-md md:w-[40%] md:border-2 md:border-gray-500 md:bg-white md:shadow-md md:shadow-gray-400 '>
          <span className='md:hidden'>three</span>
        </div>

      </div>
    </div>
  );
}

export default App;
