import Link from "next/link";
import React from "react";

function UnfoundPage() {
  return (
    <>
      <div>Page Not Found</div>
      <Link href="/lobby">To Lobby</Link>
    </>
  );
}

export default UnfoundPage;
