import { useState } from "react";
import { HabitForm } from "./component/HabitForm";
import { HabitList } from "./component/HabitList";
import { Header } from "./component/Header";

import { HabitProvider } from "./context/HabitProvider";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

function App() {
  const [weekOffset, setWeekOfset] = useState(0);

  const week = addWeeks(new Date(), weekOffset);
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });
  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4 ">
      <HabitProvider>
        <Header
          visibleDates={visibleDates}
          onNext={() => setWeekOfset((o) => o + 1)}
          onPrev={() => setWeekOfset((o) => o - 1)}
        />
        <br />
        <HabitForm />
        <br />
        <HabitList visibleDates={visibleDates} />
      </HabitProvider>
    </div>
  );
}

export default App;
