import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function UpgradeModal({ open, onClose }: Props) {
  const [annual, setAnnual] = useState(true);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`modal-overlay js-modal-overlay${open ? ' modal-overlay--active' : ''}`}
      onClick={onClose}
    >
      <div className="center center--800">
        <div className="modal js-modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal__close js-modal-close" onClick={onClose}>
            <div className="flat-icon icon--16 icon--cross"></div>
          </div>

          <div className="modal-upgrade">
            <h1 className="modal-upgrade__headline">Way to go! You're ready for an upgrade!</h1>

            <div className="modal-upgrade__annual-switch">
              <div className="annual-switch js-annual-switch">
                <div
                  className={`annual-switch__button js-annual-button${!annual ? ' annual-switch__button--active' : ''}`}
                  onClick={() => setAnnual(false)}
                >Monthly</div>
                <div
                  className={`annual-switch__button js-annual-button${annual ? ' annual-switch__button--active' : ''}`}
                  onClick={() => setAnnual(true)}
                >Annual</div>
              </div>
            </div>

            <div className="modal-upgrade__section">
              <div className="modal-upgrade__title">Earlybird plans — <em>limited time only!</em></div>

              <div className="modal-upgrade__plan">
                <div className="plan-block">
                  <div className="plan-block__title">Beta Free</div>
                  {['Feature name', 'Feature name', 'Feature name'].map((f, i) => (
                    <div className="plan-block__feature" key={i}>
                      <div className="plan-block__feature-icon"><div className="icon--test"></div></div>
                      <div className="plan-block__feature-text">{f}</div>
                    </div>
                  ))}
                  <div className="plan-block__button">
                    <a className="button button--36 button--grey button--disabled">Current plan</a>
                  </div>
                </div>
              </div>

              <div className="modal-upgrade__plan">
                <div className="plan-block plan-block--green">
                  <div className="plan-block__title">Beta Special</div>
                  {['Feature name', 'Feature name', 'Feature name'].map((f, i) => (
                    <div className="plan-block__feature" key={i}>
                      <div className="plan-block__feature-icon"><div className="icon--test"></div></div>
                      <div className="plan-block__feature-text">{f}</div>
                    </div>
                  ))}
                  <div className="plan-block__button">
                    <Link className="button button--36 button--green" to="/account/billing/payment" onClick={onClose}>Choose Plan</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-upgrade__section">
              <div className="modal-upgrade__title">Regular pricing — <em>coming soon!</em></div>

              {[
                { title: 'Freelancer', features: ['1 Client'] },
                { title: 'Indie', features: ['5 Clients', 'Studio Website'] },
                { title: 'Professional', features: ['25 Clients', 'Studio Website'] },
              ].map(plan => (
                <div className="modal-upgrade__plan" key={plan.title}>
                  <div className="plan-block">
                    <div className="plan-block__title">{plan.title}</div>
                    {plan.features.map((f, i) => (
                      <div className="plan-block__feature" key={i}>
                        <div className="plan-block__feature-icon"><div className="icon--test"></div></div>
                        <div className="plan-block__feature-text">{f}</div>
                      </div>
                    ))}
                    <div className="plan-block__button">
                      <a className="button button--36 button--disabled">Coming soon</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-upgrade__message">
              <p>Don't worry, you can upgrade, downgrade or cancel your plan at any time!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
