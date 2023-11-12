import Image from 'next/image';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (<span className='text-xl' style={{ color: "black" }}><strong>Engreesi</strong> Web App</span>),
  darkMode: false,
  nextThemes: {
    defaultTheme: "light",
  },
  logoLink: "/",
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: '#171717', color: 'white', textAlign: 'center' }}>{title}</div>
        );
      }
      if (title === 'Introduction') {
        return <>👋🏻 {title}</>;
      }
      if (title === 'Contributions') {
        return <>😻 {title}</>;
      }
      if (title === 'Grammar Lessons') {
        return <>📚 {title}</>;
      }
      if (title === 'Word Lists') {
        return <>🧠 {title}</>;
      }
      if (title === 'Essential Verbs') {
        return <>🪜 {title}</>;
      }
      if (title === 'How to...') {
        return <>🤔 {title}</>;
      }
      if (title === 'Conversations') {
        return <>💬 {title}</>;
      }
      if (title.includes("Conversation: ")) {
        return <>🗨️ {title.split("Conversation: ")[1]}</>;
      }
      if (title === 'More ways to say...') {
        return <>😎 {title}</>;
      }
      if (title === 'Pronunciation') {
        return <>🗣️ {title}</>;
      }
      if (title === 'Consonant Sounds') {
        return <>🔊 {title}</>;
      }
      if (title === 'Phonetic Symbols') {
        return <>🖇 {title}</>;
      }
      if (title === 'Tongue Twisters') {
        return <>🪢 {title}</>;
      }
      if (title === 'Easy') {
        return <>🐰 {title}</>;
      }
      if (title === 'Intermediate') {
        return <>🙊 {title}</>;
      }
      if (title === 'Long') {
        return <>😈 {title}</>;
      }
      return <>📄 {title}</>;
    }
  },
  search: {
    component: "",
    placeholder: "Search on this page..."
  },
  project: {
    link: 'https://engspire.lk',
    icon: (<Image src="/engspire-logo.ico" width={32} height={32} alt="Engspire Logo" />)
  },
  chat: {
    link: 'https://wa.me/+94773393477',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#25d366" className="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>)
  },
  docsRepositoryBase: 'https://github.com/pivee/engreesi',
  banner: {
    text: (
      <a href="https://engspire.lk" target="_blank">
        <span className='flex flex-row justify-center'>
          <Image src="/engspire-logo-square.png" width={20} height={20} style={{ marginRight: 10 }} alt="Engspire Logo" />
          Learn English at Engspire →
        </span>
      </a>
    )
  },
  footer: {
    text: (
      <a href="https://engspire.lk" target="_blank">
        <span className='flex flex-row justify-center text-xl'>
          <Image src="/engspire-logo-square.png" width={30} height={30} style={{ marginRight: 10 }} alt="Engspire Logo" />
          Learn English at Engspire →
        </span>
      </a>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Engreesi | %s'
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://engreesi.engspire.lk' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Engreesi'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'English Lessons from Engspire'}
        />
      </>
    );
  }
};

export default config;
