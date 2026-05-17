import { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { UpgradeModal } from './UpgradeModal';

const studioNav = [
  { to: '/studio/clients', label: 'Clients' },
  { to: '/studio/activity', label: 'Activity', alert: true },
  { to: '/studio/contacts', label: 'Contacts' },
  { to: '/studio/settings', label: 'Studio' },
];

export function AppShell() {
  const location = useLocation();
  const isAccount = location.pathname.startsWith('/account');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="layout">
      <div className="layout__modal">
        <UpgradeModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>

      <div className="layout__header">
        <div className="center center--1120">
          <div className="header-layout">
            <div className="header-layout__logo">
              {isAccount ? (
                <Link to="/studio/clients" className="back-to-studio">
                  <div className="back-to-studio__icon">
                    <span className="flat-icon icon--16 icon--arrow-left"></span>
                  </div>
                  <div className="back-to-studio__text">Back to studio</div>
                </Link>
              ) : (
                <Link to="/studio/clients" className="header-logo header-logo--active">Shnappy</Link>
              )}
            </div>
            <UserDropdown />
            <div
              className="header-layout__account js-modal-trigger"
              onClick={() => setModalOpen(true)}
              role="button"
              tabIndex={0}
            >
              Upgrade now!
            </div>
          </div>
        </div>
      </div>

      {!isAccount && (
        <div className="layout__navigation">
          <div className="center center--1120">
            <div className="primary-wrap">
              <div className="primary-heading">
                <h1 className="primary-heading__studio-name">StudioName Studio</h1>
              </div>
              <ul className="primary clearfix">
                {studioNav.map(item => (
                  <li key={item.to} className="primary__item">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => `primary-item${isActive ? ' primary-item--active' : ''}`}
                    >
                      <div className="primary-item__container">
                        {item.alert && (
                          <div className="primary-item__alert">
                            <div className="client-alert client-alert--pink"></div>
                          </div>
                        )}
                        <div className="primary-item__icon"></div>
                        <div className="primary-item__text">{item.label}</div>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="layout__container">
        <div className="center center--1120">
          <Outlet />
        </div>
      </div>

      <div className="layout__footer">
        <div className="center center--1120">
          <div className="layout-footer">
            <div className="layout-footer__shnappy">Shnappy</div>
            <div className="layout-footer__name">&copy; {new Date().getFullYear()} Shnappy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="header-layout__user js-user-dropdown" ref={ref}>
      <a
        className={`user-button js-user-dropdown-trigger${open ? ' user-button--active' : ''}`}
        onClick={() => setOpen(v => !v)}
      >
        <div className="user-button__name">Kyle Henwood</div>
        <div className="user-button__icon">
          <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
        </div>
      </a>

      <div className={`user-dropdown js-user-dropdown-content${open ? ' user-dropdown--active' : ''}`}>
        <div className="user-dropdown__profile">
          <div className="user-dropdown__avatar"></div>
          <div className="user-dropdown__username">Kyle Henwood</div>
          <div className="user-dropdown__email">kyle.henwood@gmail.com</div>
          <div className="user-dropdown__button">
            <Link to="/account/profile" className="button button--32 button--pink-stroke">Edit profile</Link>
          </div>
        </div>
        <div className="user-dropdown__section">
          <Link to="/account/notifications" className="user-dropdown__item">Notifications</Link>
          <Link to="/account/storage" className="user-dropdown__item">Linked storage</Link>
          <Link to="/account/billing" className="user-dropdown__item">Billing / Usage</Link>
        </div>
        <div className="user-dropdown__section">
          <a href="/" className="user-dropdown__item">Sign out</a>
        </div>
      </div>
    </div>
  );
}
