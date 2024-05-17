import TextField from "@mui/material/TextField";

type Props = {
  name: string;
  type: string;
  label: string;
};

function CustomizedInput(props: Props) {
  //
  return (
    <div>
      <TextField
        margin="normal"
        InputLabelProps={{ style: { color: "white" } }}
        name={props.name}
        type={props.type}
        label={props.label}
        InputProps={{
          style: {
            width: "400px",
            borderRadius: 10,
            fontSize: 20,
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default CustomizedInput;
