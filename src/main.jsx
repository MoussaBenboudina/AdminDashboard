import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./Page/dashboard/Dashboard";
import Team from "./Page/team/Team";
import Contacts from "./Page/contacts/Contacts";
import Invoices from "./Page/invoices/Invoices";
import Form from "./Page/form/Form";
import Calendar from "./Page/calendar/Calendar";
import Faq from "./Page/faq/Faq";
import Geography from "./Page/geography/Geography";
import BarChart from "./Page/barChart/BarChart";
import PieChart from "./Page/pie/PieChart";
import LineChart from "./Page/line/LineChart";
import NotFound from "./Page/notFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />

      <Route path="geography" element={<Geography />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
