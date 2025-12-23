import { useOS } from "./os/store"
import { Window } from "./components/Window"
import { Taskbar } from "./components/Taskbar"
<link rel="stylesheet" href="index.css" />
export default function App() {
  const windows = useOS(s => s.windows)

  return (
    <div className="desktop">
      {windows.map(win => (
        <Window key={win.id} win={win} />
      ))}

      <Taskbar />
      
    </div>
  )
}
