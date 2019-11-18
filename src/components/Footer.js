import React, { Component } from 'react'
import '../css/footer.scss'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-text">
          <h1>Let's chat</h1>
          <p>Get in touch to talk technologies or for business related inquiries👍</p>
          <a href="mailto:Richardepitts@gmail.com" target="_top">Richardepitts@gmail.com</a>
          <br></br>
          <a href="https://github.com/Richardepitts" alt="" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/Richardepitts/" alt="" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://www.behance.net/richardpitts" alt="" target="_blank"><i class="fa fa-behance" aria-hidden="true"></i></a>
        </div>
      </div>
    )
  }
}

export default Footer
