import About from "@/app/about/page";

describe("about.cy.tsx", () => {
  it("should render and display the about page", () => {
    cy.mount(<About />);
    cy.get("h1").contains("About");
    cy.get('a[href="/"]').should("be.visible");
  });
});
