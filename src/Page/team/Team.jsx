import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
// import { FormatAlignJustify } from "@mui/icons-material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";
export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      //   align: "center",
      //   headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Nmae",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      width: "20px",

      background: "blue",
      headerAlign: "center",

      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              align: "center",
              p: "5px",
              borderRadius: "4px",
              backgroundColor:
                access == "Admin"
                  ? theme.palette.primary.dark
                  : access == "User"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              textAlign: "center",
              maxWidth: "120px",
              mt: "9px",
              mx: "auto",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                align: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                color: "#fff",
              }}
            >
              {access == "Admin" ? (
                <AdminPanelSettingsOutlined />
              ) : access == "User" ? (
                <LockOpenOutlined />
              ) : (
                <SecurityOutlined />
              )}

              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div>
      <div style={{ height: 600, width: "98%", margin: "auto" }}>
        <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    </div>
  );
}
