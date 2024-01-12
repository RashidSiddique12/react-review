import React, { useState } from "react";

function Lists({ des, item, amount, handleDelete, handleEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      
       <p>Description :{des} </p>
       <p>Amount :  {amount}</p>
       <p>Item :{item}  </p> 
      <button onClick={handleDelete}>delete</button>
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
      
    </div>
  );
}

export default Lists;
