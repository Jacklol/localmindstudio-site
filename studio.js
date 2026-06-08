const galleries = {
  ypa: {
    title: "YPA Finance - money coach app",
    note: "Finance screens: dashboard, AI coach, budget, debt payoff, alerts, credit insights, and auth.",
    screens: [
      ["./assets/ypa-product/ypa-dashboard.svg", "Finance dashboard"],
      ["./assets/ypa-product/ypa-coach.svg", "AI money coach"],
      ["./assets/ypa-product/ypa-budget.svg", "Budget planner"],
      ["./assets/ypa-product/ypa-debt.svg", "Debt payoff plan"],
      ["./assets/ypa-product/ypa-alerts.svg", "Spending alerts"],
      ["./assets/ypa-product/ypa-credit.svg", "Credit insights"],
      ["./assets/ypa-real/ypa-01.png", "Registration validation"],
      ["./assets/ypa-real/ypa-02.png", "Sign up flow"],
    ],
  },
  smarteat: {
    title: "SmartEat - nutrition app",
    note: "Nutrition app screens for food search, meal tracking, profile, diary, and user health data.",
    screens: [
      ["./assets/smarteat-real/smarteat-01.png", "Authorization"],
      ["./assets/smarteat-real/smarteat-02.png", "Home dashboard"],
      ["./assets/smarteat-real/smarteat-03.png", "Ingredient search"],
      ["./assets/smarteat-real/smarteat-04.png", "Meal tracking"],
      ["./assets/smarteat-real/smarteat-05.png", "Cart meal selection"],
      ["./assets/smarteat-real/smarteat-06.png", "Menu screen"],
      ["./assets/smarteat-real/smarteat-07.png", "Add custom dish"],
      ["./assets/smarteat-real/smarteat-08.png", "Health diary"],
      ["./assets/smarteat-real/smarteat-09.png", "Profile"],
      ["./assets/smarteat-real/smarteat-10.png", "Allergens questionnaire"],
    ],
  },
  demetra: {
    title: "Demetra - mobile app screens",
    note: "Mobile catalog and sales screens for an agribusiness product.",
    screens: [
      ["./assets/demetra-real/demetra-01.png", "Splash screen"],
      ["./assets/demetra-real/demetra-02.png", "Product catalog"],
      ["./assets/demetra-real/demetra-03.png", "Category product list"],
    ],
  },
  empiflow: {
    title: "Empiflow - onboarding app",
    note: "Onboarding screens for employee tracks, activities, learning content, and library documents.",
    screens: [
      ["./assets/empiflow-real/empiflow-01.webp", "Dashboard and tracks"],
      ["./assets/empiflow-real/empiflow-02.webp", "Completed onboarding track"],
      ["./assets/empiflow-real/empiflow-03.webp", "Learning activity details"],
      ["./assets/empiflow-real/empiflow-04.webp", "Library and documents"],
    ],
  },
  rutilus: {
    title: "Rutilus / Norilsk Nickel - enterprise app",
    note: "Enterprise screens for login, PIN access, document details, assignments, deadlines, and document workflows.",
    screens: [
      ["./assets/rutilus-real/rutilus-05.jpg", "Login"],
      ["./assets/rutilus-real/rutilus-04.jpg", "PIN code"],
      ["./assets/rutilus-real/rutilus-02.jpg", "Document details and assignees"],
      ["./assets/rutilus-real/rutilus-03.jpg", "Assignment form"],
      ["./assets/rutilus-real/rutilus-01.jpg", "Deadline calendar"],
      ["./assets/rutilus-real/rutilus-07.jpg", "Dark theme PIN"],
    ],
  },
  auto: {
    title: "Auto dealers media app",
    note: "Vehicle media flows for camera capture, photo/video gallery, Theta 360 preview, upload queue, and listing details.",
    screens: [
      ["./assets/auto-real/auto-01.svg", "Vehicle capture"],
      ["./assets/auto-real/auto-02.svg", "Media gallery"],
      ["./assets/auto-real/auto-03.svg", "Theta 360 preview"],
      ["./assets/auto-real/auto-04.svg", "Upload queue"],
      ["./assets/auto-real/auto-05.svg", "Listing details"],
    ],
  },
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykawple";

// All public landing copy lives here so RU/EN edits stay in one place.
const translations = {
  en: {
    brandName: "LocalMind Studio",
    title: "LocalMind Studio - AI, .NET, MVP, SEO and product development",
    description:
      "We build AI assistants, chatbots, .NET/C# backends, Node.js integrations, React Native apps, MVPs, UX/UI, SEO and launch support.",
    nav: ["Services", "Cases", "AI", "Process", "Contact"],
    navCall: "Request a call",
    heroPrefix: "We build",
    heroSuffix: "for business.",
    rotatingWords: ["AI assistants", ".NET backends", "MVPs", "mobile apps", "UX/UI design", "SEO and AI SEO", "chatbots", "Node.js integrations"],
    heroEyebrow: "AI assistants, .NET, design, SEO and product development",
    heroLead:
      "We help teams plan, design, build, launch and support software: backends, mobile apps, integrations, chatbots, SEO and private AI assistants.",
    heroActions: ["Request a call", "View cases"],
    stack: ["AI assistants", "Chatbots", "Product design", "UX/UI", "SEO", "AI SEO", "Marketing launch", "QA", ".NET/C#", "Node.js", "React Native", "MVP development", "Admin panels", "Integrations", "Support", "Quality control"],
    delivery: {
      title: "Build plan",
      status: "Request received",
      sprint: "MVP / automation sprint",
      time: "2-6 weeks",
      text: "Strategy, UX, backend, interface, QA, SEO and release.",
      ai: "AI audit",
      question: "Where does the team lose time every week?",
      answer: "We find the repeated steps first. Then we automate the part that is worth automating.",
    },
    proof: [
      ["MVP", "from idea to first working release"],
      ["Design + SEO", "UX/UI, landing pages and AI search visibility"],
      ["Engineering", ".NET, Node.js, mobile apps and integrations"],
      ["QA + support", "testing, launch support and maintenance"],
    ],
    why: {
      eyebrow: "Why us",
      title: "We cover the path from idea to launch.",
      body:
        "Before writing code, we ask simple questions: what is broken now, who uses the product, what should be shown to clients and what systems already exist. After that we choose a scope that can be designed, built, tested, launched and supported.",
      quote:
        "You see what is being built, how quality is checked and what the next step is.",
    },
    servicesIntro: {
      eyebrow: "Services",
      title: "Clear services for real product work.",
      body: "Bring an idea, a brief, an old codebase or a manual process. We can help with product design, development, SEO, launch marketing, QA and support.",
    },
    services: [
      ["MVP and web apps", "First releases, client portals and internal tools with backend, admin area and launch plan.", ["MVP", "Web", "Launch"]],
      ["Product design and UX/UI", "User flows, prototypes, interface design, landing pages and design systems for product launches.", ["UX/UI", "Design", "Figma"]],
      [".NET / C# development", "APIs, internal platforms, permissions, reports, SQL databases and business workflows.", ["C#", ".NET", "SQL"]],
      ["Node.js APIs and integrations", "APIs, payments, CRM sync, realtime features and data exchange between services.", ["Node.js", "API", "CRM"]],
      ["Mobile applications", "React Native apps for iOS and Android: auth, files, camera, offline mode and store release.", ["iOS", "Android", "RN"]],
      ["AI assistants and chatbots", "Support bots, document assistants and lead bots connected to your workflow.", ["AI", "Chat", "RAG"]],
      ["SEO, AI SEO and marketing", "Search-friendly structure, service pages, launch copy, analytics and AI-readable content for modern search.", ["SEO", "AI SEO", "Analytics"]],
      ["QA, support and quality", "Testing, monitoring, bug fixes, documentation, release support and a clear warranty period for agreed fixes.", ["QA", "Support", "Warranty"]],
    ],
    serviceTabs: ["MVP", ".NET", "AI", "Mobile"],
    servicePanels: {
      mvp: ["For a first release", "Ship a working version, not just a mockup.", "We agree on the goal, core flows, backend/API, interface, release checklist and demo rhythm.", ["2-6 weeks for a first release", "Direct communication with engineers", "Good for SaaS, marketplaces and internal tools"]],
      dotnet: ["For backend-heavy work", "Build or improve .NET systems.", "C# APIs, roles, reports, SQL databases, admin tools, integrations and careful work with existing code.", [".NET / C# backend architecture", "Legacy support and refactoring", "Document, approval and reporting workflows"]],
      ai: ["For automation", "Use AI where it removes routine work.", "Support chat, knowledge assistant, document parser, lead qualification and CRM sync with clear human handoff.", ["RAG over company documents", "Web, Telegram or internal chat", "Logs, handoff and privacy rules"]],
      mobile: ["For mobile products", "Build iOS and Android apps with React Native.", "API integration, auth, files, camera/media, offline mode, store release and support.", ["New apps and existing app support", "Store release help", "Experience in finance, HR, auto, enterprise and nutrition"]],
    },
    fitIntro: {
      eyebrow: "Best fit",
      title: "Useful when the task is clear, but the product path is not.",
      body: "We work well with founders, small teams and companies that need senior implementation without a heavy agency process.",
    },
    fit: [
      ["Founders with MVP ideas", "Need a first version fast enough to test demand, pitch, sell or show to early users."],
      ["Teams buried in manual work", "CRM updates, documents, reports, support chats and repeated tasks slow the team down."],
      ["Agencies without backend depth", "White-label development for design, marketing or no-code teams that need reliable engineering."],
      ["Product teams that need capacity", "Support, optimization and feature delivery across .NET, mobile apps and internal workflows."],
    ],
    casesIntro: {
      eyebrow: "Cases",
      title: "Cases from mobile apps, enterprise tools and operations.",
      body: "These projects show mobile delivery, document-heavy enterprise work, admin flows, integrations and product UX.",
    },
    cases: [
      ["Finance mobile app", "YPA Finance", "Dashboard, AI money coach, budget, debt payoff, alerts and credit insights.", ["React Native", "AI coach", "Fintech"]],
      ["Document workflows", "Rutilus / Norilsk Nickel", "Enterprise app work: PIN access, assignments, search, deadlines and large document volumes.", ["Enterprise", "Documents", "Performance"]],
      ["Agribusiness sales", "Demetra", "Mobile catalog, sales flow and order screens for a B2B product.", ["B2B", "Catalog", "Admin"]],
      ["Employee onboarding", "Empiflow", "Onboarding tracks, learning states, dashboard, document library and progress screens.", ["Workflow", "HR", "Files"]],
      ["Camera and 360 media", "Auto Dealers Media App", "Cross-platform app for photos, video, upload queues, listing details and Theta 360 media.", ["Camera", "Media", "Device"]],
      ["Nutrition tracking", "SmartEat", "Food search, meal flows, validation, diary, profile and API-driven mobile screens.", ["Forms", "API", "Mobile"]],
    ],
    aiIntro: {
      eyebrow: "AI assistants and chatbots",
      title: "AI is useful when the workflow is clear.",
      body: "We define what the assistant should do, what data it can use, when it hands off to a person and how the result is logged.",
    },
    aiCards: [
      ["Support chatbot", "Answers common questions, collects context, creates a ticket and hands complex cases to a person."],
      ["Knowledge assistant", "Searches company documents, policies and CRM notes with source-backed answers."],
      ["Document parser", "Extracts fields from invoices, contracts, statements and forms."],
      ["Lead bot", "Qualifies a prospect, updates CRM and prepares the next step."],
    ],
    aiConsole: {
      label: "Example",
      buttons: ["Support", "Documents", "Sales"],
      handoff: "Human handoff available",
      scenarios: {
        support: ["A client wrote to support. What should happen next?", "Collect contacts, project type, timeline and integration needs. Create a CRM draft and offer a call time.", "CRM draft ready"],
        docs: ["Find the rule for contract approval limits.", "The finance policy says approvals above 10k require CFO review and legal confirmation.", "Sources attached"],
        sales: ["What should we ask before estimating?", "Clarify the current process, integrations, deadline, decision maker and expected result.", "Questions prepared"],
      },
    },
    expertiseIntro: {
      eyebrow: "Capabilities",
      title: "A team for product, engineering, launch and support.",
      body: "We combine design, development, automation, SEO, analytics, QA and maintenance in one delivery track.",
    },
    expertise: [
      ["Product and design", "UX/UI, prototypes, design systems, landing pages, conversion copy and launch materials."],
      ["Engineering", "C# / .NET, Node.js, React, React Native, databases, integrations, admin panels and APIs."],
      ["AI, SEO and analytics", "AI assistants, chatbots, RAG, technical SEO, AI SEO, structured data, analytics and CRM sync."],
      ["QA and support", "Testing, code review, deployment, monitoring, maintenance and warranty fixes for agreed scope."],
    ],
    processIntro: {
      eyebrow: "Development process",
      title: "A simple process from idea to support.",
      body: "Every stage ends with something concrete: scope, prototype, working build, launch checklist, SEO setup or support plan.",
    },
    process: [
      ["Understand the task", "Goal, users, business rules, audience, data, constraints and existing systems."],
      ["Design the solution", "UX/UI, prototype, content structure, SEO basics, architecture, milestones and estimate."],
      ["Build and check", "Backend, frontend, mobile, AI, integrations, admin tools, QA and regular demos."],
      ["Launch and support", "Deployment, analytics, SEO/AI SEO checks, documentation, monitoring and support."],
    ],
    comparison: [
      ["Project format", "Studio", "Freelancer", "Large agency"],
      ["Design, development, SEO and support in one track", "Yes", "Partial", "Often split"],
      ["Fast MVP without a heavy process", "Yes", "Depends", "Usually slower"],
      ["Backend, AI and integration depth", ".NET + Node + AI", "Varies", "Yes"],
      ["QA, release support and warranty fixes", "Yes", "Varies", "Often extra"],
    ],
    packagesIntro: {
      eyebrow: "Starting points",
      title: "Pick the closest starting point.",
      body: "After a short brief, we will scope the next useful step.",
    },
    packages: [
      ["MVP", "First working release", "Prototype, backend, interface, integrations and launch checklist.", "Build a brief"],
      [".NET backend", "C# systems and integrations", "API, SQL, auth, reports, admin tools and existing codebase support.", "Describe backend"],
      ["AI assistant", "Automation for one clear workflow", "Chat, RAG, document parsing, CRM sync, logs and human handoff.", "Describe AI workflow"],
      ["Design + SEO launch", "Product packaging and visibility", "UX/UI, landing copy, service pages, SEO, AI SEO, analytics and launch materials.", "Plan launch"],
      ["Mobile app", "React Native for iOS and Android", "App delivery, release support, performance and maintenance.", "Start mobile brief"],
    ],
    brief: {
      eyebrow: "Project brief",
      title: "Create a short project note.",
      body: "Choose a few options and send a useful first message.",
      steps: ["What do you need?", "What is the stage?", "Timeline"],
      choices: {
        type: ["MVP", ".NET backend", "AI assistant", "Design + SEO", "Mobile app"],
        stage: ["Idea", "Design ready", "Existing codebase"],
        timeline: ["2-4 weeks", "1-2 months", "Flexible"],
      },
      draft: "Message draft",
      placeholder: "Project type, stage and timeline will appear here.",
      mail: "Add to contact form",
      inserted: "Brief added to the form. Add your contacts and send the request.",
      subject: "New project",
      bodyTemplate: (type, stage, timeline) =>
        `Project: ${type}. Stage: ${stage}. Timeline: ${timeline}. I want to understand the scope, risks and next step.`,
    },
    faqIntro: {
      eyebrow: "FAQ",
      title: "Questions clients usually ask before the first call.",
    },
    faq: [
      ["How do we choose the right service?", "We start with the goal and current process. Then we suggest the closest scope: MVP, backend, mobile app, AI automation or support."],
      ["Do you have experience in my industry?", "The portfolio includes finance, enterprise workflows, agribusiness, HR, automotive media and nutrition. For a new niche, we first map the process."],
      ["Can you build a product end to end?", "Yes. We can cover brief, UX/UI logic, backend, mobile or web interface, integrations, testing, release and support."],
      ["Can you build an AI assistant or chatbot for a website?", "Yes. We can build support chatbots, lead bots, document assistants and private AI assistants connected to CRM, Telegram or an internal system."],
      ["Can you improve an existing .NET or Node.js project?", "Yes. We can review the codebase, stabilize the backend, add integrations, improve performance and ship new features in stages."],
      ["Can you help with design, marketing and SEO?", "Yes. We can prepare UX/UI, landing pages, launch copy, analytics, technical SEO, structured data and AI-readable content."],
      ["Do you provide QA, support and warranty?", "Yes. We test core scenarios, support the release, monitor issues and fix agreed bugs during the warranty period."],
      ["How does estimation work?", "We split the project into stages and estimate the nearest delivery step first. The roadmap expands after the first scope is clear."],
    ],
    cta: {
      eyebrow: "Contact",
      title: "Tell us what you want to build.",
      body: "Send your contacts and a short task description. We can discuss development, design, SEO, AI automation, QA or long-term support.",
      actions: ["Telegram", "Email"],
      detailLabels: ["Telegram", "Email"],
    },
    callForm: {
      eyebrow: "Request a call",
      title: "Leave your contacts and project details.",
      body: "A short request is enough. We will reply with questions or a call time.",
      labels: {
        name: "Name",
        contact: "Phone, Telegram or email",
        project: "Project type",
        timeline: "Timeline",
        budget: "Budget guide",
        channel: "Preferred contact",
        details: "Task details",
        file: "File or brief",
      },
      placeholders: {
        name: "Your name",
        contact: "+375..., @telegram or email",
        details: "A few words about the product, stage, current problem or links.",
      },
      projectOptions: ["Choose one", "MVP / first release", ".NET / backend", "AI assistant", "Mobile app", "Design / SEO / marketing", "Support / QA"],
      timelineOptions: ["Not sure yet", "As soon as possible", "Within a month", "This quarter", "Flexible"],
      budgetOptions: ["Need an estimate", "Up to $2,000", "$2,000-10,000", "$10,000-50,000", "$50,000+"],
      channelOptions: ["Phone", "Telegram", "Email"],
      consent: "I agree to be contacted about this request.",
      submit: "Send request",
      fileButton: "Attach file",
      noFile: "No file selected",
      fileSelected: (count) => (count === 1 ? "1 file selected" : `${count} files selected`),
      subject: "Call request",
      sending: "Sending request...",
      success: "Request sent. We will reply soon.",
      error: "Could not send the request. Please try again or write to Telegram.",
      emailLabels: {
        name: "Name",
        contact: "Contact",
        project: "Project type",
        timeline: "Timeline",
        budget: "Budget",
        channel: "Preferred contact",
        details: "Details",
        files: "Files",
      },
    },
    footer: "LocalMind Studio - AI assistants, chatbots, .NET/C#, Node.js, React Native, UX/UI, SEO, AI SEO, QA, integrations and product support.",
    galleryUi: ["Gallery", "App screens", "Screens for the selected case.", "Close"],
    galleryCases: {
      ypa: ["YPA Finance - mobile finance app", "Dashboard, AI coach, budget, debt payoff, alerts, credit insights and auth screens."],
      smarteat: ["SmartEat - nutrition app", "Food search, meal tracking, profile, diary and health data screens."],
      demetra: ["Demetra - mobile app screens", "Mobile catalog and sales screens for an agribusiness product."],
      empiflow: ["Empiflow - onboarding app", "Employee tracks, activities, learning content and document library screens."],
      rutilus: ["Rutilus / Norilsk Nickel - enterprise app", "Login, PIN access, document details, assignments, deadlines and workflow screens."],
      auto: ["Auto dealers media app", "Camera capture, photo/video gallery, Theta 360 preview, upload queue and listing details."],
    },
  },
  ru: {
    brandName: "LocalMind Studio",
    title: "LocalMind Studio - AI, .NET, MVP, SEO и продуктовая разработка",
    description:
      "Делаем AI-ассистентов, чат-ботов, .NET/C# бэкенды, Node.js интеграции, React Native приложения, MVP, UX/UI, SEO и поддержку запуска.",
    nav: ["Услуги", "Кейсы", "AI", "Процесс", "Контакт"],
    navCall: "Заказать звонок",
    heroPrefix: "Делаем",
    heroSuffix: "для бизнеса.",
    rotatingWords: ["AI-ассистентов", ".NET-бэкенды", "MVP", "мобильные приложения", "UX/UI дизайн", "SEO и AI SEO", "чат-ботов", "Node.js интеграции"],
    heroEyebrow: "AI-ассистенты, .NET, дизайн, SEO и продуктовая разработка",
    heroLead:
      "Помогаем командам спланировать, спроектировать, разработать, запустить и поддерживать продукт: бэкенд, мобильные приложения, интеграции, чат-боты, SEO и приватные AI-ассистенты.",
    heroActions: ["Заказать звонок", "Посмотреть кейсы"],
    stack: ["AI-ассистенты", "Чат-боты", "Продуктовый дизайн", "UX/UI", "SEO", "AI SEO", "Маркетинг запуска", "QA", ".NET/C#", "Node.js", "React Native", "MVP-разработка", "Админ-панели", "Интеграции", "Поддержка", "Контроль качества"],
    delivery: {
      title: "План разработки",
      status: "Заявка получена",
      sprint: "MVP / автоматизация",
      time: "2-6 недель",
      text: "Стратегия, UX, бэкенд, интерфейс, QA, SEO и релиз.",
      ai: "AI-аудит",
      question: "Где команда теряет время каждую неделю?",
      answer: "Сначала находим повторяющиеся шаги. Потом автоматизируем то, что действительно стоит автоматизировать.",
    },
    proof: [
      ["MVP", "от идеи до первого рабочего релиза"],
      ["Дизайн + SEO", "UX/UI, лендинги и видимость в AI-поиске"],
      ["Разработка", ".NET, Node.js, мобильные приложения и интеграции"],
      ["QA + поддержка", "тестирование, запуск и сопровождение"],
    ],
    why: {
      eyebrow: "Почему мы",
      title: "Закрываем путь от идеи до запуска.",
      body:
        "До разработки задаем простые вопросы: что сейчас не работает, кто пользуется продуктом, что нужно показать клиентам и какие системы уже есть. После этого выбираем объем, который можно спроектировать, разработать, проверить, запустить и поддерживать.",
      quote:
        "Ты видишь, что делается, как проверяется качество и какой следующий шаг.",
    },
    servicesIntro: {
      eyebrow: "Услуги",
      title: "Понятные услуги для реальных задач.",
      body: "Можно прийти с идеей, брифом, старым кодом или ручным процессом. Поможем с продуктовым дизайном, разработкой, SEO, маркетингом запуска, QA и поддержкой.",
    },
    services: [
      ["MVP и веб-приложения", "Первые релизы, клиентские порталы и внутренние инструменты с бэкендом, админкой и планом запуска.", ["MVP", "Web", "Запуск"]],
      ["Продуктовый дизайн и UX/UI", "Пользовательские сценарии, прототипы, интерфейс, лендинги и дизайн-системы для запуска продукта.", ["UX/UI", "Дизайн", "Figma"]],
      [".NET / C# разработка", "API, внутренние платформы, права доступа, отчеты, SQL-базы и бизнес-процессы.", ["C#", ".NET", "SQL"]],
      ["Node.js API и интеграции", "API, платежи, синхронизация с CRM, realtime-функции и обмен данными между сервисами.", ["Node.js", "API", "CRM"]],
      ["Мобильные приложения", "React Native приложения для iOS и Android: авторизация, файлы, камера, офлайн-режим и релиз в сторах.", ["iOS", "Android", "RN"]],
      ["AI-ассистенты и чат-боты", "Боты поддержки, ассистенты по документам и лид-боты, подключенные к вашему процессу.", ["AI", "Чат", "RAG"]],
      ["SEO, AI SEO и маркетинг", "Структура под поиск, сервисные страницы, тексты запуска, аналитика и AI-readable контент для современных поисковых систем.", ["SEO", "AI SEO", "Аналитика"]],
      ["QA, поддержка и качество", "Тестирование, мониторинг, исправление багов, документация, поддержка релиза и гарантийный период на согласованные исправления.", ["QA", "Поддержка", "Гарантия"]],
    ],
    serviceTabs: ["MVP", ".NET", "AI", "Мобильное"],
    servicePanels: {
      mvp: ["Для первого релиза", "Собираем рабочую версию, а не просто макет.", "Фиксируем цель, основные сценарии, API/бэкенд, интерфейс, чеклист релиза и ритм демо.", ["2-6 недель на первый релиз", "Прямое общение с инженерами", "Подходит для SaaS, маркетплейсов и внутренних продуктов"]],
      dotnet: ["Для задач с сильным бэкендом", "Строим и улучшаем .NET-системы.", "C# API, роли, отчеты, SQL-базы, админ-инструменты, интеграции и аккуратная работа с существующим кодом.", ["Архитектура бэкенда на .NET / C#", "Поддержка старого кода и рефакторинг", "Документы, согласования и отчетность"]],
      ai: ["Для автоматизации", "Добавляем AI там, где он убирает рутину.", "Чат поддержки, ассистент по документам, парсер, квалификация лидов и связь с CRM с понятной передачей человеку.", ["RAG по документам компании", "Чат на сайте, в Telegram или внутри системы", "Логи, передача оператору и правила privacy"]],
      mobile: ["Для мобильных продуктов", "Делаем iOS- и Android-приложения на React Native.", "API, авторизация, файлы, камера/медиа, офлайн-режим, релиз в сторах и поддержка.", ["Новые приложения и поддержка существующих", "Помощь с релизом в сторах", "Опыт в финансах, HR, авто, enterprise и питании"]],
    },
    fitIntro: {
      eyebrow: "Кому подходит",
      title: "Когда задача понятна, но путь к продукту еще нет.",
      body: "Хорошо подходим основателям, небольшим командам и компаниям, которым нужна сильная разработка без тяжелого агентского процесса.",
    },
    fit: [
      ["Основателям с идеей MVP", "Нужна первая версия, чтобы проверить спрос, показать инвесторам, продать или дать ранним пользователям."],
      ["Командам с ручной работой", "CRM, документы, отчеты, поддержка, чаты и повторяющиеся задачи тормозят работу."],
      ["Агентствам без сильного бэкенда", "White-label разработка для дизайн-, маркетинг- и no-code-команд, которым нужна надежная инженерия."],
      ["Продуктовым командам", "Поддержка, оптимизация и разработка фич в .NET, мобильных приложениях и внутренних системах."],
    ],
    casesIntro: {
      eyebrow: "Кейсы",
      title: "Кейсы в мобильной разработке, enterprise и операционных продуктах.",
      body: "Здесь видно мобильную поставку, документооборот, админ-сценарии, интеграции и продуктовый UX.",
    },
    cases: [
      ["Финансовое мобильное приложение", "YPA Finance", "Дашборд, AI-коуч, бюджет, план погашения долгов, оповещения и кредитные инсайты.", ["React Native", "AI-коуч", "Финтех"]],
      ["Документооборот", "Rutilus / Norilsk Nickel", "Корпоративное приложение: PIN-доступ, поручения, поиск, дедлайны и большие объемы документов.", ["Корпорации", "Документы", "Скорость"]],
      ["Агробизнес и продажи", "Demetra", "Мобильный каталог, сценарий продаж и экраны заказов для B2B-продукта.", ["B2B", "Каталог", "Админка"]],
      ["Адаптация сотрудников", "Empiflow", "Треки онбординга, учебные состояния, дашборд, библиотека документов и экраны прогресса.", ["Процессы", "HR", "Файлы"]],
      ["Камера и 360-медиа", "Auto Dealers Media App", "Кросс-платформенное приложение для фото, видео, очереди загрузки, деталей объявления и Theta 360.", ["Камера", "Медиа", "Устройства"]],
      ["Питание и дневник еды", "SmartEat", "Поиск продуктов, сценарии питания, формы, валидация, дневник, профиль и мобильные экраны через API.", ["Формы", "API", "Мобильное"]],
    ],
    aiIntro: {
      eyebrow: "AI-ассистенты и чат-боты",
      title: "AI полезен там, где понятен процесс.",
      body: "Определяем, что ассистент должен делать, какие данные он видит, когда передает задачу человеку и как сохраняется результат.",
    },
    aiCards: [
      ["Чат-бот поддержки", "Отвечает на типовые вопросы, собирает контекст, заводит заявку и передает сложные случаи оператору."],
      ["Ассистент по базе знаний", "Ищет по документам, правилам и заметкам CRM, отвечая со ссылкой на источники."],
      ["Парсер документов", "Достает нужные поля из счетов, договоров, выписок и форм."],
      ["Бот для лидов", "Квалифицирует клиента, обновляет CRM и готовит следующий шаг."],
    ],
    aiConsole: {
      label: "Пример",
      buttons: ["Поддержка", "Документы", "Продажи"],
      handoff: "Можно передать человеку",
      scenarios: {
        support: ["Клиент написал в поддержку. Что делаем дальше?", "Соберу контакты, тип задачи, срок и нужные интеграции. Создам черновик в CRM и предложу время для созвона.", "Черновик в CRM готов"],
        docs: ["Найди правило по лимитам согласования договоров.", "В финансовом регламенте указано: договоры выше 10 тыс. требуют проверки CFO и подтверждения юриста.", "Источники прикреплены"],
        sales: ["Какие вопросы задать перед оценкой?", "Уточнить текущий процесс, интеграции, срок, лицо принятия решения и ожидаемый результат.", "Список вопросов готов"],
      },
    },
    expertiseIntro: {
      eyebrow: "Возможности",
      title: "Команда для продукта, разработки, запуска и поддержки.",
      body: "Соединяем дизайн, разработку, автоматизацию, SEO, аналитику, QA и сопровождение в одном треке.",
    },
    expertise: [
      ["Продукт и дизайн", "UX/UI, прототипы, дизайн-системы, лендинги, продающие тексты и материалы для запуска."],
      ["Разработка", "C# / .NET, Node.js, React, React Native, базы данных, интеграции, админ-панели и API."],
      ["AI, SEO и аналитика", "AI-ассистенты, чат-боты, RAG, техническое SEO, AI SEO, structured data, аналитика и CRM."],
      ["QA и поддержка", "Тестирование, ревью кода, деплой, мониторинг, сопровождение и гарантийные исправления в согласованном объеме."],
    ],
    processIntro: {
      eyebrow: "Процесс разработки",
      title: "Простой процесс от идеи до поддержки.",
      body: "Каждый этап заканчивается конкретным результатом: объемом работ, прототипом, рабочей сборкой, чеклистом запуска, SEO-настройкой или планом поддержки.",
    },
    process: [
      ["Разобраться в задаче", "Цель, пользователи, бизнес-правила, аудитория, данные, ограничения и существующие системы."],
      ["Спроектировать решение", "UX/UI, прототип, структура контента, базовое SEO, архитектура, этапы и оценка."],
      ["Разработать и проверить", "Бэкенд, фронтенд, мобильная часть, AI, интеграции, админ-инструменты, QA и регулярные демо."],
      ["Запустить и поддерживать", "Деплой, аналитика, SEO/AI SEO проверки, документация, мониторинг и поддержка."],
    ],
    comparison: [
      ["Формат проекта", "Студия", "Фрилансер", "Крупное агентство"],
      ["Дизайн, разработка, SEO и поддержка в одном треке", "Да", "Частично", "Часто разделено"],
      ["Быстрый MVP без тяжелого процесса", "Да", "Зависит", "Обычно дольше"],
      ["Глубина в бэкенде, AI и интеграциях", ".NET + Node + AI", "По-разному", "Да"],
      ["QA, поддержка релиза и гарантийные исправления", "Да", "По-разному", "Часто отдельно"],
    ],
    packagesIntro: {
      eyebrow: "С чего начать",
      title: "Выбери ближайший стартовый формат.",
      body: "После короткого брифа определим следующий полезный шаг.",
    },
    packages: [
      ["MVP", "Первый рабочий релиз", "Прототип, бэкенд, интерфейс, интеграции и чеклист запуска.", "Собрать бриф"],
      [".NET-бэкенд", "C#-системы и интеграции", "API, SQL, авторизация, отчеты, админ-инструменты и поддержка существующего кода.", "Описать бэкенд"],
      ["AI-ассистент", "Автоматизация одного понятного процесса", "Чат, RAG, парсинг документов, синхронизация с CRM, логи и передача человеку.", "Описать AI-процесс"],
      ["Дизайн + SEO запуск", "Упаковка продукта и видимость", "UX/UI, тексты лендинга, сервисные страницы, SEO, AI SEO, аналитика и материалы запуска.", "Спланировать запуск"],
      ["Мобильное приложение", "React Native для iOS и Android", "Разработка приложения, релизная поддержка, производительность и сопровождение.", "Начать бриф"],
    ],
    brief: {
      eyebrow: "Бриф",
      title: "Собери короткое описание проекта.",
      body: "Выбери несколько вариантов и получи нормальный текст для первого сообщения.",
      steps: ["Что нужно?", "На какой стадии?", "Сроки"],
      choices: {
        type: ["MVP", ".NET-бэкенд", "AI-ассистент", "Дизайн + SEO", "Мобильное приложение"],
        stage: ["Идея", "Дизайн готов", "Есть кодовая база"],
        timeline: ["2-4 недели", "1-2 месяца", "Гибко"],
      },
      draft: "Черновик сообщения",
      placeholder: "Тип проекта, стадия и сроки появятся здесь.",
      mail: "Добавить в форму",
      inserted: "Бриф добавлен в форму. Оставь контакты и отправь заявку.",
      subject: "Новый проект",
      bodyTemplate: (type, stage, timeline) =>
        `Нужно обсудить: ${type}. Стадия: ${stage}. Срок: ${timeline}. Хочу понять объем работ, риски и следующий шаг.`,
    },
    faqIntro: {
      eyebrow: "Вопросы",
      title: "Что обычно спрашивают до первого звонка.",
    },
    faq: [
      ["Как понять, какие услуги нужны?", "Начинаем с цели и текущего процесса. После этого предлагаем ближайший объем: MVP, бэкенд, мобильное приложение, AI-автоматизация или поддержка."],
      ["Есть ли опыт в моей нише?", "В портфолио есть финансы, корпоративные процессы, агробизнес, HR, автомобильные медиа и питание. Для новой ниши сначала разбираем процесс."],
      ["Можете сделать продукт под ключ?", "Да. Можем закрыть бриф, UX/UI-логику, бэкенд, мобильный или веб-интерфейс, интеграции, тестирование, релиз и поддержку."],
      ["Можете сделать AI-ассистента или чат-бота для сайта?", "Да. Делаем чат-ботов поддержки, лид-ботов, ассистентов по документам и приватных AI-ассистентов с подключением к CRM, Telegram или внутренней системе."],
      ["Можете доработать существующий .NET или Node.js проект?", "Да. Можем посмотреть кодовую базу, стабилизировать бэкенд, добавить интеграции, улучшить производительность и выпускать фичи этапами."],
      ["Можете помочь с дизайном, маркетингом и SEO?", "Да. Можем подготовить UX/UI, лендинги, тексты запуска, аналитику, техническое SEO, structured data и AI-readable контент."],
      ["Есть QA, поддержка и гарантия?", "Да. Проверяем ключевые сценарии, поддерживаем релиз, мониторим проблемы и исправляем согласованные баги в гарантийный период."],
      ["Как проходит оценка?", "Делим проект на этапы и сначала оцениваем ближайший шаг. Дорожную карту расширяем после понятного первого объема."],
    ],
    cta: {
      eyebrow: "Контакт",
      title: "Расскажи, что хочешь сделать.",
      body: "Пришли контакты и короткое описание задачи. Можем обсудить разработку, дизайн, SEO, AI-автоматизацию, QA или долгосрочную поддержку.",
      actions: ["Telegram", "Email"],
      detailLabels: ["Telegram", "Email"],
    },
    callForm: {
      eyebrow: "Заказать звонок",
      title: "Оставь контакты и детали проекта.",
      body: "Короткой заявки достаточно. Ответим вопросами или предложим время для звонка.",
      labels: {
        name: "Имя",
        contact: "Телефон, Telegram или email",
        project: "Тип проекта",
        timeline: "Сроки",
        budget: "Ориентир по бюджету",
        channel: "Удобный способ связи",
        details: "Описание задачи",
        file: "Файл или бриф",
      },
      placeholders: {
        name: "Как к тебе обращаться",
        contact: "+375..., @telegram или email",
        details: "Пара слов о продукте, стадии, текущей проблеме или ссылки.",
      },
      projectOptions: ["Выбери вариант", "MVP / первый релиз", ".NET / бэкенд", "AI-ассистент", "Мобильное приложение", "Дизайн / SEO / маркетинг", "Поддержка / QA"],
      timelineOptions: ["Пока не уверен", "Как можно быстрее", "В течение месяца", "В этом квартале", "Гибко"],
      budgetOptions: ["Нужна оценка", "До $2,000", "$2,000-10,000", "$10,000-50,000", "$50,000+"],
      channelOptions: ["Телефон", "Telegram", "Email"],
      consent: "Согласен, чтобы со мной связались по этой заявке.",
      submit: "Отправить заявку",
      fileButton: "Прикрепить файл",
      noFile: "Файл не выбран",
      fileSelected: (count) => (count === 1 ? "Выбран 1 файл" : `Выбрано файлов: ${count}`),
      subject: "Заявка на звонок",
      sending: "Отправляем заявку...",
      success: "Заявка отправлена. Скоро ответим.",
      error: "Не получилось отправить заявку. Попробуй еще раз или напиши в Telegram.",
      emailLabels: {
        name: "Имя",
        contact: "Контакт",
        project: "Тип проекта",
        timeline: "Сроки",
        budget: "Бюджет",
        channel: "Удобный способ связи",
        details: "Описание",
        files: "Файлы",
      },
    },
    footer: "LocalMind Studio - AI-ассистенты, чат-боты, .NET/C#, Node.js, React Native, UX/UI, SEO, AI SEO, QA, интеграции и поддержка продуктов.",
    galleryUi: ["Галерея", "Экраны приложения", "Экраны выбранного кейса.", "Закрыть"],
    galleryCases: {
      ypa: ["YPA Finance - приложение с финансовым AI-коучем", "Экраны финансового продукта: дашборд, AI-коуч, бюджет, погашение долгов, алерты, кредитные инсайты и авторизация."],
      smarteat: ["SmartEat - приложение для питания", "Экраны продукта по питанию: поиск еды, учет приемов пищи, профиль, дневник и данные здоровья."],
      demetra: ["Demetra - мобильные экраны", "Мобильный каталог и экраны продаж для продукта в агробизнесе."],
      empiflow: ["Empiflow - приложение для онбординга", "Экраны онбординга: треки сотрудников, активности, учебный контент и библиотека документов."],
      rutilus: ["Rutilus / Norilsk Nickel - корпоративное приложение", "Корпоративные экраны: вход, PIN-доступ, документы, поручения, дедлайны и рабочие процессы."],
      auto: ["Auto Dealers Media App", "Медиа-сценарии для автодилеров: съемка, галерея, превью Theta 360, очередь загрузки и детали объявления."],
    },
    galleryScreens: {
      ypa: ["Финансовый дашборд", "AI-коуч по деньгам", "Планировщик бюджета", "План погашения долга", "Оповещения о тратах", "Кредитные инсайты", "Валидация регистрации", "Регистрация"],
      smarteat: ["Авторизация", "Главный экран", "Поиск ингредиентов", "Учет приемов пищи", "Выбор блюда в корзине", "Экран меню", "Добавление своего блюда", "Дневник здоровья", "Профиль", "Анкета аллергенов"],
      demetra: ["Стартовый экран", "Каталог продуктов", "Список товаров категории"],
      empiflow: ["Дашборд и треки", "Завершенный трек адаптации", "Детали учебной активности", "Библиотека и документы"],
      rutilus: ["Вход", "PIN-код", "Детали документа и исполнители", "Форма поручения", "Календарь дедлайнов", "PIN в темной теме"],
      auto: ["Съемка автомобиля", "Медиагалерея", "Превью Theta 360", "Очередь загрузки", "Детали объявления"],
    },
  },
};

let currentLanguage = localStorage.getItem("studioLanguage") || (navigator.language?.startsWith("ru") ? "ru" : "en");

document.documentElement.classList.add("studio-js");

let rotatingIndex = 0;
let currentAiScenario = "support";

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
}

function setTexts(selector, values, root = document) {
  root.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function setMetaContent(selector, value) {
  const meta = document.querySelector(selector);
  if (meta && value !== undefined) meta.setAttribute("content", value);
}

function setTags(container, tags) {
  container.querySelectorAll(".tags span").forEach((tag, index) => {
    if (tags[index] !== undefined) tag.textContent = tags[index];
  });
}

function applyHeading(selector, content) {
  const root = document.querySelector(selector);
  if (!root || !content) return;
  setText(".eyebrow", content.eyebrow, root);
  setText("h2", content.title, root);
  const body = root.querySelector(".section-heading p:last-child");
  if (body && content.body !== undefined) body.textContent = content.body;
}

function setListItems(container, items) {
  container.querySelectorAll("li").forEach((item, index) => {
    if (items[index] !== undefined) item.textContent = items[index];
  });
}

function setFormOptions(selector, values) {
  document.querySelectorAll(selector).forEach((option, index) => {
    if (values[index] !== undefined) option.textContent = values[index];
  });
}

function updateFileName() {
  const fileInput = document.querySelector('[name="attachments"]');
  const fileName = document.querySelector("[data-file-name]");
  const t = translations[currentLanguage].callForm;
  if (!fileInput || !fileName || !t) return;
  fileName.textContent = fileInput.files.length ? t.fileSelected(fileInput.files.length) : t.noFile;
}

function applyCallFormLanguage(content) {
  if (!content) return;
  setText("[data-form-eyebrow]", content.eyebrow);
  setText("[data-form-title]", content.title);
  setText("[data-form-body]", content.body);

  Object.entries(content.labels).forEach(([key, value]) => {
    setText(`[data-form-label="${key}"]`, value);
  });

  Object.entries(content.placeholders).forEach(([key, value]) => {
    document.querySelector(`[data-form-placeholder="${key}"]`)?.setAttribute("placeholder", value);
  });

  setFormOptions("[data-form-project-option]", content.projectOptions);
  setFormOptions("[data-form-timeline-option]", content.timelineOptions);
  setFormOptions("[data-form-budget-option]", content.budgetOptions);
  setTexts("[data-form-channel-label]", content.channelOptions);
  setText("[data-form-consent]", content.consent);
  setText("[data-form-submit]", content.submit);
  setText("[data-form-file-button]", content.fileButton);
  setText("[data-form-status]", "");
  updateFileName();
}

function applyLanguage(language) {
  const lang = translations[language] ? language : "en";
  const t = translations[lang];
  currentLanguage = lang;
  localStorage.setItem("studioLanguage", lang);
  document.documentElement.lang = lang;
  document.title = t.title;
  setMetaContent("meta[name='description']", t.description);
  setMetaContent("meta[property='og:title']", t.title);
  setMetaContent("meta[property='og:description']", t.description);
  setMetaContent("meta[property='og:locale']", lang === "ru" ? "ru_RU" : "en_US");
  setMetaContent("meta[name='twitter:title']", t.title);
  setMetaContent("meta[name='twitter:description']", t.description);

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const active = button.dataset.langSwitch === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  setText("[data-brand-name]", t.brandName);
  setTexts(".nav-links a", t.nav);
  setText("[data-nav-call]", t.navCall);
  setText(".hero-copy .eyebrow", t.heroEyebrow);
  setText("[data-hero-prefix]", t.heroPrefix);
  setText("[data-hero-suffix]", t.heroSuffix);
  const rotatingWord = document.querySelector("[data-rotating-word]");
  if (rotatingWord) rotatingWord.textContent = t.rotatingWords[rotatingIndex % t.rotatingWords.length];
  setText(".lead", t.heroLead);
  setTexts(".hero-actions a", t.heroActions, document.querySelector(".hero-copy"));
  document.querySelectorAll(".stack-track span").forEach((item, index) => {
    item.textContent = t.stack[index % t.stack.length];
  });

  setText(".panel-top strong", t.delivery.title);
  setText(".panel-top span", t.delivery.status);
  setText(".sprint-card span", t.delivery.sprint);
  setText(".sprint-card strong", t.delivery.time);
  setText(".sprint-card p", t.delivery.text);
  setText(".chat-card span", t.delivery.ai);
  setText(".chat-card p", t.delivery.question);
  setText(".chat-card strong", t.delivery.answer);

  document.querySelectorAll(".proof-strip > div").forEach((item, index) => {
    const proof = t.proof[index];
    if (!proof) return;
    setText("strong", proof[0], item);
    setText("span", proof[1], item);
  });

  applyHeading(".split", t.why);
  setText(".split blockquote", t.why.quote);
  applyHeading("#services", t.servicesIntro);
  document.querySelectorAll(".service-card").forEach((card, index) => {
    const service = t.services[index];
    if (!service) return;
    setText("h3", service[0], card);
    setText("p", service[1], card);
    setTags(card, service[2]);
  });

  setTexts("[data-service-tab]", t.serviceTabs);
  document.querySelectorAll("[data-service-panel]").forEach((panel) => {
    const content = t.servicePanels[panel.dataset.servicePanel];
    if (!content) return;
    setText("span", content[0], panel);
    setText("h3", content[1], panel);
    setText("p", content[2], panel);
    setListItems(panel, content[3]);
  });

  applyHeading("#fit", t.fitIntro);
  document.querySelectorAll(".fit-grid article").forEach((card, index) => {
    const item = t.fit[index];
    if (!item) return;
    setText("h3", item[0], card);
    setText("p", item[1], card);
  });

  applyHeading("#cases", t.casesIntro);
  document.querySelectorAll(".case-story").forEach((card, index) => {
    const item = t.cases[index];
    if (!item) return;
    setText(".case-meta", item[0], card);
    setText("h3", item[1], card);
    setText("p", item[2], card);
    setTags(card, item[3]);
  });

  applyHeading("#ai", t.aiIntro);
  document.querySelectorAll(".ai-grid article").forEach((card, index) => {
    const item = t.aiCards[index];
    if (!item) return;
    setText("h3", item[0], card);
    setText("p", item[1], card);
  });

  setText(".console-sidebar > span", t.aiConsole.label);
  setTexts("[data-ai-scenario]", t.aiConsole.buttons);
  setText(".console-status span:last-child", t.aiConsole.handoff);
  updateAiScenario(currentAiScenario, false);

  applyHeading("#expertise", t.expertiseIntro);
  document.querySelectorAll(".expertise-grid article").forEach((card, index) => {
    const item = t.expertise[index];
    if (!item) return;
    setText("h3", item[0], card);
    setText("p", item[1], card);
  });

  applyHeading("#process", t.processIntro);
  document.querySelectorAll(".process-grid article").forEach((card, index) => {
    const item = t.process[index];
    if (!item) return;
    setText("h3", item[0], card);
    setText("p", item[1], card);
  });

  document.querySelectorAll(".comparison-row").forEach((row, rowIndex) => {
    row.querySelectorAll("span, strong").forEach((cell, cellIndex) => {
      const value = t.comparison[rowIndex]?.[cellIndex];
      if (value !== undefined) cell.textContent = value;
    });
  });

  applyHeading("#packages", t.packagesIntro);
  document.querySelectorAll(".package-grid article").forEach((card, index) => {
    const item = t.packages[index];
    if (!item) return;
    setText("span", item[0], card);
    setText("h3", item[1], card);
    setText("p", item[2], card);
    setText("a", item[3], card);
  });

  applyHeading("#brief", t.brief);
  document.querySelectorAll(".brief-step").forEach((step, index) => {
    const label = t.brief.steps[index];
    if (label) setText("h3", label, step);
  });
  document.querySelectorAll("[data-brief-group]").forEach((group) => {
    const choices = t.brief.choices[group.dataset.briefGroup] || [];
    group.querySelectorAll("[data-brief-choice]").forEach((button, index) => {
      if (choices[index] === undefined) return;
      button.textContent = choices[index];
      button.dataset.briefChoice = choices[index];
    });
  });
  setText(".brief-result > span", t.brief.draft);
  setText("[data-brief-mail]", t.brief.mail);
  setText("[data-brief-status]", "");
  window.updateBrief?.();

  applyHeading("#faq", t.faqIntro);
  document.querySelectorAll(".faq-list details").forEach((item, index) => {
    const faq = t.faq[index];
    if (!faq) return;
    setText("summary", faq[0], item);
    setText("p", faq[1], item);
  });

  setText("[data-contact-eyebrow]", t.cta.eyebrow);
  setText("[data-contact-title]", t.cta.title);
  setText("[data-contact-body]", t.cta.body);
  setTexts("[data-contact-action]", t.cta.actions);
  setTexts("[data-contact-detail-label]", t.cta.detailLabels);
  applyCallFormLanguage(t.callForm);
  setText(".footer p", t.footer);
  setTexts(".gallery-header .eyebrow, #gallery-title, #gallery-note, [data-gallery-close]", t.galleryUi);
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
  });
}

function setupStickyNavigation() {
  const nav = document.querySelector(".nav");
  const links = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function updateNavState() {
    nav?.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  updateNavState();
  window.addEventListener("scroll", updateNavState, { passive: true });

  if (!("IntersectionObserver" in window) || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-28% 0px -58% 0px", threshold: [0.12, 0.28, 0.5] },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRotatingWord() {
  const target = document.querySelector("[data-rotating-word]");
  if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.setInterval(() => {
    const words = translations[currentLanguage].rotatingWords;
    rotatingIndex = (rotatingIndex + 1) % words.length;
    target.classList.add("is-changing");
    window.setTimeout(() => {
      target.textContent = words[rotatingIndex];
      target.classList.remove("is-changing");
    }, 190);
  }, 2200);
}

function setupHeroBubbles() {
  const hero = document.querySelector(".site-hero");
  const canvas = document.querySelector("[data-hero-bubbles]");
  const context = canvas?.getContext("2d");
  if (!hero || !canvas || !context) return;

  const orbImage = new Image();
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: 0, y: 0, moveX: 0, moveY: 0, active: false, lastSeen: 0 };
  let bubbles = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frameId = 0;
  let lastTime = performance.now();
  let orbReady = false;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function makeBubble() {
    const depth = randomBetween(0.7, 1.55);
    const size = randomBetween(96, 286) * depth;
    const margin = size * 0.34;
    const startX = randomBetween(margin, Math.max(margin, width - margin));
    const startY = randomBetween(margin, Math.max(margin, height - margin));
    const angle = randomBetween(0, Math.PI * 2);
    const speed = randomBetween(0.46, 0.92) * depth;
    return {
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size,
      depth,
      phase: randomBetween(0, Math.PI * 2),
      rotation: randomBetween(-0.32, 0.32),
      spin: randomBetween(-0.0046, 0.0046),
      opacity: randomBetween(0.28, 0.62),
      glow: randomBetween(0.02, 0.08),
    };
  }

  function resizeCanvas() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const densityCount = Math.round((width * height) / 132000);
    const targetCount = reduceMotionQuery.matches ? Math.min(7, densityCount) : Math.min(16, Math.max(8, densityCount));
    bubbles = Array.from({ length: targetCount }, (_, index) => bubbles[index] || makeBubble());
    bubbles.forEach((bubble) => {
      const margin = bubble.size * 0.34;
      bubble.x = Math.min(Math.max(bubble.x, margin * 0.45), width - margin * 0.45);
      bubble.y = Math.min(Math.max(bubble.y, margin * 0.45), height - margin * 0.45);
      if (!Number.isFinite(bubble.vx) || !Number.isFinite(bubble.vy)) {
        const angle = randomBetween(0, Math.PI * 2);
        const speed = randomBetween(0.46, 0.92) * bubble.depth;
        bubble.vx = Math.cos(angle) * speed;
        bubble.vy = Math.sin(angle) * speed;
      }
    });
    drawBubbles(performance.now());
  }

  function drawBubbles(timestamp) {
    context.clearRect(0, 0, width, height);

    bubbles.forEach((bubble) => {
      const wobble = Math.sin(timestamp * 0.0008 + bubble.phase) * bubble.size * 0.035;
      const x = bubble.x + wobble;
      const y = bubble.y + Math.cos(timestamp * 0.0007 + bubble.phase) * bubble.size * 0.04;
      const drawSize = bubble.size * (1 + Math.sin(timestamp * 0.00055 + bubble.phase) * 0.025);
      const ratio = orbImage.naturalHeight && orbImage.naturalWidth ? orbImage.naturalHeight / orbImage.naturalWidth : 1;

      context.save();
      const glow = context.createRadialGradient(x, y, drawSize * 0.12, x, y, drawSize * 0.58);
      glow.addColorStop(0, `rgba(255, 255, 255, ${bubble.glow})`);
      glow.addColorStop(0.5, `rgba(155, 208, 183, ${bubble.glow * 0.42})`);
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = glow;
      context.beginPath();
      context.arc(x, y, drawSize * 0.58, 0, Math.PI * 2);
      context.fill();

      if (orbReady) {
        context.translate(x, y);
        context.rotate(bubble.rotation + Math.sin(timestamp * 0.00032 + bubble.phase) * 0.08);
        context.globalAlpha = bubble.opacity;
        context.filter = "saturate(1.02) contrast(1.18)";
        context.drawImage(orbImage, -drawSize / 2, -(drawSize * ratio) / 2, drawSize, drawSize * ratio);
      } else {
        const fallback = context.createRadialGradient(x - drawSize * 0.18, y - drawSize * 0.22, 0, x, y, drawSize * 0.52);
        fallback.addColorStop(0, "rgba(255, 255, 255, 0.34)");
        fallback.addColorStop(0.52, "rgba(205, 226, 219, 0.16)");
        fallback.addColorStop(1, "rgba(255, 255, 255, 0.03)");
        context.globalAlpha = bubble.opacity;
        context.fillStyle = fallback;
        context.beginPath();
        context.arc(x, y, drawSize * 0.5, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    });
  }

  function moveBubbles(timestamp) {
    const delta = Math.min(32, timestamp - lastTime) / 16.67;
    lastTime = timestamp;

    if (timestamp - pointer.lastSeen > 900) pointer.active = false;

    bubbles.forEach((bubble) => {
      bubble.vx += Math.cos(timestamp * 0.00036 + bubble.phase) * 0.012 * bubble.depth * delta;
      bubble.vy += Math.sin(timestamp * 0.0004 + bubble.phase) * 0.011 * bubble.depth * delta;
      bubble.rotation += bubble.spin * delta;

      if (pointer.active) {
        const dx = bubble.x - pointer.x;
        const dy = bubble.y - pointer.y;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const repelRadius = bubble.size * 0.58 + 210;
        if (distance < repelRadius) {
          const force = (1 - distance / repelRadius) ** 1.8;
          bubble.vx += (dx / distance) * force * 1.35;
          bubble.vy += (dy / distance) * force * 1.35;
          bubble.vx += pointer.moveX * force * 0.018;
          bubble.vy += pointer.moveY * force * 0.018;
        }
      }

      bubble.vx *= 0.992;
      bubble.vy *= 0.992;

      const speed = Math.hypot(bubble.vx, bubble.vy);
      const minSpeed = 0.42 + bubble.depth * 0.12;
      const maxSpeed = 3.9;
      if (speed > maxSpeed) {
        bubble.vx = (bubble.vx / speed) * maxSpeed;
        bubble.vy = (bubble.vy / speed) * maxSpeed;
      } else if (speed < minSpeed) {
        const angle = speed > 0.001 ? Math.atan2(bubble.vy, bubble.vx) : bubble.phase;
        bubble.vx = Math.cos(angle) * minSpeed;
        bubble.vy = Math.sin(angle) * minSpeed;
      }

      bubble.x += bubble.vx * delta;
      bubble.y += bubble.vy * delta;

      const edge = bubble.size * 0.28;
      const minX = edge;
      const maxX = width - edge;
      const minY = edge;
      const maxY = height - edge;

      if (bubble.x < minX) {
        bubble.x = minX;
        bubble.vx = Math.abs(bubble.vx) * 0.82;
      } else if (bubble.x > maxX) {
        bubble.x = maxX;
        bubble.vx = -Math.abs(bubble.vx) * 0.82;
      }

      if (bubble.y < minY) {
        bubble.y = minY;
        bubble.vy = Math.abs(bubble.vy) * 0.82;
      } else if (bubble.y > maxY) {
        bubble.y = maxY;
        bubble.vy = -Math.abs(bubble.vy) * 0.82;
      }
    });

    pointer.moveX *= 0.88;
    pointer.moveY *= 0.88;
    drawBubbles(timestamp);
    frameId = window.requestAnimationFrame(moveBubbles);
  }

  function updatePointer(event) {
    const rect = canvas.getBoundingClientRect();
    const nextX = event.clientX - rect.left;
    const nextY = event.clientY - rect.top;
    pointer.moveX = pointer.active ? nextX - pointer.x : 0;
    pointer.moveY = pointer.active ? nextY - pointer.y : 0;
    pointer.x = nextX;
    pointer.y = nextY;
    pointer.active = true;
    pointer.lastSeen = performance.now();
  }

  orbImage.onload = () => {
    orbReady = true;
    drawBubbles(performance.now());
  };
  orbImage.src = "./assets/localmind-dark-bubble.webp";

  resizeCanvas();

  hero.addEventListener("pointermove", updatePointer, { passive: true });
  hero.addEventListener("pointerenter", updatePointer, { passive: true });
  hero.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  window.addEventListener("resize", resizeCanvas, { passive: true });
  reduceMotionQuery.addEventListener?.("change", () => {
    window.cancelAnimationFrame(frameId);
    resizeCanvas();
    if (!reduceMotionQuery.matches) {
      lastTime = performance.now();
      frameId = window.requestAnimationFrame(moveBubbles);
    }
  });

  if (!reduceMotionQuery.matches) {
    frameId = window.requestAnimationFrame(moveBubbles);
  }
}

function setupRevealAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const selectors = [
    ".proof-strip > div",
    ".section-heading",
    "blockquote",
    ".service-card",
    ".service-lab",
    ".fit-grid article",
    ".case-story",
    ".ai-grid article",
    ".ai-console",
    ".expertise-grid article",
    ".process-grid article",
    ".comparison",
    ".package-grid article",
    ".brief-builder",
    ".faq-list details",
    ".contact-copy",
    ".call-form",
  ];
  const targets = selectors.flatMap((selector) => [...document.querySelectorAll(selector)]);

  targets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--delay", `${Math.min((index % 6) * 65, 260)}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  targets.forEach((element) => observer.observe(element));
}

function setupServiceTabs() {
  const tabs = [...document.querySelectorAll("[data-service-tab]")];
  const panels = [...document.querySelectorAll("[data-service-panel]")];
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.serviceTab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        const active = panel.dataset.servicePanel === key;
        panel.hidden = !active;
        panel.classList.toggle("is-active", active);
      });
    });
  });
}

function updateAiScenario(key, animate = true) {
  const scenario = translations[currentLanguage].aiConsole.scenarios[key];
  const user = document.querySelector("[data-ai-user]");
  const answer = document.querySelector("[data-ai-answer]");
  const status = document.querySelector("[data-ai-status]");
  if (!scenario || !user || !answer || !status) return;

  currentAiScenario = key;
  document.querySelectorAll("[data-ai-scenario]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.aiScenario === key);
  });

  if (animate) answer.classList.add("is-switching");
  window.setTimeout(
    () => {
      user.textContent = scenario[0];
      answer.textContent = scenario[1];
      status.textContent = scenario[2];
      answer.classList.remove("is-switching");
    },
    animate ? 140 : 0,
  );
}

function setupAiConsole() {
  const buttons = [...document.querySelectorAll("[data-ai-scenario]")];
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      updateAiScenario(button.dataset.aiScenario);
    });
  });
}

async function submitFormspree(formData) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) return;

  const payload = await response.json().catch(() => ({}));
  const message = payload.errors?.[0]?.message || payload.error || "Form submission failed.";
  throw new Error(message);
}

function setupBriefBuilder() {
  const groups = [...document.querySelectorAll("[data-brief-group]")];
  const output = document.querySelector("[data-brief-output]");
  const briefButton = document.querySelector("[data-brief-mail]");
  const briefStatus = document.querySelector("[data-brief-status]");
  const detailsField = document.querySelector('[name="details"]');
  if (!groups.length || !output || !briefButton) return;

  let currentBriefText = "";

  function updateBrief() {
    const t = translations[currentLanguage].brief;
    const getActiveChoice = (key) => {
      const active = document.querySelector(`[data-brief-group="${key}"] .is-active`);
      return active?.dataset.briefChoice || t.choices[key]?.[0] || "";
    };
    const text = t.bodyTemplate(getActiveChoice("type"), getActiveChoice("stage"), getActiveChoice("timeline"));
    currentBriefText = text;
    output.textContent = text;
  }

  window.updateBrief = updateBrief;

  groups.forEach((group) => {
    const buttons = [...group.querySelectorAll("[data-brief-choice]")];
    const first = buttons[0];
    if (first) {
      first.classList.add("is-active");
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        updateBrief();
      });
    });
  });

  briefButton.addEventListener("click", () => {
    const t = translations[currentLanguage].brief;
    if (detailsField) {
      detailsField.value = currentBriefText;
      detailsField.dispatchEvent(new Event("input", { bubbles: true }));
    }
    if (briefStatus) briefStatus.textContent = t.inserted;
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => detailsField?.focus({ preventScroll: true }), 420);
  });

  updateBrief();
}

function setupCallForm() {
  const form = document.querySelector("[data-call-form]");
  const fileInput = form?.querySelector('[name="attachments"]');
  const status = form?.querySelector("[data-form-status]");
  const submitButton = form?.querySelector("[data-form-submit]");
  if (!form || !status || !submitButton) return;

  fileInput?.addEventListener("change", updateFileName);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const t = translations[currentLanguage].callForm;
    const formData = new FormData(form);
    const getValue = (name) => String(formData.get(name) || "").trim() || "-";
    const getSelectText = (name) => {
      const field = form.elements[name];
      return field?.selectedOptions?.[0]?.textContent?.trim() || getValue(name);
    };
    const channel = form.querySelector('[name="channel"]:checked')?.closest("label")?.textContent?.trim() || "-";
    const files = Array.from(fileInput?.files || []).map((file) => file.name).join(", ") || t.noFile;
    const contact = getValue("contact");
    const details = getValue("details");
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

    formData.set("project", getSelectText("project"));
    formData.set("timeline", getSelectText("timeline"));
    formData.set("budget", getSelectText("budget"));
    formData.set("channel", channel);
    formData.set("files", files);
    formData.set("message", details);
    formData.set("subject", t.subject);
    formData.set("source", "LocalMind Studio contact form");
    formData.set("language", currentLanguage);
    if (isEmail) {
      formData.set("email", contact);
    } else {
      formData.set("phone", contact);
    }

    submitButton.disabled = true;
    status.textContent = t.sending;

    try {
      await submitFormspree(formData);
      status.textContent = t.success;
      form.reset();
      updateFileName();
    } catch (error) {
      status.textContent = t.error;
    } finally {
      submitButton.disabled = false;
    }
  });
}

function setupFaq() {
  const items = [...document.querySelectorAll(".faq-list details")];
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });
}

function setupGallery() {
  const modal = document.querySelector("#screen-gallery");
  const modalTitle = document.querySelector("#gallery-title");
  const modalNote = document.querySelector("#gallery-note");
  const wrapper = document.querySelector("#gallery-wrapper");
  const closeButton = document.querySelector("[data-gallery-close]");
  let activeSwiper;

  if (!modal || !modalTitle || !modalNote || !wrapper || !closeButton) return;

  function openGallery(key) {
    const gallery = galleries[key];
    if (!gallery) return;
    const translatedGallery = translations[currentLanguage].galleryCases[key];

    modalTitle.textContent = translatedGallery?.[0] || gallery.title;
    modalNote.textContent = translatedGallery?.[1] || gallery.note;
    const translatedScreens = translations[currentLanguage].galleryScreens?.[key] || [];
    wrapper.innerHTML = gallery.screens
      .map(([src, label, variant], index) => {
        const isWide = variant === "wide";
        const screenLabel = translatedScreens[index] || label;
        return `
          <div class="swiper-slide${isWide ? " wide-slide" : ""}">
            <figure class="screen-shot${isWide ? " screen-shot-wide" : ""}">
              <img src="${src}" alt="${screenLabel}" loading="eager" />
              <figcaption>${screenLabel}</figcaption>
            </figure>
          </div>
        `;
      })
      .join("");

    if (activeSwiper) {
      activeSwiper.destroy(true, true);
    }

    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
    document.body.classList.add("no-scroll");

    if (window.Swiper) {
      activeSwiper = new Swiper(".gallery-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        keyboard: { enabled: true },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 130,
          modifier: 1.1,
          slideShadows: false,
        },
      });
    }
  }

  function closeGallery() {
    modal.close?.();
    modal.removeAttribute("open");
    document.body.classList.remove("no-scroll");
  }

  document.querySelectorAll("[data-gallery]").forEach((trigger) => {
    trigger.addEventListener("click", () => openGallery(trigger.dataset.gallery));
  });

  closeButton.addEventListener("click", closeGallery);
  modal.addEventListener("close", () => document.body.classList.remove("no-scroll"));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeGallery();
  });
}

setupLanguageSwitch();
applyLanguage(currentLanguage);
setupStickyNavigation();
setupRotatingWord();
setupHeroBubbles();
setupRevealAnimations();
setupServiceTabs();
setupAiConsole();
setupBriefBuilder();
setupCallForm();
setupFaq();
setupGallery();
