const events = [
  { who: 'ClientName', what: 'favourited a photo', when: '2 min ago' },
  { who: 'ClientName', what: 'commented on a photo', when: '14 min ago' },
  { who: 'ClientName', what: 'downloaded their gallery', when: '1 hour ago' },
  { who: 'ClientName', what: 'opened their gallery', when: 'Yesterday' },
];

export function Activity() {
  return (
    <div className="page">
      <div className="page__header"><h4 className="heading-style">Activity</h4></div>
      <div className="page__body">
        <div className="module module--white">
          <div className="module__body">
            <ul className="contacts-list">
              {events.map((e, i) => (
                <li key={i} className="contacts-list__item">
                  <div className="contact-item clearfix">
                    <div className="contact-item__avatar"></div>
                    <div className="contact-item__name">{e.who}</div>
                    <div className="contact-item__email">{e.what} · {e.when}</div>
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
