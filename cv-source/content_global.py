"""Content for the global CV (Tech Lead · DevOps/SRE · ERP · Full-Stack), EN and FR.

Agreed facts (keep in sync with lib/constants.ts):
- 5+ years of experience
- CraftSchoolship 2022 – 2026 (years only)
- TieUp: co-founder & CTO
- IZ Academy audit described without naming the specific critical vulnerability
"""

CONTACT = {
    "phone": "+216 40 599 355",
    "email": "ahmedhajji5401@gmail.com",
    "linkedin": "linkedin.com/in/hajjiahmed",
    "site": "ahmed-hajji-it.vercel.app",
}

EN = {
    "lang": "en",
    "title": "Ahmed Hajji — CV",
    "name": "AHMED HAJJI",
    "headline": "TECH LEAD  •  DEVOPS / SRE  •  ERP & INTEGRATION  •  FULL-STACK",
    "motto": "Build. Automate. Scale. Make an impact.",
    "location": "Sousse, Tunisia",
    "mobility": "Open to relocation",
    "stats": [
        ("5+ YEARS", "engineering experience"),
        ("35", "issues remediated"),
        ("30%", "delivery velocity gain"),
        ("3 REGIONS", "USA • Europe • MENA"),
    ],
    "h_profile": "PROFESSIONAL PROFILE",
    "profile": (
        "IT engineer and technical lead with 5+ years of experience combining application development, "
        "ERP/Odoo, cloud infrastructure, DevOps and Site Reliability Engineering. Experienced in taking "
        "products from business requirements and architecture through development, integration, deployment "
        "and production operations. Works directly with international clients and teams, with a strong focus "
        "on security, reliability, automation and maintainable systems."
    ),
    "h_experience": "PROFESSIONAL EXPERIENCE",
    "experience": [
        {
            "role": "Co-founder & CTO",
            "org": "TieUp • Remote",
            "period": "Present",
            "points": [
                "Relaunched a shut-down Tunisian freelance marketplace as co-founder and CTO; own its architecture, engineering and production operations.",
                "Built the four-application monorepo alone: React web client, admin dashboard, Express/TypeScript API and mobile app on Firebase and Google Cloud.",
                "1,500+ unit, integration and Playwright E2E tests with 82% backend coverage, gated through GitHub Actions; integrated ClicToPay online payments.",
            ],
        },
        {
            "role": "Independent Applications, DevOps & SRE Consultant",
            "org": "Freelance • Remote",
            "period": "2019 - Present",
            "points": [
                "Own end-to-end client delivery: discovery, requirements, estimation, architecture, implementation, production deployment and handover documentation.",
                "Performed a complete security and engineering audit of the IZ Academy platform, identifying and remediating 35 issues across code, dependencies and infrastructure.",
                "Rebuilt production delivery using multi-stage Docker, CI/CD quality gates, automated backups, health checks, graceful shutdown, request timeouts, Sentry monitoring, structured logging, Redis caching and per-user rate limiting.",
                "Design and ship complete web applications including e-commerce sites, corporate sites, HR portals and reservation platforms; also train students and professionals in web development and algorithms.",
            ],
        },
        {
            "role": "ERP Tech Lead / DevOps & Infrastructure",
            "org": "Craftschoolship • Remote • Silicon Valley startup",
            "period": "2022 - 2026",
            "points": [
                "Led technical ERP operations across multiple environments: Odoo module customization, configuration, deployment, functional analysis and environment management.",
                "Worked with finance, operations and HR stakeholders to map processes and translate functional requirements into technical designs, favoring native ERP capabilities when appropriate.",
                "Integrated Odoo with internal and third-party systems through REST APIs and maintained secure authentication, secrets and data flows.",
                "Designed AWS and Azure infrastructure with Terraform, Kubernetes, Helm, Istio and Ansible; automated deployments with GitHub Actions and related CI/CD tooling.",
                "Improved delivery velocity by about 30%; established Prometheus, Grafana and Kibana observability and owned incidents from triage through RCA, rollback, post-mortem and prevention.",
                "Developed portals and dashboards in Next.js, React and TypeScript; ran sprints, reviewed code, mentored engineers and supported clients across the USA, Europe and MENA.",
            ],
        },
    ],
    "h_expertise": "CORE EXPERTISE",
    "expertise": [
        ("ERP & Business Systems", "Odoo customization • configuration • deployment • functional analysis • process mapping • requirements gathering • technical design"),
        ("Full-Stack Development", "Next.js • React • Angular • TypeScript • JavaScript • Node.js • Express • Laravel • Tailwind CSS • Prisma"),
        ("Cloud & DevOps", "AWS • Azure • GCP • Firebase • Google App Engine • Docker • Kubernetes • Helm • Istio • Terraform • Ansible"),
        ("CI/CD & Automation", "GitHub Actions • GitLab CI • Jenkins • ArgoCD • Vercel • automated deployments • quality gates"),
        ("SRE & Observability", "Prometheus • Grafana • Sentry • Kibana • alerting • incident response • RCA • post-mortems • disaster recovery • backups • capacity planning"),
        ("Data & Databases", "PostgreSQL • MySQL • MongoDB • Redis • relational modelling • data migration • modernization"),
        ("Integration & APIs", "REST • SOAP • webhooks • third-party integrations • authentication • secrets handling • system-to-system data mapping"),
        ("Security & Quality", "Security audits • vulnerability remediation • hardening • Jest • Playwright • unit / integration / E2E testing"),
        ("AI & Engineering Tools", "AI APIs • LLM integration • AI workflows • prompt engineering • AI training for teams • AI-assisted analysis, documentation and troubleshooting"),
    ],
    "p2_label": "SELECTED PROJECTS & CREDENTIALS",
    "h_projects": "SELECTED PROJECTS",
    "projects": [
        {
            "name": "IZ Academy - Security & Reliability Audit",
            "year": "2026",
            "stack": "Security audit • Docker • CI/CD • Redis • Sentry",
            "points": [
                "Identified and fixed 35 engineering and security issues across code, dependencies and infrastructure.",
                "Containerized the platform, hardened CI/CD, added automated backups, health checks, structured error handling, caching and rate limiting.",
                "Raised production readiness from roughly 5/10 to about 9/10.",
            ],
        },
        {
            "name": "TieUp - Freelance Marketplace (Co-founder & CTO)",
            "year": "Present",
            "stack": "React • TypeScript • Node.js • Firebase • GCP",
            "points": [
                "Built a four-application monorepo covering the web client, administration experience, Express/TypeScript backend and mobile app.",
                "Added unit, integration and Playwright end-to-end testing with GitHub Actions deployment gates.",
                "Purged leaked credentials from Git history and strengthened delivery controls.",
            ],
        },
        {
            "name": "Odoo ERP Platform & Integrations",
            "year": "2022 - 2026",
            "stack": "Odoo • Python • REST APIs • PostgreSQL • CI/CD",
            "points": [
                "Customized modules for finance, HR and operations and deployed across multiple environments.",
                "Integrated the ERP with third-party services via APIs and optimized business processes with stakeholders.",
                "Supported international production clients and combined ERP ownership with cloud/DevOps responsibilities.",
            ],
        },
        {
            "name": "Client Web Applications",
            "year": "2019 - 2026",
            "stack": "Next.js • React • Vercel • APIs • AI / LLMs",
            "points": [
                "Delivered e-commerce sites, showcase websites, an HR portal and reservation solutions from requirements to production.",
                "Integrated AI APIs and LLM-based workflows in multiple projects and handled client-facing technical delivery.",
            ],
        },
    ],
    "h_earlier": "EARLIER EXPERIENCE",
    "earlier": [
        {
            "role": "Full-Stack Developer - End-of-Studies Internship",
            "org": "Mobelite • Monastir",
            "period": "2023",
            "points": [
                "Built and deployed a hotel guest/client expense management application covering the full cycle from development to deployment using Angular, Node.js, Express and MongoDB.",
            ],
        }
    ],
    "h_education": "EDUCATION",
    "education": [
        ("Master in DevOps & Site Reliability Engineering", "Horizon School of Digital Technologies • Sousse", "2023 - 2025"),
        ("Bachelor in Telecommunications Engineering", "ISITCOM • Sousse", "2020 - 2023"),
    ],
    "h_certs": "CERTIFICATIONS & TRAINING",
    "certs": [
        "Jenkins - DevOps Fundamentals",
        "Jenkins - Declarative Pipelines / Infrastructure as Code",
        "Jenkins - Delivery Automation",
        "Cloud, Virtualization, Containers & APIs",
        "Introduction to Cloud Computing",
        "Scrum Master Training",
        "TOEIC - English C1",
    ],
    "h_languages": "LANGUAGES",
    "languages": [("Arabic", "Native"), ("English", "C1 • TOEIC certified"), ("French", "Fluent / professional proficiency")],
    "h_leadership": "LEADERSHIP & WAYS OF WORKING",
    "leadership": [
        "Technical architecture & scalable design",
        "Product thinking and business-process understanding",
        "Agile / Scrum ceremonies and sprint planning",
        "Code reviews, mentoring and onboarding",
        "Client-facing discovery and delivery",
        "Technical documentation and handover",
        "Ownership from design to production",
        "Cross-functional collaboration",
    ],
    "h_toolbox": "TECHNICAL TOOLBOX",
    "toolbox": [
        "Python • Bash • Linux • Git",
        "AWS • Azure • GCP",
        "Docker • Kubernetes • Terraform",
        "GitHub Actions • Jenkins • ArgoCD",
        "Prometheus • Grafana • Sentry",
        "Odoo • REST / SOAP • Webhooks",
        "PostgreSQL • MySQL • MongoDB • Redis",
        "Next.js • React • Node.js • TypeScript",
    ],
    "footer": "Ahmed Hajji  |  Tech Lead • DevOps/SRE • ERP & Integration • Full-Stack",
}

FR = {
    "lang": "fr",
    "title": "Ahmed Hajji — CV",
    "name": "AHMED HAJJI",
    "headline": "TECH LEAD  •  DEVOPS / SRE  •  ERP & INTÉGRATION  •  FULL-STACK",
    "motto": "Concevoir. Automatiser. Faire grandir. Avoir de l'impact.",
    "location": "Sousse, Tunisie",
    "mobility": "Ouvert à la mobilité",
    "stats": [
        ("5+ ANS", "d'expérience en ingénierie"),
        ("35", "anomalies corrigées"),
        ("30 %", "de vélocité de livraison"),
        ("3 RÉGIONS", "USA • Europe • MENA"),
    ],
    "h_profile": "PROFIL PROFESSIONNEL",
    "profile": (
        "Ingénieur IT et Tech Lead avec plus de 5 ans d'expérience à l'intersection du développement applicatif, "
        "des ERP/Odoo, du Cloud, du DevOps et du Site Reliability Engineering. Expérience complète du cycle produit : "
        "besoin métier, architecture, développement, intégration, déploiement et exploitation en production. "
        "Travaille directement avec des clients et des équipes internationales, avec une attention forte à la sécurité, "
        "à la fiabilité, à l'automatisation et à la maintenabilité."
    ),
    "h_experience": "EXPÉRIENCE PROFESSIONNELLE",
    "experience": [
        {
            "role": "Co-fondateur & CTO",
            "org": "TieUp • Remote",
            "period": "Actuellement",
            "points": [
                "Relance, en tant que co-fondateur et CTO, d'une marketplace freelance tunisienne qui avait fermé ; responsable de l'architecture, de l'ingénierie et de l'exploitation.",
                "Construction en autonomie d'un monorepo de quatre applications : client web React, back-office, API Express/TypeScript et application mobile sur Firebase et Google Cloud.",
                "Plus de 1 500 tests unitaires, d'intégration et E2E Playwright, 82 % de couverture backend, déploiements conditionnés par GitHub Actions ; intégration du paiement en ligne ClicToPay.",
            ],
        },
        {
            "role": "Consultant indépendant Applications, DevOps & SRE",
            "org": "Freelance • Remote",
            "period": "2019 - Aujourd'hui",
            "points": [
                "Prise en charge complète des projets clients : découverte, recueil des besoins, estimation, architecture, réalisation, mise en production et documentation de passation.",
                "Audit complet de sécurité et d'ingénierie de la plateforme IZ Academy : 35 anomalies identifiées et corrigées dans le code, les dépendances et l'infrastructure.",
                "Refonte de la chaîne de livraison : Docker multi-stage, contrôles qualité CI/CD, sauvegardes automatisées, health checks, arrêt propre, timeouts, monitoring Sentry, logs structurés, cache Redis et limitation de débit par utilisateur.",
                "Conception et livraison d'applications web complètes : sites e-commerce, sites vitrines, portails RH et plateformes de réservation ; formation d'étudiants et de professionnels au développement web et à l'algorithmique.",
            ],
        },
        {
            "role": "ERP Tech Lead / DevOps & Infrastructure",
            "org": "Craftschoolship • Remote • Startup de la Silicon Valley",
            "period": "2022 - 2026",
            "points": [
                "Pilotage technique de l'ERP sur plusieurs environnements : personnalisation de modules Odoo, configuration, déploiement, analyse fonctionnelle et gestion des environnements.",
                "Cartographie des processus finance, opérations et RH avec les métiers et traduction des besoins fonctionnels en conception technique, en privilégiant les capacités natives de l'ERP.",
                "Intégration d'Odoo avec des systèmes internes et tiers via des API REST, avec une gestion sécurisée de l'authentification, des secrets et des flux de données.",
                "Conception d'infrastructures AWS et Azure avec Terraform, Kubernetes, Helm, Istio et Ansible ; déploiements automatisés avec GitHub Actions.",
                "Vélocité de livraison améliorée d'environ 30 % ; observabilité Prometheus, Grafana et Kibana ; gestion des incidents du tri à l'analyse de cause racine, au rollback et au post-mortem.",
                "Développement de portails et tableaux de bord en Next.js, React et TypeScript ; animation des sprints, revues de code, mentorat et accompagnement de clients aux USA, en Europe et en région MENA.",
            ],
        },
    ],
    "h_expertise": "EXPERTISE",
    "expertise": [
        ("ERP & systèmes métier", "Personnalisation Odoo • configuration • déploiement • analyse fonctionnelle • cartographie des processus • recueil des besoins • conception technique"),
        ("Développement Full-Stack", "Next.js • React • Angular • TypeScript • JavaScript • Node.js • Express • Laravel • Tailwind CSS • Prisma"),
        ("Cloud & DevOps", "AWS • Azure • GCP • Firebase • Google App Engine • Docker • Kubernetes • Helm • Istio • Terraform • Ansible"),
        ("CI/CD & automatisation", "GitHub Actions • GitLab CI • Jenkins • ArgoCD • Vercel • déploiements automatisés • contrôles qualité"),
        ("SRE & observabilité", "Prometheus • Grafana • Sentry • Kibana • alerting • gestion d'incidents • RCA • post-mortems • reprise après sinistre • sauvegardes • capacity planning"),
        ("Données & bases", "PostgreSQL • MySQL • MongoDB • Redis • modélisation relationnelle • migration et modernisation des données"),
        ("Intégration & API", "REST • SOAP • webhooks • intégrations tierces • authentification • gestion des secrets • mapping de données"),
        ("Sécurité & qualité", "Audits de sécurité • correction de vulnérabilités • hardening • Jest • Playwright • tests unitaires, d'intégration et E2E"),
        ("IA & outils d'ingénierie", "API d'IA • intégration de LLM • workflows IA • prompt engineering • formation des équipes à l'IA • analyse, documentation et dépannage assistés par IA"),
    ],
    "p2_label": "PROJETS & PARCOURS",
    "h_projects": "PROJETS SÉLECTIONNÉS",
    "projects": [
        {
            "name": "IZ Academy - Audit sécurité & fiabilité",
            "year": "2026",
            "stack": "Audit sécurité • Docker • CI/CD • Redis • Sentry",
            "points": [
                "35 anomalies de sécurité et d'ingénierie identifiées et corrigées dans le code, les dépendances et l'infrastructure.",
                "Conteneurisation de la plateforme, CI/CD renforcée, sauvegardes automatisées, health checks, gestion d'erreurs structurée, cache et limitation de débit.",
                "Niveau de préparation à la production passé d'environ 5/10 à environ 9/10.",
            ],
        },
        {
            "name": "TieUp - Marketplace freelance (Co-fondateur & CTO)",
            "year": "Actuellement",
            "stack": "React • TypeScript • Node.js • Firebase • GCP",
            "points": [
                "Monorepo de quatre applications : client web, back-office, backend Express/TypeScript et application mobile.",
                "Tests unitaires, d'intégration et end-to-end Playwright, avec déploiements conditionnés par GitHub Actions.",
                "Purge des identifiants exposés dans l'historique Git et renforcement des contrôles de livraison.",
            ],
        },
        {
            "name": "Plateforme ERP Odoo & intégrations",
            "year": "2022 - 2026",
            "stack": "Odoo • Python • API REST • PostgreSQL • CI/CD",
            "points": [
                "Modules personnalisés pour la finance, les RH et les opérations, déployés sur plusieurs environnements.",
                "Intégration de l'ERP avec des services tiers via API et optimisation des processus métier avec les équipes.",
                "Accompagnement de clients internationaux en production, en combinant responsabilité ERP et Cloud/DevOps.",
            ],
        },
        {
            "name": "Applications web clients",
            "year": "2019 - 2026",
            "stack": "Next.js • React • Vercel • API • IA / LLM",
            "points": [
                "Sites e-commerce, sites vitrines, portail RH et solutions de réservation livrés du besoin à la mise en production.",
                "Intégration d'API d'IA et de workflows à base de LLM dans plusieurs projets, avec un suivi technique direct auprès des clients.",
            ],
        },
    ],
    "h_earlier": "EXPÉRIENCE ANTÉRIEURE",
    "earlier": [
        {
            "role": "Développeur Full-Stack - Stage de fin d'études",
            "org": "Mobelite • Monastir",
            "period": "2023",
            "points": [
                "Conception et déploiement d'une application de gestion des dépenses des clients d'hôtel, du développement à la mise en production, avec Angular, Node.js, Express et MongoDB.",
            ],
        }
    ],
    "h_education": "FORMATION",
    "education": [
        ("Master en DevOps & Site Reliability Engineering", "Horizon School of Digital Technologies • Sousse", "2023 - 2025"),
        ("Licence en Génie des Télécommunications", "ISITCOM • Sousse", "2020 - 2023"),
    ],
    "h_certs": "CERTIFICATIONS & FORMATIONS",
    "certs": [
        "Jenkins - Fondamentaux DevOps",
        "Jenkins - Pipelines déclaratifs / Infrastructure as Code",
        "Jenkins - Automatisation du delivery",
        "Cloud, virtualisation, conteneurs & API",
        "Introduction au Cloud Computing",
        "Formation Scrum Master",
        "TOEIC - Anglais C1",
    ],
    "h_languages": "LANGUES",
    "languages": [("Arabe", "Langue maternelle"), ("Anglais", "C1 • certifié TOEIC"), ("Français", "Courant / professionnel")],
    "h_leadership": "LEADERSHIP & MÉTHODES",
    "leadership": [
        "Architecture technique & conception évolutive",
        "Vision produit et compréhension des processus métier",
        "Agile / Scrum et planification des sprints",
        "Revues de code, mentorat et onboarding",
        "Découverte et livraison en relation client",
        "Documentation technique et passation",
        "Responsabilité de la conception à la production",
        "Collaboration transverse",
    ],
    "h_toolbox": "BOÎTE À OUTILS",
    "toolbox": EN["toolbox"],
    "footer": "Ahmed Hajji  |  Tech Lead • DevOps/SRE • ERP & Intégration • Full-Stack",
}
