import { AccountNav } from './AccountNav';

const switches = [
  {
    title: 'Shnappy news',
    message: 'News to keep you upto date with all things Shnappy! New features.',
  },
  {
    title: 'Activity emails',
    message: 'Stay upto date with all your clients activity.',
  },
  {
    title: 'Changes made to my account',
    message: 'Email me whenever I make changes to my account.',
  },
];

export function Notifications() {
  return (
    <div className="page">
      <div className="page__body">
        <AccountNav />
        <div className="module module--white">
          <header className="module__header">
            <h2 className="heading-style">Notifications</h2>
          </header>

          <div className="module__body module__body--margin">
            <div className="typography">
              <h4>NOTE:</h4>
              <p>These notification options are for your account, to change notification options for your studio, visit your Studio notifications page.</p>
            </div>
          </div>

          <div className="module__body">
            <ul className="switch-list">
              {switches.map((s, i) => (
                <li className="switch-list__item" key={i}>
                  <div className="switch-control">
                    <div className="switch-control__title">{s.title}</div>
                    <div className="switch-control__message">
                      <div className="typography"><p>{s.message}</p></div>
                    </div>
                    <div className="switch-control__switch">
                      <label className="switch">
                        <input className="switch__input" type="checkbox" />
                        <div className="switch__toggle"></div>
                      </label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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
