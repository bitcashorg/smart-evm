export const handleStyledTags = (text: string) => {
  let newTextWithLinks = ''
  newTextWithLinks = text.replace(/(^|\s)([#@][a-z\d-]+)/gi, (tag) => {
    const account = tag.trim().substring(1)
    return `<a href="/${account}" class="text-primary-purple text-sm md:text-2xl md:font-normal text-start">${tag}</a>`
  })
  return newTextWithLinks
}

export const readingTime = (blogContent: {
  contentBlock: { mainContent: any }[]
}) => {
  const contentGroup: any = []
  const getContents = blogContent?.contentBlock
    ?.map(({ mainContent }) => {
      return mainContent.value.document.children
    })
    .filter((block: any) => Boolean(block))
  const getContentsTexts = getContents
    ?.filter((filt: undefined) => filt !== undefined)
    .map((item: any[]) => {
      return item.map((val: { children: any }) => val.children)
    })

  for (let i = 0; i <= getContentsTexts?.length; i++) {
    for (let j = 0; j <= getContentsTexts[i]?.length; j++) {
      for (let n = 0; n <= getContentsTexts[i][j]?.length; n++) {
        if (getContentsTexts[i][j][n]?.hasOwnProperty('children')) {
          const baseChildren = getContentsTexts[i][j][n]?.children.map(
            ({ children }: any) => {
              if (!children) return ''
              return children.map(({ value }: any) => value)
            },
          )
          contentGroup?.push(baseChildren[0][0])
        } else {
          contentGroup?.push(getContentsTexts[i][j][n]?.value)
        }
      }
    }
  }

  // calculate the content time
  const text = contentGroup.join(',')
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}
