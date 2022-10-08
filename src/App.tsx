import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const Face = lazy(() => import("./pages/face"));
const Line = lazy(() => import("./pages/line"));
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/face/hot" />} />
          <Route
            path="/face/:category"
            element={
              <Suspense fallback={""}>
                <Face />
              </Suspense>
            }
          />
          <Route
            path="/line"
            element={
              <Suspense fallback={""}>
                <Line />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={""}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </StyledEngineProvider>
  );
}

export default App;
