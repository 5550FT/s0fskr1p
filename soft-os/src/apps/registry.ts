import type { ComponentType } from "react"
import { AboutApp } from "./AboutApp"
import { TerminalApp } from "./TerminalApp"

export const AppRegistry = {
  about: {
    title: "About",
    component: AboutApp
  },
  terminal: {
    title: "Terminal",
    component: TerminalApp
  }
} as const

export type AppID = keyof typeof AppRegistry
