import { useTranslation } from 'react-i18next'
import { ArrowRight, Calendar, Clock, LinkIcon } from 'lucide-react'

import mg from '@assets/foto2.png'

import './home.scss'

import { Footer } from '@/components/home/footer/Footer'
import { Header } from '@/components/home/header/Header'
import TestimonialsCarousel from '@/components/shared/testimonials/testimonials'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
const features = [
  {
    icon: Calendar,
    title: 'home.key_features.description.routines_creation.title',
    description: 'home.key_features.description.routines_creation.description',
    alt: 'Calendar card',
  },
  {
    icon: Clock,
    title: 'home.key_features.description.routine_manage.title',
    description: 'home.key_features.description.routine_manage.description',
    alt: 'Clock card',
  },
  {
    icon: LinkIcon,
    title: 'home.key_features.description.learn_from_others.title',
    description: 'home.key_features.description.learn_from_others.description',
    alt: 'Custom links card',
  },
]

const howItWorks = [
  {
    step: 'home.how_it_works.step1.step',
    description: 'home.how_it_works.step1.description',
  },
  {
    step: 'home.how_it_works.step2.step',
    description: 'home.how_it_works.step2.description',
  },
  {
    step: 'home.how_it_works.step3.step',
    description: 'home.how_it_works.step3.description',
  },
  {
    step: 'home.how_it_works.step4.step',
    description: 'home.how_it_works.step4.description',
  },
]

export const Home = () => {
  const { t } = useTranslation()
  return (
    <section className="home-container">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          {/* Home section */}
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24"
            id="introduction">
            <div className="lg:w-1/2">
              <h1 className="text-7xl font-extrabold pcb-6 gradient-title">
                {t('home.introduction.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                {t('home.introduction.description')}
              </p>
              <a href="/login">
                <Button
                  size="lg"
                  className="text-lg bg-blue-500 hover:bg-blue-400 text-white">
                  {t('home.introduction.button')}
                  <ArrowRight className="ml-2 h-2 w-5" />
                </Button>
              </a>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square invisible lg:visible">
                <img
                  src={mg}
                  alt="ilu"
                />
              </div>
            </div>
          </div>
          {/* features */}
          <div
            className="mb-24"
            id="key_features">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
              {t('home.key_features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card
                  key={feature.alt}
                  aria-label={feature.alt}>
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                    <CardTitle className="text-center text-blue-600">
                      {t(feature.title)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">
                      {t(feature.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/*What our users say  */}
          <div
            className="mb-24"
            id="what_users_says">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
              {t('home.what_users_says.title')}
            </h2>
            <TestimonialsCarousel />
          </div>
          {/*How it works */}
          <div
            className="mb-24"
            id="how_it_works">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
              {t('home.how_it_works.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{t(step.step)}</h3>
                  <p className="text-gray-600">{t(step.description)}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA */}
          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center ">
            <h2 className="text-3xl font-bold mb-4">{t('home.CTA.title')}</h2>
            <p className="text-xl mb-6">{t('home.CTA.description')}</p>
            <a href="/login">
              <Button
                size="lg"
                variant="secondary"
                className="text-blue-600 bg-white">
                {t('home.CTA.button')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </section>
  )
}
