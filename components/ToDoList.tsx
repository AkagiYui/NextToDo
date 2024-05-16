"use client"
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader } from "@mui/material"
import { useAtom, atom, useAtomValue } from "jotai"
import { todoListAtom, doneListAtom } from "../atoms"
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoList() {
  const [todoList, setTodoList] = useAtom(todoListAtom)
  const [doneList, setDoneList] = useAtom(doneListAtom)

  const onTodoClick = (index: number) => {
    setDoneList((prev) => [...prev, todoList[index]])
    setTodoList((prev) => prev.filter((_, i) => i !== index))
  }
  const onTodoDelete = (index: number) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <List subheader={<ListSubheader>ToDo列表</ListSubheader>}>
        {todoList.map((todo, index) => (
          <ListItem key={index} disablePadding secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onTodoDelete(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemButton onClick={() => onTodoClick(index)}>
              <ListItemText primary={todo} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
