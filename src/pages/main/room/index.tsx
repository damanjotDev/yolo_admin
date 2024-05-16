
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getRooms } from "../../../services";


export const RoomPage = () => {

  const dispatch = useAppDispatch();
  const { roomDetailsLoading, rooms, error } = useTypedSelector((state) => state.Room);

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Rooms</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={rooms?.rows || []} columns={columns} label="rooms" />
      </div>
    </div>
  );
};
