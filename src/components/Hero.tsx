import WhySelling from './WhySelling'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__main">
        <h1 className="hero__headline">
          Opa! Se você caiu aqui, é porque quer saber o que estou vendendo!
        </h1>
        <p className="hero__body">
          Se algo te interessar, só me dar um alô no Insta, ou se tiver meu número, pode me chamar no
          Whats =)
        </p>
      </div>

      <div className="hero__aside">
        <WhySelling />
      </div>
    </section>
  )
}

export default Hero
