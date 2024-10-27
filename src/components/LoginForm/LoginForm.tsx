"use client";

import {
  Button,
  Form,
  FormGroup,
  Heading,
  Stack,
  TextInput,
} from "@carbon/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  // console.log(_styles.loginBg);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // redirect to /dashboard
    console.log("redirecting to /");

    router.push("/dashboard");
    // revalidatePath("/"); // Update cached posts
    // redirect(`/`); // Navigate to the new post page
    // revalidatePath("/", "layout");

    // Handle login logic here
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup style={{ maxWidth: "400px" }} legendText="">
          <Stack gap={7}>
            {/* Heading */}
            <Heading color="{$text-primary-gray-10}">Login</Heading>

            {/* Username  */}
            <TextInput
              className=""
              id="username"
              labelText="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              helperText="Enter your username provided by system admin"
            />

            {/* Password  */}
            <TextInput
              className=""
              id="password"
              labelText="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText="Enter your password provided by system admin"
              required
            />

            {/* Submit button  */}
            <Button type="submit" className="mt-4 w-full">
              Sign In
            </Button>
          </Stack>
        </FormGroup>
      </Form>
    </>
  );
}
