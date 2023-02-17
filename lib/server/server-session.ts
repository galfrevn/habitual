import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export const getServerSideSession = async (
  context: /*  GetServerSidePropsContext  */ any
) => {
  return await getServerSession(context.req, context.res, authOptions);
};
