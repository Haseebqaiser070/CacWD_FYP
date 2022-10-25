import Evaluatornav from "../Evaluator/Evaluatornav";
import EvaluatorDashboard from "../Evaluator/EvaluatorDashboard";

import { Route, Routes } from "react-router-dom";

import FolderEvaluation from "../Evaluator/FolderEvaluation";
import Sos from "../PdfTemplates/Sos";
import FolderTemplete from "../Evaluator/FolderTemplete";
import EvaluatedFolders from "../Evaluator/EvaluatedFolders";
import Returned from "../ReturnedPage";
import FolderTempleteEdit from "../Evaluator/FolderTempleteEdit";
import EvaluatorFolderInRevision from "../Evaluator/EvaluatorFolderInRevision";
function EvaluatorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Evaluatornav />}>
        <Route path="/Dashboard" element={<EvaluatorDashboard />} />
        <Route path="/EvaluatedFolders" element={<EvaluatedFolders />} />
        <Route path="/Returned" element={<Returned />} />
        <Route
          path="/FoldersInRevision"
          element={<EvaluatorFolderInRevision />}
        />

        <Route path="/Edit" element={<FolderTempleteEdit />} />

        <Route path="/FolderTemplete/:id" element={<FolderTemplete />} />
        <Route path="/sos" element={<Sos />} />
      </Route>
    </Routes>
  );
}

export default EvaluatorRoutes;
