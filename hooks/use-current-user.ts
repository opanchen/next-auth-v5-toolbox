import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();
  const session2 = useSession(); // !temporary to fix error (user = undefined) on first session object

  //   return session.data?.user;
  return session2.data?.user;
};
