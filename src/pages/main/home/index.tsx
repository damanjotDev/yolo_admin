
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getHomes } from "../../../services";


export const HomePage = () => {

  const dispatch = useAppDispatch();
  const { homeDetailsLoading, homes, error } = useTypedSelector((state) => state.Home);

  useEffect(() => {
    dispatch(getHomes())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Homes</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={homes?.rows || []} columns={columns} label="homes" />
      </div>
    </div>
  );
};
