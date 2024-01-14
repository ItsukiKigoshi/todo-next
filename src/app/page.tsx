import ShowTasks from "@/components/ShowTasks";
import { Task } from "@/type/types";

export default async function Home() {
  const response = await fetch(`http://localhost:8000/todo/list`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const activeTasks: Task[] = await response.json();

  return (
    <div>
      <h1>Here&apos;s the Tasks.</h1>
      <ul>
        <ShowTasks tasks={activeTasks} />
      </ul>
    </div>
  );
}
