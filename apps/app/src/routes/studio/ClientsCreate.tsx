import { Link } from 'react-router-dom';

export function ClientsCreate() {
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
              <span className="breadcrumb-item__text">Create client</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="page__body">
        <div className="center center--640">
          <div className="module module--white">
            <header className="module__header">
              <h4 className="heading-style">Create client</h4>
            </header>
            <div className="module__body module__body--margin">
              <form className="form-style">
                <div className="form-brick form-brick--margin">
                  <label className="form-brick__label">Client name</label>
                  <div className="form-brick__element">
                    <input type="text" className="input-style" placeholder="Client name" />
                  </div>
                </div>
              </form>
            </div>
            <footer className="module__footer">
              <div className="button-pattern button-pattern--cancel-submit clearfix">
                <div className="button-pattern__cancel">
                  <Link className="button button--grey-stroke button--40" to="/studio/clients">Cancel</Link>
                </div>
                <div className="button-pattern__submit">
                  <Link className="button button--green button--40" to="/studio/clients/sample-id">Create client</Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
