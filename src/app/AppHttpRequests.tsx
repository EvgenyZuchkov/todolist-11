import {type ChangeEvent, type CSSProperties, useEffect, useState} from 'react'
import Checkbox from '@mui/material/Checkbox'
import {CreateItemForm} from '@/common/components/CreateItemForm/CreateItemForm'
import {EditableSpan} from '@/common/components/EditableSpan/EditableSpan'
import axios from 'axios'

const apiKey = '040f6ebf-f516-44f8-af71-1c8422758929'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxOTA3IiwibG9naW4iOiJqZW55YXp1Y2hrb3YiLCJpYXQiOjE3OTQ5NDMyNzgsImV4cCI6MTc5NDk1MDQ3OCwianRpIjoiZDc4OWYwYjMtMWYwMS00ZjdjLWE1NDYtYzkwYTI2MTQyODlhIn0.kKafSTBc22hRIFI4b6sC0TEmPp2NkvAK5zXMA1RqgTk"

export const AppHttpRequests = () => {
  const [todolists, setTodolists] = useState<any>([])
  const [tasks, setTasks] = useState<any>({})

  useEffect(() => {
    axios.get("https://trelly.it-incubator.app/api/1.0/boards/my", {
      headers: {
        Authorization: `Bearer ${token}`,
        "api-key": apiKey,
      }
    }).then((res) => {
      console.log(res.data)
    })
  }, [])

  const createTodolist = (title: string) => {}

  const deleteTodolist = (id: string) => {}

  const changeTodolistTitle = (id: string, title: string) => {}

  const createTask = (todolistId: string, title: string) => {}

  const deleteTask = (todolistId: string, taskId: string) => {}

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>, task: any) => {}

  const changeTaskTitle = (task: any, title: string) => {}

  return (
      <div style={{margin: '20px'}}>
        <CreateItemForm onCreateItem={createTodolist}/>
        {todolists.map((todolist: any) => (
            <div key={todolist.id} style={container}>
              <div>
                <EditableSpan value={todolist.title}
                              onChange={title => changeTodolistTitle(todolist.id, title)}/>
                <button onClick={() => deleteTodolist(todolist.id)}>x</button>
              </div>
              <CreateItemForm onCreateItem={title => createTask(todolist.id, title)}/>
              {tasks[todolist.id]?.map((task: any) => (
                  <div key={task.id}>
                    <Checkbox checked={task.isDone}
                              onChange={e => changeTaskStatus(e, task)}/>
                    <EditableSpan value={task.title}
                                  onChange={title => changeTaskTitle(task, title)}/>
                    <button onClick={() => deleteTask(todolist.id, task.id)}>x</button>
                  </div>
              ))}
            </div>
        ))}
      </div>
  )
}

const container: CSSProperties = {
  border: '1px solid black',
  margin: '20px 0',
  padding: '10px',
  width: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
}
