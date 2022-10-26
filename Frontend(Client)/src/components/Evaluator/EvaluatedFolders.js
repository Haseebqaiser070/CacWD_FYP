import React, { useState, useEffect } from "react";
import "../css/styles.css";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { muiAbtn } from "../style";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "@mui/material";
import CustomNoRowsOverlay from "../AuxillaryComponents/CustomNoRowsOverlay";
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
  const senddata = (roww) => {
    console.log("helllo", roww);
    navigate("/Evaluator/Returned", { state: roww.row });
  };
  const senddata1 = (roww) => {
    console.log("helllo", roww);
    //navigate('/Evaluator/Edit',{state:roww.row})
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={muiAbtn}
        onClick={() => {
          senddata(row);
          //navigate('/Faculty/Returned',{state:{row:row}})
        }}
      >
        View
      </Button>
    </>
  );
}
export default function AllCourseFolder() {
  const [Rows, setRows] = useState([]);
  const [Posts, setPosts] = useState([]);
  const userid = JSON.parse(localStorage.getItem("user"));
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/EvalFolders/showfolder`);
    setPosts(res.data);
    var row = [];
    var index = 0;
    res.data.map((val, id) => {
      if (val.Evaluator?._id == userid) {
        row[id] = {
          _id: val._id,
          id: id,
          Program: val.Program,
          Course: val.Course.Name + "-" + val.Course.Code,
          Evaluator: val.Evaluator?.Name,
          Faculty: val.User.Name,
          data: val,
        };
      }
    });
    console.log("uajh", row);
    setRows(row);
  };

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
          <b>EVALUATED FOLDERS</b>
        </h1>
        <div>
          <DataGrid
            components={{
              NoRowsOverlay: CustomNoRowsOverlay,
              LoadingOverlay: LinearProgress,
            }}
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
