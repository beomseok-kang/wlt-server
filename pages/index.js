import Router from "next/router";
import { useEffect } from "react";

function Index() {
  useEffect(() => {
    Router.push("/lobby");
  }, []);
  return null;
}

export default Index;
