async function dummyAsync(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export const getNumPeopleInRoom = () => {
  const dummyNumPeople = {
    all: 400,
    dwg: 400,
    drx: 400,
    gen: 400,
    t1: 400,
    af: 150,
    kt: 150,
    sb: 150,
    dyn: 150,
    sp: 150,
    hle: 500,
  };
  return dummyNumPeople;
};

const developing = true;

export const ENDPOINT = developing
  ? "http://localhost:8000/room"
  : "http://52.78.109.45:80/room";

export const ENDPOINT_URL = developing
  ? "http://localhost:8000/admin/posturl"
  : "http://52.78.109.45:80/admin/posturl";

export const ENDPOINT_LOGIN = developing
  ? "http://localhost:8000/admin/login"
  : "http://52.78.109.45:80/admin/login";
