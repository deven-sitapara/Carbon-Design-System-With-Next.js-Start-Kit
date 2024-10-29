"use client";
import { ClickableTile, Column, Content, Grid, Heading } from "@carbon/react";
export default function DashboardPage() {
    return (<>
      <Content about="Main Content">
        <Grid condensed fullWidth={true}>
          <Column span={16} ms={16}>
            <section className="mb-06">
              <Heading>Dashboard</Heading>
            </section>
          </Column>
        </Grid>
        <Grid fullWidth={true} className="">
          <Column sm={{ span: 8 }} md={2}>
            <ClickableTile href="#">RAJKOT : 51</ClickableTile>
          </Column>
          <Column sm={{ span: 8 }} md={2}>
            <ClickableTile href="#">JAMNAGAR : 9</ClickableTile>
          </Column>
          <Column sm={1} md={2}>
            <ClickableTile href="#">JUNAGADH : 9</ClickableTile>
          </Column>
          <Column sm={1} md={2}>
            <ClickableTile href="#">MORBI : 10</ClickableTile>
          </Column>
          <Column sm={1} md={2}>
            <ClickableTile href="#">AHMEDABAD : 0</ClickableTile>
          </Column>
          <Column sm={1} md={2}>
            <ClickableTile href="#">BHAVNAGAR : 1</ClickableTile>
          </Column>
        </Grid>
      </Content>
    </>);
}
