import { useOS } from "../os/store"

export function StartButton() {
  const startOpen = useOS(s => s.startOpen)
  const setStartOpen = useOS(s => s.setStartOpen)

  return (
    <button
      className="start-button"
      onClick={() => setStartOpen(!startOpen)}
    >
      Start
    </button>
  )
}
