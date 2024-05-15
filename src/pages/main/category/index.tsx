
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getCategories } from "../../../services";


export const CategoryPage = () => {

  const dispatch = useAppDispatch();
  const { categoriesLoading, categories, error } = useTypedSelector((state) => state.Category);

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={categories?.rows || []} columns={columns} label="categories" />
      </div>
    </div>
  );
};
