import sum from "./fetch.tsx";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Testing the testing framework", () => {
  assertEquals(sum(1, 2), 3);
});

Deno.test("Check if fetchTicketData returns json"), () => {
};
