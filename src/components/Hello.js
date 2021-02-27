import React from "react";
import { Button } from "react-bootstrap";

function HelloWorld(props) {
  const { userInfo, hiFn } = props;
  const { name = "Anonymous" } = userInfo;

  return (
    <div>
      <p>
        Hello {userInfo.name} you have {userInfo.age} years
      </p>
      <Button variant="dark" onClick={() => hiFn(name)}>
        Say Hello
      </Button>
    </div>
  );
}

export default HelloWorld;
