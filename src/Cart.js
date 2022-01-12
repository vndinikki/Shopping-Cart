import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { BiMinus } from "react-icons/bi";

const Cart = ({ initData }) => {
  const [total, setTotal] = useState(
    initData.reduce(
      (acc, curVal) => acc + parseInt(curVal.Price * curVal.Quantity),
      0
    )
  );

  const [content, setData] = useState(initData);

  const handleClick = (e, index, check) => {
    let data = content;
    if (check === "up") {
      data[index].Quantity += 1;
      setTotal((total) => total + data[index].Price);
    } else {
      data[index].Quantity -= 1;
      setTotal((total) => total - data[index].Price);
    }
    console.log(data);
    if (data[index].Quantity === 0) {
      data = data.filter((el) => el !== data[index]);
    }
    setData([...data]);
  };

  return (
    <div className={"main"}>
      {content.map((data, index) => (
        <div className={"content"} key={index}>
          <div className={"leftContent"}>
            <div className={"box"}></div>
            <div className={"text"}>
              <div className="name">{data.Name}</div>
              <h4 className="item">{data.Item}</h4>
              <div className="price">{data.Price * data.Quantity}</div>
            </div>
          </div>
          <div className={"rightContent"}>
            <RiAddFill
              className="button"
              onClick={(e) => handleClick(e, index, "up")}
            />
            {data.Quantity}
            <BiMinus
              className="button"
              onClick={(e) => handleClick(e, index, "down")}
            />
          </div>
        </div>
      ))}
      <div className={"total"}>
        <span>Total </span>
        <span>{total}</span>
      </div>
    </div>
  );
};
export default Cart;
