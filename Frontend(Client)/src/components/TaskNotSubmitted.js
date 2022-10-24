import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { DataGrid } from "@mui/x-data-grid";

export default function TaskNotSubmitted() {
  const [Rows, setRows] = useState({});

  const columns = [
    {
      field: "TaskTilte",
      headerName: "Task Title",
      flex: 1,
    },

    {
      field: "Program",
      headerName: "Program",
      flex: 1,
    },
    {
      field: "CacMember",
      headerName: "CAC Member",
      flex: 1,
    },

    {
      field: "CurrentDeadline",
      headerName: "Current Deadline",
      flex: 1,
    },
  ];

  return (
    <div style={{ width: "100%", padding: 20 }}>
      <h1 className="mb-4 py-4">
        <b>Task Extenstion Request</b>
      </h1>
      <DataGrid
        style={{ height: 400, width: "100%" }}
        columns={columns}
        getRowId={(Rows) => Rows.id}
        rows={Rows}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}
