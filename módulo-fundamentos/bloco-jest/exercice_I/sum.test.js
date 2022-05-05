const sum = require("./sum.js");

describe("Requisito testando a função sum", () => {
  it("Teste se o retorno de sum(4,5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("Requisito testando a mensagem de erro", () => {
  it("Deve aparecer um erro caso receba uma string como parâmetro", () => {
    expect(() => sum(4, "5")).toThrowError();
  });
  it('A mensagem do erro deve ser "os parâmetros devem ser números"', () => {
    expect(() => sum(4, '5')).toThrowError('os parâmetros devem ser números')
  })
});
