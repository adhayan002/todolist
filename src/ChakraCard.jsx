import { Card, CardHeader, CardBody, CardFooter, ChakraProvider } from '@chakra-ui/react'
import { Text, Input,Button,Stack,Heading} from '@chakra-ui/react'

function ChakraCard({task,handleDelete}) {
    
  return (
    <div style={{display:'flex',justifyContent:'center',marginBottom:"3vh"}}>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        maxWidth={'500px'}
        minWidth={'300px'}
        >
  
        <Stack>
        <CardBody>
            <Text py='2'>
           {task.text}
        </Text>
        </CardBody>
  
        <CardFooter>
        <Button variant='link' colorScheme='teal' onClick={()=>handleDelete(task.id)}>
          Delete
        </Button>
         </CardFooter>
        </Stack>
        </Card>
    </div>
  )
}

export default ChakraCard
