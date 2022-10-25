import React, { useState, useEffect } from "react";
import "../css/styles.css";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { muiAbtn } from "../style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Tooltip } from "@mui/material";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
const columns = [
  {
    field: "Program",
    headerName: "Program",
    flex: 1,
  },
  {
    field: "Course",
    headerName: "Course",
    flex: 1,
  },
  {
    field: "Faculty",
    headerName: "Faculty",
    flex: 1,
  },

  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    editable: false,
    renderCell: HandleButton,
  },
];

function HandleButton(row) {
  const navigate = useNavigate();

  return (
    <>
      <Tooltip title="View Revision" placement="top-start">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{
            backgroundColor: "#4b2980",
            marginLeft: 10,
            padding: 10,
          }}
          // onClick={handleOpenClo}
        >
          <AiFillEye />
        </Button>
      </Tooltip>
    </>
  );
}
export default function EvaluatorFolderInRevision() {
  const [Rows, setRows] = useState([]);
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        padding: 40,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 30, borderRadius: 10 }}>
        <h1>
          <b>FOLDER IN REVISION</b>
        </h1>
        <div>
          <DataGrid
            style={{ height: 400, width: "100%" }}
            columns={columns}
            getRowId={(Rows) => Rows._id}
            rows={Rows}
            pageSize={10}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </Card>
    </div>
  );
}
