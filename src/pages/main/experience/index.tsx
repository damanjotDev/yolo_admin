
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getExperiences } from "../../../services";


export const ExperiencePage = () => {

  const dispatch = useAppDispatch();
  const { experiencesLoading, experiences, error } = useTypedSelector((state) => state.Experience);

  useEffect(() => {
    dispatch(getExperiences())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Experiences</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={experiences?.rows || []} columns={columns} label="experiences" />
      </div>
    </div>
  );
};
