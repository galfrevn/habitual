import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

import { prisma } from "lib/prisma";
import { withMethodVerification } from "lib/server/method-middleware";
import { withAuthentication } from "lib/server/auth-middleware";

export default async function awsRegion(req: NextApiRequest, res: NextApiResponse) {
  await withAuthentication(req, res, async (session: Session) => {
    await withMethodVerification(["GET"], req, res, async () => {
      const habits = await prisma.habit.findMany({
        where: {
          user: {
            id: session.user?.id,
          },
        },
        include: {
          completitions: true,
          _count: true,
        },
      });

      if (!habits)
        return res.status(500).json({
          code: "prisma_error",
          message: "Something went wrong listing your habits. Please, try again later",
        });

      res.status(200).send({ message: "Habits successfully listed", data: habits });
    });
  });
}
