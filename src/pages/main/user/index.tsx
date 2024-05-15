
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getUsers } from "../../../services";


export const UserPage = () => {

  const dispatch = useAppDispatch();
  const { usersLoading, users, error } = useTypedSelector((state) => state.User);

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={users?.rows || []} columns={columns} label="users" />
      </div>
    </div>
  );
};
