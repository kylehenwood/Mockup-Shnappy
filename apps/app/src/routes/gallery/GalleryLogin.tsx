import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function GalleryLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="layout__header">
        <div className="center center--1120">
          <div className="header-layout">
            <div className="header-layout__logo">
              <Link className="header-logo header-logo--active" to="/">Shnappy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="layout__navigation">
        <div className="center center--1120">
          <div className="primary-wrap">
            <div className="primary-heading">
              <h1 className="primary-heading__studio-name">Gallery Name</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="layout__container layout__container--padding">
        <div className="center center--540">
          <div className="module module--white">
            <header className="module__header">
              <h4 className="heading-style">Password required</h4>
            </header>

            <div className="module__body module__body--margin">
              <form className="form-style" onSubmit={e => { e.preventDefault(); navigate('/gallery/albums'); }}>
                <div className="form-brick form-brick--margin">
                  <label className="form-brick__label">Gallery password</label>
                  <div className="form-brick__password">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="input-style input-style--password"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="form-brick__password-button"
                      onClick={() => setShowPassword(v => !v)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <div className="form-brick__validation">This is an error message.</div>
                </div>
              </form>
            </div>

            <footer className="module__footer">
              <div className="button-pattern button-pattern--cancel-submit clearfix">
                <div className="button-pattern__cancel">
                  <button type="button" className="button button--grey-stroke button--40">Request access</button>
                </div>
                <div className="button-pattern__submit">
                  <Link className="button button--green button--40" to="/gallery/albums">Submit</Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <div className="layout__footer">
        <div className="center center--1120">
          <div className="layout-footer">
            <div className="layout-footer__shnappy">Shnappy 2026 &copy;</div>
            <div className="layout-footer__name">Created by Kyle Henwood</div>
          </div>
        </div>
      </div>
    </div>
  );
}
