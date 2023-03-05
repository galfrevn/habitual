import { TodayCalendar } from "components/home/date";
import { FinanceAccount } from "components/home/finances/account";
import { FinanceBalance } from "components/home/finances/balance";

import { AccountsSingleContainer } from "components/home/finances/containers";
import { CreateAccount } from "components/home/finances/create";

import { getServerSideSession } from "lib/server/server-session";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function Finances(/* {
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps> */) {
  return (
    <div className="px-4 mt-4">
      <TodayCalendar name="Valentin Galfre" />
      <FinanceBalance />
      <AccountsSingleContainer>
        <CreateAccount />
        <FinanceAccount />
      </AccountsSingleContainer>
    </div>
  );
}

/* export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSideSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
 */
