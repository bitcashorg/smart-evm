import type { PageContentData } from '@/components/shared/content'

export const about = {
  content: [
    { type: 'h1', text: '¿Cómo funciona Bitlauncher?' },
    {
      type: 'p',
      text: 'Bitlauncher es una plataforma que permite descubrir un precio justo para las subastas de tokens. El objetivo de la plataforma es facilitar que los equipos descubran un precio justo para su token.',
    },
    {
      type: 'p',
      text: 'Bitlauncher utiliza subastas por lotes, que son un mecanismo popular para garantizar un precio justo tanto en el mundo de las finanzas descentralizadas como en el tradicional. Las subastas por lotes permiten el emparejamiento de órdenes limitadas de compradores y vendedores con el mismo precio de liquidación para todos los participantes. Desde casos de uso en criptomonedas como las Ofertas Iniciales DEX (como las de la interfaz de Mesa para el Protocolo Gnosis v1) hasta subastas de finanzas tradicionales (como la OPI de Google y la Subasta Abierta de la Bolsa de Nueva York), las subastas por lotes desempeñan un papel importante en la democratización de los activos subastados. Esta función es especialmente importante para los equipos descentralizados que necesitan garantizar distribuciones justas de tokens mientras operan de manera confiable y eficiente. Las subastas por lotes están destinadas a convertirse en un componente fundamental del “Lego DeFi” para cualquier equipo o comunidad interesado en ofrecer a sus usuarios el mecanismo de subasta más transparente y justo para su token.',
    },
    { type: 'h2', text: 'Comparación de diferentes mecanismos de subasta' },
    {
      type: 'p',
      text: 'Con el contrato inteligente de código abierto de Bitlauncher, los proyectos pueden crear rápida y seguramente sus propias subastas descentralizadas justas. A diferencia de algunas soluciones que dependen de un proceso de curación centralizado, Bitlauncher es sin permisos, lo que permite que cualquier equipo de Ethereum pueda desplegar y ejecutar subastas por lotes para la búsqueda de precios. Bitlauncher permite que cualquier proyecto o comunidad de Ethereum realice subastas que:',
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
    { type: 'h2', text: 'Descubrimiento de precio justo con Bitlauncher' },
    {
      type: 'p',
      text: 'Al proporcionar una interfaz sencilla para la búsqueda de precios con subastas por lotes, Bitlauncher permite:',
    },
    {
      type: 'ul',
      items: [
        'A los subastadores determinar un precio mínimo al que están dispuestos a vender sus tokens, y',
        'A los postores establecer el precio máximo que están dispuestos a pagar',
      ],
    },
    {
      type: 'p',
      text: 'Estas características permiten que la plataforma cree una dinámica de precios justa en la que ambos participantes obtengan lo que estaban dispuestos a recibir o más. Además, la naturaleza de las subastas por lotes reduce significativamente el frontrunning y las guerras de pujas de gas, disminuyendo la cantidad de valor extraído de los subastadores y postores.',
    },
  ] as PageContentData,
}
