import { useState } from 'react';
import { Link } from 'react-router-dom';

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);

  return (
    <div className="layout-auth">
      <div className="layout-auth__header">
        <div className="center center--1120">
          <div className="auth-header">
            <div className="auth-header__logo">
              <Link className="auth-logo header-logo--active" to="/">Shnappy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="layout-auth__container">
        <div className="center center--480">
          <div className="auth">
            <div className="auth__header">Sign in to your Account</div>
            <div className="auth__form">
              <div className="form-brick form-brick--margin">
                <div className="form-brick__label">Email</div>
                <div className="form-brick__input">
                  <input className="input-style" type="text" placeholder="email@address.io" />
                </div>
                <div className="form-brick__validation">This is validation.</div>
              </div>

              <div className="form-brick form-brick--margin">
                <div className="form-brick__label">Password</div>
                <div className="form-brick__input js-password">
                  <input
                    className="input-style input-style--password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="form-brick__password-button"
                    onClick={() => setShowPassword(v => !v)}
                  >
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </button>
                </div>
                <div className="form-brick__validation">This is validation.</div>
              </div>

              <div className="pattern-signin">
                <div className="pattern-signin__checkbox">
                  <label className="checkbox">
                    <input className="checkbox__input" type="checkbox" />
                    <div className="checkbox__icon"></div>
                    <div className="checkbox__label">Remember me?</div>
                  </label>
                </div>
                <div className="pattern-signin__button">
                  <Link className="button button--40 button--pink" to="/studio/clients">Sign in</Link>
                </div>
              </div>
            </div>

            <div className="auth__forgot">
              <div className={`auth-forgot${forgotOpen ? ' auth-forgot--reset' : ''}`}>
                <button
                  type="button"
                  className="auth-forgot__button"
                  onClick={() => setForgotOpen(v => !v)}
                >
                  Forgot password?
                </button>
                <div className="auth-forgot__container">
                  <div className="forgot-form">
                    <div className="forgot-form__header">Forgot password?</div>
                    <div className="forgot-form__close">
                      <button
                        type="button"
                        className="forgot-button"
                        onClick={() => setForgotOpen(false)}
                      >
                        <div className="forgot-button__icon">
                          <span className="flat-icon icon--16 icon--cross"></span>
                        </div>
                      </button>
                    </div>
                    <div className="forgot-form__content">
                      <div className="form-brick form-brick--margin">
                        <div className="form-brick__label">Email</div>
                        <div className="form-brick__input">
                          <input className="input-style" type="text" placeholder="email@address.io" />
                        </div>
                        <div className="form-brick__validation">Invalid email address.</div>
                      </div>
                      <div className="form-brick">
                        <button className="button button--40 button--green" type="button">Reset password</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="context-switch">
            Don't have an account? <Link to="/sign-up">Sign up here.</Link>
          </div>
        </div>
      </div>

      <div className="layout-auth__footer">
        <div className="center center--1120">
          <div className="auth-footer">
            <div className="auth-footer__company">&copy; 2017 Shnappy</div>
            <div className="auth-footer__name">Kyle</div>
          </div>
        </div>
      </div>
    </div>
  );
}
