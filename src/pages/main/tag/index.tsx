
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getTags} from "../../../services";


export const TagPage = () => {

  const dispatch = useAppDispatch();
  const { tagsLoading, tags, error } = useTypedSelector((state) => state.Tag);

  useEffect(() => {
    dispatch(getTags())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tags</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={tags?.rows || []} columns={columns} label="tags" />
      </div>
    </div>
  );
};
