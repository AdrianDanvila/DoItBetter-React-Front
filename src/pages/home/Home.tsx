import './home.scss'

import { Footer } from '@/components/home/footer/Footer'
import { Header } from '@/components/home/header/Header'

export const Home = () => (
  <section className="home-container">
    <Header />
    <div className="h-full">
      <h1>title</h1>
      <div>Text</div>
    </div>
    <Footer />
  </section>
)
