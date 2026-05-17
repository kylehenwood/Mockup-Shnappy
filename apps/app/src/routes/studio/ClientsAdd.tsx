import { useState } from 'react';
import { Link } from 'react-router-dom';

const advancedSwitches = [
  { title: 'Password protected', message: 'Require a password to view gallery.', checked: true },
  { title: 'Watermark images', message: "You can't enable this because you don't have a watermark setup.", disabled: true },
  { title: 'Favourite sharing', message: 'Allow clients to share their favourite images as static web pages.' },
  { title: 'Allow image download', message: 'Allow clients to download your photos.' },
  { title: 'Gallery showcase', message: 'Show gallery on your studio page.', disabled: true, error: 'This option is only available on large plans.' },
];

export function ClientsAdd() {
  const [showAdvanced, setShowAdvanced] = useState(false);
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
              <span className="breadcrumb-item__text">Add client</span>
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
                <div className="form-brick form-brick--margin">
                  <label className="form-brick__label">Client password</label>
                  <div className="form-brick__element">
                    <input type="password" className="input-style" placeholder="Client password" />
                  </div>
                </div>
                <div className="form-brick form-brick--margin">
                  <label className="form-brick__label">Client directory</label>
                  <div className="form-brick__element">
                    <div className="select-box">
                      <div className="select-box__select">
                        <select className="select-style">
                          <option>-- Select an option --</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="module__body module__body--margin">
              <ul className="switch-list">
                <li className="switch-list__item">
                  <div className="switch-control">
                    <div className="switch-control__title">Activity emails</div>
                    <div className="switch-control__message">
                      <div className="typography"><p>Get notified whenever this gallery has activity.</p></div>
                    </div>
                    <div className="switch-control__switch">
                      <label className="switch">
                        <input className="switch__input" type="checkbox" />
                        <div className="switch__toggle"></div>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="module__body">
              <div className="advanced-controls">
                {!showAdvanced && (
                  <div className="advanced-controls__visible">
                    <div className="advanced-controls__button">
                      <button
                        type="button"
                        className="button button--28 button--grey-stroke"
                        onClick={() => setShowAdvanced(true)}
                      >
                        Show advanced controls
                      </button>
                    </div>
                    <div className="advanced-controls__line"></div>
                  </div>
                )}
                {showAdvanced && (
                  <div className="advanced-controls__content">
                    <div className="advanced-controls__content-container">
                      <div className="typography">
                        <p>You can change what advanced controls are set by default on the <Link to="/studio/settings/defaults">Gallery defaults</Link> page.</p>
                      </div>
                    </div>
                    <ul className="switch-list">
                      {advancedSwitches.map((s, i) => (
                        <li key={i} className="switch-list__item">
                          <div className="switch-control">
                            <div className="switch-control__title">{s.title}</div>
                            <div className="switch-control__message">
                              <div className="typography"><p>{s.message}</p></div>
                            </div>
                            {s.error && <div className="switch-control__error">{s.error}</div>}
                            <div className="switch-control__switch">
                              <label className="switch">
                                <input className="switch__input" type="checkbox" defaultChecked={s.checked} disabled={s.disabled} />
                                <div className="switch__toggle"></div>
                              </label>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
