"use client"
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader } from "@mui/material"
import { useAtom, atom, useAtomValue } from "jotai"
import { todoListAtom, doneListAtom } from "../atoms"
import DeleteIcon from '@mui/icons-material/Delete';

export default function DoneList() {
  const [todoList, setTodoList] = useAtom(todoListAtom)
  const [doneList, setDoneList] = useAtom(doneListAtom)

  const onToDoClick = (index: number) => {
    setTodoList((prev) => [...prev, doneList[index]])
    setDoneList((prev) => prev.filter((_, i) => i !== index))
  }
  const onToDoDelete = (index: number) => {
    setDoneList((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <List subheader={<ListSubheader>Done列表</ListSubheader>}>
        {doneList.map((todo, index) => (
          <ListItem key={index} disablePadding secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onToDoDelete(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemButton onClick={() => onToDoClick(index)}>
              <ListItemText primary={todo} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
