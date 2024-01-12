import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([
    { id: 1, des: "made of coton", amount: 500, item: "cloth" },
  ]);
  const [des, setDes] = useState();
  const [amount, setAmout] = useState();
  const [item, setItem] = useState();
  // const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const iid = uuidv4();
    setData([...data, { id: iid, des: des, amount: amount, item: item }]);
    setDes("");
    setAmout("");
    setItem("");
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    console.log(des);
    setData(
      data.map((itm) => {
        if (itm.id == id) {
          return { ...itm, des: des, amount: amount, item: item };
        } else {
          return itm;
        }
      })
    );

    setDes("");
    setAmout("");
    setItem("");
   
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Description:{" "}
        <input
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="desc"
        />
        <br />
        Amount:{" "}
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmout(e.target.value)}
        />
        <br />
        <select name="" id="" onChange={(e) => setItem(e.target.value)}>
          <option value="chose"> Chose</option>
          <option value="hair">hair</option>
          <option value="cloth">cloth</option>
          <option value="shoes">shoes</option>
          <option value="Jeans">Jeans</option>
        </select>
        <button type="submit">submit</button>
      </form>
    <br />
    <br />
      {data.map((itm) => (
        <div key={itm.id}>
          <li>
            {itm.des}{" "}
            {itm.item}{" "}
            {itm.amount}{" "}
            <button onClick={() => handleDelete(itm.id)}>delete</button>
            
              <button onClick={() => handleEdit(itm.id)}>Edit</button>
           
          </li>
        </div>
      ))}

      <p>Note : You you want to edit, Then Fill the form and Click Edit Button</p>
      <br />
      <br />
    </>
  );
}


export default App;
