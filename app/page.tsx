import ToDoList from "@/components/ToDoList"
import AddToDoInput from "@/components/AddToDoInput"
import DoneList from "@/components/DoneList"

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
      <ToDoList />
        <AddToDoInput />
        <DoneList />
      </div>
    </main>
  )
}
