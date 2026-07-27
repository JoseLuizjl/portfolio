export const supportedLanguages = ['en', 'pt']

export const defaultLanguage = 'en'

export function getLanguageFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')
  return supportedLanguages.includes(lang) ? lang : null
}

export function detectPreferredLanguage() {
  const urlLanguage = getLanguageFromUrl()
  if (urlLanguage) return urlLanguage

  const locales = navigator.languages?.length
    ? navigator.languages
    : [navigator.language].filter(Boolean)

  const hasPortugueseRegion = locales.some((locale) => {
    try {
      const parsed = new Intl.Locale(locale)
      return parsed.language === 'pt' && ['BR', 'PT'].includes(parsed.region)
    } catch {
      return /^pt-(BR|PT)$/i.test(locale)
    }
  })

  return hasPortugueseRegion ? 'pt' : defaultLanguage
}

export function setLanguageInUrl(language, { replace = false } = {}) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)
  const method = replace ? 'replaceState' : 'pushState'
  window.history[method]({}, '', `${url.pathname}${url.search}${url.hash}`)
}

export const translations = {
  en: {
    meta: {
      languageName: 'English',
      languageMenu: 'Change language',
      currentLanguage: 'Current language',
      loading: 'Loading...',
      scrollTop: 'Back to top',
    },
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    theme: {
      light: 'Light theme active',
      dark: 'Dark theme active',
    },
    header: {
      homeAria: 'Go to home page',
      navAria: 'Main navigation',
    },
    footer: {
      brand: 'José Luiz',
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      contactDetails: 'Contact Details',
      linkedinAria: 'José Luiz LinkedIn',
      githubAria: 'José Luiz GitHub',
      emailAria: 'Send an email to José Luiz',
      resumeAria: 'Download José Luiz resume',
      resumeTitle: 'Resume',
    },
    home: {
      photoAria: 'Profile photo area',
      socialAria: 'Social links',
      linkedinAria: 'José Luiz LinkedIn',
      githubAria: 'José Luiz GitHub',
      resumeButtonAria: 'Download resume',
      resumeMenuTitle: 'Resume / Currículo',
      resumeEnglish: 'Resume (English)',
      resumePortuguese: 'Currículo (Portuguese)',
      title: "Hi, I'm José Luiz",
      subtitle: 'Data Engineer | Backend Developer | AI Engineer',
      contactButton: 'Get in Touch',
      projectsButton: 'View projects',
      aboutTitle: 'About me',
      aboutText:
        'Software developer focused on web, backend and AI applications, with experience in Python, JavaScript, Flutter and database systems. I build scalable applications, APIs and automation projects using modern development tools and cloud technologies, with emphasis on performance, clean architecture and practical implementation.',
      educationLabel: 'Education',
      education: [
        {
          school: 'IEEM',
          course: 'Systems Development - Technical',
          period: 'Feb 2022 - Dec 2024',
        },
        {
          school: 'UniCesumar',
          course: 'Systems Analysis and Development - Technologist',
          period: 'Mar 2025 - Jul 2027',
        },
      ],
      stackLabel: 'Stack',
      technologiesTitle: 'Technologies I Work With',
      learnMoreAboutMe: 'Learn More About Me',
      technologyGroups: [
        {
          title: 'Programming',
          items: ['Python', 'Java', 'JavaScript', 'Dart', 'C/C++', 'SQL', 'NoSQL'],
        },
        {
          title: 'Libs / Frameworks',
          items: [
            'Pandas',
            'Flask',
            'Django',
            'Selenium',
            'Numpy',
            'Matplotlib',
            'Spring Boot',
            'Hibernate',
            'React',
            'React Native',
            'Flutter',
            'PostgreSQL',
          ],
        },
        {
          title: 'Cloud Development',
          items: ['Docker', 'AWS', 'CI/CD'],
        },
        {
          title: 'Data Science',
          items: ['AWS', 'Databricks', 'Snowflake'],
        },
        {
          title: 'Game Development',
          items: ['Unity', 'OpenGL', 'Blender'],
        },
        {
          title: 'AI & Machine Learning',
          items: [
            'Neural Networks',
            'GANs',
            'Reinforcement Learning',
            'Deep Learning',
            'Generative AI',
            'Computer Vision',
            'TensorFlow',
            'OpenCV',
            'Hugging-Face',
          ],
        },
      ],
      projectsLabel: 'Projects',
      projectsTitle: 'My Projects',
      projectImageAria: 'ImageScraper project image area',
      projectKicker: 'Web automation',
      projectDescription:
        'An image scraper where you paste a website link, preview the images found and download the files in a practical flow.',
      projectTechAria: 'Technologies used',
      githubButton: 'View on GitHub',
      careerLabel: 'Career',
      experiencesTitle: 'Experiences',
      contactMore: 'Get in Touch',
      experiences: [
        {
          role: 'Data Engineer',
          company: 'Freelancer',
          period: 'Feb 2025 - August 2025',
          bullets: [
            'Built data pipelines and automations for processing and analysis.',
            'Created ETL/ELT solutions using Python, SQL and orchestration tools.',
            'Implemented scalable data flows focused on performance, reliability and data quality.',
          ],
        },
        {
          role: 'Desenvolvedor Mobile',
          company: 'Cognita',
          period: 'April 2026 - May 2026',
          bullets: [
            'Built a mobile architecture focused on personal organization, performance and intuitive experience.',
            'Implemented essential productivity features focused on efficiency and usability.',
          ],
        },
      ],
    },
    profile: {
      photoAria: 'José Luiz photo',
      title: 'José Luiz Arana Almeida',
      subtitle: 'Data Engineer | Backend Developer | AI Engineer',
      tagsAria: 'Specialties',
      tags: ['Python Developer', 'Java Developer', 'Full-Stack Developer'],
      summaryTitle: 'Professional Summary',
      summary: [
        'Software developer focused on web, backend and artificial intelligence applications, with experience in Python, Java, JavaScript and database systems. I build scalable applications, APIs, automations and data flows with attention to performance, clean architecture, service organization, maintainability and practical implementation in real-world environments.',
        'I have experience creating solutions that connect different parts of a system, from user interfaces and backend services to databases, integrations and automated workflows. I value organized code, clear structure, objective documentation and technologies that make applications easier to maintain, expand and improve over time.',
        'In addition to application development, I also work with automations, system integrations and data organization, creating solutions that simplify processes, reduce repetitive tasks, improve the user experience and make information easier to access.',
      ],
      skillsEyebrow: 'Technical Toolkit',
      skillsTitle: 'Skills',
      workEyebrow: 'Career',
      workTitle: 'Work Experience',
      workExperiences: [
        {
          role: 'Data Engineer',
          company: 'Freelancer',
          period: 'Feb 2025 - August 2025',
          description: [
            'Modeled and implemented event-driven pipelines for data processing and movement.',
            'Built ingestion routines with validation, cleaning and standardization for analytical environments.',
            'Integrated multiple data sources with a focus on reliability and traceability.',
            'Structured optimized data flows for analytical applications and BI systems.',
          ],
        },
        {
          role: 'Mobile Developer',
          company: 'Indie',
          period: 'April 2026 - May 2026',
          description: [
            'Designed and developed a mobile application focused on structured personal information management.',
            'Implemented a persistence layer for efficient storage and fast data retrieval.',
            'Developed data manipulation features with full CRUD operations.',
            'Optimized the application to ensure low latency and smooth user interaction.',
          ],
        },
      ],
      certificationsEyebrow: 'Courses',
      certificationsTitle: 'Certifications',
      institutionIconAria: 'Institution icon',
      startedAt: 'Started',
      certifications: [
        {
          title: 'Python Basic to Advanced + RPA',
          technology: 'Python',
          startedAt: '2026',
        },
        {
          title: 'Complete Artificial Intelligence Training',
          technology: 'AI & Machine Learning',
          startedAt: '2025',
        },
        {
          title: 'Python Fundamentals for Data Analysis and Data Science',
          technology: 'Data Science',
          startedAt: '2024',
        },
      ],
      educationEyebrow: 'Academic',
      educationTitle: 'Education',
      learnedAria: 'Learned subjects',
      activitiesTitle: 'Activities and projects:',
      education: [
        {
          school: 'IEEM',
          degree: 'Technical - Systems Development',
          period: 'Feb 2022 - Dec 2024',
          tags: ['Front-end', 'Databases', 'Mobile Development', 'Programming logic'],
          activities: [
            'Developed an educational Portuguese learning app.',
            'Created a banking app for personal finance.',
          ],
        },
        {
          school: 'UniCesumar',
          degree: 'Technologist - Systems Analysis and Development',
          period: 'Mar 2025 - Jul 2027',
          tags: ['Software engineering', 'APIs', 'Databases', 'Web development'],
          activities: [
            'Deepening knowledge in systems development, software architecture and web applications.',
          ],
        },
      ],
    },
    projectsPage: {
      eyebrow: 'Projects',
      title: 'Projects Developed',
      intro:
        'Development of web applications, process automation and interactive systems, exploring different technologies and approaches to build practical, efficient and well-structured solutions. These projects bring together APIs, interfaces, integrations and automated workflows, always focused on technical learning, usability and solving real problems.',
      githubButton: 'View on GitHub',
      items: [
        {
          title: 'Python Web Scraper',
          category: 'Web automation',
          description:
            'Website for image scraping, focused on collecting, organizing and supporting a practical visual research flow.',
          stack: ['Python', 'Flask', 'Selenium'],
          status: 'Personal project',
          url: 'https://github.com/JoseLuizjl/ImageScraper',
        },
        {
          title: 'Educational Portuguese Game',
          category: 'Mobile game',
          description:
            'Educational mobile game with Portuguese quizzes, designed for direct and interactive learning.',
          stack: ['React Native', 'Mobile', 'Quizzes'],
          status: 'Academic',
          url: 'https://github.com/JoseLuizjl/PortuguesGame',
        },
        {
          title: 'Real-Time Chat',
          category: 'Realtime app',
          description:
            'JavaScript chat using WebSockets for real-time message exchange.',
          stack: ['JavaScript', 'WebSockets', 'Web UI'],
          status: 'Practical project',
          url: 'https://github.com/JoseLuizjl/Real-Time-Chat',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact Me',
      intro:
        'I am open to software development opportunities, especially in web projects, automation, data and multiplatform applications. I aim to contribute useful, well-planned and easy-to-evolve solutions, combining technical organization, continuous learning and focus on practical results.',
      asideEyebrow: 'Where to find me',
      asideTitle: 'Connect with me',
      asideText: 'Choose a direct channel or send a message through the form.',
      formEyebrow: 'Contact me',
      formTitle: 'Have a question or want to get in touch?',
      formText:
        "Fill out the form below and I'll get back to you as soon as possible.",
      fullName: 'Full name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      sendByEmail: 'Email',
      sendByWhatsApp: 'WhatsApp',
      submitEmail: 'Send Email',
      submitWhatsApp: 'Send on WhatsApp',
      emailGreeting: 'Hi José,',
      emailIntro: 'I found your portfolio and would like to start a conversation.',
      emailClosing: 'Best regards,',
      emailSubject: 'Contact request',
    },
  },
  pt: {
    meta: {
      languageName: 'Português BR',
      languageMenu: 'Alterar idioma',
      currentLanguage: 'Idioma atual',
      loading: 'Carregando...',
      scrollTop: 'Voltar ao topo',
    },
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    theme: {
      light: 'Tema claro ativo',
      dark: 'Tema escuro ativo',
    },
    header: {
      homeAria: 'Ir para a página inicial',
      navAria: 'Navegação principal',
    },
    footer: {
      brand: 'José Luiz',
      rights: 'Todos os direitos reservados.',
      quickLinks: 'Links rápidos',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      contactDetails: 'Contato',
      linkedinAria: 'LinkedIn de José Luiz',
      githubAria: 'GitHub de José Luiz',
      emailAria: 'Enviar email para José Luiz',
      resumeAria: 'Baixar currículo de José Luiz',
      resumeTitle: 'Currículo',
    },
    home: {
      photoAria: 'Espaço para foto de perfil',
      socialAria: 'Redes sociais',
      linkedinAria: 'LinkedIn de José Luiz',
      githubAria: 'GitHub de José Luiz',
      resumeButtonAria: 'Baixar currículo',
      resumeMenuTitle: 'Resume / Currículo',
      resumeEnglish: 'Resume (Inglês)',
      resumePortuguese: 'Currículo (Português)',
      title: 'Olá, eu sou José Luiz',
      subtitle: 'Engenheiro de Dados | Desenvolvedor Backend | Engenheiro de IA',
      contactButton: 'Entrar em contato',
      projectsButton: 'Ver projetos',
      aboutTitle: 'Sobre mim',
      aboutText:
        'Desenvolvedor de software focado em aplicações web, backend e inteligência artificial, com experiência em Python, JavaScript, Flutter e sistemas de banco de dados. Construo aplicações escaláveis, APIs e projetos de automação usando ferramentas modernas de desenvolvimento e tecnologias em nuvem, com ênfase em performance, arquitetura limpa e implementação prática.',
      educationLabel: 'Formação',
      education: [
        {
          school: 'IEEM',
          course: 'Desenvolvimento de Sistemas - Técnico',
          period: 'Fev 2022 - Dez 2024',
        },
        {
          school: 'UniCesumar',
          course: 'Análise e Desenvolvimento de Sistemas - Tecnólogo',
          period: 'Mar 2025 - Jul 2027',
        },
      ],
      stackLabel: 'Stack',
      technologiesTitle: 'Tecnologias que utilizo',
      learnMoreAboutMe: 'Saiba mais sobre mim',
      technologyGroups: [
        {
          title: 'Programação',
          items: ['Python', 'Java', 'JavaScript', 'Dart', 'C/C++', 'SQL', 'NoSQL'],
        },
        {
          title: 'Bibliotecas / Frameworks',
          items: [
            'Pandas',
            'Flask',
            'Django',
            'Selenium',
            'Numpy',
            'Matplotlib',
            'Spring Boot',
            'Hibernate',
            'React',
            'React Native',
            'Flutter',
            'PostgreSQL',
          ],
        },
        {
          title: 'Desenvolvimento Cloud',
          items: ['Docker', 'AWS', 'CI/CD'],
        },
        {
          title: 'Ciência de Dados',
          items: ['AWS', 'Databricks', 'Snowflake'],
        },
        {
          title: 'Desenvolvimento de Jogos',
          items: ['Unity', 'OpenGL', 'Blender'],
        },
        {
          title: 'IA & Machine Learning',
          items: [
            'Neural Networks',
            'GANs',
            'Reinforcement Learning',
            'Deep Learning',
            'Generative AI',
            'Computer Vision',
            'TensorFlow',
            'OpenCV',
            'Hugging-Face',
          ],
        },
      ],
      projectsLabel: 'Projetos',
      projectsTitle: 'Meus projetos',
      projectImageAria: 'Espaço para imagem do projeto ImageScraper',
      projectKicker: 'Automação web',
      projectDescription:
        'Um image scrapper em que você coloca o link de um site, consegue visualizar as imagens encontradas e baixar os arquivos de forma prática.',
      projectTechAria: 'Tecnologias usadas',
      githubButton: 'Ver no GitHub',
      careerLabel: 'Carreira',
      experiencesTitle: 'Experiências',
      contactMore: 'Entre em Contato',
      experiences: [
        {
          role: 'Engenheiro de Dados',
          company: 'Freelancer',
          period: 'Fev 2025 - Agosto 2025',
          bullets: [
            'Construção de pipelines de dados e automações para processamento e análise.',
            'Criação de soluções em ETL/ELT utilizando Python, SQL e ferramentas de orquestração.',
            'Implementação de fluxos de dados escaláveis com foco em performance, confiabilidade e qualidade dos dados.',
          ],
        },
        {
          role: 'Mobile Developer',
          company: 'Cognita',
          period: 'Abril 2026 - Maio 2026',
          bullets: [
            'Construção de arquitetura mobile focada em organização pessoal, performance e experiência intuitiva.',
            'Implementação de funcionalidades essenciais de produtividade com foco em eficiência e usabilidade.',
          ],
        },
      ],
    },
    profile: {
      photoAria: 'Foto de José Luiz',
      title: 'José Luiz Arana Almeida',
      subtitle: 'Engenheiro de Dados | Desenvolvedor Backend | Engenheiro de IA',
      tagsAria: 'Especialidades',
      tags: ['Desenvolvedor Python', 'Desenvolvedor Java', 'Desenvolvedor Full-Stack'],
      summaryTitle: 'Resumo profissional',
      summary: [
        'Desenvolvedor de software focado em aplicações web, backend e inteligência artificial, com experiência em Python, Java, JavaScript e sistemas de banco de dados. Construo aplicações escaláveis, APIs, automações e fluxos de dados com atenção à performance, arquitetura limpa, organização de serviços, manutenção e implementação prática em ambientes reais.',
        'Tenho experiência na criação de soluções que conectam diferentes partes de um sistema, desde interfaces de usuário e serviços backend até bancos de dados, integrações e fluxos automatizados. Valorizo código organizado, estrutura clara, documentação objetiva e tecnologias que tornam as aplicações mais fáceis de manter, expandir e evoluir ao longo do tempo.',
        'Além do desenvolvimento de aplicações, também trabalho com automações, integração entre sistemas e organização de dados, criando soluções que facilitam processos, reduzem tarefas repetitivas, melhoram a experiência de uso e tornam as informações mais acessíveis.',
      ],
      skillsEyebrow: 'Ferramentas técnicas',
      skillsTitle: 'Habilidades',
      workEyebrow: 'Carreira',
      workTitle: 'Experiência profissional',
      workExperiences: [
        {
          role: 'Engenheiro de Dados',
          company: 'Freelancer',
          period: 'Fev 2025 - Agosto 2025',
          description: [
            'Modelagem e implementação de pipelines orientados a eventos para processamento e movimentação de dados.',
            'Construção de rotinas de ingestão com validação, limpeza e padronização de dados em ambientes analíticos.',
            'Integração de diferentes fontes de dados com foco em confiabilidade e rastreabilidade das informações.',
            'Estruturação de fluxos de dados otimizados para consumo por aplicações analíticas e sistemas de BI.',
          ],
        },
        {
          role: 'Desenvolvedor Mobile',
          company: 'Indie',
          period: 'Abril 2026 - Maio 2026',
          description: [
            'Arquitetura e desenvolvimento de aplicação mobile com foco em gerenciamento estruturado de informações pessoais.',
            'Implementação de camada de persistência para armazenamento eficiente e recuperação rápida de dados.',
            'Desenvolvimento de funcionalidades de manipulação de dados com operações completas de CRUD.',
            'Otimização da aplicação para garantir baixa latência e fluidez na interação do usuário.',
          ],
        },
      ],
      certificationsEyebrow: 'Cursos',
      certificationsTitle: 'Certificações',
      institutionIconAria: 'Ícone da instituição',
      startedAt: 'Início',
      certifications: [
        {
          title: 'Python Básico ao Avançado + RPA',
          technology: 'Python',
          startedAt: '2026',
        },
        {
          title: 'Formação Completa Inteligência Artificial',
          technology: 'IA & Machine Learning',
          startedAt: '2025',
        },
        {
          title: 'Fundamentos de Python para Análise de Dados e Data Science',
          technology: 'Data Science',
          startedAt: '2024',
        },
      ],
      educationEyebrow: 'Acadêmico',
      educationTitle: 'Formação',
      learnedAria: 'Conteúdos aprendidos',
      activitiesTitle: 'Atividades e projetos:',
      education: [
        {
          school: 'Instituto de Educação Estadual de Maringá',
          degree: 'Técnico - Desenvolvimento de Sistemas',
          period: 'Fev 2022 - Dez 2024',
          tags: ['Front-end', 'Banco de dados', 'Desenvolvimento Mobile', 'Lógica de programação'],
          activities: [
            'Desenvolvimento de um app educacional de português.',
            'Criação de um app de banco para finanças pessoais.',
          ],
        },
        {
          school: 'UniCesumar',
          degree: 'Tecnólogo - Análise e Desenvolvimento de Sistemas',
          period: 'Mar 2025 - Jul 2027',
          tags: ['Engenharia de software', 'APIs', 'Banco de dados', 'Desenvolvimento web'],
          activities: [
            'Aprofundamento em desenvolvimento de sistemas, arquitetura de software e aplicações web.',
          ],
        },
      ],
    },
    projectsPage: {
      eyebrow: 'Projetos',
      title: 'Projetos Desenvolvidos',
      intro:
        'Desenvolvimento de aplicações web, automação de processos e sistemas interativos, explorando diferentes tecnologias e abordagens para construir soluções práticas, eficientes e bem estruturadas. Os projetos reúnem APIs, interfaces, integrações e fluxos automatizados, sempre com foco em aprendizado técnico, usabilidade e resolução de problemas reais.',
      githubButton: 'Ver no GitHub',
      items: [
        {
          title: 'Web Scraper em Python',
          category: 'Automação web',
          description:
            'Website para scraping de imagens, com foco em coleta, organização e fluxo prático para pesquisa visual.',
          stack: ['Python', 'Flask', 'Selenium'],
          status: 'Projeto pessoal',
          url: 'https://github.com/JoseLuizjl/ImageScraper',
        },
        {
          title: 'Jogo Educacional de Português',
          category: 'Mobile game',
          description:
            'Jogo mobile educacional com quizzes de português, pensado para aprendizagem direta e interativa.',
          stack: ['React Native', 'Mobile', 'Quizzes'],
          status: 'Acadêmico',
          url: 'https://github.com/JoseLuizjl/PortuguesGame',
        },
        {
          title: 'Chat em Tempo Real',
          category: 'Realtime app',
          description:
            'Chat em JavaScript utilizando WebSockets para troca de mensagens em tempo real.',
          stack: ['JavaScript', 'WebSockets', 'UI Web'],
          status: 'Projeto prático',
          url: 'https://github.com/JoseLuizjl/Real-Time-Chat',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Entre em Contato',
      intro:
        'Estou aberto a oportunidades em desenvolvimento de software, principalmente em projetos web, automação, dados e aplicações multiplataforma. Busco contribuir com soluções úteis, bem planejadas e fáceis de evoluir, unindo organização técnica, aprendizado contínuo e foco em resultados práticos.',
      asideEyebrow: 'Onde me encontrar',
      asideTitle: 'Conecte-se comigo',
      asideText: 'Escolha um canal direto ou envie uma mensagem pelo formulário.',
      formEyebrow: 'Fale comigo',
      formTitle: 'Tem uma pergunta ou quer entrar em contato?',
      formText:
        'Preencha o formulário abaixo e eu retorno o mais rápido possível.',
      fullName: 'Nome completo',
      email: 'Email',
      phone: 'Celular',
      message: 'Mensagem',
      sendByEmail: 'Email',
      sendByWhatsApp: 'WhatsApp',
      submitEmail: 'Enviar Email',
      submitWhatsApp: 'Enviar no WhatsApp',
      emailGreeting: 'Olá, José!',
      emailIntro: 'Encontrei seu portfólio e gostaria de iniciar uma conversa.',
      emailClosing: 'Atenciosamente,',
      emailSubject: 'Solicitação de contato',
    },
  },
}

export function getTranslations(language) {
  return translations[language] ?? translations[defaultLanguage]
}
