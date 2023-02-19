import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "lib/prisma";
import { withMethodVerification } from "lib/server/method-middleware";
import { withAuthentication } from "lib/server/auth-middleware";

export default async function awsRegion(req: NextApiRequest, res: NextApiResponse) {
  await withAuthentication(req, res, async () => {
    await withMethodVerification(["PUT"], req, res, async () => {
      const { habitId, completitionAttributes } = req.body;
      const date = new Date();

      if (!habitId)
        return res.status(400).json({
          code: "bad_request",
          message: "Habit not provided",
        });

      const createdHabitCompletition = await prisma.habitCompletition.create({
        data: {
          ...completitionAttributes,
          date,
          habit: {
            connect: {
              id: habitId as string,
            },
          },
        },
      });

      if (!createdHabitCompletition)
        return res.status(500).json({
          code: "prisma_error",
          message: "Something went wrong creating this habit. Please, try again later",
        });

      res.status(200).send({
        message: "Track successfully saved",
        data: createdHabitCompletition,
      });
    });
  });
}
