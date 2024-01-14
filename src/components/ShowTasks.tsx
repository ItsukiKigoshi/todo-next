import { Task } from "@/type/types";

export default function ShowTasks(props: { tasks: Task[] }) {
  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <div key={task.id}>
            <li>{task.title}</li>
            {task.due_on ? <p>Due: {task.due_on.toString()}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
