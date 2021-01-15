import React, { useState } from "react"
import { subscriptions } from "../../../utils/data"
import PricingTableTitle from "../../common/title/Title.component"
import PricingCard from "./priceCard/PriceCard.component"
import PricingTable from "./Pricing.styled"

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false)
  const [price, setPrice] = useState(["$20", "$192"])

  const handleSelect = (id) => {
    const sub = subscriptions.find((s) => id === s.id)
    const prices = [sub.annual_price, sub.monthly_price]
    setPrice(prices)
  }
  return (
    <PricingTable.background id="pricing">
      <PricingTable.container>
        <PricingTable.header>
          <PricingTableTitle text="Pricing" />
          <PricingTable.selectBg>
            <PricingTable.slider
              sliderOn={!isMonthly}
              onClick={() => (isMonthly ? setIsMonthly(false) : null)}>
              Bill Yearly
            </PricingTable.slider>
            <PricingTable.slider
              sliderOn={isMonthly}
              onClick={() => (!isMonthly ? setIsMonthly(true) : null)}>
              Bill Monthly
            </PricingTable.slider>
          </PricingTable.selectBg>
        </PricingTable.header>
        <PricingTable.content>
          {subscriptions.map(({ id, ...otherProps }) => (
            <PricingCard
              className="col-span-1"
              key={id}
              id={id}
              {...otherProps}
              isMonthly={isMonthly}
              handleSelect={handleSelect}
              price={price}
            />
          ))}
        </PricingTable.content>
      </PricingTable.container>
    </PricingTable.background>
  )
}

export default Pricing
