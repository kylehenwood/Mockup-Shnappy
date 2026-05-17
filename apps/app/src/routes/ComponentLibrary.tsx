const palette = [
  ['pink-dark', 'pink', 'pink-light'],
  ['yellow-dark', 'yellow', 'yellow-light'],
  ['green-dark', 'green', 'green-light'],
  ['blue-dark', 'blue', 'blue-light'],
  ['purple-dark', 'purple', 'purple-light'],
];

const buttonColors = ['pink', 'green', 'blue', 'grey'] as const;
const buttonSizes = [36, 40, 48] as const;

export function ComponentLibrary() {
  return (
    <div className="page">
      <div className="page__body">
        <div className="primary-wrap">
          <div className="primary-heading">
            <h1 className="primary-heading__studio-name">Component library</h1>
          </div>
        </div>

        {/* Switches */}
        <div className="module module--margin">
          <div className="module__header"><h4 className="heading-style">Switch toggle</h4></div>
          <div className="module__body">
            <label className="switch">
              <input className="switch__input" type="checkbox" />
              <div className="switch__toggle"></div>
            </label>
            {' '}
            <label className="switch">
              <input className="switch__input" type="checkbox" defaultChecked />
              <div className="switch__toggle"></div>
            </label>
            {' '}
            <label className="switch">
              <input className="switch__input" type="checkbox" disabled />
              <div className="switch__toggle"></div>
            </label>
          </div>
        </div>

        {/* Palette */}
        <div className="module module--margin">
          <div className="module__header"><h4 className="heading-style">Shnappy palette</h4></div>
          <div className="module__body">
            <div className="color-container clearfix">
              {palette.map((row, r) => (
                <ul className="color-grid" key={r}>
                  {row.map(c => (
                    <li className="color-grid__item" key={c}>
                      <div className="color-brick">
                        <div className="color-brick__icon">
                          <div className={`icon-color bg-color-${c}`}></div>
                        </div>
                        <div className="color-brick__class">${`color-${c}`}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Loading */}
        <div className="module module--margin">
          <div className="module__header"><h4 className="heading-style">Shnappy loading icon</h4></div>
          <div className="module__body">
            <div className="loading-container clearfix">
              <ul className="loading-grid">
                {[24, 48, 96].map(s => (
                  <li className="loading-grid__item" key={s}>
                    <div className={`aperture aperture--${s} aperture--pink`}>
                      <div className="aperture__ring"></div>
                      <div className="aperture__icon"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="module module--margin">
          <div className="module__header"><h4 className="heading-style">Shnappy buttons</h4></div>
          <div className="module__body">
            <div className="button-container clearfix">
              {buttonColors.map(c => (
                <ul className="button-grid" key={c}>
                  <li className="button-grid__item">
                    <button className={`button button--36 button--${c}`} type="button">.button--{c}</button>
                  </li>
                  <li className="button-grid__item">
                    <button className={`button button--36 button--${c}-stroke`} type="button">.button--{c}-stroke</button>
                  </li>
                </ul>
              ))}
              <ul className="button-grid">
                {buttonSizes.map(s => (
                  <li className="button-grid__item" key={s}>
                    <button className={`button button--${s} button--grey`} type="button">.button--{s}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Form styles */}
        <div className="module module--margin">
          <div className="module__header"><h4 className="heading-style">Shnappy form styles</h4></div>
          <div className="module__body">
            <form className="form-style form-style--640">
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Input label</label>
                <div className="form-brick__element">
                  <input type="text" className="input-style" placeholder="testing..." />
                </div>
                <div className="form-brick__validation">This is an error message.</div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Error state</label>
                <div className="form-brick__element">
                  <input type="text" className="input-style input-style--red" defaultValue="error" />
                </div>
                <div className="form-brick__validation form-brick__validation--show">This is an error message.</div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Textarea</label>
                <div className="form-brick__element">
                  <textarea className="textarea-style" placeholder="Type something..." />
                </div>
              </div>
              <div className="form-brick form-brick--margin">
                <label className="form-brick__label">Select</label>
                <div className="form-brick__element">
                  <div className="select-box">
                    <div className="select-box__icon">
                      <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                    </div>
                    <div className="select-box__select">
                      <select className="select-style" defaultValue="">
                        <option value="">-- Select an option --</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Client grid */}
        <div className="module module--margin">
          <div className="module__header"><h4 className="heading-style">Shnappy client grid</h4></div>
          <div className="module__body">
            <ul className="client-grid clearfix">
              {[0, 1, 2, 3].map(i => (
                <li className="client-grid__item" key={i}>
                  <div className="client-panel">
                    {i % 2 === 0 && (
                      <div className="client-panel__alert">
                        <div className="client-alert client-alert--pink"></div>
                      </div>
                    )}
                    <div className="client-panel__item">
                      <div className="client-item">
                        <div className="client-item__image"></div>
                        <div className="client-item__name">
                          <div className="client-name">
                            <div className="client-name__name">ClientName</div>
                            <div className="client-name__rule"></div>
                            <div className="client-name__date">12/10/2016</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="module module--margin">
          <div className="module__header"><h4 className="heading-style">Breadcrumb</h4></div>
          <div className="module__body">
            <ul className="breadcrumb clearfix">
              <li className="breadcrumb__item">
                <div className="breadcrumb-item breadcrumb-item--icon">
                  <a className="breadcrumb-item__link">Breadcrumb A</a>
                  <div className="breadcrumb-item__icon">
                    <span className="flat-icon icon--16 icon--arrow-right"></span>
                  </div>
                </div>
              </li>
              <li className="breadcrumb__item">
                <div className="breadcrumb-item">
                  <span className="breadcrumb-item__text">Breadcrumb B</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
