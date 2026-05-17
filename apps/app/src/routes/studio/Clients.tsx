import { useState } from 'react';
import { Link } from 'react-router-dom';

const clients = [
  { id: '1', name: 'ClientName', date: '12/10/2016', alert: true },
  { id: '2', name: 'ClientName', date: '12/10/2016' },
  { id: '3', name: 'ClientName', date: '12/10/2016', alert: true },
  { id: '4', name: 'ClientName', date: '12/10/2016' },
  { id: '5', name: 'ClientName', date: '12/10/2016' },
  { id: '6', name: 'ClientName', date: '12/10/2016' },
  { id: '7', name: 'ClientName', date: '12/10/2016', alert: true },
  { id: '8', name: 'ClientName', date: '12/10/2016' },
];

export function Clients() {
  const [q, setQ] = useState('');
  const filtered = clients.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="page">
      <div className="page__body">
        <div className="client-controls">
          <div className="client-controls__search">
            <div className="search-input">
              <input
                className="search-input__input input-style"
                placeholder="search clients..."
                value={q}
                onChange={e => setQ(e.target.value)}
              />
            </div>
          </div>
          <div className="client-controls__button">
            <Link className="button button--pink button--40" to="/studio/clients/add">Add client</Link>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="module">
            <div className="module__body" style={{ padding: '2.4rem' }}>
              <div className="no-clients">
                <div className="no-clients__image"></div>
                <div className="no-clients__message">
                  <div className="typography">
                    <h1>Create your first Gallery</h1>
                    <p>A Gallery to share photos with your clients.</p>
                  </div>
                </div>
                <div className="no-clients__actions clearfix">
                  <div className="no-clients__button">
                    <Link className="button button--pink-stroke button--40" to="/studio/clients/sample">Try a sample</Link>
                  </div>
                  <div className="no-clients__button">
                    <Link className="button button--pink button--40" to="/studio/clients/create">Create a Gallery</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ul className="client-grid clearfix">
            {filtered.map(c => (
              <li className="client-grid__item" key={c.id}>
                <div className="client-panel">
                  {c.alert && (
                    <div className="client-panel__alert">
                      <div className="client-alert client-alert--pink"></div>
                    </div>
                  )}
                  <Link className="client-panel__item" to={`/studio/clients/${c.id}`}>
                    <div className="client-item">
                      <div className="client-item__image"></div>
                      <div className="client-item__name">
                        <div className="client-name">
                          <div className="client-name__name">{c.name}</div>
                          <div className="client-name__rule"></div>
                          <div className="client-name__date">{c.date}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
