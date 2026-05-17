import { Link } from 'react-router-dom';

export function ContactsAdd() {
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
              <span className="breadcrumb-item__text">Add contact</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="page__body">
        <div className="center center--640">
          <div className="module module--white">
            <header className="module__header">
              <h4 className="heading-style">Contact details</h4>
            </header>
            <div className="module__body module__body--margin">
              <form className="form-style form-style--640">
                <div className="form-grid clearfix">
                  <div className="form-grid__row">
                    <div className="form-grid__item">
                      <div className="form-brick form-brick--margin">
                        <label className="form-brick__label">First name</label>
                        <div className="form-brick__element">
                          <input type="text" className="input-style" placeholder="First name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-grid__item">
                      <div className="form-brick form-brick--margin">
                        <label className="form-brick__label">Last name</label>
                        <div className="form-brick__element">
                          <input type="text" className="input-style" placeholder="Last name" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-brick form-brick--margin">
                  <label className="form-brick__label">Contact email</label>
                  <div className="form-brick__element">
                    <input type="email" className="input-style" placeholder="email@address.com" />
                  </div>
                </div>

                <div className="form-brick form-brick--margin">
                  <label className="form-brick__label">Notes</label>
                  <div className="form-brick__element">
                    <textarea className="textarea-style" placeholder="Type something..."></textarea>
                  </div>
                </div>
              </form>
            </div>
            <footer className="module__footer">
              <div className="button-pattern button-pattern--cancel-submit clearfix">
                <div className="button-pattern__cancel">
                  <Link className="button button--grey-stroke button--40" to="/studio/contacts">Cancel</Link>
                </div>
                <div className="button-pattern__submit">
                  <Link className="button button--green button--40" to="/studio/contacts/sample-id">Add contact</Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
