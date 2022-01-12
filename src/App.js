import Cart from "./Cart";
import "./styles.css";

export default function App() {
  const data = [
    { Name: "Lauren's", Item: "Orange Juice", Price: 149, Quantity: 2 },
    { Name: "Baskin's", Item: "Skimmed Milk", Price: 149, Quantity: 1 },
    { Name: "Marley's", Item: "Orange Juice", Price: 149, Quantity: 3 }
  ];
  return (
    <div className="App">
      <Cart initData={data} />
    </div>
  );
}
