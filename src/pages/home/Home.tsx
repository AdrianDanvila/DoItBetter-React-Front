import './home.scss'

import { Footer } from '@/components/home/footer/Footer'
import { Header } from '@/components/home/header/Header'

export const Home = () => (
  <section className="home-container">
    <Header />
    <div className="w-full  div-1">
      <p className="text-2xl text-gray-600 font-black">
        <b className="text-blue-600 text-4xl">PUSH</b> YOURSELF
      </p>
      <p className="text-5xl text-gray-600 font-black">
        TRAIN THE <b className="text-blue-600 text-6xl">FIGHTER</b> IN YOU
      </p>
      <p className="text-3xl text-gray-600 font-black">
        JUST <b className="text-4xl text-blue-600">DO</b> IT
      </p>

      <p className=" text-gray-600 font-black pt-10 px-2 w-8/12 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
        gravida turpis, sed facilisis justo. Nulla pharetra, orci sit amet
        sollicitudin gravida, risus augue semper sapien, non faucibus mauris leo
        vitae augue. Proin accumsan lorem et convallis eleifend. Phasellus eu
        ligula nec mi elementum feugiat ut eget lectus. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. In
        aliquet convallis dui sed posuere. Praesent ut est aliquet, porttitor
        turpis eu, tincid
      </p>
    </div>
    <div className="w-full  div-2">
      <p className="text-6xl text-gray-600 font-black">
        TRAIN THE <b className="text-blue-500">FIGHTER</b> IN YOU
      </p>
      <p className="text-6xl text-gray-600 font-black">
        TRAIN THE <b className="text-blue-500">FIGHTER</b> IN YOU
      </p>
      <p className="text-6xl text-gray-600 font-black">
        TRAIN THE <b className="text-blue-500">FIGHTER</b> IN YOU
      </p>
    </div>

    <div className="w-full  div-1">
      <p className="text-6xl text-gray-600 font-black">
        TRAIN THE <b className="text-blue-500">FIGHTER</b> IN YOU
      </p>
      <p className="text-6xl text-gray-600 font-black">
        TRAIN THE <b className="text-blue-500">FIGHTER</b> IN YOU
      </p>
      <p className="text-6xl text-gray-600 font-black">
        TRAIN THE <b className="text-blue-500">FIGHTER</b> IN YOU
      </p>
    </div>

    <Footer />
  </section>
)
