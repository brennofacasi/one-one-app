"use client";

import { States } from "@/components/States";
import Select from "@/components/forms/Select";
import { useFetch } from "@/hooks/useFetch";
import { UseFormRegister } from "react-hook-form";

export function MenteesSelect({
  register,
}: {
  register: UseFormRegister<any>;
}) {
  const { data, error, isLoading } = useFetch("mentee");

  if (isLoading) return <States.Loading />;
  if (error) return <States.NotOk />;

  const options = data.map((option: any) => ({
    label: option.first_name + " " + option.last_name + " | " + option.company,
    value: option.id,
  }));

  return (
    <Select
      label='Mentorando'
      register={register}
      field='mentee_id'
      options={options}
    />
  );
}
