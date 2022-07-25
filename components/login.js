import { useSession, signIn, signOut } from "next-auth/react";
export default function LogIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          className="m-2 rounded-md bg-slate-700 p-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className=" m-2  rounded-md bg-slate-700 p-2"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
