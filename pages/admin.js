import React from "react";

import { unstable_getServerSession } from "next-auth/next";

import { authOptions } from "./api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

function Admin({ admin, msg }) {
  if (!admin) {
    return (
      <div className="bg-red-700 text-center">
        <div className="text-3xl">OH SNAP!</div>
        unauthorized
        <div> {msg}</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen  flex-col items-center bg-slate-300">
      admin
      {admin && <div>1</div>}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      props: {
        admin: false,
        msg: "please login",
      },
    };
  }

  const prisma = new PrismaClient();

  await prisma.$connect();

  const user = await prisma.user.findUnique({
    where: {
      username: session.user.email,
    },
  });

  const isAdmin = false;
  session.user.email === process.env.ADMIN_USER ||
    user?.access.some((a) => a === "admin");

  if (!isAdmin) {
    return {
      props: {
        admin: false,
        msg: "please request access",
      },
    };
  }

  return {
    props: {
      admin: isAdmin,
      msg: "welcome",
    },
  };
}

export default Admin;
