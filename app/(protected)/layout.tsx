import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

import { Navbar } from "@/app/(protected)/_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <main className="overflow-auto h-full w-full flex flex-col gap-y-10 items-center py-4 md:py-8 xl:py-12 bg-blue-gradient">
        <Navbar />
        {children}
      </main>
    </SessionProvider>
  );
};

export default ProtectedLayout;
