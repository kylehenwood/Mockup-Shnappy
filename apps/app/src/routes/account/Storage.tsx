import { AccountNav } from './AccountNav';

const providers = [
  { name: 'Dropbox', connected: true },
  { name: 'Box', connected: false },
  { name: 'Google Drive', connected: false },
  { name: 'Shnappy Cloud', connected: true },
];

export function Storage() {
  return (
    <div className="page">
      <div className="page__body">
        <AccountNav />
        <div className="module module--white">
          <header className="module__header">
            <h2 className="heading-style">Linked storage</h2>
          </header>
          <div className="module__body">
            <ul className="switch-list">
              {providers.map(p => (
                <li className="switch-list__item" key={p.name}>
                  <div className="switch-control">
                    <div className="switch-control__title">{p.name}</div>
                    <div className="switch-control__message">
                      <div className="typography">
                        <p>{p.connected ? 'Connected.' : 'Not connected.'}</p>
                      </div>
                    </div>
                    <div className="switch-control__switch">
                      <button
                        type="button"
                        className={`button button--36 ${p.connected ? 'button--grey-stroke' : 'button--green'}`}
                      >
                        {p.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
