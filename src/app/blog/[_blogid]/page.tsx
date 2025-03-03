'use client'

import { useEffect, useState } from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Gatherer from '@/components/textuality/pather'
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { MovingCommand } from '@/app/page'
import { CheckForHeadings } from '@/components/textuality/richtext'

interface BlogProps {
  params: {
    _blogid: string
  }
}

export default function Blog({ params }: Readonly<BlogProps>) {
  const { _blogid } = params
  const [blogs, setBlogs] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    fetch(`/api/textuality/specific?blogid=${_blogid}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok")
        }
        return res.json()
      })
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setBlogs(data.blogs)
        }
      })
      .catch((err) => {
        setError('Failed to load blog post. Please try again later.')
        console.error('Error:', err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [_blogid])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#f1f1f1] dark:bg-[#08070b]">
      <Header />
      <MovingCommand setmenu={setIsMenuOpen} isopen={isMenuOpen} />
      <main className="flex-grow py-12 container mx-auto w-full lg:px-24 h-full flex flex-col items-center">
        <div className=" w-full md:px-0 px-4 flex-wrap  overflow-wrap-break-word">
          <div className="flex flex-row gap-2 items-center mb-4 md:mb-6">
            <div className="flex flex-row items-center gap-2 group">
              <ArrowLeft className="h-5 w-5 text-primary group-hover:-translate-x-1 transition-all md:h-4 md:w-4" />
              <Link 
                href="/blog" 
                className="text-primary text-sm md:text-base font-semibold hover:underline"
              >
                Back to Blog
              </Link>
            </div>
          </div>
          <a 
            href="https://textuality.hdev.uk/" 
            className="inline-block font-semibold text-muted-foreground text-sm md:text-base transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Textuality
          </a>
          {(() => {
            if (isLoading) {
              return (
                <div className="space-y-4 mt-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              )
            } else if (error) {
              return (
                <Alert variant="destructive" className="mt-4">
                  <AlertCircle className="h-5 w-5 md:h-4 md:w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )
            } else if (blogs) {
              return (
                <article className="custom-prose w-full mt-4">
                  <Gatherer blogs={blogs} />
                </article>
              )
            } else {
              return <p className="text-center text-gray-600 mt-4">No blog content available.</p>
            }
          })()}
        </div>
      </main>
      <Footer />
    </div>
  )
}