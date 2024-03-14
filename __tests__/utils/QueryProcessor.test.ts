import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return Andrew ID', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your Andrew ID is: suyeonc"
          ));
    });

    test('largest num', () => {
        const query = "largest: 4, 5, 6 ";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "6"
          ));
    });

    test('multiply', () => {
        const query = "4 multiplied by 6";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "24"
          ));
    });

    test('plus plus', () => {
        const query = "4 plus 6 plus 4";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "14"
          ));
    });

    test('prime', () => {
        const query = "primes: 2, 5, 6, 7?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "2, 5, 7"
          ));
    });
});


