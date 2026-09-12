import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="tw-kicker">Technical writer &middot; Documentation systems</p>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            Browse Work Samples
          </Link>
          <Link className="button button--secondary button--lg" to="/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
}

const CATEGORIES = [
  {
    title: 'Reference & Procedural Documentation',
    to: '/docs/reference-procedural/sop-library-shipyard',
    body: "Dense, scannable procedure writing: a CAD team's day-to-day drawing standards from Frank Shirley Architects, and a self-directed SOP library covering incident-response, release, and offboarding procedures for a CI/CD platform.",
    badges: ['CAD reference', 'SOPs'],
  },
  {
    title: 'Conceptual & Onboarding Documentation',
    to: '/docs/conceptual-onboarding/onboarding-guide-loopline',
    body: 'Getting people oriented: a four-part SaaS onboarding series, and a conceptual explainer that translates an unfamiliar version-control workflow into a library-checkout analogy for a non-technical design team.',
    badges: ['Onboarding', 'Explainer'],
  },
  {
    title: 'Developer & Support Documentation',
    to: '/docs/developer-support/api-setup-guide',
    body: 'Freelance SaaS client work, recreated from 2013–2017 projects: an API setup guide, a symptom-first knowledge-base article, and release notes structured the way a SaaS company publishes them.',
    badges: ['API docs', 'Support'],
  },
  {
    title: 'Specifications',
    to: '/docs/specifications/sylva-project-creation-spec',
    body: 'A full feature specification for Project Creation in Sylva, a personal project-management app: entry points through the REST API and data model, plus dated implementation notes reconciling the spec against shipped code.',
    badges: ['Feature spec', 'REST API'],
  },
  {
    title: 'Systems & Information Architecture',
    to: '/docs/systems-information-architecture/docweaver-tooling-system',
    body: 'Systems-level thinking: DocWeaver, a documentation-tooling system with reusable templates and a docs-as-code publishing workflow, and a four-part knowledge-base architecture framework covering taxonomy, lifecycle, and governance.',
    badges: ['Docs tooling', 'KM framework'],
  },
  {
    title: 'Instructional Design',
    to: '/docs/instructional-design/html-css-curriculum',
    body: 'A five-part introductory web-development unit for Dona Ana Community College: a lesson plan, two HTML tag reference sheets, and two hands-on labs covering HTML fundamentals.',
    badges: ['Curriculum', 'Original course material'],
  },
];

function SelectedWork() {
  return (
    <section className="container" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
      <p className="tw-kicker">Selected work</p>
      <Heading as="h2" style={{marginBottom: '1.8rem'}}>
        Eleven work samples, six documentation types
      </Heading>
      <div className="tw-grid">
        {CATEGORIES.map((category) => (
          <Link key={category.to} to={category.to} className={clsx('card', styles.cardLink)}>
            <div className="card__header">
              <h3>{category.title}</h3>
            </div>
            <div className="card__body">
              <p>{category.body}</p>
            </div>
            <div className="card__footer">
              {category.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Technical writing portfolio">
      <HomepageHeader />
      <main>
        <SelectedWork />
      </main>
    </Layout>
  );
}
