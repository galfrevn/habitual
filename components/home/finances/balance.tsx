import axios from "axios";

import { Fragment } from "react";
import { Banknote } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import CountUp from "react-countup";

export const FinanceBalance = () => {
  /* const totalFinanceBalance = async () => await axios.get("/api/habits/list");
  const {
    data: totalBalance,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: totalFinanceBalance,
  }); */

  /* if (isLoading) return <HabitsSkeleton />;
  if (error) return <div>Error</div>; */

  return (
    <Fragment>
      <h2 className="text-lg font-medium mt-6">Total balance</h2>
      <div className="flex gap-2 items-center">
        <Banknote />
        <CountUp end={253213} start={0} duration={2} delay={0} separator="." prefix="$">
          {({ countUpRef }) => <span className="text-3xl font-semibold" ref={countUpRef} />}
        </CountUp>
      </div>

      <p className="text-sm leading-tight mt-4">
        Creating new habits can be challenging, but with our one-click habit creation button,
        it&apos;s now easier than ever to establish a new daily routine that can help you reach your
        goals.
      </p>
    </Fragment>
  );
};
