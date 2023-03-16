import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';

import { prisma } from 'lib/prisma';
import { withMethodVerification } from 'lib/server/method-middleware';
import { withAuthentication } from 'lib/server/auth-middleware';

export default async function awsRegion(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await withAuthentication(req, res, async (session: Session) => {
    await withMethodVerification(['POST'], req, res, async () => {
      const started = new Date();

      const createdHabit = await prisma.habit.create({
        data: {
          ...req.body,
          started,
          user: {
            connect: {
              id: session?.user?.id,
            },
          },
        }
      });

      if (!createdHabit)
        return res.status(500).json({
          code: 'prisma_error',
          message:
            'Something went wrong creating this habit. Please, try again later',
        });

      res
        .status(200)
        .send({ message: 'Habit successfully created', data: createdHabit });
    });
  });
}
