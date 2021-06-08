import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { TextField, Container, Button, Typography } from "@material-ui/core";

export default function Contact(props) {
  const [state, handleSubmit] = useForm("xbjqovab");
  if (state.succeeded) {
    return (
      <div className={props.classes.formContainer}>
        <Container maxWidth="sm">
          <Typography variant="h3" align="center" className={props.classes.thanks}>Thanks for the Message!</Typography>
        </Container>
      </div>
    );
  }

  return (
    <div id="contactForm" className={props.classes.formContainer}>
      <Container maxWidth="sm">
        <form noValidate onSubmit={handleSubmit} className={props.classes.form}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            id="email"
            type="email"
            name="email"
            className={props.classes.forms}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            variant="outlined"
            id="message"
            name="message"
            className={props.classes.forms}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            variant="contined"
            className={props.classes.buttons}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}
