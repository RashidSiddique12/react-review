import React, { useState } from "react";

function Lists({ des, item, amount, handleDelete, handleEdit }) {
  return (
    <div>
      <p>Description :{des} </p>
      <p>Amount : {amount}</p>
      <p>Item :{item} </p>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Lists;
