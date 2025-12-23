import type { AppID } from "../apps/registry"



export type WindowState = {
  id: string
  title: string
  appId: {AppID:string}
  x: number
  y: number
  zIndex: number
}
