import React from "react"
import { team } from "../../../utils/data"
import TeamCard from "./teamCard/TeamCard.component"
import Page from "../../../App.styled"
import List from "./Team.styled"

const TeamList = () => {
  return (
    <List.container id="team">
      <Page.container>
        <List.header>Team</List.header>
        <List.cards>
          {team.map(({ id, ...otherProps }) => (
            <TeamCard key={id} {...otherProps} />
          ))}
        </List.cards>
      </Page.container>
    </List.container>
  )
}

export default TeamList
