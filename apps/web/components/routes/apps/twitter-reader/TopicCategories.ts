// data/topicCategories.ts

export const topicCategories = {
  'AI': {
    name: 'Artificial Intelligence',
    description: 'Curated lists covering different aspects of AI and machine learning',
    lists: [
      {
        id: 'ai-llm',
        name: 'Large Language Models',
        description: 'Updates and insights about LLMs like GPT-4, Claude, and Gemini',
        memberCount: 156,
        followerCount: 12500,
        tags: ['Technical', 'Research', 'NLP']
      },
      {
        id: 'ai-research',
        name: 'AI Research',
        description: 'Leading AI researchers and academic insights',
        memberCount: 203,
        followerCount: 18900,
        tags: ['Research', 'Academic', 'Papers']
      },
      {
        id: 'ai-ethics',
        name: 'AI Ethics & Safety',
        description: 'Discussions on responsible AI development and ethical considerations',
        memberCount: 142,
        followerCount: 9800,
        tags: ['Ethics', 'Safety', 'Policy']
      }
    ]
  },
  'Crypto': {
    name: 'Cryptocurrency',
    description: 'Curated lists focused on different crypto sectors and developments',
    lists: [
      {
        id: 'crypto-defi',
        name: 'DeFi Projects',
        description: 'Decentralized Finance projects, protocols, and infrastructure',
        memberCount: 178,
        followerCount: 22400,
        tags: ['DeFi', 'Technical', 'Finance']
      },
      {
        id: 'crypto-research',
        name: 'Crypto Research',
        description: 'Technical research and analysis in cryptocurrency',
        memberCount: 145,
        followerCount: 15600,
        tags: ['Research', 'Technical', 'Analysis']
      },
      {
        id: 'crypto-news',
        name: 'Crypto News & Updates',
        description: 'Latest news, regulatory updates, and market analysis',
        memberCount: 234,
        followerCount: 28900,
        tags: ['News', 'Markets', 'Regulation']
      }
    ]
  },
  'Web3': {
    name: 'Web3',
    description: 'Lists covering web3 development, infrastructure, and applications',
    lists: [
      {
        id: 'web3-dev',
        name: 'Web3 Development',
        description: 'Web3 developers, tools, and infrastructure projects',
        memberCount: 189,
        followerCount: 19700,
        tags: ['Development', 'Technical', 'Infrastructure']
      },
      {
        id: 'web3-dao',
        name: 'DAOs & Governance',
        description: 'Decentralized organizations and governance systems',
        memberCount: 156,
        followerCount: 14300,
        tags: ['DAO', 'Governance', 'Community']
      }
    ]
  }
} as const