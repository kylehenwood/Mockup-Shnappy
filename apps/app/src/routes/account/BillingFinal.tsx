import { Link } from 'react-router-dom';

export function BillingFinal() {
  return (
    <div className="page">
      <div className="page__body">
        <div className="primary-breadcrumb">
          <div className="breadcrumb clearfix">
            <div className="breadcrumb__item">
              <div className="breadcrumb-item">
                <Link className="breadcrumb-item__link" to="/account/billing">Kyle Henwood</Link>
              </div>
            </div>
            <div className="breadcrumb__item">
              <div className="breadcrumb-item breadcrumb-item--icon">
                <div className="breadcrumb-item__icon">
                  <span className="flat-icon icon--16 icon--arrow-right"></span>
                </div>
                <div className="breadcrumb-item__text">Plan result</div>
              </div>
            </div>
          </div>
        </div>

        <div className="center center--640">
          <div className="module module--white module--margin">
            <header className="module__header">
              <h2 className="heading-style">Payment result</h2>
            </header>
            <div className="module__body">
              <div className="typography">
                <h3>Payment successful</h3>
                <p>Welcome to Shnappy Pro! A receipt has been emailed to you.</p>
              </div>
            </div>
            <footer className="module__footer">
              <Link className="button button--40 button--green" to="/account/billing">Back to profile</Link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
