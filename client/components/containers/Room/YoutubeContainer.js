import YoutubePresenter from "../../presenters/Room/YoutubePresenter";
import json from "../../../url.json";

function YoutubeContainer() {
  const url = json.url;

  return <YoutubePresenter url={url} />;
}

export default YoutubeContainer;
