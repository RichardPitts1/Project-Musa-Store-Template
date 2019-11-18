import React, { Component } from 'react'
import '../css/aboutpage.scss'

class AboutPage extends Component {

  state = {
    clicked: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="about-page">
        <img src={'../richard.jpg'} alt=""/>

        <h1>Hey. I’m Richard Pitts.</h1>

        <div className="about-text">
          <p>I’m a front-end developer who believes an app is like a piece of music.  If one note is off, the whole performance is ruined.  It has to work perfectly, without bugs, then it should be made as beautiful as possible 👍.</p>

          <p>As a JavaScript connoisseur, I spend most of my time working with React.  Although my preference is front-end, I completed a full-stack program inhouse program at Flatiron School in Houston, so I also feel comfortable with the back-end and Ruby, Rails, SQL, GraphQL, Prisma, and Node.</p>

          <p>In my free time I love learning motion design, namely After Effects and Houdini, where some of my works are displayed below.  Email me if you’d like to get in touch. Thanks for coming by! 😄</p>
        </div>

      </div>
    )
  }
}

export default AboutPage
