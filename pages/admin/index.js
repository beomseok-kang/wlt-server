import { useState } from "react";
import axios from "axios";
import { ENDPOINT_LOGIN, ENDPOINT_URL } from "../../client/api/socket";

function Index() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  const onChangeId = (event) => {
    setId(event.target.value);
  };
  const onChangePw = (event) => {
    setPw(event.target.value);
  };
  const onChangeUrl = (event) => {
    setUrl(event.target.value);
  };
  const onSubmitLoginForm = async (event) => {
    event.preventDefault();
    const result = await axios.post(ENDPOINT_LOGIN, {
      id,
      pw,
    });
    if (result.status === 200) {
      setIsAdmin(true);
    } else {
      setError("incorrect credential");
    }
  };
  const onSubmitUrlForm = async (event) => {
    event.preventDefault();
    const data = { url };
    const result = await axios.post(ENDPOINT_URL, data);
    if (result.status === 200) {
      console.log("changed");
    } else {
      console.error("error: " + result.data);
    }
  };

  return isAdmin ? (
    <div>
      <h1>Change the youtube url to:</h1>
      <form onSubmit={onSubmitUrlForm}>
        <input value={url} onChange={onChangeUrl} />
        <button type="submit">Submit</button>
      </form>
    </div>
  ) : (
    <form onSubmit={onSubmitLoginForm}>
      <div>
        <label>ID</label>
        <input value={id} onChange={onChangeId} />
      </div>
      <div>
        <label>Password</label>
        <input value={pw} onChange={onChangePw} />
      </div>
      <div style={{ color: "red" }}>{error}</div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Index;
