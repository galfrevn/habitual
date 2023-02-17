import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'lib/prisma';
import { withMethodVerification } from 'lib/server/method-middleware';
import { getServerSideSession } from 'lib/server/server-session';

export default async function awsRegion(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await withMethodVerification(['POST'], req, res, async () => {
    const session = await getServerSideSession({ req, res });
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
      },
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
}
