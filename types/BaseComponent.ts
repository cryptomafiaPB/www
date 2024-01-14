import { ElementType, ReactNode } from "react"

export type BaseComponent = {
  children?: ReactNode[],
  as? : ElementType,
}