import { NextApiRequest, NextApiResponse } from 'next';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH'

export const withMethodVerification = async (
  methods: Array<Method>,
  req: NextApiRequest,
  res: NextApiResponse,
  callback: any
) => {
  if (methods.includes(req.method as Method)) {
    await callback();
  } else {
    const error = (showVerboseError: boolean) => ({
      status: 405,
      code: 'invalid_method',
      message: showVerboseError
        ? 'Custom CORS invalid method'
        : 'Method not allowed',
    });

    console.error(error(true));

    res
      .status(error(false).status)
      .json({ code: error(false).code, message: error(false).message });
  }
};