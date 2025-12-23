import { StartButton } from "./StartButton";
import StartMenu from "./StartMenu";

export function Taskbar() {
  return (
    <>
      <StartMenu />
      <div className="taskbar">
        <StartButton />
      </div>
    </>
  )
}
