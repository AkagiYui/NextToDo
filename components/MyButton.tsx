"use client"
import * as React from "react"
import Button from "@mui/material/Button"
import { useAtom, atom } from "jotai"

export default function ButtonUsage() {
  const [count, setCount] = useAtom(atom(0))

  const onButtonClick = () => {
    setCount(count + 1)
  }

  return (
    <Button variant="contained" onClick={onButtonClick}>
      Count: {count}
    </Button>
  )
}
