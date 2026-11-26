/**
 * Every UI string, ES/EN. useI18n() picks the object for the URL's language
 * (English at /, Spanish under /es). Copy for the finances side is
 * educational on purpose: no product names, no promised returns or income.
 */
import type { Locale } from '#shared/types'

export type BusinessGoal = 'audit' | 'website' | 'found' | 'booking' | 'other'
export type FinanceGoal = 'protect' | 'invest' | 'debt' | 'retirement' | 'extra' | 'other'

interface Card {
  title: string
  body: string
}

interface Service extends Card {
  points: string[]
}

interface Faq {
  q: string
  a: string
}

export interface Translations {
  nav: {
    home: string
    business: string
    finances: string
    about: string
    /** Label of the link to the other language. */
    language: string
    languageAria: string
    menuOpen: string
    menuClose: string
    mainNav: string
    skipToContent: string
  }
  home: {
    metaTitle: string
    metaDescription: string
    eyebrow: string
    title: string
    /** Punchline under the title (bold). */
    lead: string
    leadBody: string
    businessKicker: string
    businessTitle: string
    businessBody: string
    businessPoints: string[]
    businessCta: string
    financesKicker: string
    financesTitle: string
    financesBody: string
    financesPoints: string[]
    financesCta: string
    bridgeEyebrow: string
    bridgeTitle: string
    bridgeBody: string
    bridgeCta: string
    bridgeNote: string
    aboutTitle: string
    aboutBody: string
    aboutCta: string
    contactTitle: string
    contactBody: string
    portraitAlt: string
    heroChips: string[]
    businessNotice: string
    businessNoticeMeta: string
  }
  business: {
    metaTitle: string
    metaDescription: string
    eyebrow: string
    title: string
    lead: string
    ctaAudit: string
    ctaWork: string
    servicesEyebrow: string
    servicesTitle: string
    servicesLead: string
    services: Service[]
    processEyebrow: string
    processTitle: string
    process: Card[]
    workEyebrow: string
    workTitle: string
    workLead: string
    auditEyebrow: string
    auditTitle: string
    auditBody: string
    auditPoints: string[]
    studioNote: string
    showcaseLabel: string
    /** `{name}` is replaced with the client name. */
    showcaseCase: string
    goalPrompt: string
    faqEyebrow: string
    faqTitle: string
    faq: Faq[]
  }
  finances: {
    metaTitle: string
    metaDescription: string
    eyebrow: string
    title: string
    lead: string
    cta: string
    ctaExtra: string
    pillarsEyebrow: string
    pillarsTitle: string
    pillarsLead: string
    pillars: Card[]
    extraEyebrow: string
    extraTitle: string
    extraBody: string
    extraPoints: string[]
    extraCta: string
    howEyebrow: string
    howTitle: string
    how: Card[]
    formEyebrow: string
    formTitle: string
    formLead: string
    disclaimerTitle: string
    disclaimers: string[]
    goalPrompt: string
    /** Short labels inside the illustration. */
    artLabels: [string, string, string]
    /** Retirement hook for people who work for a paycheck (W-2). */
    w2: {
      eyebrow: string
      title: string
      body: string
      points: string[]
      cta: string
      note: string
      timelineLabel: string
    }
    faqEyebrow: string
    faqTitle: string
    faq: Faq[]
  }
  /** Extra-income application; fields mirror prospects_v2 /api/public/apply. */
  apply: {
    eyebrow: string
    title: string
    lead: string
    requirementsTitle: string
    requirements: string[]
    cta: string
    ageRange: string
    zipcode: string
    city: string
    state: string
    cleanBackground: string
    legalWork: string
    yes: string
    no: string
    select: string
    submit: string
    errors: {
      ageRange: string
      zipcode: string
      city: string
      cleanBackground: string
      legalWork: string
    }
    subject: string
    disclaimer: string
  }
  form: {
    name: string
    phone: string
    email: string
    goalBusiness: string
    goalFinances: string
    goalPlaceholder: string
    message: string
    messagePlaceholder: string
    consent: string
    submit: string
    required: string
    note: string
    errors: {
      name: string
      phone: string
      email: string
      goal: string
      consent: string
    }
    sentTitle: string
    /** `{email}` is replaced with the destination address. */
    sentBody: string
    sendAnother: string
    businessGoals: Record<BusinessGoal, string>
    financeGoals: Record<FinanceGoal, string>
    /** Labels for the email the form composes. */
    sourceBusiness: string
    sourceFinances: string
  }
  about: {
    metaTitle: string
    eyebrow: string
    name: string
    legalName: string
    lead: string
    body: string
    businessTitle: string
    businessBody: string
    businessCta: string
    visitStudio: string
    financesTitle: string
    financesBody: string
    financesCta: string
  }
  projects: {
    /** Screen-reader suffix after the project name on each card link. */
    caseSuffix: string
    /** `{name}` is replaced with the project name. */
    screenshotAlt: string
    kindClient: string
    visitSite: string
    chapterProblem: string
    chapterSolution: string
    chapterResult: string
    highlightsTitle: string
    stackTitle: string
    caseNavLabel: string
    prevCase: string
    nextCase: string
    backToWork: string
    metaTitleSuffix: string
    notFound: string
    auditCta: string
  }
  footer: {
    rights: string
    tagline: string
    navLabel: string
    servicesLabel: string
    agency: string
    financesNote: string
  }
  theme: {
    light: string
    dark: string
    label: string
  }
}

const en: Translations = {
  nav: {
    home: 'Home',
    business: 'Business',
    finances: 'Finances',
    about: 'About',
    language: 'ES',
    languageAria: 'Ver esta página en español',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mainNav: 'Main navigation',
    skipToContent: 'Skip to content',
  },
  home: {
    metaTitle: 'Mario S. Alvarez (Mario Alvarez) — Websites for businesses, plans for families | Houston',
    metaDescription:
      'Mario Alvarez helps small businesses show up and sell online through ZeroDigitX, and helps families protect their income, invest, and plan. Bilingual, from the Houston area.',
    eyebrow: 'Mario S. Alvarez · Houston, TX · English & Spanish',
    title: 'What can I help you with?',
    lead: 'Work less for the system, more for yourself.',
    leadBody: 'Whether you have a job or a business, you trade your time for money. Let me show you how to invest and make your money work for you.',
    businessKicker: 'For businesses · ZeroDigitX',
    businessTitle: 'I help businesses show up and sell online',
    businessBody: 'Bilingual websites, Google and ChatGPT visibility, and bookings that keep coming in while you work.',
    businessPoints: ['Free audit of how you show up online', 'Websites built to bring calls, not just look good', 'Real client results you can visit'],
    businessCta: 'Grow my business',
    financesKicker: 'For families',
    financesTitle: 'I help families protect their income, invest, and plan',
    financesBody: 'Plain-language money education: protect the paycheck everything depends on, put the difference to work, and plan ahead.',
    financesPoints: ['Protect your family’s income', 'Start investing and plan for retirement', 'Learn to earn extra in your free time'],
    financesCta: 'Plan my finances',
    bridgeEyebrow: 'Not a business owner?',
    bridgeTitle: 'Work for a paycheck? There are ways to retire before 60.',
    bridgeBody:
      'Not everyone wants a business, and that’s fine. If you get a W-2, you already have tools most people never use well: your employer’s match, accounts with tax advantages, and time. I’ll show you how they work so you can see what’s possible for you. And if you do own a business, the website brings customers in while the plan protects what you earn.',
    bridgeCta: 'See my retirement options',
    bridgeNote: 'Retiring before 60 depends on your income, savings, and time. Educational, not a promise.',
    aboutTitle: 'Who you’ll be talking to',
    aboutBody:
      'I’m Mario. I’ve been building on the web for more than 15 years: Latin America, then Canada, now the Houston area. I worked rope access and NDT in Gulf Coast refineries to stay in Texas, so I know what a paycheck takes. I talk to you in English or Spanish, and I explain things without jargon.',
    aboutCta: 'More about me',
    contactTitle: 'Rather just talk?',
    contactBody: 'Call or write. Tell me whether it’s about your business or your family and I’ll get back to you.',
    portraitAlt: 'Mario S. Alvarez, wearing a coral jacket',
    heroChips: ['English · Español', 'Houston, TX'],
    businessNotice: 'New booking request',
    businessNoticeMeta: 'Tuesday · 10:30 AM',
  },
  business: {
    metaTitle: 'Websites and online visibility for small businesses | ZeroDigitX · Mario Alvarez',
    metaDescription:
      'Bilingual websites, Google and ChatGPT visibility, and online booking for small businesses in Houston and the Gulf Coast. Start with a free audit.',
    eyebrow: 'For businesses · ZeroDigitX',
    title: 'Show up where customers look. Turn visits into calls.',
    lead:
      'Your customers search on Google and, more and more, ask ChatGPT who to call. I build bilingual sites and the visibility around them so the answer is you.',
    ctaAudit: 'Get my free audit',
    ctaWork: 'See real results',
    servicesEyebrow: 'Services',
    servicesTitle: 'What I do for your business',
    servicesLead: 'Start with the free audit. Then do only what moves the needle.',
    services: [
      {
        title: 'Free online presence audit',
        body: 'Before you spend a dollar: a short report on what is costing you customers.',
        points: ['Website speed, mobile, and contact paths', 'Google Business Profile check', 'The three fixes worth doing first'],
      },
      {
        title: 'Websites that sell',
        body: 'Custom, bilingual, fast on a phone, and built around one job: getting you the call.',
        points: ['Custom design, no templates', 'English and Spanish versions', 'Contact form and WhatsApp button'],
      },
      {
        title: 'Get found on Google and ChatGPT',
        body: 'Search changed. I make sure both search engines and AI assistants can understand and recommend you.',
        points: ['Local SEO for your service area', 'Google Business Profile setup', 'Structured data AI assistants read'],
      },
      {
        title: 'Bookings and follow-up',
        body: 'Stop missing calls while you are on the job. Let customers book and get answers on their own.',
        points: ['Online booking', 'Email and WhatsApp notifications', 'Custom tools when off-the-shelf won’t do'],
      },
    ],
    processEyebrow: 'How it works',
    processTitle: 'Three steps, no guesswork',
    process: [
      { title: 'Audit', body: 'I look at how you show up today and send you a short report. Free, no obligation.' },
      { title: 'Build', body: 'We fix what matters first: the site, your Google profile, the way customers reach you.' },
      { title: 'Grow', body: 'We watch calls, forms, and bookings, and keep improving what works.' },
    ],
    workEyebrow: 'Real results',
    workTitle: 'This is what the result looks like',
    workLead: 'Live sites for real businesses. Visit them the way your customers would.',
    auditEyebrow: 'Free audit',
    auditTitle: 'Find out what’s costing you customers',
    auditBody: 'Tell me about your business. I’ll check how it shows up online and send you the three fixes worth doing first.',
    auditPoints: ['Delivered in about 2 business days', 'No obligation, no card', 'In English or Spanish'],
    studioNote: 'Business work is done through ZeroDigitX, the studio I founded and run.',
    showcaseLabel: 'Client sites',
    showcaseCase: 'See how {name} got there',
    goalPrompt: 'What do you need first?',
    faqEyebrow: 'Questions',
    faqTitle: 'What business owners ask me',
    faq: [
      { q: 'How much does a website cost?', a: 'It depends on what your business actually needs. The free audit shows what is worth doing first, and you get a clear quote before any work starts.' },
      { q: 'How long does it take?', a: 'Most sites go live in about two weeks once I have your content: photos, services, and the way you want customers to reach you.' },
      { q: 'Do I need to know anything technical?', a: 'No. You tell me how your business works; I handle the site, the domain, Google, and the setup.' },
      { q: 'Can my site be in English and Spanish?', a: 'Yes. Every site I build can have both versions, so each customer reads it in their own language.' },
      { q: 'Do you only work in Houston?', a: 'Most clients are in Houston and the Gulf Coast, but everything can be done remotely, by phone or video.' },
    ],
  },
  finances: {
    metaTitle: 'Protect your income, invest, and plan | Mario Alvarez',
    metaDescription:
      'Plain-language financial education for families in the Houston area: protect your income, invest the difference, plan for retirement, and learn to earn extra in your free time.',
    eyebrow: 'For families',
    title: 'Protect your income. Put the rest to work. Have a plan.',
    lead:
      'Money isn’t taught at school or at home for most of us. I walk families through the basics, in English or Spanish, so you can make your own decisions with clear numbers.',
    cta: 'Book a free conversation',
    ctaExtra: 'Earn extra in my free time',
    pillarsEyebrow: 'The basics',
    pillarsTitle: 'Three ideas that change how money works for you',
    pillarsLead: 'No jargon, no pressure. Just how money works, in order.',
    pillars: [
      {
        title: 'Protect your income',
        body: 'Your paycheck pays for everything else. If it stopped tomorrow, how long would your family be okay? Start by protecting the income your plans depend on.',
      },
      {
        title: 'Invest the difference',
        body: 'Pay for the protection you need, not more, and put what’s left to work early and consistently. Over time, consistency tends to matter more than timing.',
      },
      {
        title: 'Plan ahead',
        body: 'Debt, emergency fund, retirement, your kids’ education. A simple written plan, in the right order, beats a dozen good intentions.',
      },
    ],
    extraEyebrow: 'Extra income',
    extraTitle: 'Learn how to earn extra money in your free time while you protect your income',
    extraBody:
      'If you like what you learn, you can learn to teach it. It’s part-time, on your schedule, next to the job you already have.',
    extraPoints: [
      'Flexible hours, around your current job',
      'Training included; some activities require a state license',
      'You use what you learn at home first',
    ],
    extraCta: 'Tell me more',
    howEyebrow: 'How it works',
    howTitle: 'A conversation, not a sales pitch',
    how: [
      { title: 'Talk', body: 'A short call or video meeting, about 30 minutes, in English or Spanish.' },
      { title: 'Look at the numbers', body: 'We go over where your money goes today and what you want it to do.' },
      { title: 'Decide', body: 'You leave with a clear next step. What you do with it is up to you.' },
    ],
    formEyebrow: 'Get started',
    formTitle: 'Tell me what you want to work on',
    formLead: 'One short form. I’ll reach out to set up a time that works for you.',
    disclaimerTitle: 'Important information',
    disclaimers: [
      'The content on this page is general education. It is not financial, investment, tax, or legal advice. Talk to a licensed professional about your situation.',
      'Mario Alvarez does not own, issue, or underwrite any financial product. Any product or service is offered through properly licensed representatives and is subject to licensing, eligibility, underwriting, and approval by the issuing company.',
      'No investment return, savings amount, or outcome is guaranteed. Investing involves risk, including possible loss of principal. Past performance does not guarantee future results.',
      'Part-time income is not guaranteed. Results vary and depend on individual effort, time invested, and licensing.',
      'Licensing and registration information is available on request.',
    ],
    goalPrompt: 'What brings you here?',
    artLabels: ['Protect', 'Invest', 'Plan'],
    w2: {
      eyebrow: 'For W-2 workers',
      title: 'Work for a paycheck? There are ways to retire before 60.',
      body: 'You don’t need to own a business to plan an early retirement. If you get a W-2, you already have tools most people don’t use well. I’ll show you how they work, in plain language, so you can see what’s possible for you.',
      points: [
        'Get the full match your employer offers: it’s part of your pay',
        'Use the tax advantages of retirement accounts, in the right order',
        'Pay off expensive debt first so more of your paycheck stays with you',
        'Know your number: how much you need and when you could get there',
      ],
      cta: 'See my options',
      note: 'Retiring before 60 depends on your income, savings, and time. Educational, not a promise.',
      timelineLabel: 'Before 60?',
    },
    faqEyebrow: 'Questions',
    faqTitle: 'What families ask me',
    faq: [
      { q: 'Do I have to buy anything?', a: 'No. The conversation is free, and you decide what, if anything, to do next.' },
      { q: 'Is this financial advice?', a: 'No. It is general education to help you understand your options. For decisions about your situation, talk to a licensed professional; I can refer you to one.' },
      { q: 'Can we talk in Spanish?', a: 'Yes. Every conversation can be in English or Spanish, whichever is more comfortable for your family.' },
      { q: 'What do I need for the first conversation?', a: 'Just a rough idea of your income, monthly bills, and debts. No documents needed.' },
      { q: 'How does the extra income work?', a: 'You learn the basics first. If you want to teach them, there is training, and some activities require state or federal licenses, like investment licenses. Don’t worry: my team and I help you get them, completely free.' },
    ],
  },
  apply: {
    eyebrow: 'Apply',
    title: 'Learn to earn extra in your free time',
    lead: 'Part-time, around the job you already have, in person in the Houston area or remote. No experience needed: training and help getting licensed are included. Fill this out and I’ll call you to set up a short interview.',
    requirementsTitle: 'Requirements',
    requirements: ['18 or older', 'Clean criminal background (needed for state licensing)', 'Authorized to work in the U.S.', 'Reliable and ready to work with a team'],
    cta: 'Apply to earn extra',
    ageRange: 'Age range',
    zipcode: 'ZIP code',
    city: 'City',
    state: 'State',
    cleanBackground: 'Clean criminal background?',
    legalWork: 'Authorized to work in the U.S.?',
    yes: 'Yes',
    no: 'No',
    select: 'Select',
    submit: 'Send application',
    errors: {
      ageRange: 'Choose your age range.',
      zipcode: 'Enter a 5-digit ZIP code.',
      city: 'Enter your city.',
      cleanBackground: 'Choose yes or no.',
      legalWork: 'Choose yes or no.',
    },
    subject: 'Extra-income application',
    disclaimer: 'Income is not guaranteed. Results vary and depend on individual effort, time invested, and licensing.',
  },
  form: {
    name: 'Full name',
    phone: 'Phone',
    email: 'Email',
    goalBusiness: 'What do you need?',
    goalFinances: 'What do you want to work on?',
    goalPlaceholder: 'Choose one',
    message: 'Anything else? (optional)',
    messagePlaceholder: 'Your business name, your situation, the best time to call…',
    consent: 'I agree to be contacted by phone, text, or email about my request.',
    submit: 'Send',
    required: 'required',
    note: 'Sending opens your email app with your message ready. Nothing is sent until you press send there.',
    errors: {
      name: 'Add your name.',
      phone: 'Add a phone number with at least 10 digits.',
      email: 'Add a valid email.',
      goal: 'Choose an option.',
      consent: 'Check the box so I can contact you.',
    },
    sentTitle: 'Your email app should be open',
    sentBody: 'Press send there and I’ll get back to you. If nothing opened, write to {email}.',
    sendAnother: 'Edit my answers',
    businessGoals: {
      audit: 'A free audit of my online presence',
      website: 'A new website or a redesign',
      found: 'Get found on Google and ChatGPT',
      booking: 'Online booking and follow-up',
      other: 'Something else',
    },
    financeGoals: {
      protect: 'Protect my family’s income',
      invest: 'Start investing',
      debt: 'Get out of debt',
      retirement: 'Plan for retirement',
      extra: 'Earn extra in my free time',
      other: 'Something else',
    },
    sourceBusiness: 'Business',
    sourceFinances: 'Finances',
  },
  about: {
    metaTitle: 'About Mario S. Alvarez (Mario Alvarez) | Houston',
    eyebrow: 'About',
    name: 'Mario Alvarez',
    legalName: 'Mario S. Alvarez',
    lead:
      'Mario S. Alvarez, also known as Mario Alvarez, has been building on the web for more than 15 years. He learned it in Latin America, kept at it in Canada, and works from the Houston area now.',
    body:
      'To stay in Texas, he took rope access and NDT in the refineries. After a shift, he went back to the keyboard. He never left the web — he just grew up with it. Today he helps on two fronts: small businesses that need to be found and chosen online, and families who want their money to work with a plan.',
    businessTitle: 'ZeroDigitX — for businesses',
    businessBody:
      'ZeroDigitX is a bilingual website and custom-systems studio for businesses in Houston, La Porte, and the Gulf Coast. Mario S. Alvarez (Mario Alvarez) is its founder, CEO, and owner.',
    businessCta: 'Business services',
    visitStudio: 'Visit zerodigitx.com',
    financesTitle: 'Financial education — for families',
    financesBody:
      'Plain-language guidance on protecting income, investing, and planning, in English and Spanish, plus a way to learn to earn extra in your free time.',
    financesCta: 'Family finances',
  },
  projects: {
    caseSuffix: 'case study',
    screenshotAlt: '{name} homepage',
    kindClient: 'Client project',
    visitSite: 'Visit site',
    chapterProblem: 'The problem',
    chapterSolution: 'The solution',
    chapterResult: 'The result',
    highlightsTitle: 'Highlights',
    stackTitle: 'Built with',
    caseNavLabel: 'More results',
    prevCase: 'Previous',
    nextCase: 'Next',
    backToWork: 'All results',
    metaTitleSuffix: 'client result',
    notFound: 'Case study not found',
    auditCta: 'Want this for your business? Get a free audit',
  },
  footer: {
    rights: '© {year} Mario S. Alvarez. All rights reserved.',
    tagline: 'Websites for businesses and financial education for families. Houston, Texas · English & Spanish.',
    navLabel: 'Site pages',
    servicesLabel: 'Elsewhere',
    agency: 'ZeroDigitX',
    financesNote: 'Financial content is educational only and not financial advice. Results are not guaranteed.',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
    label: 'Theme',
  },
}

const es: Translations = {
  nav: {
    home: 'Inicio',
    business: 'Negocios',
    finances: 'Finanzas',
    about: 'Sobre mí',
    language: 'EN',
    languageAria: 'View this page in English',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    mainNav: 'Navegación principal',
    skipToContent: 'Saltar al contenido',
  },
  home: {
    metaTitle: 'Mario S. Alvarez (Mario Alvarez) — Sitios web para negocios, planes para familias | Houston',
    metaDescription:
      'Mario Alvarez ayuda a pequeños negocios a aparecer y vender en línea con ZeroDigitX, y a familias a proteger sus ingresos, invertir y planificar. Bilingüe, desde el área de Houston.',
    eyebrow: 'Mario S. Alvarez · Houston, TX · Español e inglés',
    title: '¿En qué te puedo ayudar?',
    lead: 'Trabaja menos para el sistema y más para ti.',
    leadBody: 'Ya sea con un empleo o con tu negocio, cambias tu tiempo por dinero. Déjame enseñarte cómo invertir y poner tu dinero a trabajar para ti.',
    businessKicker: 'Para negocios · ZeroDigitX',
    businessTitle: 'Ayudo a negocios a aparecer y vender en línea',
    businessBody: 'Sitios web bilingües, visibilidad en Google y ChatGPT, y citas que siguen llegando mientras trabajas.',
    businessPoints: ['Auditoría gratis de cómo apareces en internet', 'Sitios hechos para traer llamadas, no solo para verse bien', 'Resultados reales de clientes que puedes visitar'],
    businessCta: 'Hacer crecer mi negocio',
    financesKicker: 'Para familias',
    financesTitle: 'Ayudo a familias a proteger sus ingresos, invertir y planificar',
    financesBody: 'Educación financiera sin rodeos: protege el ingreso del que depende todo, pon a trabajar la diferencia y planifica.',
    financesPoints: ['Protege el ingreso de tu familia', 'Empieza a invertir y planea tu retiro', 'Aprende a ganar dinero extra en tu tiempo libre'],
    financesCta: 'Ordenar mis finanzas',
    bridgeEyebrow: '¿No tienes negocio?',
    bridgeTitle: '¿Trabajas por cheque? Hay formas de retirarte antes de los 60.',
    bridgeBody:
      'No todo el mundo quiere tener un negocio, y está bien. Si recibes un W-2, ya tienes herramientas que casi nadie aprovecha bien: el match de tu empleador, cuentas con ventajas de impuestos y el tiempo. Te enseño cómo funcionan para que veas qué es posible en tu caso. Y si tienes negocio, el sitio web trae clientes mientras el plan protege lo que ganas.',
    bridgeCta: 'Ver mis opciones de retiro',
    bridgeNote: 'Retirarte antes de los 60 depende de tus ingresos, ahorros y tiempo. Es educativo, no una promesa.',
    aboutTitle: 'Con quién vas a hablar',
    aboutBody:
      'Soy Mario. Llevo más de 15 años construyendo en la web: Latinoamérica, luego Canadá y ahora el área de Houston. Trabajé en rope access y NDT en las refinerías de la Costa del Golfo para quedarme en Texas, así que sé lo que cuesta un cheque. Te hablo en español o en inglés, y te explico las cosas sin tecnicismos.',
    aboutCta: 'Más sobre mí',
    contactTitle: '¿Prefieres hablar directo?',
    contactBody: 'Llama o escribe. Dime si es sobre tu negocio o tu familia y te contesto.',
    portraitAlt: 'Mario S. Alvarez con un saco coral',
    heroChips: ['Español · English', 'Houston, TX'],
    businessNotice: 'Nueva solicitud de cita',
    businessNoticeMeta: 'Martes · 10:30 AM',
  },
  business: {
    metaTitle: 'Sitios web y visibilidad en línea para pequeños negocios | ZeroDigitX · Mario Alvarez',
    metaDescription:
      'Sitios web bilingües, visibilidad en Google y ChatGPT, y reservas en línea para pequeños negocios en Houston y la Costa del Golfo. Empieza con una auditoría gratis.',
    eyebrow: 'Para negocios · ZeroDigitX',
    title: 'Aparece donde tus clientes buscan. Convierte visitas en llamadas.',
    lead:
      'Tus clientes buscan en Google y, cada vez más, le preguntan a ChatGPT a quién llamar. Construyo sitios bilingües y la visibilidad alrededor de ellos para que la respuesta seas tú.',
    ctaAudit: 'Quiero mi auditoría gratis',
    ctaWork: 'Ver resultados reales',
    servicesEyebrow: 'Servicios',
    servicesTitle: 'Lo que hago por tu negocio',
    servicesLead: 'Empieza con la auditoría gratis. Después, haz solo lo que de verdad mueve la aguja.',
    services: [
      {
        title: 'Auditoría gratis de tu presencia en línea',
        body: 'Antes de gastar un dólar: un reporte corto de lo que te está costando clientes.',
        points: ['Velocidad, móvil y formas de contacto de tu sitio', 'Revisión de tu perfil de Google Business', 'Los tres arreglos que vale la pena hacer primero'],
      },
      {
        title: 'Sitios web que venden',
        body: 'A la medida, bilingües, rápidos en el celular y hechos para una sola cosa: que te llamen.',
        points: ['Diseño a la medida, sin plantillas', 'Versiones en español e inglés', 'Formulario de contacto y botón de WhatsApp'],
      },
      {
        title: 'Que te encuentren en Google y ChatGPT',
        body: 'La búsqueda cambió. Me aseguro de que los buscadores y los asistentes de IA te entiendan y te recomienden.',
        points: ['SEO local para tu zona de servicio', 'Configuración de Google Business Profile', 'Datos estructurados que leen los asistentes de IA'],
      },
      {
        title: 'Citas y seguimiento',
        body: 'Deja de perder llamadas mientras trabajas. Que tus clientes reserven y encuentren respuestas solos.',
        points: ['Reservas en línea', 'Avisos por correo y WhatsApp', 'Herramientas a la medida cuando lo de siempre no alcanza'],
      },
    ],
    processEyebrow: 'Cómo funciona',
    processTitle: 'Tres pasos, sin adivinar',
    process: [
      { title: 'Auditoría', body: 'Reviso cómo apareces hoy y te mando un reporte corto. Gratis y sin compromiso.' },
      { title: 'Construir', body: 'Arreglamos primero lo que importa: el sitio, tu perfil de Google, la forma en que te contactan.' },
      { title: 'Crecer', body: 'Medimos llamadas, formularios y citas, y seguimos mejorando lo que funciona.' },
    ],
    workEyebrow: 'Resultados reales',
    workTitle: 'Así se ve el resultado',
    workLead: 'Sitios en vivo de negocios reales. Visítalos como lo haría tu cliente.',
    auditEyebrow: 'Auditoría gratis',
    auditTitle: 'Descubre qué te está costando clientes',
    auditBody: 'Cuéntame de tu negocio. Reviso cómo aparece en línea y te mando los tres arreglos que vale la pena hacer primero.',
    auditPoints: ['Lista en unos 2 días hábiles', 'Sin compromiso y sin tarjeta', 'En español o en inglés'],
    studioNote: 'El trabajo para negocios se hace con ZeroDigitX, el estudio que fundé y dirijo.',
    showcaseLabel: 'Sitios de clientes',
    showcaseCase: 'Mira cómo lo logró {name}',
    goalPrompt: '¿Qué necesitas primero?',
    faqEyebrow: 'Preguntas',
    faqTitle: 'Lo que me preguntan los dueños de negocio',
    faq: [
      { q: '¿Cuánto cuesta un sitio web?', a: 'Depende de lo que tu negocio de verdad necesita. La auditoría gratis muestra qué vale la pena hacer primero, y recibes una cotización clara antes de empezar.' },
      { q: '¿Cuánto tiempo toma?', a: 'La mayoría de los sitios salen en unas dos semanas una vez que tengo tu contenido: fotos, servicios y cómo quieres que te contacten.' },
      { q: '¿Necesito saber de tecnología?', a: 'No. Tú me cuentas cómo funciona tu negocio; yo me encargo del sitio, el dominio, Google y la configuración.' },
      { q: '¿Mi sitio puede estar en español e inglés?', a: 'Sí. Todos los sitios que hago pueden tener las dos versiones, para que cada cliente lo lea en su idioma.' },
      { q: '¿Solo trabajas en Houston?', a: 'La mayoría de mis clientes están en Houston y la Costa del Golfo, pero todo se puede hacer a distancia, por teléfono o videollamada.' },
    ],
  },
  finances: {
    metaTitle: 'Protege tus ingresos, invierte y planifica | Mario Alvarez',
    metaDescription:
      'Educación financiera clara para familias del área de Houston: protege tus ingresos, invierte la diferencia, planea tu retiro y aprende a ganar dinero extra en tu tiempo libre.',
    eyebrow: 'Para familias',
    title: 'Protege tu ingreso. Pon a trabajar el resto. Ten un plan.',
    lead:
      'A la mayoría no nos enseñaron de dinero ni en la escuela ni en la casa. Acompaño a familias por lo básico, en español o en inglés, para que tomes tus propias decisiones con números claros.',
    cta: 'Agenda una conversación gratis',
    ctaExtra: 'Ganar extra en mi tiempo libre',
    pillarsEyebrow: 'Lo básico',
    pillarsTitle: 'Tres ideas que cambian cómo trabaja tu dinero',
    pillarsLead: 'Sin tecnicismos y sin presión. Solo cómo funciona el dinero, en orden.',
    pillars: [
      {
        title: 'Protege tu ingreso',
        body: 'Tu cheque paga todo lo demás. Si se detuviera mañana, ¿cuánto tiempo estaría bien tu familia? Empieza por proteger el ingreso del que dependen tus planes.',
      },
      {
        title: 'Invierte la diferencia',
        body: 'Paga por la protección que necesitas, no más, y pon a trabajar lo que sobra, temprano y con constancia. Con el tiempo, la constancia suele pesar más que el momento.',
      },
      {
        title: 'Planifica',
        body: 'Deudas, fondo de emergencia, retiro, la educación de tus hijos. Un plan sencillo por escrito, en el orden correcto, vale más que muchas buenas intenciones.',
      },
    ],
    extraEyebrow: 'Ingreso extra',
    extraTitle: 'Aprende a ganar dinero extra en tu tiempo libre mientras proteges tus ingresos',
    extraBody:
      'Si te gusta lo que aprendes, puedes aprender a enseñarlo. Es a tiempo parcial, a tu ritmo, junto al trabajo que ya tienes.',
    extraPoints: [
      'Horario flexible, alrededor de tu trabajo actual',
      'Capacitación incluida; algunas actividades requieren licencia estatal',
      'Lo que aprendes lo usas primero en tu casa',
    ],
    extraCta: 'Quiero saber más',
    howEyebrow: 'Cómo funciona',
    howTitle: 'Una conversación, no una venta',
    how: [
      { title: 'Hablamos', body: 'Una llamada o videollamada corta, de unos 30 minutos, en español o en inglés.' },
      { title: 'Vemos los números', body: 'Revisamos a dónde va tu dinero hoy y qué quieres que haga.' },
      { title: 'Tú decides', body: 'Te llevas un siguiente paso claro. Qué haces con él es tu decisión.' },
    ],
    formEyebrow: 'Empieza aquí',
    formTitle: 'Cuéntame en qué quieres trabajar',
    formLead: 'Un formulario corto. Te contacto para acordar un horario que te funcione.',
    disclaimerTitle: 'Información importante',
    disclaimers: [
      'El contenido de esta página es educación general. No es asesoría financiera, de inversión, fiscal ni legal. Habla con un profesional con licencia sobre tu situación.',
      'Mario Alvarez no es dueño, emisor ni suscriptor de ningún producto financiero. Cualquier producto o servicio se ofrece a través de representantes con la licencia correspondiente y está sujeto a licencias, elegibilidad, suscripción y aprobación de la compañía emisora.',
      'Ningún rendimiento, ahorro o resultado está garantizado. Invertir implica riesgo, incluida la posible pérdida del capital. Los resultados pasados no garantizan resultados futuros.',
      'El ingreso a tiempo parcial no está garantizado. Los resultados varían y dependen del esfuerzo individual, el tiempo invertido y las licencias.',
      'La información de licencias y registro está disponible a solicitud.',
    ],
    goalPrompt: '¿Qué te trae por aquí?',
    artLabels: ['Proteger', 'Invertir', 'Planificar'],
    w2: {
      eyebrow: 'Para quienes trabajan con W-2',
      title: '¿Trabajas por cheque? Hay formas de retirarte antes de los 60.',
      body: 'No necesitas tener un negocio para planear un retiro temprano. Si recibes un W-2, ya tienes herramientas que casi nadie aprovecha bien. Te enseño cómo funcionan, sin tecnicismos, para que veas qué es posible en tu caso.',
      points: [
        'Aprovecha todo el match que da tu empleador: es parte de tu pago',
        'Usa las ventajas de impuestos de las cuentas de retiro, en el orden correcto',
        'Paga primero las deudas caras para que más de tu cheque se quede contigo',
        'Conoce tu número: cuánto necesitas y cuándo podrías llegar',
      ],
      cta: 'Ver mis opciones',
      note: 'Retirarte antes de los 60 depende de tus ingresos, ahorros y tiempo. Es educativo, no una promesa.',
      timelineLabel: '¿Antes de los 60?',
    },
    faqEyebrow: 'Preguntas',
    faqTitle: 'Lo que me preguntan las familias',
    faq: [
      { q: '¿Tengo que comprar algo?', a: 'No. La conversación es gratis y tú decides qué hacer después, si es que quieres hacer algo.' },
      { q: '¿Esto es asesoría financiera?', a: 'No. Es educación general para que entiendas tus opciones. Para decisiones sobre tu situación, habla con un profesional con licencia que yo te puedo referir.' },
      { q: '¿Podemos hablar en español?', a: 'Sí. Cada conversación puede ser en español o en inglés, como le quede más cómodo a tu familia.' },
      { q: '¿Qué necesito para la primera conversación?', a: 'Solo una idea general de tus ingresos, tus gastos del mes y tus deudas. No necesitas documentos.' },
      { q: '¿Cómo funciona lo del ingreso extra?', a: 'Primero aprendes lo básico. Si quieres enseñarlo, hay capacitación, y algunas actividades requieren licencias estatales o federales, como las licencias de inversiones. Pero no te preocupes: entre mi equipo y yo te ayudamos a obtenerlas completamente gratis.' },
    ],
  },
  apply: {
    eyebrow: 'Aplica',
    title: 'Aprende a ganar dinero extra en tu tiempo libre',
    lead: 'A tiempo parcial, junto al trabajo que ya tienes, en persona en el área de Houston o a distancia. No necesitas experiencia: la capacitación y la ayuda para sacar tus licencias están incluidas. Llena esto y te llamo para agendar una entrevista corta.',
    requirementsTitle: 'Requisitos',
    requirements: ['18 años o más', 'Antecedentes penales limpios (necesario para la licencia estatal)', 'Permiso para trabajar en EE. UU.', 'Responsable y con ganas de trabajar en equipo'],
    cta: 'Aplicar para ganar extra',
    ageRange: 'Rango de edad',
    zipcode: 'Código postal (ZIP)',
    city: 'Ciudad',
    state: 'Estado',
    cleanBackground: '¿Antecedentes penales limpios?',
    legalWork: '¿Tienes permiso para trabajar en EE. UU.?',
    yes: 'Sí',
    no: 'No',
    select: 'Elige',
    submit: 'Enviar aplicación',
    errors: {
      ageRange: 'Elige tu rango de edad.',
      zipcode: 'Escribe un código postal de 5 dígitos.',
      city: 'Escribe tu ciudad.',
      cleanBackground: 'Elige sí o no.',
      legalWork: 'Elige sí o no.',
    },
    subject: 'Aplicación de ingreso extra',
    disclaimer: 'El ingreso no está garantizado. Los resultados varían y dependen del esfuerzo individual, el tiempo invertido y las licencias.',
  },
  form: {
    name: 'Nombre completo',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    goalBusiness: '¿Qué necesitas?',
    goalFinances: '¿En qué quieres trabajar?',
    goalPlaceholder: 'Elige una opción',
    message: '¿Algo más? (opcional)',
    messagePlaceholder: 'El nombre de tu negocio, tu situación, la mejor hora para llamarte…',
    consent: 'Acepto que me contacten por teléfono, mensaje de texto o correo sobre mi solicitud.',
    submit: 'Enviar',
    required: 'obligatorio',
    note: 'Al enviar se abre tu app de correo con el mensaje listo. No se manda nada hasta que presiones enviar ahí.',
    errors: {
      name: 'Escribe tu nombre.',
      phone: 'Escribe un teléfono de al menos 10 dígitos.',
      email: 'Escribe un correo válido.',
      goal: 'Elige una opción.',
      consent: 'Marca la casilla para poder contactarte.',
    },
    sentTitle: 'Tu app de correo debería estar abierta',
    sentBody: 'Presiona enviar ahí y te contesto. Si no se abrió nada, escríbeme a {email}.',
    sendAnother: 'Editar mis respuestas',
    businessGoals: {
      audit: 'Una auditoría gratis de mi presencia en línea',
      website: 'Un sitio web nuevo o rediseño',
      found: 'Que me encuentren en Google y ChatGPT',
      booking: 'Reservas en línea y seguimiento',
      other: 'Otra cosa',
    },
    financeGoals: {
      protect: 'Proteger el ingreso de mi familia',
      invest: 'Empezar a invertir',
      debt: 'Salir de deudas',
      retirement: 'Planear mi retiro',
      extra: 'Ganar dinero extra en mi tiempo libre',
      other: 'Otra cosa',
    },
    sourceBusiness: 'Negocios',
    sourceFinances: 'Finanzas',
  },
  about: {
    metaTitle: 'Sobre Mario S. Alvarez (Mario Alvarez) | Houston',
    eyebrow: 'Sobre mí',
    name: 'Mario Alvarez',
    legalName: 'Mario S. Alvarez',
    lead:
      'Mario S. Alvarez, también conocido como Mario Alvarez, lleva más de 15 años construyendo en la web. Lo aprendió en Latinoamérica, lo siguió en Canadá, y ahora trabaja desde el área de Houston.',
    body:
      'Para quedarse en Texas, tomó rope access y NDT en las refinerías. Después de un turno, volvía al teclado. Nunca dejó la web: creció con ella. Hoy ayuda en dos frentes: pequeños negocios que necesitan que los encuentren y los elijan en línea, y familias que quieren que su dinero trabaje con un plan.',
    businessTitle: 'ZeroDigitX — para negocios',
    businessBody:
      'ZeroDigitX es un estudio de sitios bilingües y sistemas a medida para negocios en Houston, La Porte y la Costa del Golfo. Mario S. Alvarez (Mario Alvarez) es su fundador, CEO y dueño.',
    businessCta: 'Servicios para negocios',
    visitStudio: 'Visitar zerodigitx.com',
    financesTitle: 'Educación financiera — para familias',
    financesBody:
      'Orientación clara para proteger ingresos, invertir y planificar, en español e inglés, y una forma de aprender a ganar dinero extra en tu tiempo libre.',
    financesCta: 'Finanzas familiares',
  },
  projects: {
    caseSuffix: 'caso de estudio',
    screenshotAlt: 'Página de inicio de {name}',
    kindClient: 'Proyecto de cliente',
    visitSite: 'Visitar sitio',
    chapterProblem: 'El problema',
    chapterSolution: 'La solución',
    chapterResult: 'El resultado',
    highlightsTitle: 'Lo destacado',
    stackTitle: 'Hecho con',
    caseNavLabel: 'Más resultados',
    prevCase: 'Anterior',
    nextCase: 'Siguiente',
    backToWork: 'Todos los resultados',
    metaTitleSuffix: 'resultado de cliente',
    notFound: 'Caso de estudio no encontrado',
    auditCta: '¿Quieres esto para tu negocio? Pide tu auditoría gratis',
  },
  footer: {
    rights: '© {year} Mario S. Alvarez. Todos los derechos reservados.',
    tagline: 'Sitios web para negocios y educación financiera para familias. Houston, Texas · Español e inglés.',
    navLabel: 'Páginas del sitio',
    servicesLabel: 'En otros sitios',
    agency: 'ZeroDigitX',
    financesNote: 'El contenido financiero es solo educativo y no es asesoría financiera. Los resultados no están garantizados.',
  },
  theme: {
    light: 'Claro',
    dark: 'Oscuro',
    label: 'Tema',
  },
}

export const translations: Record<Locale, Translations> = { es, en }
