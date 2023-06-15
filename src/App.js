import { Text,ChakraProvider, Input,Button} from '@chakra-ui/react'
import {useState,useContext} from 'react'
import TodoList from './TodoList'
import taskdata from './tasks'
import { v4 as uuidv4 } from 'uuid';


function App(){
  const [task,setTask]=useState('')
  const [tasklist,settaskList]=useState(taskdata)
  const taskvalue=(e)=>{
    setTask(e.target.value)
    console.log(e.target.value)
  }
  const handleSubmit=()=>{
    if(task.trim().length === 0 ){
      alert("Empty strings not allowed")
      return
    }
    console.log(task)
    const newtask={
      id:uuidv4(),
      text:task
    }
    settaskList([...tasklist,newtask])
    setTask('')
    localStorage.setItem("lastname", tasklist);
  }

  const deletetask=(id)=>{
    if(window.confirm('Have you completed this task??')){
      settaskList(tasklist.filter((item)=>item.id!==id))
    }
  }

  return (
    <ChakraProvider>
    <div style={{display:'flex',justifyContent:'center',margin:"5vh"}}>
    <Text fontSize='5xl'>To Do List</Text>
    </div>
    <div style={{display:'flex',justifyContent:'center',marginBottom:"5vh"}}>
    <Input placeholder='Enter a task' maxWidth={'300px'} value={task} onChange={taskvalue} />
    <Button colorScheme='teal' variant='outline' marginLeft={'1vw'} onClick={handleSubmit}>
    Send</Button>
    </div>
    <TodoList tasklist={tasklist} handleDelete={deletetask}/>


    
  </ChakraProvider>
  )
}

export default App
