import { FC, Fragment, useEffect, useState } from "react";

import "./style.css";

export const App: FC<{ items: any[] }> = ({ items = [] }) => {
  const [arr, setArr] = useState([]);

  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(items);
  }, []);

  const handleClick = (elm: any) => {
    const mainFind = arr.find((item) => item.color == elm.color);
    console.log("main find", mainFind);

    elm.checked = !elm.checked;

    if (!mainFind) {
      setArr([...arr, elm]);
    } else {
      const filtered = arr.filter((item) => item.color !== elm.color);
      setArr(filtered);
    }
  };

  const handleDelete = (delItem) => {
    const filtered = arr.filter((item) => item.color !== delItem);
    setArr(filtered);
  };

  const handleAllRemove = () => {
    setArr([]);
  };

  const handleSelectAll = () => {
    setArr(items);
  };

  return (
    <Fragment>
      <button onClick={handleAllRemove}>All Delete</button>
      <button onClick={handleSelectAll}>All Color Select</button>
      <h1>Seçilmiş rənglər</h1>
      <div>
        <ul>
          {arr.map(({ name, color }, i) => (
            <li key={name}>
              {name} : {color}
              <button onClick={(e) => handleDelete(color)}>delete</button>
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <hr />

      <ul className="List">
        {colors.map((item) => (
          <li
            onClick={(e) => handleClick(item)}
            key={item.name}
            className={`List__item List__item--${item.color}`}
          >
            <input type="checkbox" name="" id="" checked={item.checked} />
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
