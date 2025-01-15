export function TokenizationLanding() {
  return (
    <main className="flex-1">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`w-full py-12 md:py-24 lg:py-32 ${section.bgClass || ''}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg dark:bg-gray-800">
                  {section.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {section.title}
                </h2>
                <p className="max-w-[900px] text-infoForeground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {section.description}
                </p>
              </div>
            </div>
            <div className="grid items-center gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  {section.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">{detail.header}</h3>
                        <p className="text-infoForeground">{detail.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src="/images/placeholder.svg"
                alt={`${section.title}`}
                className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

const sections: SectionContent[] = [
  {
    title: 'How Tokenization Works',
    description:
      'Tokenization is the process of replacing sensitive data with a non-sensitive placeholder, called a token. This token maintains all the essential information about the original data, but without the actual sensitive details. Learn how this powerful technique can benefit your business.',
    details: [
      {
        header: 'Data Replacement',
        content:
          'Sensitive data is replaced with a non-sensitive placeholder, called a token, that maintains the essential information.',
      },
      {
        header: 'Secure Storage',
        content:
          'The original sensitive data is securely stored, while the token is used in place of the original data for transactions and processing.',
      },
      {
        header: 'Reversible Process',
        content:
          'The tokenization process is reversible, allowing the original data to be retrieved when needed, while maintaining the highest levels of security.',
      },
    ],
  },
  {
    title: 'Benefits of Tokenization',
    description:
      'Tokenization offers a wide range of benefits that can transform your business. From enhanced security and compliance to improved data management and new revenue streams, discover how tokenization can help you stay ahead of the curve.',
    details: [
      {
        header: 'Enhanced Security',
        content:
          'Tokenization replaces sensitive data with non-sensitive placeholders, reducing the risk of data breaches and fraud.',
      },
      {
        header: 'Improved Compliance',
        content:
          'Tokenization helps businesses meet regulatory requirements and industry standards, such as PCI DSS, HIPAA, and GDPR.',
      },
      {
        header: 'Streamlined Data Management',
        content:
          'Tokenization simplifies data storage, processing, and sharing, allowing businesses to focus on their core operations.',
      },
    ],
    bgClass: '',
  },
  {
    title: 'Tokenization Use Cases',
    description:
      'Tokenization has a wide range of applications across industries, from financial services and healthcare to e-commerce and real estate. Discover how this innovative technology can be leveraged to drive growth and transformation in your business.',
    details: [
      {
        header: 'Financial Services',
        content:
          'Tokenization enables secure payment processing, reduces fraud, and simplifies compliance in the financial sector.',
      },
      {
        header: 'Healthcare',
        content:
          'Tokenization protects sensitive patient data and ensures HIPAA compliance in the healthcare industry.',
      },
      {
        header: 'E-commerce',
        content:
          'Tokenization enhances online payment security and reduces the risk of data breaches for e-commerce businesses.',
      },
      {
        header: 'Real Estate',
        content:
          'Tokenization enables the fractionalization of real estate assets, making them more accessible to investors.',
      },
    ],
  },
]

type SectionContent = {
  title: string
  description: string
  details: { header: string; content: string }[]
  bgClass?: string
}
