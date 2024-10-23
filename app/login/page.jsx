"use client";

import {
  AspectRatio,
  Button,
  Column,
  FlexGrid,
  Form,
  Grid,
  Heading,
  Row,
  TextInput,
} from "@carbon/react";
import { useState } from "react";
import _styles from "./page.scss"; // Import the SCSS module for class

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(_styles.loginBg);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={_styles.wrapper}>
      <Grid>
        <Column sm={4} md={8} lg={8}>
          <div className={_styles.centerthis}>
            <Heading>Login</Heading>
            <TextInput
              className={_styles.label}
              id="username"
              labelText="Username"
              value=""
              required
            />
            <TextInput
              className={_styles.label}
              id="password"
              labelText="Password"
              type="password"
              value=""
              required
            />
            <Button type="submit" className="mt-4 w-full">
              Sign In
            </Button>
          </div>
        </Column>
      </Grid>
    </div>
  );
}
