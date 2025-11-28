import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Props from "./pages/Props";
import ConditionalRendering from "./pages/ConditionalRendering";
import EventHandling from "./pages/EventHandling";
import State from "./pages/State";
import StateObjectsArrays from "./pages/StateObjectsArrays";
import UseContext from "./pages/UseContext";
import UseRef from "./pages/UseRef";
import UseEffect from "./pages/UseEffect";
import CustomHooks from "./pages/CustomHooks";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import ReactMemo from "./pages/ReactMemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="props" replace />} />
        <Route path="props" element={<Props />} />
        <Route path="conditional-rendering" element={<ConditionalRendering />} />
        <Route path="event-handling" element={<EventHandling />} />
        <Route path="state" element={<State />} />
        <Route path="state-objects-arrays" element={<StateObjectsArrays />} />
        <Route path="useContext" element={<UseContext />} />
        <Route path="useRef" element={<UseRef />} />
        <Route path="useEffect" element={<UseEffect />} />
        <Route path="custom-hooks" element={<CustomHooks />} />
        <Route path="useMemo" element={<UseMemo />} />
        <Route path="useCallback" element={<UseCallback />} />
        <Route path="react-memo" element={<ReactMemo />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
