import RoomListPresenter from "../../presenters/Lobby/RoomListPresenter";
import RoomButtonContainer from "./RoomButtonContainer";
import teams from "../../../teams.json";
import { getMaxNum } from "../../../lib/funcLib";
import { getNumPeopleInRoom } from "../../../api/socket";

function RoomListContainer() {
  const numPeople = getNumPeopleInRoom();

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
