import { create } from "zustand"
import { nanoid } from "nanoid"
import type { AppID } from "../apps/registry"

/* ---------- TYPES ---------- */

export type WindowState = {
  id: string
  appId: AppID
  title: string
  minimized: boolean
  zIndex: number
}

type OSState = {
  windows: WindowState[]
  zCounter: number
  startOpen: boolean
}

type OSActions = {
  openWindow: (appId: AppID) => void
  closeWindow: (id: string) => void
  focusWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  setStartOpen: (open: boolean) => void
}

/* ---------- STORE ---------- */

export const useOS = create<OSState & OSActions>((set, get) => ({
  /* state */
  windows: [],
  zCounter: 1,
  startOpen: false,

  /* actions */
  setStartOpen: open => set({ startOpen: open }),

  openWindow: appId => {
    const id = nanoid()
    const z = get().zCounter + 1

    set(state => ({
      zCounter: z,
      windows: [
        ...state.windows,
        {
          id,
          appId,
          title: appId, // replaced later with registry title
          minimized: false,
          zIndex: z
        }
      ]
    }))
  },

  closeWindow: id =>
    set(state => ({
      windows: state.windows.filter(w => w.id !== id)
    })),

  focusWindow: id => {
    const z = get().zCounter + 1
    set(state => ({
      zCounter: z,
      windows: state.windows.map(w =>
        w.id === id ? { ...w, zIndex: z, minimized: false } : w
      )
    }))
  },

  minimizeWindow: id =>
    set(state => ({
      windows: state.windows.map(w =>
        w.id === id ? { ...w, minimized: true } : w
      )
    }))
}))
