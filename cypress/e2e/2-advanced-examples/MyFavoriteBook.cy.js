const bookOne = {
    title: "Мертвые души",
    description: "Приключение ",
    author: "Николай Гоголь",
  };
  const bookTwo = {
    title: "Роковой подарок",
    description: "Детектив",
    author: "Татьяна Устинова",
  };
  const bookThree = {
    title: "Лето волонтера",
    description: "Незамысловатая драмма",
    author: "Сергей Лукьяненко",
  };
  const bookFour = {
    title: "Война и Мир",
    description: "Классика литературы",
    author: "Лев Толстой",
  };
  
  beforeEach(() => {
    cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
    cy.visit("/");
    cy.login("test@test.com", "test");
  });
  
  describe("Favorite books testing", () => {
    it("Should add book to favorite through function 'add new'", () => {
      cy.addBook(bookOne);
      cy.visit("/favorites");
      cy.get(".card-title").should("contain.text", bookOne.title);
    });
  
    it("Should delete book from favorite", () => {
      cy.visit("/favorites");
      cy.contains(bookOne.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.contains(bookOne.title).should("not.exist");
    });
  
    it("Should add book to favorite through 'Book list' page", () => {
      cy.addBookNoFavorite(bookTwo);
      cy.contains(bookTwo.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.visit("/favorites");
      cy.contains(bookTwo.title).should("be.visible");
    });
  
    it("Should remove all favorite books", () => {
      cy.addBook(bookThree);
      cy.addBook(bookFour);
      cy.removeAllFavorite();
      cy.contains("Please add some book to favorit on home page!").should(
        "exist"
      );
    });
  });