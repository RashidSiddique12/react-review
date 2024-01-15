import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Lists from "./Lists";

function App() {
  const [data, setData] = useState([
    { id: 1, des: "made of coton", amount: 500, item: "cloth" },
  ]);

  const [des, setDes] = useState();
  const [amount, setAmout] = useState();
  const [item, setItem] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState("");

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

  const handleEdit = (id, des, item, amount) => {
    setUpdateId(id);
    setDes(des);
    setAmout(amount);
    setItem(item);
    setIsEdit(true);
  };

  const hnadleUpdate = (e) => {
    e.preventDefault();
    setData(
      data.map((d) => {
        if (d.id === updateId) {
          return { id: d.id, des: des, amount: amount, item: item };
        } else {
          return d;
        }
      })
    );

    setUpdateId("");
    setIsEdit(false);
    setDes("");
    setAmout("");
    setItem("");
  };

  return (
    <div className="App">
      <form onSubmit={isEdit ? hnadleUpdate : handleSubmit}>
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
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmout(e.target.value)}
        />
        <br />
        <span>Category : </span>
        <select name="" id="" onChange={(e) => setItem(e.target.value)}>
          <option value="chose"> Chose</option>
          <option value="hair">hair</option>
          <option value="cloth">cloth</option>
          <option value="shoes">shoes</option>
          <option value="Jeans">Jeans</option>
        </select>
        <br />
        {isEdit ? (
          <button type="submit">Update</button>
        ) : (
          <button type="submit">submit</button>
        )}
      </form>
      <br />
      <br />
      {data.map(({ id, des, item, amount }) => (
        <div key={id}>
          <Lists
            des={des}
            item={item}
            amount={amount}
            handleDelete={() => handleDelete(id)}
            handleEdit={() => handleEdit(id, des, item, amount)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
