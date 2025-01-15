export function Banner() {
  return (
    <section className="w-full gap-20">
      <div className="inline-flex flex-col items-center justify-start gap-[37px]">
        <h2 className="text-center heading2">{content.title}</h2>
        <div className="h-[2.37px] w-[118.61px] bg-accent-400"></div>
        <div className="narrow-container">
          <p className="paragraph text-center text-[15px] font-normal">
            {content.paragraph}
          </p>
          <br />
          <p className="paragraph text-center text-[15px] font-normal">
            {content.callToAction}
          </p>
        </div>
      </div>
    </section>
  )
}

const content = {
  title: (
    <>
      Driving Global AI And Crypto Advancement
      <br />
      Through Strategic Tokenomics
    </>
  ),
  paragraph: (
    <>
      Through our <strong className="text-white">unique tokenomics,</strong> including a
      dynamic burn and mint model, we ensure that our tokens reflect true economic value,
      promoting stability and growth within our ecosystem. Our global-first approach
      ensures that we cater to a worldwide audience, providing tools and resources that
      are accessible to innovators around the globe.
    </>
  ),
  callToAction: (
    <>
      <strong className="text-white">Join us at Bitlauncher</strong> as we pave the way
      for a new era of technological advancement and community empowerment in the AI and
      crypto space.
    </>
  ),
}
