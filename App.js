import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Container>
      <h1>Adicionar Dados Pessoais</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="firstName"
              label="Nome"
              variant="filled"
              value={inputField.firstName}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="lastName"
              label="Sobrenome"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              email="email"
              label="Email"
              variant="filled"
              value={inputField.yourEmail}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <IconButton onClick={() => handleRemoveFields(index)}>
              <RemoveIcon color="secondary" />
            </IconButton>
            <IconButton onClick={() => handleAddFields()}>
              <AddIcon color="primary" />
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </form>
    </Container>
  );
}

export default App;
