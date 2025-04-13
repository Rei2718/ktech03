"use client"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Story() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll<HTMLElement>('.animate-on-scroll')

    elements.forEach((el: HTMLElement) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    })
  }, [])

  return (
    <div ref={sectionRef} className="relative w-full h-svh flex items-center justify-center pb-10">
      <div className="mx-auto flex flex-col items-center text-center animate-on-scroll">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-3 sm:pb-4 md:pb-5 lg:pb-6 font-bold w-10/12">
            OUR VISION
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold pb-8 sm:pb-12 md:pb-16 lg:pb-20 w-10/12">
            個性が融合することで、唯一無二を生み出す
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl w-10/12 text-[#A2A2A2]">
            技術と芸術、理論と実践。これらの相反する要素が融合する瞬間に、未来は生まれます。
            k-Techでは、一人ひとりの独自性を最大限に尊重し、その創造性が連携によって拡大することを信条としています。
            私たちのビジョンは、個々の才能が大きな力となり、世界を変革する原動力となることです。
        </p>
      </div>
    </div>
  )
}
