import type { PageContentData } from '@/components/shared/content'

export const about = {
  content: [
    { type: 'h1', text: 'Como funciona o Bitlauncher' },
    {
      type: 'p',
      text: 'Bitlauncher é uma plataforma que permite a descoberta de preços justos para leilões de tokens. O objetivo da plataforma é facilitar às equipes a descoberta de um preço justo para seu token.',
    },
    {
      type: 'p',
      text: 'O Bitlauncher usa leilões em lote, que são um mecanismo popular para garantir preços justos tanto para o mundo financeiro descentralizado quanto para o tradicional. Os leilões em lote permitem combinar ordens limitadas de compradores e vendedores com o mesmo preço de compensação para todos os participantes. Desde casos de uso de criptografia, como ofertas iniciais de DEX (como aqueles na interface Mesa para Gnosis Protocol v1) até leilões financeiros tradicionais (como o IPO do Google e o leilão aberto da NYSE), os leilões em lote desempenham um papel importante na democratização dos ativos leiloados. Esta função é especialmente importante para equipes descentralizadas que precisam garantir distribuições justas de tokens enquanto operam de forma confiável e eficiente. Os leilões em lote devem se tornar um bloco “DeFi Lego” fundamental para qualquer equipe ou comunidade interessada em oferecer a seus usuários o mecanismo de leilão mais transparente e justo para seus tokens.',
    },
    { type: 'h2', text: 'Comparação de diferentes mecanismos de leilão' },
    {
      type: 'p',
      text: 'Com o contrato inteligente de código aberto do bitlauncher, os projetos podem criar seus próprios leilões justos descentralizados de forma rápida e segura. Ao contrário de algumas soluções que dependem de um processo de curadoria centralizado, o Bitlauncher não tem permissão para que qualquer equipe Ethereum possa implantar e executar leilões em lote para determinação de preços. O Bitlauncher permite que qualquer projeto ou comunidade Ethereum conduza leilões que:',
    },
    {
      type: 'Image',
      src: '/images/auction-comparison.webp',
      alt: 'Comparison Chart',
      width: 720,
      height: 400,
      layout: 'responsive',
      className: 'dark:invert',
    },
    { type: 'h2', text: 'Descoberta de preço justo com Bitlauncher' },
    {
      type: 'p',
      text: 'Ao fornecer uma interface fácil para descoberta de preços com leilões em lote, o Bitlauncher permite:',
    },
    {
      type: 'ul',
      items: [
        'Os leiloeiros devem determinar um preço mínimo pelo qual estão dispostos a vender seus tokens e',
        'Os licitantes devem definir o preço máximo que estão dispostos a pagar',
      ],
    },
    {
      type: 'p',
      text: 'Essas características permitem que a plataforma crie uma dinâmica de preços justa, na qual ambos os participantes recebem o que estavam dispostos a receber ou mais. Além disso, a natureza dos leilões em lotes reduz enormemente as guerras de frontrunning e de lances de gás, diminuindo a quantidade de valor extraído de leiloeiros e licitantes.',
    },
  ] as PageContentData,
}
