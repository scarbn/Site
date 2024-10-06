// index.js
import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Website</h1>
      <p>This is a sleek, modern website to showcase documents.</p>
      <Link href="/documents">
        <a>View Documents</a>
      </Link>
    </div>
  );
}
