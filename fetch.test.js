import sum from "./fetch.ts"
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

Deno.test("Testing the testing framework", () => {
  assertEquals(sum(1, 2), 3)
})