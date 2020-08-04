import React, { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PriceCard = ({
  title,
  monthly_price,
  annual_price,
  features,
  btn_label,
  highlight,
  isMonthly,
}) => {
  const [selected, setSelected] = useState(highlight)
  return (
    <button
      onClick={() => setSelected(!selected)}
      className="bg-transparent border-transparent h-full w-full m-0 p-0 left-align outline-none rounded transition-all duration-500 ease-in-out">
      <div className="grid grid-rows-3 gap-10px rounded">
        <div className="col-span-1">{title}</div>
        <div className="col-span-1">
          {!isMonthly ? annual_price : monthly_price}
        </div>
      </div>
      <div className="col-span-1">
        {features.map((f, id) => {
          return (
            <>
              <p>
                <FontAwesomeIcon
                  icon="check"
                  style={{ marginRight: "1.1rem" }}
                />
                {features}
              </p>
            </>
          )
        })}
        <button>{btn_label}</button>
      </div>
    </button>
  )
}

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  monthly_price: PropTypes.string.isRequired,
  annual_price: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  btn_label: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
  isMonthly: PropTypes.bool.isRequired,
}

export default PriceCard
