import { tw } from "tailwindcss-classnames"

export const section = tw("grid grid-rows-2 bg-bg-blue p-8")

export const pricingRoundedContainer = tw(
  "row-span-2 text-center grid grid-rows-2 justify-center"
)

export const sliderBg = tw(
  "w-40 h-8 bg-light-gray rounded row-span-1 flex flex-row p-1"
)

export const sliderBtnOn = tw(
  "bg-white rounded h-full w-1/2 text-micro font-semibold antialiased shadow-sm focus:outline-none transition-all duration-500 ease-in-out"
)

export const sliderBtnOff = tw(
  "bg-transparant rounded h-full w-1/2 text-micro font-semibold antialiased focus:outline-none transition-all duration-500 ease-in-out"
)
