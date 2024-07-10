import { useTranslation } from 'react-i18next'

import './footer.scss'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer-container">
      <div className="footer-container__column">
        <span className="footer-container__column__title">b</span>
        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>
      </div>

      <div className="footer-container__column">
        <span className="footer-container__column__title">b</span>
        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>
      </div>

      <div className="footer-container__column">
        <span className="footer-container__column__title">b</span>
        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>
      </div>

      <div className="footer-container__column">
        <span className="footer-container__column__title">b</span>
        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>

        <a
          href=""
          className="footer-container__column__item">
          a
        </a>
      </div>
    </footer>
  )
}
