"use client";

import _styles from "./page.scss"; // Import the SCSS module for class
import { Column, Content, Grid, Heading } from "@carbon/react";

export default function LoginPage() {
  return (
    <>
      <Content about="Main Content">
        <div className="spacing-scale">
          <section className="mb-06">
            <Heading>File</Heading>
          </section>
        </div>
      </Content>
    </>
  );
}
