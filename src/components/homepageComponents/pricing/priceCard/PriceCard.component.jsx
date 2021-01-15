import React, { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./PriceCard.styled"

const PriceCard = ({
  title,
  monthly_price,
  annual_price,
  features,
  btn_label,
  highlight,
  isMonthly,
  handleSelect,
  id,
  price,
}) => {
  const [selected, setSelected] = useState(highlight)
  return (
    <Card.container
      onClick={() => {
        handleSelect(id)
        setSelected(!selected)
      }}>
      <Card.card
        highlight={
          price.includes(annual_price) || price.includes(monthly_price)
            ? selected
            : false
        }>
        <Card.cardHeader>
          <Card.product>{title}</Card.product>
          <Card.price>{!isMonthly ? annual_price : monthly_price}</Card.price>
        </Card.cardHeader>
        <Card.features>
          {features.map((features, id) => {
            return (
              <React.Fragment key={id}>
                <p>
                  <FontAwesomeIcon
                    icon="check"
                    style={{ marginRight: "1.1rem" }}
                  />
                  {features}
                </p>
              </React.Fragment>
            )
          })}
        </Card.features>
        <Card.label>{btn_label}</Card.label>
      </Card.card>
    </Card.container>
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
