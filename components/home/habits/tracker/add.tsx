import { Fragment } from "react";
import { Outfit } from "@next/font/google";
import { Habit } from "@prisma/client";

import { motion } from "framer-motion";
import { SmilePlus } from "lucide-react";
import { useAddHabitTrack } from "hooks/habits/use-add-track";

import * as Dialog from "components/ui/dialog";
import * as Select from "components/ui/select";
import { Button } from "components/ui/button";
import { Textarea } from "components/ui/textarea";
import { Label } from "components/ui/label";

const outfit = Outfit({
  variable: "--display-font",
});

const HabitTrackerAdd = () => {
  const {
    habits,
    isLoading,
    returnHabitField,
    updateHabitField,
    createHabitCompletition,
    openModal,
    setOpenModal,
  } = useAddHabitTrack();

  if (isLoading) return <div className="w-full h-[159px] bg-neutral-500/20 rounded-lg mt-4 animate-pulse" />;

  return (
    <Dialog.Dialog open={openModal} onOpenChange={(value) => setOpenModal(value)}>
      <Dialog.DialogTrigger asChild>
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="mt-4 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-l from-amber-300 via-amber-400 to-yellow-400 p-6 no-underline outline-none transition-all duration-100"
        >
          <SmilePlus className="h-6 w-6 text-white" />
          <h2 className="mt-4 mb-2 text-lg font-medium text-white">Track a completition</h2>
          <p className="text-sm leading-tight text-white/90">
            Choose one of your habits and save a track of completition in our database
          </p>
        </motion.div>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className={`${outfit.variable} font-display sm:max-w-[425px]`}>
        <Dialog.DialogHeader>
          <Dialog.DialogTitle className="text-left">Add a completition</Dialog.DialogTitle>
          <Dialog.DialogDescription className="text-left">
            Add a completition into our database. This will help you to have a control over your
            habits, and generate graphs and charts in the future
          </Dialog.DialogDescription>
        </Dialog.DialogHeader>
        <Fragment>
          <Select.Select onValueChange={(value) => updateHabitField("habitId", value)}>
            <Select.SelectTrigger>
              <Select.SelectValue placeholder="Choose a habit" />
            </Select.SelectTrigger>
            <Select.SelectContent>
              {habits.map(({ id, title }: Habit) => (
                <Select.SelectItem
                  key={`habit-${id}`}
                  className={`${outfit.variable} text-left font-display sm:max-w-[425px]`}
                  value={id}
                >
                  {title}
                </Select.SelectItem>
              ))}
            </Select.SelectContent>
          </Select.Select>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Optional"
              value={returnHabitField("notes")}
              onChange={({ target }) => updateHabitField("notes", target.value)}
            />
            <p className="text-sm text-neutral-500">Want to add some details?</p>
          </div>
        </Fragment>
        <Dialog.DialogFooter>
          <Button
            type="submit"
            disabled={!returnHabitField("habitId")}
            onClick={createHabitCompletition}
          >
            Create
          </Button>
        </Dialog.DialogFooter>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};

export default HabitTrackerAdd;
