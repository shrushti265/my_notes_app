export function CardShowcase({ card, setCard }) {
  function removeHandler(index) {
    setCard((card) => card.filter((item, ind) => index !== ind));
  }

  const pinnedNotes = card.filter((item) => item.pin === true);
  const unpinnedNotes = card.filter((item) => item.pin === false);
  return (
    <>
      {pinnedNotes.length >= 1 && (
        <div className="pin-container">
          <h1>Pinned Notes</h1>
          <div className="pinned-Container">
            {pinnedNotes.map(({ title, description, color }, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="box"
              >
                <p>{title}</p>
                <p>{description}</p>
                <button onClick={() => removeHandler(index)}>Remove</button>
                {/* <button onClick={() => editHandler(index)}>EDIT</button> */}
              </div>
            ))}
          </div>
        </div>
      )}
      {unpinnedNotes.length > 0 && (
        <div className="unpin-container">
          <h1>Unpinned</h1>
          <div className="unpinned-container">
            {unpinnedNotes.map(({ tittle, description, color }, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="box"
              >
                <p>{tittle}</p>
                <p>{description}</p>
                <button onClick={() => removeHandler(index)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
