import { useState } from 'react';
import { Link } from 'react-router-dom';

const plans = [
  { name: 'Starter', monthly: 9, annual: 90, blurb: 'For occasional shoots.' },
  { name: 'Pro', monthly: 19, annual: 190, blurb: 'For active studios.' },
  { name: 'Studio', monthly: 39, annual: 390, blurb: 'For high-volume teams.' },
];

export function BillingSelect() {
  const [annual, setAnnual] = useState(true);

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
                <div className="breadcrumb-item__text">Plan select</div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-upgrade__annual-switch">
          <div className="annual-switch">
            <button
              type="button"
              className={`annual-switch__button${!annual ? ' annual-switch__button--active' : ''}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`annual-switch__button${annual ? ' annual-switch__button--active' : ''}`}
              onClick={() => setAnnual(true)}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="plan-select clearfix">
          {plans.map(p => (
            <div className="plan-select__item" key={p.name}>
              <div className="plan-option">
                <div className="plan-option__header">
                  <h3 className="heading-style">{p.name}</h3>
                </div>
                <div className="plan-option__body">
                  <div className="typography">
                    <p><strong>${annual ? p.annual : p.monthly}</strong> / {annual ? 'year' : 'month'}</p>
                    <p>{p.blurb}</p>
                  </div>
                </div>
                <div className="plan-option__footer">
                  <Link className="button button--40 button--green" to="/account/billing/payment">Select plan</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
