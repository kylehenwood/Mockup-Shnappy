import { NavLink } from 'react-router-dom';

const items = [
  { to: '/account/profile', label: 'Profile' },
  { to: '/account/notifications', label: 'Notifications' },
  { to: '/account/storage', label: 'Linked storage' },
  { to: '/account/billing', label: 'Billing' },
];

export function AccountNav() {
  return (
    <div className="primary-wrap">
      <div className="primary-heading">
        <h1 className="primary-heading__studio-name">Kyle Henwood</h1>
      </div>
      <ul className="primary clearfix">
        {items.map(item => (
          <li className="primary__item" key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => `primary-item${isActive ? ' primary-item--active' : ''}`}
            >
              <div className="primary-item__container">
                <div className="primary-item__icon"></div>
                <div className="primary-item__text">{item.label}</div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
