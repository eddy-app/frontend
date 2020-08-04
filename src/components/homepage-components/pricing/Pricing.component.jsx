import React, { useState } from "react"
import { subscriptions } from "../../../utils/data"
import Title from "../../common/Title.component"
import PricingCard from "./price-card/PriceCard.component"

import {
  section,
  pricingRoundedContainer,
  sliderBg,
  sliderBtnOn,
  sliderBtnOff,
} from "./Pricing"

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false)
  return (
    <section id="pricing" className={section}>
      <div className="container mx-auto w-840 mt-4 bg-white rounded py-6 px-10 border-box">
        <div className={pricingRoundedContainer}>
          <Title text="Pricing" className="row-span-1" />
          <div className={sliderBg}>
            <button
              className={!isMonthly ? sliderBtnOn : sliderBtnOff}
              onClick={() => (isMonthly ? setIsMonthly(false) : null)}>
              Bill Yearly
            </button>
            <button
              className={isMonthly ? sliderBtnOn : sliderBtnOff}
              onClick={() => (!isMonthly ? setIsMonthly(true) : null)}>
              Bill Monthly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 flow-row gap-10px">
          {subscriptions.map(({ id, ...otherProps }) => (
            <PricingCard
              className="col-span-1"
              id={id}
              {...otherProps}
              isMonthly={isMonthly}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
