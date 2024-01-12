import React, { useState } from "react";

function Lists({ des, item, amount, handleDelete, handleEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <li>
        {des} {item} {amount} <button onClick={handleDelete}>delete</button>
        {isEdit ? (
          <button onClick={() => {
              handleEdit();
              setIsEdit(false);
          }}>update</button>
        ) : (
          <button
            onClick={()=>setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </li>
    </div>
  );
}

export default Lists;
