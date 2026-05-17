import { AccountNav } from './AccountNav';

export function Profile() {
  return (
    <div className="page">
      <div className="page__body">
        <AccountNav />
        <div className="module module--white">
          <header className="module__header">
            <h2 className="heading-style">Profile Settings</h2>
          </header>
          <div className="module__body">
            <form className="form-style">
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Avatar</label>
                <div className="form-brick__element">
                  <div className="client-item__image" style={{ width: 64, height: 64, borderRadius: '50%' }}></div>
                </div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Name</label>
                <div className="form-brick__element">
                  <input type="text" className="input-style" defaultValue="Kyle Henwood" />
                </div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Email</label>
                <div className="form-brick__element">
                  <input type="email" className="input-style" defaultValue="kyle.henwood@gmail.com" />
                </div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Password</label>
                <div className="form-brick__element">
                  <input type="password" className="input-style" placeholder="Current password" />
                </div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Password new</label>
                <div className="form-brick__element">
                  <input type="password" className="input-style" placeholder="New password" />
                </div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Password new (repeat)</label>
                <div className="form-brick__element">
                  <input type="password" className="input-style" placeholder="Repeat new password" />
                </div>
              </div>
            </form>
          </div>
          <footer className="module__footer">
            <div className="button-pattern clearfix">
              <div className="button-pattern__submit">
                <button className="button button--36 button--pink" type="button">Save changes</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
