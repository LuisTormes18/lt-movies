import Head from "next/head";
import { Sidebar } from "./Sidebar";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "LT Movies" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="lt movies app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="layout">
        <Sidebar />
        <div className="ml-[65px]">{children}</div>
      </main>
    </>
  );
};
