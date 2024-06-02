import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Header from "../../components/Header";
export default function Form() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const {
    // eslint-disable-next-line no-unused-vars
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const currencies = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "manger",
      label: "Manger",
    },
    {
      value: "user",
      label: "User",
    },
  ];
  return (
    <div>
      <Header title={" CREATE USER"} subTitle={"Create a New User Profile"} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          width: " 100% ",
          // background: "blue",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: "10px" }}>
          {" "}
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              errors.firstName
                ? "This field is required.  & min chracter 3"
                : ""
            }
            {...register("firstName", { required: true, minLength: 3 })}
            id="filled-basic"
            label="First Name"
            variant="filled"
            sx={{ flex: 1 }}
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              errors.lastName ? "This field is required. & min chracter 3 " : ""
            }
            {...register("lastName", { required: true, minLength: 3 })}
            id="filled-basic"
            label="Last Name"
            variant="filled"
            sx={{ flex: 1 }}
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            errors.email ? "This field is required. & min chracter 3 " : ""
          }
          {...register("email", {
            required: true,
            minLength: 3,
            pattern: emailRegex,
          })}
          label="Email"
          variant="filled"
        />

        <TextField label="Contact number" variant="filled" />
        <TextField label="Adress 1" variant="filled" />
        <TextField label="Adress 2" variant="filled" />
        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create new User
          </Button>
        </Box>
      </Box>
    </div>
  );
}
