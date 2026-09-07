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
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Browse Work Samples
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Technical writing portfolio">
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <p>
          Eleven work samples — reference documentation, onboarding guides,
          API and support docs, a feature spec, information architecture,
          and instructional design — drawn from an architecture firm,
          freelance SaaS work, self-directed projects, and a
          community-college web development course. Every sample links
          back to its source repository.
        </p>
      </main>
    </Layout>
  );
}
