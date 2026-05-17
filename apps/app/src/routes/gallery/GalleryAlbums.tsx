import { useState } from 'react';

const tabs = ['Albums', 'All photos', 'Favourites', 'Cart'];

// Placeholder solid-color tiles since we don't have the legacy images.
const tiles = Array.from({ length: 24 }, (_, i) => i);
const palette = ['#f06292', '#ffd54f', '#81c784', '#64b5f6', '#ba68c8', '#4db6ac', '#ff8a65', '#a1887f'];

export function GalleryAlbums() {
  const [active, setActive] = useState(0);

  return (
    <div className="gallery-layout">
      <div className="gallery-layout__cover">
        <div className="gallery-cover">John and Jane's Wedding</div>
      </div>

      <div className="gallery-layout__navigation">
        <div className="gallery-navigation">
          <div className="center center--1120">
            <ul className="gallery-nav clearfix">
              {tabs.map((label, i) => (
                <li className="gallery-nav__item" key={label}>
                  <button
                    type="button"
                    className={`gallery-nav-item${active === i ? ' gallery-nav-item--active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    <div className="gallery-nav-item__text">{label}</div>
                    <div className="gallery-nav-item__underline"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="gallery-layout__container">
        <div className="center center--1120">
          <div className="module">
            <div className="module__header">
              <ul className="breadcrumb clearfix">
                <li className="breadcrumb__item">
                  <div className="breadcrumb-item">
                    <a className="breadcrumb-item__link" href="#">Albums</a>
                  </div>
                </li>
                <li className="breadcrumb__item">
                  <div className="breadcrumb-item breadcrumb-item--icon">
                    <div className="breadcrumb-item__icon">
                      <span className="flat-icon icon--16 icon--arrow-right"></span>
                    </div>
                    <span className="breadcrumb-item__text">AlbumName</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <ul className="grid effect-2" id="grid">
            {tiles.map(i => (
              <li key={i}>
                <a className="grid-item">
                  <div
                    style={{
                      width: '100%',
                      paddingBottom: '75%',
                      background: palette[i % palette.length],
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gallery-layout__footer">
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
