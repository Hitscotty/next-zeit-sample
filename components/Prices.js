import { useContext, useState } from "react";
import { CoinDeskContext } from "../shared/CoinDesk/CoinDesk.context.js";

const Prices = props => {
  const { bpi } = useContext(CoinDeskContext);
  const [currency, setCurrency] = useState("USD");
  const { description, rate, code } = bpi[currency] || {};
  return (
    <div>
      <ul className="list-group" />
      <li className="list-group-item">
        Bitcoin rate for {description}:
        <span className="badge badge-primary">{code}</span>
        <strong>{rate}</strong>;
      </li>
      <br />
      <select
        onChange={e => setCurrency(e.target.value)}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;
