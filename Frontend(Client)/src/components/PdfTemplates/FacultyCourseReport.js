import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TableRow,
} from "@mui/material";
import Button from "@mui/material/Button";
import { AiFillPrinter } from "react-icons/ai";

import React, { useEffect, useState, useRef } from "react";
import "./pdfstyles.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Box } from "@mui/system";

export default function FacultyCourseReport() {
  const { state } = useLocation();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div style={{ padding: 30 }}>
        <div className="d-flex justify-content-end">
          <div className="row ">
            <div className="col">
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="taskType">Filter By Program</InputLabel>
                  <Select
                    // value={Degree}
                    label="Generate Report"
                    // onChange={(e) => setDegree(e.target.value)}
                  >
                    <MenuItem value={"Computer Science"}>
                      Computer Science
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="col">
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="taskType">Filter By Faculty</InputLabel>
                  <Select
                    // value={Degree}
                    label="Generate Report"
                    // onChange={(e) => setDegree(e.target.value)}
                  >
                    <MenuItem value={"Tanveer Ahmed"}>Tanveer Ahmed</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="col">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={handlePrint}
              >
                <AiFillPrinter style={{ marginRight: 10 }} />
                Print
              </Button>
            </div>
          </div>
        </div>
        <div ref={componentRef} className="main">
          <div
            className="d-flex row justify-content-center mb-4"
            style={{ margin: 30 }}
          >
            <div className="col-12">
              <h1>COMSATS University Islamabad</h1>
              <h1>Department of Computer Science</h1>
              <h2>All Programs (Degree Level)</h2>
            </div>
          </div>
          <div>
            <table className="table table-bordered">
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th className="col-1">S. No</th>
                  <th className="col-4">Faculty Name</th>
                  <th className="col-3">Program</th>
                  <th className="col-3">Course Title</th>
                  <th className="col-1">Section</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td className="col-1">1.</td>
                  <td className="col-4">Tanveer Ahmed</td>
                  <td className="col-3">Computer Science</td>
                  <td className="col-3">Numerical Computing</td>
                  <td className="col-1">A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
