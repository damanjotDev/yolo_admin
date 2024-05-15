
import { useEffect, useState } from "react";
import { columns } from "./table-columns/columns";
import { DataTable } from "../../../components/tabel/data-table";

import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { getEvents } from "../../../services";


export const EventPage = () => {

  const dispatch = useAppDispatch();
  const { eventDetailsLoading, events, error } = useTypedSelector((state) => state.Event);

  useEffect(() => {
    dispatch(getEvents())
  }, [])

  return (
    <div className="flex-col md:flex p-8 pt-6 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
      </div>

      <div className="space-y-4">
        <DataTable data={events?.rows || []} columns={columns} label="events" />
      </div>
    </div>
  );
};
