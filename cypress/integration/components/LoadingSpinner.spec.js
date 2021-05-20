/* eslint-disable prettier/prettier */
import React from "react";
import { mount } from "@cypress/react";
import { LoadingSpinner } from "../../../src/components/LoadingSpinner";

describe("LoadingSpinner", () => {
    before(() => {
       
    });
    it("renders", () => {
        mount(<LoadingSpinner classes={{}} />);
        cy.contains('initial').should('be.visible')
    });
});
