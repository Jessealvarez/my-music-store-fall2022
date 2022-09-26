import React from "react";
import { useState } from "react";
import Layout from "../layout/Layout";
import { TextField, Box, Button, Typography } from "@mui/material";

const SignInPage = ({ user, signIn, signOut }) => {
  const [signInStuff, setSignInStuff] = useState({
    email: "",
    password: "",
  });
  console.log(signInStuff);

  //   const onSubmit = () => {};

  if (user) {
    return (
      <Layout user={user}>
        <Box>
          <Typography>Hi!</Typography>
        </Box>
        <Box>
          <Button variant="contained" type="submit" onClick={() => signOut()}>
            Sign Out
          </Button>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box>
        <TextField
          placeholder="email"
          value={signInStuff.email}
          onChange={(event) => {
            const { value } = event.target;
            setSignInStuff({ ...signInStuff, email: event.target.value });
          }}
        ></TextField>
      </Box>
      <Box>
        <TextField
          placeholder="password"
          type="password"
          value={signInStuff.password}
          onChange={(event) => {
            const { value } = event.target;
            setSignInStuff({ ...signInStuff, password: event.target.value });
          }}
        ></TextField>
      </Box>
      <Box>
        <Button
          variant="contained"
          type="submit"
          onClick={() => signIn(signInStuff)}
        >
          Submit
        </Button>
      </Box>
    </Layout>
  );
};

export default SignInPage;
