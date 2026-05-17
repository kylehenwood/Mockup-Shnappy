import { Link } from 'react-router-dom';
import { AccountNav } from './AccountNav';

export function Billing() {
  return (
    <div className="page">
      <div className="page__body">
        <AccountNav />
        <div className="module module--white module--margin">
          <header className="module__header">
            <h2 className="heading-style">Billing</h2>
          </header>
          <div className="module__body">
            <div className="typography">
              <ul>
                <li>Client usage: 12 / 25</li>
                <li>Billing details on file</li>
                <li>
                  Plan: Pro &mdash;{' '}
                  <Link to="/account/billing/select">Change plan</Link>
                </li>
                <li>Next billing date: 12/06/2026</li>
                <li>Billing history (invoices)</li>
              </ul>
            </div>
          </div>
          <footer className="module__footer">
            <Link className="button button--40 button--green" to="/account/billing/select">Change plan</Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
