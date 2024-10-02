import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

import './footer.scss'

export const Footer = () => (
  <footer className="footer-container">
    <div className="footer-container__column">
      <span className="footer-container__column__title">contact</span>
      <a
        href=""
        className="footer-container__column__item">
        <TwitterLogoIcon />
      </a>

      <a
        href=""
        className="footer-container__column__item">
        <InstagramLogoIcon />
      </a>

      <a
        href=""
        className="footer-container__column__item">
        <GitHubLogoIcon />
      </a>

      <a
        href=""
        className="footer-container__column__item">
        <LinkedInLogoIcon />
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
