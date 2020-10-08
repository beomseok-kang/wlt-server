import RoomListPresenter from "../../presenters/Lobby/RoomListPresenter";
import RoomButtonContainer from "./RoomButtonContainer";
import teams from "../../../teams.json";
import { getMaxNum } from "../../../lib/funcLib";

function RoomListContainer({ numPeople }) {
  return (
    <RoomListPresenter>
      {teams.map((team) => {
        return (
          <RoomButtonContainer
            key={team}
            maxNum={getMaxNum(team)}
            currentNum={numPeople[team]}
            team={team}
          />
        );
      })}
    </RoomListPresenter>
  );
}

export default RoomListContainer;
