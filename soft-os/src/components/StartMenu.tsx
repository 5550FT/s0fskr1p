import { AppRegistry, type AppID } from "../apps/registry"
import { useOS } from "../os/store"

export default function StartMenu() {
  const openWindow = useOS(s => s.openWindow)
  const startOpen = useOS(s => s.startOpen)
  const setStartOpen = useOS(s => s.setStartOpen)

  if (!startOpen) return null

  return (
    <div className="start-menu">
      {Object.entries(AppRegistry).map(([id, app]) => (
        <div
          key={id}
          className="start-item"
          onClick={() => {
            openWindow(id as AppID)
            setStartOpen(false)
          }}
        >
          {app.title}
        </div>
      ))}
    </div>
  )
}
