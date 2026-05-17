import { Link, NavLink, useParams } from 'react-router-dom';

const sidebar = [
  'Gallery statistics',
  'Gallery activity',
  'Gallery settings',
  'Gallery style',
  'Share gallery',
  'Purchase controls',
];

export function ClientDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="page">
      <div className="page__header">
        <ul className="breadcrumb clearfix">
          <li className="breadcrumb__item">
            <div className="breadcrumb-item">
              <Link className="breadcrumb-item__link" to="/studio/clients">Clients</Link>
            </div>
          </li>
          <li className="breadcrumb__item">
            <div className="breadcrumb-item breadcrumb-item--icon">
              <div className="breadcrumb-item__icon">›</div>
              <span className="breadcrumb-item__text">{id ?? 'ClientName'}</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="page__body">
        <div className="module module--white-even module--margin">
          <div className="client-banner">
            <div className="client-banner__client-name">Client Name</div>
            <div className="client-banner__stats">
              <div className="client-banner__stats-stat"></div>
              <div className="client-banner__stats-stat"></div>
              <div className="client-banner__stats-stat"></div>
            </div>
            <div className="client-banner__view-gallery">
              <a className="button button--40 button--pink" href="/gallery/login" target="_blank" rel="noopener">Open gallery in new tab</a>
            </div>
          </div>
        </div>

        <div className="module-sidebar clearfix">
          <div className="module-sidebar__sidebar">
            {sidebar.map((label, i) => (
              <NavLink
                key={label}
                to="#"
                className={`module-sidebar__button${i === 0 ? ' module-sidebar__button--active' : ''}`}
                onClick={e => e.preventDefault()}
              >
                <span className="module-sidebar__button-line"></span>
                <span className="module-sidebar__button-icon"></span>
                <span className="module-sidebar__button-text">{label}</span>
              </NavLink>
            ))}
          </div>
          <div className="module-sidebar__content">
            <div className="module">
              <div className="module__header">
                <h4 className="heading-style">Client information</h4>
              </div>
              <div className="module__body" style={{ padding: '2.4rem' }}>
                <div className="typography">
                  <h1>Client overview</h1>
                  <p>Information and statistics about this gallery and client.</p>
                  <ul>
                    <li>Recent activity</li>
                    <li>Favourite photos</li>
                    <li>Comments and messages</li>
                    <li>Download history</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
