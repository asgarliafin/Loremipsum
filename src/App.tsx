import { FC, Fragment } from 'react';

import './style.css';

export const App: FC<{ items: any[] }> = ({ items = [] }) => {
  return (
    <Fragment>
      <ul className="List">
        {items.map((item) => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
