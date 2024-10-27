"use client";

import _styles from "./page.module.scss"; // Import the SCSS module for class
import { ThemeDropdown } from "../../components/ThemeSelector/ThemeDropdown";
import LoginForm from "@/components/LoginForm/LoginForm";
import { Column, Grid } from "@carbon/react";

export default function LoginPage() {
  return (
    <div className={_styles.wrapper}>
      <Grid>
        <Column sm={4} md={8} lg={8}>
          <ThemeDropdown></ThemeDropdown>
          <div>
            <LoginForm></LoginForm>
          </div>
        </Column>
      </Grid>
    </div>
  );
}
