
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getProperties } from "../../../services";


export const PropertyPage = () => {

  const dispatch = useAppDispatch();
  const { propertiesLoading, properties, error } = useTypedSelector((state) => state.Property);

  useEffect(() => {
    dispatch(getProperties())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={properties?.rows || []} columns={columns} label="properties" />
      </div>
    </div>
  );
};
