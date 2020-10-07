import Axios from "axios";

function NumPeople({ json }) {
  const onClick = () => {
    console.log(json);
  };
  return (
    <>
      <button onClick={onClick}>show res</button>
    </>
  );
}

NumPeople.getInitialProps = async () => {
  const res = await Axios.get("http://localhost:8000/api/numpeople");
  const json = res.data;
  return { json };
};

export default NumPeople;
