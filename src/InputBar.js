import { useState } from "react";

export function InputBar({
  card,
  setCard,
  bgColor,
  setBgColor,
  pinned,
  setPinned
}) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form className="input-container">
        <input
          style={{ backgroundColor: bgColor }}
          onChange={(e) => setTittle(e.target.value)}
          placeholder="Write Someting"
          value={tittle}
        />
        <textarea
          style={{ backgroundColor: bgColor }}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          value={description}
        />

        <div className="button-box">
          <button
            className="submit-btn"
            onClick={(e) => {
              setCard((card) => [
                ...card,
                { tittle, description, color: bgColor, pin: pinned }
              ]);
              e.preventDefault();
              setTittle("");
              setDescription("");
              setPinned(false);
            }}
          >
            Add
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPinned((prev) => !prev);
            }}
          >
            {pinned ? "unpin" : "pin"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#a8c4f3");
            }}
          >
            Blue
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#f5a2a2");
            }}
          >
            Red
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#c0f3a7");
            }}
          >
            Green
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#e5ba7b");
            }}
          >
            Yellow
          </button>
        </div>
      </form>
    </>
  );
}
