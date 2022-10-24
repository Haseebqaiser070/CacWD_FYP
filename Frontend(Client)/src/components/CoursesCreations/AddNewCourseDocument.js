import React, { useState, useEffect } from "react";
import "../css/styles.css";

import axios from "axios";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { padding } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  FormControl,
  gridClasses,
  IconButton,
  InputLabel,
  Modal,
  Tooltip,
} from "@mui/material";
import { muiAbtn } from "../style";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

export default function AddNewCourseDocument() {
  axios.defaults.withCredentials = true;

  const { state } = useLocation();
  const { Code, Content } = state.row;
  const codes = Code.split("-");
  const [PreCode, setPreCode] = useState(codes[0]);
  const [SufCode, setSufCode] = useState(codes[1]);
  const [Name, setName] = useState(state.row.Name);
  const [allCredit, setAllCredit] = useState(
    state.row.Credit +
      "(" +
      state.row.LectureHoursWeek +
      "," +
      state.row.LabHoursWeek +
      ")"
  );
  const [Category, setCategory] = useState(Content.Category);
  const [PreRequisites, setPreRequisites] = useState(Content.PreRequisites);
  const [mainTopic, setmainTopic] = useState("");
  const [catalogue, setCatalogue] = useState(Content.catalogue);
  const [objective, setobjective] = useState("");
  const [objectiveList, setObjectiveList] = useState(Content.objectiveList);
  const [Courses, setCourse] = useState([]);
  const [BookName, setBookName] = useState("");
  const [BookYear, setBookYear] = useState("");
  const [BookWriter, setBookWriter] = useState("");
  const [Books, setBooks] = useState(Content.Books);
  const navigate = useNavigate();
  console.log(Courses);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const [openBook, setOpenBook] = useState(false);
  const handleOpenBook = () => setOpenBook(true);
  const handleCloseBook = () => {
    setOpenBook(false);
  };

  const recommended_books = [
    {
      field: "BookName",
      headerName: "Book Names",
      flex: 3,
    },
    {
      field: "BookWriter",
      headerName: "Writers Names",
      flex: 2,
    },
    {
      field: "BookYear",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 2,
      renderCell: (props) => (
        <>
          <Tooltip title="Edit" placement="top-start">
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                backgroundColor: "#4b2980",
                marginLeft: 10,
                padding: 10,
              }}
              onClick={handleOpenBook}
            >
              <AiFillEdit />
            </Button>
          </Tooltip>

          <Modal
            open={openBook}
            onClose={handleCloseBook}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                <CloseIcon
                  onClick={handleCloseBook}
                  style={{ cursor: "pointer", color: "gray" }}
                />
              </Box>
              <h4 className="mb-4">EDIT OBJECTIVE</h4>
              <form>
                <div>
                  <TextField
                    className="mb-3"
                    label="Book Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={BookName}
                    onChange={(e) => setBookName(e.target.value)}
                  ></TextField>
                </div>
                <div>
                  <TextField
                    className="mb-3"
                    label="Author"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={BookWriter}
                    onChange={(e) => setBookWriter(e.target.value)}
                  ></TextField>
                </div>
                <div>
                  <TextField
                    className="mb-3"
                    label="Year"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={BookYear}
                    onChange={(e) => setBookYear(e.target.value)}
                  ></TextField>
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    className="mt-4"
                    // onClick={handleBook}
                    style={{ backgroundColor: "#4b2980" }}
                  >
                    EDIT BOOKS
                  </Button>
                </div>
              </form>
            </Box>
          </Modal>

          <Tooltip title="Delete" placement="top-start">
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                backgroundColor: "#4b2980",
                marginLeft: 16,
                padding: 10,
              }}
              onClick={() => {
                var data = Books.filter((obj) => obj.id !== props.row.id);
                setBooks(data);
              }}
            >
              <AiFillDelete />
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];
  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 5,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,

      renderCell: (props) => (
        <>
          <Tooltip title="Edit" placement="top-start">
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                backgroundColor: "#4b2980",
                marginLeft: 10,
                padding: 10,
              }}
              onClick={handleOpen}
            >
              <AiFillEdit />
            </Button>
          </Tooltip>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                <CloseIcon
                  onClick={handleClose}
                  style={{ cursor: "pointer", color: "gray" }}
                />
              </Box>
              <h4 className="mb-4">EDIT OBJECTIVE</h4>
              <form>
                <div>
                  <TextField
                    multiline
                    rows={2}
                    style={{ backgroundColor: "#fff" }}
                    label="Set Objective"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={objective}
                    onChange={(e) => setobjective(e.target.value)}
                  ></TextField>
                </div>
                <div>
                  <Button
                    variant="contained"
                    type="submit"
                    className="mt-4"
                    // onClick={handleObjective}
                    style={{ backgroundColor: "#4b2980" }}
                  >
                    Edit
                  </Button>
                </div>
              </form>
            </Box>
          </Modal>

          <Tooltip title="Delete" placement="top-start">
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                backgroundColor: "#4b2980",
                marginLeft: 16,
                padding: 10,
              }}
              onClick={() => {
                var data = objectiveList.filter(
                  (obj) => obj.id !== props.row.id
                );
                setObjectiveList(data);
              }}
            >
              <AiFillDelete />
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];

  const handleAdd = (e) => {
    e.preventDefault();
    let clone = catalogue.slice(0, -2);
    if (catalogue != "") {
      clone = clone + ";";
    }
    setCatalogue(`${clone} ${mainTopic}. `);
    setmainTopic("");
  };
  const handleObjective = (e) => {
    e.preventDefault();
    setObjectiveList([...objectiveList, { id: uuidv4(), title: objective }]);
    setobjective("");
  };
  const handleBook = (e) => {
    e.preventDefault();
    setBooks([...Books, { id: uuidv4(), BookName, BookWriter, BookYear }]);
    setBookName("");
    setBookYear("");
    setBookWriter("");
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    let num2 = Code.split("-")[1].charAt(0);
    let numcode = parseInt(num2);
    const corsss = data.filter((x) => {
      let num = x.Code.split("-")[1].charAt(0);
      let num1 = parseInt(num);
      if (num1 < numcode) return x;
    });
    setCourse([...corsss]);
  };
  const AddCourse = async (e) => {
    e.preventDefault();
    const Code = PreCode + "-" + SufCode;
    const LectureHoursWeek = allCredit.slice(2, 3);
    const LabHoursWeek = allCredit.slice(4, 5);
    const Credit = allCredit.slice(0, 1);
    console.log(Code, LectureHoursWeek, LabHoursWeek, Credit, objectiveList);
    console.log("cat: ", Category);
    console.log("catlog: ", catalogue);
    console.log("pre: ", PreRequisites);
    if (
      PreCode != "" &&
      SufCode != "" &&
      Name != "" &&
      allCredit != "" &&
      catalogue != "" &&
      objectiveList != []
    ) {
      await axios.post("http://localhost:4000/CourseVersion/add", {
        Code,
        Name,
        Credit,
        LectureHoursWeek,
        LabHoursWeek,
        catalogue,
        objectiveList,
        Books,
      });
      setSufCode("");
      setName("");
      setObjectiveList([]);
      setBooks([]);
      navigate(
        `/CAC/CourseCreation/${Code}`,
        { state: { row: { Code: state.row.Code, Name: state.row.Name } } },
        { replace: true }
      );
      getData();
    } else {
      alert("empty values");
    }
  };
  console.log("allcredit", allCredit);
  return (
    <div style={{ padding: 30 }}>
      <h1 className=" my-4 pb-4 ">
        <b>ADD/EDIT COURSE CATALOGUE DESCRIPTION</b>
      </h1>

      <form onSubmit={AddCourse}>
        <div className="mb-3">
          <h2 style={{ textAlign: "left" }} className="my-4 pt-4">
            COURSE INFORMATION
          </h2>
          <div className="row">
            <div className="col-3">
              <TextField
                fullWidth
                size="small"
                disabled
                type="text"
                id="course-code"
                label="Code Prefix"
                value={PreCode}
              />
            </div>
            <div className="col-3">
              <TextField
                fullWidth
                disabled
                label="Code "
                size="small"
                type="text"
                id="course-code"
                value={SufCode}
              />
            </div>

            <div className="col-6">
              <TextField
                fullWidth
                size="small"
                disabled
                type="text"
                id="course-code"
                label="Credit Hours"
                value={allCredit}
              />
            </div>
          </div>
        </div>

        <div>
          <TextField
            fullWidth
            className="mt-3"
            disabled
            label="Course Name "
            size="small"
            type="text"
            id="course-name"
            value={Name}
          />
        </div>

        <div style={{ marginBottom: 20, marginTop: 50 }}>
          <h2 style={{ textAlign: "left" }} className="my-4 pt-4">
            CATALOGUE DESCRIPTION
          </h2>
          <form>
            <Card
              style={{
                padding: 20,
                backgroundColor: "#e8f0f7",
              }}
              className="row"
            >
              <div className="col-9">
                <TextField
                  style={{ backgroundColor: "#fff" }}
                  label="Set Main Topic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={mainTopic}
                  onChange={(e) => setmainTopic(e.target.value)}
                ></TextField>
              </div>
              <div className="col-3 d-grid gap-2">
                <Button
                  variant="contained"
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleAdd}
                  style={{ backgroundColor: "#4b2980" }}
                >
                  ADD Main Topic
                </Button>
              </div>
            </Card>
          </form>
          <div className="mt-4">
            <FormControl fullWidth size="medium">
              <TextField
                style={{ backgroundColor: "#fff" }}
                multiline={true}
                rows={2}
                id="outlined-basic"
                label="SO Description"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCatalogue(e.target.value)}
                value={catalogue}
              />
            </FormControl>
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 20, marginTop: 50 }}>
            <h2 style={{ textAlign: "left" }} className="my-4 pt-4">
              OBJECTIVES
            </h2>
            <form>
              <Card
                style={{ backgroundColor: "#e8f0f7", padding: 20 }}
                className="row"
              >
                <div className="col-9">
                  <TextField
                    style={{ backgroundColor: "#fff" }}
                    label="Set Objective"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={objective}
                    onChange={(e) => setobjective(e.target.value)}
                  ></TextField>
                </div>
                <div className="col-3 d-grid gap-2">
                  <Button
                    variant="contained"
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleObjective}
                    style={{ backgroundColor: "#4b2980" }}
                  >
                    ADD
                  </Button>
                </div>
              </Card>
            </form>
          </div>

          <div style={{ height: 300, width: "100%" }}>
            <DataGrid
              rows={objectiveList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 20, marginTop: 50 }}>
            <h2 style={{ textAlign: "left" }} className="my-4 pt-4">
              RECOMMENDED BOOKS
            </h2>
            <form>
              <div
                style={{ backgroundColor: "#e8f0f7", padding: 20 }}
                className="row"
              >
                <div className="col">
                  <TextField
                    style={{ backgroundColor: "#fff" }}
                    label="Book Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={BookName}
                    onChange={(e) => setBookName(e.target.value)}
                  ></TextField>
                </div>
                <div className="col">
                  <TextField
                    style={{ backgroundColor: "#fff" }}
                    label="Author"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={BookWriter}
                    onChange={(e) => setBookWriter(e.target.value)}
                  ></TextField>
                </div>
                <div className="col">
                  <TextField
                    style={{ backgroundColor: "#fff" }}
                    label="Year"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={BookYear}
                    onChange={(e) => setBookYear(e.target.value)}
                  ></TextField>
                </div>
                <div className="col-3 d-grid gap-2">
                  <Button
                    type="submit"
                    variant="contained"
                    className="btn btn-primary btn-block"
                    onClick={handleBook}
                    style={{ backgroundColor: "#4b2980" }}
                  >
                    ADD
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid
              rows={Books}
              columns={recommended_books}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        </div>

        <Button
          fullWidth
          variant="contained"
          className="btn btn-primary btn-block"
          type="submit"
          name="submit"
          value="Submit"
          style={{ marginTop: 50, backgroundColor: "#4b2980" }}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
