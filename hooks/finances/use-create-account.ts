import axios from 'axios';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useToast } from 'hooks/use-toast';

import { Habit } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';

const defaultHabitValues: Omit<Habit, 'userId' | 'id'> = {
  title: '',
  description: '',
  hour: '',
  icon: '',
  color: '#FFFFFF',
  started: new Date(),
};

export const useCreateAccount = () => {
  const { toast } = useToast();
  const { back } = useRouter();

  const [habit, setHabit] =
    useState<Omit<Habit, 'userId' | 'id'>>(defaultHabitValues);

  const createHabitFn = async (data: Omit<Habit, 'userId' | 'id'>) =>
    await axios.post('/api/habits/new', data);

  const { mutate, data, isLoading, error } = useMutation({
    mutationKey: ['habit', { ...habit }],
    mutationFn: async () => {
      const data = await createHabitFn(habit);
      return data;
    },
    onSuccess({ data }) {
      toast({
        title: data.message,
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
      back();
    },
  });

  const updateHabitField = (
    key: keyof Omit<Habit, 'userId' | 'id'>,
    value: unknown
  ) => setHabit({ ...habit, [key]: value });

  const returnHabitField = (key: keyof Omit<Habit, 'userId' | 'id'>) =>
    String(habit[key]);

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
