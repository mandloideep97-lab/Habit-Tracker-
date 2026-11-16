import { isSameDay } from "date-fns";
import {  type ReactNode } from "react";
import { HabitContext, type Habit } from "./useHabit";
import { useLocalStorage } from "../Hooks/useLocalStorage";

type HabitProviderProps = {
  children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("Habits ", []);

  function addHabit(name: string) {
    setHabits((curr) => [
      ...curr,
      { id: crypto.randomUUID(), name, completions: [] },
    ]);
  }

  function deleteHabit(id: string) {
    setHabits((curr) => curr.filter((h) => h.id !== id));
  }

  function toggleHabit(id: string, date: Date) {
    setHabits((curr) =>
      curr.map((h) => {
        if (h.id !== id) return h;

        const alredyDone = h.completions.some((c) => isSameDay(c, date));
        const completions = alredyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date];

        return { ...h, completions };
      }),
    );
  }
  return (
    <HabitContext value={{ habits, addHabit, toggleHabit, deleteHabit }}>
      {" "}
      {children}
    </HabitContext>
  );
}
