"use client";
import Tasks from "./components/Tasks/Tasks";
import { useGlobalState } from "./context/globalcontextprovder";

export default function Home() {
  const { tasks } = useGlobalState();

  return <Tasks title="All Tasks" tasks={tasks} />;
}
