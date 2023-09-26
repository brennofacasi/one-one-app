"use client";

import { States } from "@/components/States";
import Select from "@/components/forms/Select";
import { useFetch } from "@/hooks/useFetch";
import { UseFormRegister } from "react-hook-form";

export function MentorsSelect({
  register,
}: {
  register: UseFormRegister<any>;
}) {
  const { data, error, isLoading } = useFetch("mentor");

  if (isLoading) return <States.Loading />;
  if (error) return <States.NotOk />;

  const options = data.mentors.map((option: any) => ({
    label: option.first_name + " " + option.last_name,
    value: option.id,
  }));

  return (
    <Select
      label='Mentor'
      register={register}
      field='mentor_id'
      options={options}
    />
  );
}
