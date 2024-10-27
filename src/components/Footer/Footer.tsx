import React from "react";
import { Grid, Row, Column, Link } from "@carbon/react"; // Import Carbon components
import "./Footer.scss"; // Add necessary styles for shadow, etc.

const Footer = () => {
  return (
    <footer className="footer">
      <Grid>
        {/* Row for Desktop */}
        <Row className="footer-row">
          {/* IBM Logos (visible on md and above) */}
          <Column
            lg={2}
            md={2}
            sm={0}
            className="logo-column ds-display-md-inline ds-hide-xs"
          >
            <img
              src="https://w3id-ns.sso.ibm.com/static/img/ibm.svg"
              alt="IBM Logo"
            />
            <img
              src="https://w3id-ns.sso.ibm.com/static/img/c.svg"
              alt="IBM Logo"
            />
          </Column>

          {/* FAQ Link */}
          <Column
            lg={{ offset: 7 }}
            md={{ offset: 4 }}
            xs={12}
            className="footer-link"
          >
            <Link href="https://ibm.biz/w3id-faq" target="_blank">
              FAQ
            </Link>
          </Column>

          {/* Status Link */}
          <Column lg={1} md={1} xs={12} className="footer-link">
            <Link href="https://ibm.biz/w3id-status" target="_blank">
              Status
            </Link>
          </Column>

          {/* Forum Link */}
          <Column lg={1} md={2} xs={12} className="footer-link">
            <Link href="https://ibm.biz/w3id-forum" target="_blank">
              Visit Forums
            </Link>
          </Column>
        </Row>

        {/* Row for Mobile (visible on xs only) */}
        <Row className="footer-row-mobile ds-display-xs-inline ds-hide-md">
          <Column xs={12}>
            <img
              src="https://w3id-ns.sso.ibm.com/static/img/ibm.svg"
              alt="IBM Logo"
            />
            <img
              src="https://w3id-ns.sso.ibm.com/static/img/c.svg"
              alt="IBM Logo"
            />
          </Column>
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;
