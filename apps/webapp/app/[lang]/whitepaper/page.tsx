import React from 'react'
import { PageContent, PageContentData } from '@/components/shared/content'
import { getDictionary } from '@/app/dictionaries'

export default async function BitlauncherWhitePaper({ params: { lang } }:BitlauncherWhitePaperProps) {
  const dict = await getDictionary(lang)
  const whitePaperContent: PageContentData = [
    { type: 'h1', text: dict.whitepaper.title1 },
    { type: 'p', text: dict.whitepaper.text1 },
    { type: 'p', text: dict.whitepaper.text2 },
    { type: 'p', text: dict.whitepaper.text3 },
    { type: 'p', text: dict.whitepaper.text4 },
    { type: 'h1', text: dict.whitepaper.title2 },
    { type: 'p', text: dict.whitepaper.text5 },
    { type: 'p', text: dict.whitepaper.text6 },
    { type: 'p', text: dict.whitepaper.text7 },
    { type: 'p', text: dict.whitepaper.text8 },
    { type: 'p', text: dict.whitepaper.text9 },
    { type: 'h1', text: dict.whitepaper.title3 },
    { type: 'p', text: dict.whitepaper.text10 },
    { type: 'p', text: dict.whitepaper.text11 },
    { type: 'p', text: dict.whitepaper.text12 },
    { type: 'p', text: dict.whitepaper.text13 },
    { type: 'p', text: dict.whitepaper.text14 },
    { type: 'p', text: dict.whitepaper.text15 },
    { type: 'p', text: dict.whitepaper.text16 },
    { type: 'h1', text: dict.whitepaper.title4 },
    { type: 'p', text: dict.whitepaper.text17 },
    { type: 'p', text: dict.whitepaper.text18 },
    { type: 'p', text: dict.whitepaper.text19 },
    { type: 'p', text: dict.whitepaper.text20 },
    { type: 'p', text: dict.whitepaper.text21 },
    { type: 'h1', text: dict.whitepaper.title5 },
    { type: 'p', text: dict.whitepaper.text22 },
    { type: 'p', text: dict.whitepaper.text23 },
    { type: 'p', text: dict.whitepaper.text24 },
    { type: 'p', text: dict.whitepaper.text25 },
    { type: 'p', text: dict.whitepaper.text26 },
    { type: 'p', text: dict.whitepaper.text27 },
    { type: 'h1', text: dict.whitepaper.title6 },
    { type: 'p', text: dict.whitepaper.text28 },
    { type: 'p', text: dict.whitepaper.text29 },
    { type: 'p', text: dict.whitepaper.text30 },
    { type: 'p', text: dict.whitepaper.text31 },
    { type: 'p', text: dict.whitepaper.text32 },
    { type: 'p', text: dict.whitepaper.text33 },
    { type: 'h1', text: dict.whitepaper.title7 },
    { type: 'p', text: dict.whitepaper.text34 },
    { type: 'p', text: dict.whitepaper.text35 },
    { type: 'p', text: dict.whitepaper.text36 },
    { type: 'p', text: dict.whitepaper.text37 },
    { type: 'p', text: dict.whitepaper.text38 },
    { type: 'p', text: dict.whitepaper.text39 },
    { type: 'h1', text: dict.whitepaper.title8 },
    { type: 'p', text: dict.whitepaper.text40 },
    { type: 'p', text: dict.whitepaper.text41 },
    { type: 'p', text: dict.whitepaper.text42 },
    { type: 'p', text: dict.whitepaper.text43 },
    { type: 'p', text: dict.whitepaper.text44 },
    { type: 'p', text: dict.whitepaper.text45 },
    { type: 'p', text: dict.whitepaper.text46 },
    { type: 'h1', text: dict.whitepaper.title9 },
    { type: 'p', text: dict.whitepaper.text47 },
    { type: 'p', text: dict.whitepaper.text48 },
    { type: 'p', text: dict.whitepaper.text49 },
    { type: 'p', text: dict.whitepaper.text50 },
    { type: 'p', text: dict.whitepaper.text51 },
    { type: 'p', text: dict.whitepaper.text52 },
    { type: 'p', text: dict.whitepaper.text53 },
    { type: 'h1', text: dict.whitepaper.title10 },
    { type: 'p', text: dict.whitepaper.text54 },
    { type: 'p', text: dict.whitepaper.text55 },
    { type: 'p', text: dict.whitepaper.text56 },
    { type: 'p', text: dict.whitepaper.text57 },
    { type: 'p', text: dict.whitepaper.text58 },
    { type: 'p', text: dict.whitepaper.text59 },
    { type: 'p', text: dict.whitepaper.text60 },
    { type: 'p', text: dict.whitepaper.text61 },
    { type: 'h1', text: dict.whitepaper.title11 },
    { type: 'p', text: dict.whitepaper.text62 },
    { type: 'p', text: dict.whitepaper.text63 },
    { type: 'p', text: dict.whitepaper.text64 },
    { type: 'p', text: dict.whitepaper.text65 },
    { type: 'h1', text: dict.whitepaper.title12 },
    { type: 'p', text: dict.whitepaper.text66 },
    { type: 'p', text: dict.whitepaper.text67 },
    { type: 'p', text: dict.whitepaper.text68 },
    { type: 'p', text: dict.whitepaper.text69 },
    { type: 'p', text: dict.whitepaper.text70 },
    { type: 'p', text: dict.whitepaper.text71 },
    { type: 'p', text: dict.whitepaper.text72 },
    { type: 'h1', text: dict.whitepaper.title13 },
    { type: 'p', text: dict.whitepaper.text73 },
    { type: 'p', text: dict.whitepaper.text74 },
    { type: 'p', text: dict.whitepaper.text75 },
    { type: 'p', text: dict.whitepaper.text76 },
    { type: 'p', text: dict.whitepaper.text77 },
    { type: 'p', text: dict.whitepaper.text78 },
    { type: 'p', text: dict.whitepaper.text79 },
    { type: 'p', text: dict.whitepaper.text80 },
    { type: 'p', text: dict.whitepaper.text81 },
    { type: 'p', text: dict.whitepaper.text82 },
    { type: 'p', text: dict.whitepaper.text83 },
    { type: 'p', text: dict.whitepaper.text84 },
    { type: 'p', text: dict.whitepaper.text85 },
    { type: 'h1', text: dict.whitepaper.title14 },
    { type: 'p', text: dict.whitepaper.text86 },
    { type: 'h1', text: dict.whitepaper.title15 },
    { type: 'p', text: dict.whitepaper.text87 }
  ]
  const content = whitePaperContent
  return (
    <div className="content-container !py-10 md:px-3 px-7 md:py-24">
      <PageContent data={content} />
    </div>
  )
}

interface BitlauncherWhitePaperProps {
  params: { lang: string }
}