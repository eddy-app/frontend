import { tw } from "tailwindcss-classnames"

export const billboardContent = tw("flex justify-between items-center")
export const billboardLeft = tw("left w-1/2 flex flex-col")
export const billboardTitle = tw(
  "font-bold antialiased font-display text-3/2xl leading-none"
)
export const billboardSentence = tw(
  "font-normal text-med antialiased mt-5 mb-5"
)
export const ctaBill = tw(
  "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-1/5 transition-all duration-200 ease-in-out"
)
export const billRight = tw("right")
