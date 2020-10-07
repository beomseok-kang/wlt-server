import RoomButtonPresenter from "../../presenters/Lobby/RoomButtonPresenter";
import { getTeamName } from "../../../lib/funcLib";
import Router from "next/router";

function RoomButtonContainer({ team, currentNum, maxNum }) {
  const teamName = getTeamName(team);
  const onClick = () => {
    if (currentNum < maxNum) {
      Router.push(`/room/${team}`);
    } else {
      alert("cannot enter");
    }
  };
  return (
    <RoomButtonPresenter
      team={team}
      currentNum={currentNum}
      maxNum={maxNum}
      onClick={onClick}
    >
      {teamName}
    </RoomButtonPresenter>
  );
}

export default RoomButtonContainer;
