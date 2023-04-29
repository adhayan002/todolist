import ChakraCard from "./ChakraCard"


function TodoList({tasklist,handleDelete}) {
  return (
    tasklist.map((task)=>(
        <ChakraCard key={task.id} task={task} handleDelete={handleDelete}/>
    )
        
    )
  )
}

export default TodoList