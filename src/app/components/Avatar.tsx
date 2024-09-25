"use client";

import "../css/header.css";
import Rive from "@rive-app/react-canvas";

export default function Avatar() {
  return (
    <div className="avatar">
      <Rive src="avatar_card.riv" stateMachines="State Machine 1" />
    </div>
  );
}
