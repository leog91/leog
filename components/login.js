import { useSession, signIn, signOut } from "next-auth/react";
export default function LogIn() {
  const { data: session } = useSession();

  return (
    <div className="flex w-full  max-w-md flex-col items-center rounded-sm bg-neutral-800 px-4 py-4">
      <h3 className="mt-4 mb-9 text-lg font-semibold">
        {session ? (
          <div className="flex">
            Signed in as{" "}
            <p className=" px-2 text-purple-500/90 underline">
              {" "}
              {session.user.email}
            </p>
          </div>
        ) : (
          "Not signed in"
        )}
      </h3>

      <button
        className="5 my-1 w-full rounded-sm bg-purple-500/90 text-sm font-bold  hover:bg-purple-500/70"
        onClick={() => (session ? signOut() : signIn())}
      >
        {session ? "Sign out" : "Log in"}
      </button>

      {!session && (
        <p
          onClick={() => alert("good luck!")}
          className="cursor-pointer text-xs text-purple-500/90 hover:underline"
        >
          Trouble logging in?
        </p>
      )}
    </div>
  );
}
