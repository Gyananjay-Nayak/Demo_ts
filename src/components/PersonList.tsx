import React from "react";
import { Name } from "./person.type";

type persionListprops = {
  names: Name[];
};

export const PersonList = (props: persionListprops) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
