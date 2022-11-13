import React from "react";
import Header from "../Header";
import Body from "../Body";

export default function Home() {
  return (
    <div>
      <Header title="Post" active="post" />
      <Body />
    </div>
  );
}
