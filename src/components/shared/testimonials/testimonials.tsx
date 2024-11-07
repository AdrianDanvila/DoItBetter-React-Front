import { useTranslation } from 'react-i18next'
import Autoplay from 'embla-carousel-autoplay'

import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Card, CardContent } from '../../ui/card'
import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel'

const testimonials = [
  {
    name: 'home.what_users_says.user1.name',
    role: 'home.what_users_says.user1.role',
    content: 'home.what_users_says.user1.content',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'home.what_users_says.user2.name',
    role: 'home.what_users_says.user2.role',
    content: 'home.what_users_says.user2.content',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'home.what_users_says.user3.name',
    role: 'home.what_users_says.user3.role',
    content: 'home.what_users_says.user3.content',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'home.what_users_says.user4.name',
    role: 'home.what_users_says.user4.role',
    content: 'home.what_users_says.user4.content',
    image: 'https://i.pravatar.cc/150?img=4',
  },
]

const TestimonialsCarousel = () => {
  const { t } = useTranslation()
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className=" mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 w-10 md:w-full">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className=" text-sm font-light text-gray-600 mb-4">
                  &quot;{t(testimonial.content)}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={t(testimonial.name)}
                    />
                    <AvatarFallback>
                      {t(testimonial.name)
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold gradient-title">
                      {t(testimonial.name)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t(testimonial.role)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default TestimonialsCarousel
