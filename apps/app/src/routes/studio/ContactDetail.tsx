import { Link, useParams } from 'react-router-dom';

export function ContactDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="page">
      <div className="page__header">
        <ul className="breadcrumb clearfix">
          <li className="breadcrumb__item">
            <div className="breadcrumb-item">
              <Link className="breadcrumb-item__link" to="/studio/contacts">Contacts</Link>
            </div>
          </li>
          <li className="breadcrumb__item">
            <div className="breadcrumb-item breadcrumb-item--icon">
              <div className="breadcrumb-item__icon">›</div>
              <span className="breadcrumb-item__text">{id ?? 'ContactName'}</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="page__body">
        <div className="module module--white clearfix">
          <div className="module__body" style={{ padding: '2.4rem' }}>
            <div className="contact-profile">
              <div className="contact-profile__avatar"></div>
              <div className="contact-profile__name">FirstName LastName</div>
              <div className="contact-profile__email">
                <a href="#">email@address.com</a>
              </div>
            </div>
          </div>
          <div className="module__body" style={{ padding: '2.4rem' }}>
            <div className="typography">
              <h4>Contact information</h4>
              <ul>
                <li>Galleries this contact has access to</li>
                <li>Favourites</li>
                <li>Comments / Messages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
