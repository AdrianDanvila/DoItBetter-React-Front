import { ArrowRight, Calendar, Clock, LinkIcon } from 'lucide-react'

import './home.scss'

import { Footer } from '@/components/home/footer/Footer'
import { Header } from '@/components/home/header/Header'
import TestimonialsCarousel from '@/components/shared/testimonials/testimonials'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Calendar,
    title: 'Create Events',
    description: 'Easily set up and customize your event types',
    alt: 'Calendar card',
  },
  {
    icon: Clock,
    title: 'Manage Availability',
    description: 'Define your availability to streamline scheduling',
    alt: 'Clock card',
  },
  {
    icon: LinkIcon,
    title: 'Custom Links',
    description: 'Share your personalized scheduling link',
    alt: 'Custom links card',
  },
]

const howItWorks = [
  { step: 'Sign Up', description: 'Create your free Schedulrr account' },
  {
    step: 'Set Availability',
    description: "Define when you're available for meetings",
  },
  {
    step: 'Share Your Link',
    description: 'Send your scheduling link to clients or colleagues',
  },
  {
    step: 'Get Booked',
    description: 'Receive confirmations for new appointments automatically',
  },
]

export const Home = () => (
  <section className="home-container">
    <Header />
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        {/* Home section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          <div className="lg:w-1/2">
            <h1 className="text-7xl font-extrabold pcb-6 gradient-title">
              Simpleify Your Meetings
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Schedulrr will help you manage your meetings more effectively.
              Create some evenets and more.
            </p>
            <a href="/dashboard">
              <Button
                size="lg"
                className="text-lg bg-blue-500 hover:bg-blue-400 text-white">
                Get Started <ArrowRight className="ml-2 h-2 w-5" />
              </Button>
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square invisible lg:visible">
              <img
                src="..\src\assets\foto2.png"
                alt="ilu"
              />
            </div>
          </div>
        </div>
        {/* features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            Key features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.alt}
                aria-label={feature.alt}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center text-blue-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/*What our users say  */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            What our users say
          </h2>
          <TestimonialsCarousel />
        </div>
        {/*How it works */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            How it works
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
                <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center ">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Scheduling?
          </h2>
          <p className="text-xl mb-6">
            Join thousands of professionals who trust Schedulrr for efficient
            time management.
          </p>
          <a href="/dashboard">
            <Button
              size="lg"
              variant="secondary"
              className="text-blue-600 bg-white">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </main>

    <Footer />
  </section>
)
