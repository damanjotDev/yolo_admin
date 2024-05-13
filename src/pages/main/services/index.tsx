
import { useEffect, useState } from "react";
import { columns } from "../services/data/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getServices } from "../../../services";


export const ServicePage = () => {

  const dispatch = useAppDispatch();
  const { serviceDetailsLoading, services, error } =
    useTypedSelector(
      (state) => state.Service
    );

    console.log('services', services);

  useEffect(() => {
    dispatch(getServices())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={services?.rows || []} columns={columns} label="services" />
      </div>
    </div>
  );
};
