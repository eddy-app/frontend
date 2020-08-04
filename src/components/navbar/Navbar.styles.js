import { tw } from "tailwindcss-classnames"

export const header = tw(
  "flex",
  "item-center",
  "justify-between",
  "flex-no-wrap",
  "items-center"
)

export const logo = tw("font-semibold", "antialiased", "text-2xl")

export const publicNavigation = tw("grid", "grid-cols-5", "items-center")

export const privateNavigation = tw("grid", "grid-cols-4", "items-center")

export const navlist = tw("text-center")

export const navlink = tw("font-medium", "col-span-1")

export const ctaSignup = tw(
  "col-span-1",
  "bg-transparent",
  "hover:bg-primary",
  "text-black-500",
  "font-medium",
  "hover:text-white",
  "py-2",
  "px-4",
  "border",
  "border-black",
  "hover:border-transparent",
  "rounded",
  "transition-all",
  "duration-500",
  "ease-in-out"
)

export const ctaDashboard = tw(
  "col-span-1",
  "bg-blue-600",
  "hover:bg-blue-700",
  "text-white",
  "font-medium",
  "hover:text-white",
  "py-2",
  "px-4",
  "rounded",
  "transition-all",
  "duration-200",
  "ease-in-out"
)
