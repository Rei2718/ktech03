"use client"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MiddleMessage() {
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
    <div ref={sectionRef} className="relative w-full h-full flex items-center justify-center">
      <div className="mx-auto flex flex-col items-center text-center animate-on-scroll">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-3 sm:pb-4 md:pb-5 lg:pb-6 font-bold w-10/12 max-w-6xl">
          新しい体験を創る
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold pb-8 sm:pb-12 md:pb-16 lg:pb-20 w-10/12 max-w-6xl">
          デジタルとアナログの境界線を行き来するのがk-Techのスタイル。
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2x text-center mx-auto w-10/12 text-[#A2A2A2] max-w-6xl">
          k-Techでは既存の枠組みにとらわれない発想を大切にします。3DCGの精密さ、AIの知性、Webの拡張性—それぞれの領域を深めながらも、その壁を超えたときに生まれる可能性を追求しています。
          技術は手段であり、目的は人々に新しい体験を届けること。デジタルとリアルの境界を溶かし、これまでにない価値を創造する旅に、あなたも参加しませんか。
        </p>
      </div>
    </div>
  )
}
