import { Link } from 'react-router-dom';

export function BillingPayment() {
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
                <Link className="breadcrumb-item__link" to="/account/billing/select">Plan select</Link>
                <div className="breadcrumb-item__icon">
                  <span className="flat-icon icon--16 icon--arrow-right"></span>
                </div>
              </div>
            </div>
            <div className="breadcrumb__item">
              <div className="breadcrumb-item breadcrumb-item--icon">
                <div className="breadcrumb-item__icon">
                  <span className="flat-icon icon--16 icon--arrow-right"></span>
                </div>
                <div className="breadcrumb-item__text">Payment method</div>
              </div>
            </div>
          </div>
        </div>

        <div className="center center--640">
          <div className="module module--white module--margin">
            <header className="module__header">
              <h2 className="heading-style">Selected plan</h2>
            </header>
            <div className="module__body">
              <div className="typography">
                <h1>Pro - $19 / month</h1>
              </div>
            </div>
          </div>

          <div className="module module--white">
            <div className="module__body">
              <form className="form-style">
                <div className="form-style__heading">
                  <h4 className="heading-style">Billing information</h4>
                </div>
                <div className="form-style__content">
                  <div className="form-grid">
                    <div className="form-grid__row">
                      <div className="form-grid__item">
                        <div className="form-brick">
                          <label className="form-brick__label">Name</label>
                          <div className="form-brick__element">
                            <input type="text" className="input-style" />
                          </div>
                        </div>
                      </div>
                      <div className="form-grid__item">
                        <div className="form-brick">
                          <label className="form-brick__label">Address</label>
                          <div className="form-brick__element">
                            <input type="text" className="input-style" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-grid__row">
                      <div className="form-grid__item">
                        <div className="form-brick">
                          <label className="form-brick__label">City</label>
                          <div className="form-brick__element">
                            <input type="text" className="input-style" />
                          </div>
                        </div>
                      </div>
                      <div className="form-grid__item">
                        <div className="form-brick">
                          <label className="form-brick__label">State / Province (optional)</label>
                          <div className="form-brick__element">
                            <input type="text" className="input-style" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-grid__row">
                      <div className="form-grid__item">
                        <div className="form-brick">
                          <label className="form-brick__label">ZIP / Postal code</label>
                          <div className="form-brick__element">
                            <input type="text" className="input-style" />
                          </div>
                        </div>
                      </div>
                      <div className="form-grid__item">
                        <div className="form-brick">
                          <label className="form-brick__label">Country</label>
                          <div className="form-brick__element">
                            <div className="select-box">
                              <div className="select-box__icon">
                                <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                              </div>
                              <div className="select-box__select">
                                <select className="select-style" defaultValue="">
                                  <option value="">-- Select a country --</option>
                                  <option>United States</option>
                                  <option>United Kingdom</option>
                                  <option>Canada</option>
                                  <option>Australia</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-style__heading">
                  <h4 className="heading-style">Payment details</h4>
                </div>
                <div className="form-style__content">
                  <div className="form-credit">
                    <div className="form-credit__number">
                      <div className="form-brick">
                        <label className="form-brick__label">Card number</label>
                        <div className="form-brick__element">
                          <input type="text" className="input-style" />
                        </div>
                      </div>
                    </div>
                    <div className="form-credit__expiry">
                      <div className="credit-expiry clearfix">
                        <label className="credit-expiry__label">Expiration (MM/YYYY)</label>
                        <div className="credit-expiry__month">
                          <div className="select-box">
                            <div className="select-box__icon">
                              <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                            </div>
                            <div className="select-box__select">
                              <select className="select-style" defaultValue="">
                                <option value="">MM</option>
                                {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')).map(m => (
                                  <option key={m}>{m}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="credit-expiry__year">
                          <div className="select-box">
                            <div className="select-box__icon">
                              <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                            </div>
                            <div className="select-box__select">
                              <select className="select-style" defaultValue="">
                                <option value="">YYYY</option>
                                {[2026, 2027, 2028, 2029, 2030].map(y => (
                                  <option key={y}>{y}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-credit__ccv">
                      <div className="form-brick">
                        <label className="form-brick__label">CCV</label>
                        <div className="form-brick__element">
                          <input type="text" className="input-style" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-style__footer">
                  <div className="credit-submit">
                    <Link className="button button--40 button--green" to="/account/billing/final">$19 - Get Shnappy</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
