import React, { useEffect, useState } from "react"


const Todo = () => {
    const[todo, setTodo] = useState(
        JSON.parse(localStorage.getItem('todo')) || []
    )
    const[completeTask, setCompleteTask] = useState(
        JSON.parse(localStorage.getItem('completeTask')) || [])

    const [error, setError] = useState(null)

    const [item, setItem] = useState({ value:"" })

    const handleChange = (event) => {
        setError(null)
        const {value} = event.target;
        setItem((prev)=>({...prev, id:Date.now(), value:value}) )    
    }

    useEffect(()=>{
        // Use today's date for immediate testing of deletion.
        const today = new Date().toISOString().slice(0,10)
        const storedDate = localStorage.getItem('toDoDate')

        if (storedDate && storedDate !== today) {
            localStorage.removeItem('todo')
            localStorage.removeItem('completeTask')
            localStorage.setItem('toDoDate', today)
            setTodo([])
            setCompleteTask([])
            return
        }
        localStorage.setItem('toDoDate', today)
    },[])
    
    //handle auto save
    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(todo))
    },[todo])
    //a component can have more than one use effect. they execute in order in which they are define
    useEffect(()=>{
        localStorage.setItem('completeTask',JSON.stringify(completeTask))
    },[completeTask])

    
      
    const addTodo = (e) =>{
        e.preventDefault()
       if(!item.value.trim()){
          setError('invalid input');
          return; 
        }
        setTodo((prev)=>([...prev,item]))
        setItem({value:""})
    }

    const removeItem = (id) =>{
        // filter() creates a new array. It does not mutate the old one.
        // This means: prev is the previous state array.filter returns a new array containing only the items that pass the test.React sees a new array and rerenders correctly.
        setTodo((prev)=> prev.filter((item)=>item.id !==id))
        }
    
    const taskComplete = (id) =>{
            let item = todo.find((item) => item.id === id)
            console.log(item)
            setCompleteTask((prev)=>[...prev, item])
            removeItem(id)
    }
    
    
  return (
    <div className="pt-10 w-full md:w-5/6 mx-auto flex-1">
        <h3 className="text-center mb-6 text-green-800 text-2xl">MY To-Do</h3>
        <div className="bg-white p-2 md:p-6 rounded-2xl">
            
            <div className="flex flex-col mb-4">
                <form className="flex px-2" onSubmit={addTodo}>
                    <input type="text" value={item.value} onChange={handleChange} className="me-3 w-2/3 md:w-auto border border-gray-300 px-2"/>
                    <button className="btn bg-green-600 text-white w-1/3 md:w-auto p-1 text-xs uppercase md:text-xl">add</button>
                </form>
                {error && <small className="text-red-400">invalid input</small>}

            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 px-4 py-4 bg-emerald-50 rounded-2xl">
                    <h3 className="text-green-900 text-sm mb-4 font-semibold">recent task</h3>

                    <ul>
                        {todo.length>0 ? todo.reverse().map((list) => (
                                //  key={list.id} goes here because this div is the direct child of ul
                            <div key={list.id} className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <li className="p-1 text-green-700 text-sm">{list.value}</li>
                                    <div>
                                        <button className="text-xs bg-red-100 text-red-400 px-2 py-1 rounded" onClick={()=>removeItem(list.id)}>remove</button>
                                        <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded ms-2" onClick={()=>taskComplete(list.id)}>complete</button>
                                    </div>
                                </div>
                                <hr className="text-gray-300"></hr>
                            </div>
                        
                        )):
                            <p className="text-gray-500 text-sm">no record</p>}
                    </ul>
                </div>
               
                <div className="w-full md:w-1/2 px-2 py-4  bg-emerald-50 rounded-2xl">
                    <h3 className="text-green-900 text-sm mb-4 font-semibold">completed task</h3>
                    <ul>
                        {completeTask.length >0 ? completeTask.map((list) => (
                                    //  key={list.id} goes here because this div is the direct child of ul
                            <div key={list.id} className="mb-4">
                                <li className="p-1 text-green-700 mb-1 text-sm">{list.value}</li>   
                                <hr className="text-gray-300"></hr>
                            </div>
                        
                        )):
                        <p className="text-gray-500 text-sm text-center">no record</p>}
                    </ul>
                </div>
                
                

                
            </div>
        </div>
                

    </div>
  )
}

export default Todo