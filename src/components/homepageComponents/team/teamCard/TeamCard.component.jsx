import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Member from "./TeamCard.styled"

const TeamCard = (props) => {
  const { picture, name, title, github, linkedin, portfolio } = props
  return (
    <Member.container>
      <Member.thumbnail src={picture} alt={name} />
      <Member.info>
        <Member.h4>{name}</Member.h4>
        <Member.cardText>{title}</Member.cardText>
      </Member.info>
      {!portfolio && (
        <Member.links>
          <Member.link href={github}>
            <FontAwesomeIcon icon={["fab", "github-alt"]} size="2x" />
          </Member.link>
          <Member.link href={linkedin}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </Member.link>
        </Member.links>
      )}
      {portfolio && (
        <Member.complete>
          <Member.link href={github}>
            <FontAwesomeIcon icon={["fab", "github-alt"]} size="2x" />
          </Member.link>
          <Member.link href={linkedin}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </Member.link>
          <Member.link href={portfolio}>
            <FontAwesomeIcon icon={["fa", "code"]} size="2x" />
          </Member.link>
        </Member.complete>
      )}
    </Member.container>
  )
}

TeamCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
}

export default TeamCard
