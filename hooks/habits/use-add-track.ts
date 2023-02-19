import axios from "axios";
import moment from "moment";

import { useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "hooks/use-toast";

import { HabitCompletition } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";

interface AddHabitTrackProps extends Omit<HabitCompletition, "id"> {
  habitId: string;
}

const defaultHabitValues: AddHabitTrackProps = {
  date: new Date(),
  notes: "",
  habitId: "",
};

export const useAddHabitTrack = () => {
  const { toast } = useToast();
  const { back } = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const [habit, setHabit] = useState<AddHabitTrackProps>(defaultHabitValues);

  const addHabitCompletitionFn = async (data: AddHabitTrackProps) =>
    await axios.put("/api/habits/completition", data);

  const { mutate } = useMutation({
    mutationKey: ["habits", { ...habit }],
    mutationFn: async () => {
      const data = await addHabitCompletitionFn(habit);
      return data;
    },
    onSuccess({ data }) {
      toast({
        title: data.message,
        description: moment().format("dddd, MMMM YYYY at h:mm a"),
      });
      setOpenModal(false);
    },
  });

  const listUserHabitsFn = async () => await axios.get("/api/habits/list");
  const { data: habitsQuery, isLoading } = useQuery({
    queryKey: ["habits"],
    queryFn: listUserHabitsFn,
  });

  const updateHabitField = (key: keyof AddHabitTrackProps, value: unknown) =>
    setHabit({ ...habit, [key]: value });

  const returnHabitField = (key: keyof AddHabitTrackProps) => String(habit[key]);

  const createHabitCompletition = () => mutate();

  return {
    isLoading,
    openModal,
    setOpenModal,
    habits: habitsQuery?.data.data,
    updateHabitField,
    returnHabitField,
    createHabitCompletition,
  };
};
