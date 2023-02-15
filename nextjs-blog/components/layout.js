import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Dean Beebe';

export const siteTitle = 'Personal Blog';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta
                    name="description"
                    content="Learning how to use next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile_pic.jpg"
                            className={utilStyles.borderCircle}
                            height={160}
                            width={190}
                            alt=""    
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                        <Image
                            priority
                            src="/images/profile_pic.jpg"
                            className={utilStyles.borderCircle}
                            height={160}
                            width={190}
                            alt=""
                        />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                        <Link href="/" className={utilStyles.colorInherit}>
                            {name}
                        </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>

            )}
        </div>
    )
}