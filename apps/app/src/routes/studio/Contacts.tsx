import { Link } from 'react-router-dom';

const contacts = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  name: `ContactName ${i + 1}`,
  email: `contact${i + 1}@email.com`,
}));

export function Contacts() {
  return (
    <div className="page">
      <div className="page__header"><h4 className="heading-style">Contacts</h4></div>
      <div className="page__body">
        <div className="module module--white">
          <div className="module__controls">
            <div className="contact-controls">
              <div className="contact-controls__search">
                <div className="search-input">
                  <input className="search-input__input input-style" placeholder="search contacts..." />
                </div>
              </div>
              <div className="contact-controls__button">
                <Link className="button button--pink button--40" to="/studio/contacts/add">Add contact</Link>
              </div>
            </div>
          </div>
          <div className="module__body">
            <ul className="contacts-list">
              {contacts.map(c => (
                <li key={c.id} className="contacts-list__item">
                  <Link className="contact-item clearfix" to={`/studio/contacts/${c.id}`}>
                    <div className="contact-item__avatar"></div>
                    <div className="contact-item__name">{c.name}</div>
                    <div className="contact-item__email">{c.email}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
