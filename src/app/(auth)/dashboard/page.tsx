"use client";

import { ClickableTile, Column, Content, Grid, Heading } from "@carbon/react";
import { ThemeDropdown } from "../../../components/ThemeSelector/ThemeDropdown";

export default function DashboardPage() {
  return (
    <>
      <Content about="Main Content">
        <div className="spacing-scale">
          <section className="mb-06">
            <Heading>Dashboard</Heading>
          </section>
        </div>
        <Grid fullWidth={true} className="">
          <Column sm={2} md={2}>
            <ClickableTile href="#">RAJKOT : 51</ClickableTile>
          </Column>
          <Column sm={2} md={2}>
            <ClickableTile href="#">JAMNAGAR : 9</ClickableTile>
          </Column>
          <Column sm={2} md={2}>
            <ClickableTile href="#">JUNAGADH : 9</ClickableTile>
          </Column>
          <Column sm={2} md={2}>
            <ClickableTile href="#">MORBI : 10</ClickableTile>
          </Column>
          <Column sm={2} md={2}>
            <ClickableTile href="#">AHMEDABAD : 0</ClickableTile>
          </Column>
          <Column sm={2} md={2}>
            <ClickableTile href="#">BHAVNAGAR : 1</ClickableTile>
          </Column>
        </Grid>
      </Content>
    </>
  );
}
