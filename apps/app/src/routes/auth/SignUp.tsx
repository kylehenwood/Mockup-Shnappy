import { Link } from 'react-router-dom';

export function SignUp() {
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
            <div className="auth__header">We're looking for Beta testers.</div>
            <div className="auth__form">
              <div className="form-brick form-brick--margin">
                <div className="form-brick__label">Email</div>
                <div className="form-brick__input">
                  <input className="input-style" type="text" placeholder="email@address.io" />
                </div>
                <div className="form-brick__validation">This is validation.</div>
              </div>

              <div className="pattern-signup">
                <Link className="button button--40 button--pink" to="/studio/clients">Join waiting list</Link>
              </div>
            </div>
          </div>

          <div className="context-switch">
            Already have an account? <Link to="/sign-in">Sign in here.</Link>
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
