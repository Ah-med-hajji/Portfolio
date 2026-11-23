"""Content for the AI & DevOps trainer CV, FR (original) and EN (translation).

Keep facts in sync with content_global.py and lib/constants.ts.
"""

FR = {
    "lang": "fr",
    "title": "Ahmed Hajji - CV Formateur IA & DevOps",
    "name": "AHMED HAJJI",
    "headline": "FORMATEUR IA GÉNÉRATIVE & DEVOPS  |  INGÉNIEUR DEVOPS & SRE",
    "contact1": ["+216 40 599 355", "ahmedhajji5401@gmail.com", "Sousse, Tunisie"],
    "contact2": ["linkedin.com/in/hajjiahmed", "ahmed-hajji-it.vercel.app"],
    "h_profile": "PROFIL",
    "profile": (
        "Formateur IA générative et DevOps, Ahmed associe une pédagogie orientée pratique à plus de 5 ans "
        "d'expérience de terrain en ingénierie logicielle, infrastructure cloud et automatisation. Ancien Tech Lead ERP "
        "d'une startup de la Silicon Valley, co-fondateur et CTO de TieUp et titulaire d'un Master en DevOps & SRE, "
        "il accompagne les professionnels dans l'adoption concrète, structurée et responsable des outils "
        "d'intelligence artificielle."
    ),
    "callout_title": "POSITIONNEMENT IZ ACADEMY",
    "callout": (
        "Animation de la formation « Outils IA pour les professionnels » : usages et limites de l'IA, prompt "
        "engineering, communication professionnelle, automatisation de tâches, cas RH et administratifs, "
        "vérification des contenus et confidentialité."
    ),
    "h_expertise": "EXPERTISE IA & PÉDAGOGIE PROFESSIONNELLE",
    "table_head": ("DOMAINE", "COMPÉTENCES MOBILISÉES"),
    "expertise": [
        ("IA générative", "ChatGPT / OpenAI, Claude, modèles de langage, sélection de modèles et intégration dans les workflows."),
        ("Prompt engineering", "Prompts structurés, modèles réutilisables, exemples guidés, fiabilité, cohérence et réduction des hallucinations."),
        ("Productivité", "E-mails, comptes rendus, rapports, synthèses, analyse documentaire, planification et automatisation de tâches."),
        ("Usage responsable", "Confidentialité, anonymisation, minimisation des données, vérification des faits et validation humaine."),
        ("Approche pédagogique", "Démonstrations, ateliers pas à pas, cas métier, exercices guidés, feedback et accompagnement vers l'autonomie."),
    ],
    "h_training": "EXPÉRIENCE DE FORMATION & ACCOMPAGNEMENT",
    "training": [
        {
            "role": "Formateur IA & DevOps",
            "org": "IZ Academy",
            "place": "Sousse",
            "period": "Actuellement",
            "points": [
                "Animation de formations destinées aux professionnels, avec une démarche accessible aux profils non techniques et centrée sur des livrables immédiatement exploitables.",
                "Conception d'exercices pratiques autour du prompt engineering, de la communication, de la planification et de l'automatisation assistées par l'IA.",
                "Sensibilisation aux limites des modèles, à la qualité des réponses et à la protection des informations professionnelles.",
            ],
        },
        {
            "role": "Formateur freelance",
            "org": "Indépendant",
            "place": "Sousse / Remote",
            "period": "Depuis 2019",
            "points": [
                "Formation en algorithmique, développement web et anglais technique auprès d'étudiants et de professionnels.",
                "Ateliers « GitHub & GitHub Actions » et « Docker, Kubernetes & Tests » : démonstrations, exercices guidés et mise en situation.",
                "Mentorat, onboarding et montée en compétences d'ingénieurs juniors : Linux, Git, CI/CD, tests, Docker, Kubernetes et méthodes Agile.",
            ],
        },
    ],
    "h_ai_certs": "CERTIFICATIONS & PARCOURS IA",
    "ai_certs": [
        "ChatGPT Prompt Engineering for Developers - OpenAI / DeepLearning.AI",
        "Claude Code in Action - Anthropic",
        "Google Prompting Essentials Specialization - Google",
        "Building with the Claude API - Anthropic",
        "Claude Platform - Anthropic",
        "AI Fluency for Students - Anthropic",
    ],
    "h_experience": "EXPÉRIENCE PROFESSIONNELLE",
    "experience": [
        {
            "role": "Co-fondateur & CTO",
            "org": "TieUp",
            "place": "Remote",
            "period": "Actuellement",
            "points": [
                "Relance d'une marketplace freelance tunisienne : architecture, quatre applications (web, back-office, API, mobile), tests, CI/CD et exploitation, réalisés en autonomie.",
                "Plus de 1 500 tests automatisés (unitaires, intégration Firebase, E2E Playwright) et déploiements conditionnés par GitHub Actions.",
            ],
        },
        {
            "role": "ERP Tech Lead - DevOps & Infrastructure",
            "org": "Craftschoolship",
            "place": "Remote - Silicon Valley",
            "period": "2022 - 2026",
            "points": [
                "Pilotage du développement technique de Craft ERP, système de gestion scolaire couvrant dossiers étudiants, planning, finance, RH, événements, reporting, LMS et notifications.",
                "Conception et maintenance de pipelines CI/CD avec GitHub Actions, ayant contribué à améliorer la vélocité de livraison de 30 %.",
                "Automatisation d'infrastructures AWS et Azure avec Terraform et Kubernetes (EKS) ; observabilité avec Prometheus, Grafana et Istio.",
                "Gestion d'incidents en production : analyse de cause racine, rollbacks et post-mortems documentés.",
                "Collaboration à distance avec des clients internationaux et accompagnement technique des équipes.",
            ],
        },
        {
            "role": "Consultant Full-Stack, DevOps & IA",
            "org": "Freelance",
            "place": "Remote",
            "period": "Depuis 2019",
            "points": [
                "Conception d'applications web de bout en bout avec React, Next.js, Node.js, Python et bases de données modernes.",
                "Intégration d'API OpenAI et Claude, chaînes de prompts, réponses en streaming, workflows IA et automatisations Python / n8n.",
                "Audit sécurité et fiabilisation d'une plateforme e-learning : Docker multi-stage, contrôles CI/CD, sauvegardes, health checks, Sentry et tests Jest.",
            ],
        },
    ],
    "h_skills": "COMPÉTENCES TECHNIQUES",
    "skills": [
        ("IA & automatisation", "OpenAI API, Claude API, LangChain, RAG, Hugging Face, n8n, Python, REST APIs"),
        ("DevOps & CI/CD", "GitHub Actions, Jenkins, GitLab CI, ArgoCD, Git avancé, Bash"),
        ("Conteneurs", "Docker, Docker Compose, Kubernetes, Helm, Istio"),
        ("Cloud & IaC", "AWS (EC2, EKS, S3, RDS), Azure, GCP, Terraform, Ansible"),
        ("Observabilité", "Prometheus, Grafana, Kibana, Sentry, dashboards, logs et alerting"),
        ("Développement", "React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Supabase"),
        ("Tests & qualité", "Jest, JUnit, Playwright, tests d'intégration, revues de code"),
    ],
    "h_devops_certs": "CERTIFICATIONS DEVOPS & QUALITÉ",
    "devops_certs": [
        "Jenkins - 3 certifications Coursera : fondamentaux, pipelines déclaratifs & IaC, automatisation du delivery pipeline.",
        "Scrum Master - LearnQuest ; conteneurs & APIs ; cloud computing ; tests JUnit.",
        "TOEIC C1 - anglais avancé certifié.",
    ],
    "h_education": "FORMATION ACADÉMIQUE",
    "education": [
        ("Master en DevOps & Site Reliability Engineering", "Horizon School of Digital Technologies", "Sousse", "2023 - 2025"),
        ("Licence en Génie des Télécommunications", "ISITCOM", "Sousse", "2020 - 2023"),
    ],
    "h_languages": "LANGUES",
    "languages": [("Arabe", "langue maternelle"), ("Français", "courant"), ("Anglais", "C1 certifié TOEIC")],
    "footer": "Ahmed Hajji  |  Formateur IA & DevOps  |  IZ Academy",
}

EN = {
    "lang": "en",
    "title": "Ahmed Hajji - AI & DevOps Trainer CV",
    "name": "AHMED HAJJI",
    "headline": "GENERATIVE AI & DEVOPS TRAINER  |  DEVOPS & SRE ENGINEER",
    "contact1": ["+216 40 599 355", "ahmedhajji5401@gmail.com", "Sousse, Tunisia"],
    "contact2": ["linkedin.com/in/hajjiahmed", "ahmed-hajji-it.vercel.app"],
    "h_profile": "PROFILE",
    "profile": (
        "Generative AI and DevOps trainer who pairs a hands-on teaching style with 5+ years of field experience in "
        "software engineering, cloud infrastructure and automation. Former ERP Tech Lead at a Silicon Valley startup, "
        "co-founder and CTO of TieUp, and holder of a Master's in DevOps & SRE. Helps professionals adopt AI tools "
        "in a practical, structured and responsible way."
    ),
    "callout_title": "ROLE AT IZ ACADEMY",
    "callout": (
        "Teaches the “AI Tools for Professionals” course: what AI can and cannot do, prompt engineering, "
        "professional communication, task automation, HR and administrative use cases, fact-checking and "
        "confidentiality."
    ),
    "h_expertise": "AI EXPERTISE & PROFESSIONAL TEACHING",
    "table_head": ("AREA", "SKILLS"),
    "expertise": [
        ("Generative AI", "ChatGPT / OpenAI, Claude, language models, model selection and integration into everyday workflows."),
        ("Prompt engineering", "Structured prompts, reusable templates, guided examples, reliability, consistency and fewer hallucinations."),
        ("Productivity", "Emails, meeting notes, reports, summaries, document analysis, planning and task automation."),
        ("Responsible use", "Confidentiality, anonymisation, data minimisation, fact-checking and human review."),
        ("Teaching approach", "Live demos, step-by-step labs, real business cases, guided exercises, feedback and coaching toward autonomy."),
    ],
    "h_training": "TRAINING & MENTORING EXPERIENCE",
    "training": [
        {
            "role": "AI & DevOps Trainer",
            "org": "IZ Academy",
            "place": "Sousse",
            "period": "Current",
            "points": [
                "Runs courses for professionals, accessible to non-technical profiles and focused on deliverables learners can use immediately.",
                "Designs hands-on exercises on AI-assisted prompt engineering, communication, planning and automation.",
                "Raises awareness of model limits, answer quality and the protection of professional information.",
            ],
        },
        {
            "role": "Freelance Trainer",
            "org": "Independent",
            "place": "Sousse / Remote",
            "period": "Since 2019",
            "points": [
                "Teaches algorithms, web development and technical English to students and professionals.",
                "Runs “GitHub & GitHub Actions” and “Docker, Kubernetes & Testing” workshops: demos, guided exercises and real-world scenarios.",
                "Mentors and onboards junior engineers on Linux, Git, CI/CD, testing, Docker, Kubernetes and Agile methods.",
            ],
        },
    ],
    "h_ai_certs": "AI CERTIFICATIONS & LEARNING",
    "ai_certs": FR["ai_certs"],
    "h_experience": "PROFESSIONAL EXPERIENCE",
    "experience": [
        {
            "role": "Co-founder & CTO",
            "org": "TieUp",
            "place": "Remote",
            "period": "Current",
            "points": [
                "Relaunched a Tunisian freelance marketplace and built it alone: architecture, four applications (web, admin, API, mobile), testing, CI/CD and operations.",
                "1,500+ automated tests (unit, Firebase integration, Playwright E2E) with deployments gated through GitHub Actions.",
            ],
        },
        {
            "role": "ERP Tech Lead - DevOps & Infrastructure",
            "org": "Craftschoolship",
            "place": "Remote - Silicon Valley",
            "period": "2022 - 2026",
            "points": [
                "Led the technical development of Craft ERP, a school-management system covering student records, scheduling, finance, HR, events, reporting, LMS and notifications.",
                "Designed and maintained CI/CD pipelines with GitHub Actions, contributing to a 30% improvement in delivery velocity.",
                "Automated AWS and Azure infrastructure with Terraform and Kubernetes (EKS); observability with Prometheus, Grafana and Istio.",
                "Handled production incidents: root-cause analysis, rollbacks and documented post-mortems.",
                "Worked remotely with international clients and provided technical guidance to the team.",
            ],
        },
        {
            "role": "Full-Stack, DevOps & AI Consultant",
            "org": "Freelance",
            "place": "Remote",
            "period": "Since 2019",
            "points": [
                "Builds end-to-end web applications with React, Next.js, Node.js, Python and modern databases.",
                "Integrates OpenAI and Claude APIs: prompt chains, streaming responses, AI workflows and Python / n8n automations.",
                "Security audit and hardening of an e-learning platform: multi-stage Docker, CI/CD checks, backups, health checks, Sentry and Jest tests.",
            ],
        },
    ],
    "h_skills": "TECHNICAL SKILLS",
    "skills": [
        ("AI & automation", "OpenAI API, Claude API, LangChain, RAG, Hugging Face, n8n, Python, REST APIs"),
        ("DevOps & CI/CD", "GitHub Actions, Jenkins, GitLab CI, ArgoCD, advanced Git, Bash"),
        ("Containers", "Docker, Docker Compose, Kubernetes, Helm, Istio"),
        ("Cloud & IaC", "AWS (EC2, EKS, S3, RDS), Azure, GCP, Terraform, Ansible"),
        ("Observability", "Prometheus, Grafana, Kibana, Sentry, dashboards, logs and alerting"),
        ("Development", "React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Supabase"),
        ("Testing & quality", "Jest, JUnit, Playwright, integration testing, code reviews"),
    ],
    "h_devops_certs": "DEVOPS & QUALITY CERTIFICATIONS",
    "devops_certs": [
        "Jenkins - 3 Coursera certifications: fundamentals, declarative pipelines & IaC, delivery pipeline automation.",
        "Scrum Master - LearnQuest; containers & APIs; cloud computing; JUnit testing.",
        "TOEIC C1 - certified advanced English.",
    ],
    "h_education": "EDUCATION",
    "education": [
        ("Master's in DevOps & Site Reliability Engineering", "Horizon School of Digital Technologies", "Sousse", "2023 - 2025"),
        ("Bachelor's in Telecommunications Engineering", "ISITCOM", "Sousse", "2020 - 2023"),
    ],
    "h_languages": "LANGUAGES",
    "languages": [("Arabic", "native"), ("French", "fluent"), ("English", "C1, TOEIC certified")],
    "footer": "Ahmed Hajji  |  AI & DevOps Trainer  |  IZ Academy",
}
