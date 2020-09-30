import React from "react";
import Card from './Components/Card'
import Score from './Components/Score'
import ContextCardsProvider from './Context/ContextCardsProvider'

import "./style.css";

export default function App({poits}) {
  return (
    <div>
      <ContextCardsProvider>
      <Score/>
      <Card/>
      </ContextCardsProvider>
    </div>
  );
}
