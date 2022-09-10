import React from "react";
import Moviecard from "./moviecard";

const Movielist = ({ data }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((el) => (
        <Moviecard el={el} />
      ))}
    </div>
  );
};

export default Movielist;
