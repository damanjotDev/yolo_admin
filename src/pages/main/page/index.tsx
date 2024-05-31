
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getPages } from "../../../services";


export const PagePage = () => {

  const dispatch = useAppDispatch();
  const { pagesLoading, pages, error } = useTypedSelector((state) => state.Page);

  useEffect(() => {
    dispatch(getPages())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Pages</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={pages?.rows || []} columns={columns} label="pages" />
      </div>
    </div>
  );
};
