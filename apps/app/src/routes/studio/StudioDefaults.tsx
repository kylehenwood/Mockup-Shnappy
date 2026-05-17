const switches = [
  { title: 'Password protected', message: 'Require a password to view gallery.', checked: true },
  { title: 'Watermark images', message: 'Watermark every image automatically uploaded.', disabled: true },
  { title: 'Favourite sharing', message: 'Allow clients to share their favourite images as static web pages.' },
  { title: 'Allow image download', message: 'Allow clients to download your photos.' },
  { title: 'Gallery showcase', message: 'Show gallery on your studio page.', disabled: true, error: 'This option is only available on large plans.' },
];

export function StudioDefaults() {
  return (
    <div className="module">
      <div className="module__header">
        <h4 className="heading-style">Gallery defaults</h4>
      </div>

      <div className="module__body module__body--margin">
        <div className="typography">
          <p>These settings will be set as default for all future galleries created.</p>
          <p>You can change all of these settings for each client, under their client settings section.</p>
        </div>
      </div>

      <div className="module__header">
        <h4 className="heading-style">Options</h4>
      </div>

      <div className="module__body">
        <ul className="switch-list">
          {switches.map((s, i) => (
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

      <footer className="module__footer">
        <div className="button-pattern clearfix">
          <div className="button-pattern__submit">
            <button className="button button--36 button--pink">Save changes</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
