import { NavLink, Outlet } from 'react-router-dom';

const subNav = [
  { to: '/studio/settings', label: 'Studio information', end: true },
  { to: '/studio/settings/defaults', label: 'Gallery defaults' },
  { to: '/studio/settings/watermark', label: 'Watermark' },
  { to: '/studio/settings/website', label: 'Studio website' },
];

export function StudioSettingsLayout() {
  return (
    <div className="page">
      <div className="page__header">
        <h1 className="heading-style">Studio settings</h1>
      </div>
      <div className="page__body">
        <div className="module-sidebar clearfix">
          <div className="module-sidebar__sidebar">
            {subNav.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `module-sidebar__button${isActive ? ' module-sidebar__button--active' : ''}`
                }
              >
                <span className="module-sidebar__button-line"></span>
                <span className="module-sidebar__button-icon"></span>
                <span className="module-sidebar__button-text">{item.label}</span>
              </NavLink>
            ))}
          </div>
          <div className="module-sidebar__content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Studio() {
  return (
    <div className="module">
      <div className="module__header">
        <h4 className="heading-style">Studio information</h4>
      </div>
      <div className="module__body" style={{ padding: '2.4rem' }}>
        <div className="typography">
          <h4>Studio information</h4>
          <ul>
            <li>Studio name.</li>
            <li>Studio email address</li>
            <li>Studio contact details.</li>
            <li>email.</li>
            <li>social media.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
