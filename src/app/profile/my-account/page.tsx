import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default async function MyAccount() {
  const session = await getServerSession();

  if (!session) {
    return <div>Please sign in first to see your profile</div>;
  }

  return (
    <div className="p-">
      <h2 className="font-bold text-4xl mb-8">Account</h2>
      <p>{session.user?.email}</p>
      <p>{session.user?.name}</p>
      <Image
        width={200}
        height={200}
        unoptimized
        src={session.user?.image || ""}
        alt={"avatar"}
      />
    </div>
  );
}
