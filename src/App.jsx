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
    // console.log(des);
    setData(
      data.map((itm) => {
        if (itm.id == id) {
          return {
            ...itm,
            des: des ? des : itm.des,
            amount: amount ? amount : itm.amount,
            item: item ? item : itm.item,
          };
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
    <div className="App">
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
        <button type="submit">submit</button>
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
            handleEdit={() => handleEdit(id)}
          />
        </div>
      ))}

      <p>
        Note : If you want to edit, Click the Edit Button and fill the form and then click on update button
      </p>
      <br />
      <br />
    </div>
  );
}

export default App;
