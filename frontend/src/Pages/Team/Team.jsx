
import './Team.css'
import Navigationbar from '../../Components/Navigationbar/Navigationbar'

function Team() {
    
  return (
    <div className="contact-top fdbck">
    <Navigationbar />
    <div className="responsive-container-block outer-container">
  <div className="responsive-container-block inner-container">
    <p className="text-blk section-head-text">
      Meet Our Team
    </p>
    <p className="text-blk section-subhead-text">
      Travel Jinn Developers
    </p>
    <div className="responsive-container-block">
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="./images/gaurav.jpg"/>
          </div>
          <p className="text-blk name">
            Gaurav Ahuja
          </p>
          <p className="text-blk position">
          NIT Surat
          </p>
          <div className="social-media-links">
        <a href="https://instagram.com/gauravahuja1213?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram" />
        </a>
        <a href="mailto:gauravahuja1213@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email" />
        </a>
        <a href="https://github.com/Gauravahuja1213" target="_blank" rel="noopener noreferrer">
          {/* <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email" /> */}
          <i className="fab fa-github github-icon"></i>
        </a>
      </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="./images/om.jpeg" />
          </div>
          <p className="text-blk name">
            Om Tamboli
          </p>
          <p className="text-blk position">
            NIT Surat
          </p>
          <div className="social-media-links">
          <a href="https://instagram.com/_oooom_008?igshid=ZDc4ODBmNjlmNQ==" target="_blank" rel="noopener noreferrer">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram" />
        </a>
        <a href="mailto:omtamboli08@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email" />
        </a>
        <a href="https://github.com/omtamboli" target="_blank" rel="noopener noreferrer">
          {/* <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email" /> */}
          <i className="fab fa-github github-icon"></i>
        </a>
    </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Team