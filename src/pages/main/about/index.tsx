
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getAbouts } from "../../../services";


export const AboutPage = () => {

  const dispatch = useAppDispatch();
  const { aboutsLoading, abouts, error } = useTypedSelector((state) => state.About);

  useEffect(() => {
    dispatch(getAbouts())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Abouts</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={abouts?.rows || []} columns={columns} label="abouts" />
      </div>
    </div>
  );
};
