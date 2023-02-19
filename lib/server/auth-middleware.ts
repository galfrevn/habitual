import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSideSession } from './server-session';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH'

export const withAuthentication = async (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: any
) => {

  const session = await getServerSideSession({ req, res })

  if (session) {
    await callback(session);
  } else {
    const error = (showVerboseError: boolean) => ({
      status: 401,
      code: 'unauthorized',
      message: showVerboseError
        ? 'Action not allowed'
        : 'Unauthorized',
    });

    console.error(error(true));

    res
      .status(error(false).status)
      .json({ code: error(false).code, message: error(false).message });
  }
};