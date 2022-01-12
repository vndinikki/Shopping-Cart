import React, { useState } from "react";
import "./styles.css";

const Cart1 = ({ initData }) => {
  const [data, setData] = useState(initData);
  console.log(initData);

  const handleClick = (index, str) => {
    let elem = data;
    if (str === "add") {
      elem[index].Quantity = elem[index].Quantity + 1;
    }
    if (str === "minus") {
      elem[index].Quantity = elem[index].Quantity - 1;
    }
    setData([...elem]);
    console.log(data);
  };
  return (
    <div className={"main"}>
      {data.map((item, index) => (
        <div className={"content"} key={index}>
          <div className={"leftContent"}>
            <p>
              {item.Name}
              <br />
              {item.Item}
              <br />
              {item.Price}
            </p>
          </div>
          <div className={"rightContent"}>
            <button onClick={() => handleClick(index, "add")}>add</button>
            {item.Quantity}
            <button onClick={() => handleClick(index, "minus")}>minus</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart1;
