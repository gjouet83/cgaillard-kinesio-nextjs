import Image from 'next/image';
import '../styles/main.scss';

export default function Home() {
  return (
    <main>
      <Image src="/mon approche.jpg" alt="logo" width={200} height={200} />
    </main>
  );
}
