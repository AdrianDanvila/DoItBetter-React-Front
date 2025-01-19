import { useTranslation } from 'react-i18next'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'

import './footer.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex items-center justify-center">
      <Card className="bg-card mb-5 py-3 px-4 border-0 flex gap-6 rounded-2xl mt-5 w-11/12 justify-between flex-col md:flex-row items-center border-t-2">
        <div className="flex flex-col justify-between gap-4 w-fit items-center md:items-start">
          <div>
            <h1 className="text-lg font-semibold">DoItBetter</h1>
            <p className="text-sm text-gray-500">Your routines</p>
          </div>
          <div>
            <Button
              size="lg"
              variant="secondary"
              className="text-white bg-blue-600">
              {t('home.CTA.button')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex  items-center gap-2 md:gap-8">
          <div className="flex space-x-2">
            <a
              href="https://facebook.com"
              className="text-gray-500 hover:text-gray-800">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-gray-800">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-500 hover:text-gray-800">
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
