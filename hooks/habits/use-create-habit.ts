import axios from 'axios';

import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { Habit } from '@prisma/client';

const defaultHabitValues: Habit = {
  id: '',
  userId: '',
  title: '',
  description: '',
  hour: '',
  icon: '',
  color: '#FFFFFF',
  started: new Date(),
};

export const useCreateHabit = () => {
  const [habit, setHabit] = useState<Habit>(defaultHabitValues);

  const createHabitFn = async (data: Habit) =>
    await axios.post('/api/habits/new', data);

  const { mutate, data, isLoading, error } = useMutation({
    mutationKey: ['habit', { ...habit }],
    mutationFn: async () => {
      const data = await createHabitFn(habit);
      return data;
    },
  });

  const updateHabitField = (key: keyof Habit, value: unknown) =>
    setHabit({ ...habit, [key]: value });

  const returnHabitField = (key: keyof Habit) => String(habit[key]);

  const createHabit = () => mutate();

  return {
    data,
    error,
    mutate,
    isLoading,
    createHabit,
    updateHabitField,
    returnHabitField,
  };
};
