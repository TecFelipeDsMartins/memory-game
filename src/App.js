import React from "react";
import Card from './Components/Card'
import Score from './Components/Score'

import "./style.css";

export default function App({poits}) {
  return (
    <div>
      <Score poits={poits} />
      <Card/>
    </div>
  );
}
