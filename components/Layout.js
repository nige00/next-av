import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  title = "Dafault Title",
  description,
  keyword,
  image,
  url,
  type,
}) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono box-border overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="【U-NEXT】AV見放題情報まとめ" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:url" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta
          name="google-site-verification"
          content="7_ZHDHb9q5QDql9_JbvC0SIN8Ti_Eepkv-l4hBr03Eg"
        />
        <link rel="canonical" href={url} />
      </Head>
      <header>
        <nav className="bg-pink-300 w-screen text-sm font-sans">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-white hover:bg-pink-600 px-3 py-2 rounded transition">
                  トップページ
                </a>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/category/maker0">
                <a className="text-white hover:bg-pink-600 px-3 py-2 rounded transition">
                  FALENO
                </a>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/category/maker3">
                <a className="text-white hover:bg-pink-600 px-3 py-2 rounded transition">
                  SODクリエイト
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex justify-center items-center flex-col sm:w-10/12 sm:p-0 px-8">
        {children}
      </main>
      <footer className="mt-12">
        <ul className=" w-screen border-gray-300 border-t text-sm">
          <div className="flex flex-wrap items-center pl-8 h-14">
            <div className="space-x-4">
              <Link href="/">
                <a className="hover:text-gray-400 px-3 py-2 rounded transition">
                  Home
                </a>
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/series">
                <a className="hover:text-gray-400 px-3 py-2 rounded transition">
                  シリーズ一覧
                </a>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/janrus">
                <a className="hover:text-gray-400 px-3 py-2 rounded transition">
                  ジャンル一覧
                </a>
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/joyus">
                <a className="hover:text-gray-400 px-3 py-2 rounded transition">
                  AV女優一覧
                </a>
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/kantokus">
                <a className="hover:text-gray-400 px-3 py-2 rounded transition">
                  AV監督一覧
                </a>
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/makers">
                <a className="hover:text-gray-400 px-3 py-2 rounded transition">
                  メーカー一覧
                </a>
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/videos">
                <a className="hover:text-gray-400 px-3 py-2 rounded transition">
                  AV一覧
                </a>
              </Link>
            </div>
          </div>
        </ul>
      </footer>
    </div>
  );
}
