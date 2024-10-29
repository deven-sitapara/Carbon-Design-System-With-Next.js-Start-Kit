"use client";
import LoginForm from "@/components/LoginForm/LoginForm";
import { Column, Grid } from "@carbon/react";
import _styles from "./page.module.scss"; // Import the SCSS module for class
export default function LoginPage() {
    return (<div className={_styles.wrapper}>
      <Grid>
        <Column sm={4} md={8} lg={8}>
          <LoginForm></LoginForm>
        </Column>
      </Grid>
    </div>);
}
