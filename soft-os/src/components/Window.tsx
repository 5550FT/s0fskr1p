import React from "react"
import { useOS, type WindowState } from "../os/store"
import { AppRegistry } from "../apps/registry"

export function Window({ win }: { win: WindowState }) {
  const focusWindow = useOS(s => s.focusWindow)
  const closeWindow = useOS(s => s.closeWindow)
  const minimizeWindow = useOS(s => s.minimizeWindow)

  if (win.minimized) return null

  const app = AppRegistry[win.appId]
  const AppComponent = app.component

  return (
    <div
      className="window"
      style={{ zIndex: win.zIndex }}
      onMouseDown={() => focusWindow(win.id)}
    >
      <div className="titlebar">
        <span>{app.title}</span>
        <div className="window-controls">
          <button onClick={() => minimizeWindow(win.id)}>_</button>
          <button onClick={() => closeWindow(win.id)}>×</button>
        </div>
      </div>

      <div className="window-content">
        <AppComponent />
      </div>
    </div>
  )
}
