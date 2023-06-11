import { InputBar } from "./InputBar";
import "./styles.css";
import { CardShowcase } from "./CardShowcase";
import { useState } from "react";

export default function App() {
  const [card, setCard] = useState([]);
  const [bgColor, setBgColor] = useState("");
  const [pinned, setPinned] = useState(false);
  return (
    <div className="App">
      <InputBar
        card={card}
        setCard={setCard}
        bgColor={bgColor}
        setBgColor={setBgColor}
        pinned={pinned}
        setPinned={setPinned}
      />
      <CardShowcase card={card} setCard={setCard} />
    </div>
  );
}
