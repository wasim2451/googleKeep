import React from "react";

function Note(props) {
  function deleteItem() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          border: "2px solid orange",
          width: "35%"
        }}
        onClick={deleteItem}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
