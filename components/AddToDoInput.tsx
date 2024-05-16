"use client"
import { TextField } from "@mui/material";
import { atom, useSetAtom } from "jotai"
import { todoListAtom } from "../atoms"

export default function AddToDoInput() {
  const setTodoList = useSetAtom(todoListAtom)
  const inputProps = {
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const target = e.target as HTMLInputElement
        setTodoList((prev) => [...prev, target.value])
        target.value = ""
      }
    }
  }

  return (
    <TextField id="outlined-basic" label="写todo" variant="outlined" inputProps={inputProps} />
  )
}
