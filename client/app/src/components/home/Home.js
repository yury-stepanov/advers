import React from 'react'
import Link from 'components/link'
import './home.css'

const Home = () => (
  <div className="home">
    <h2 className="home__title">Hi, my name is Yury</h2>
    <section className="home__about-myself">
      I'am a Software Engineer, working in the
      <Link to="https://www.epam.com/" openInNewTab> EPAM </Link> <br />
      on my way of fighting entropy by occasionally building stuff.
    </section>
    <section className="home__contact">
      <span className="contact-me">Contact -</span>
      <Link to="https://www.linkedin.com/in/yury-stepanov" openInNewTab>
        Linkedin
      </Link>
      <Link to="https://github.com/yury-stepanov" openInNewTab>
        GitHub
      </Link>
      <Link to="mailto:advers191@gmail.com">Email</Link>
    </section>
  </div>
)

export default Home
