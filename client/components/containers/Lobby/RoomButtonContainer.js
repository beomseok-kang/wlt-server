import RoomButtonPresenter from "../../presenters/Lobby/RoomButtonPresenter";
import { getTeamName } from "../../../lib/funcLib";

function RoomButtonContainer({ team, currentNum, maxNum }) {
  const teamName = getTeamName(team);

  return (
    <RoomButtonPresenter team={team} currentNum={currentNum} maxNum={maxNum}>
      {teamName}
    </RoomButtonPresenter>
  );
}

export default RoomButtonContainer;
