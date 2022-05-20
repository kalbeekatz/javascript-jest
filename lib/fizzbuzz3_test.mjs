import { strict as assert } from "assert";
import { fizzbuzz } from "./fizzbuzz";

// 模範解答3
// 質とスピードどっちか取るしかないのではなく、どっちも取ろう
// パラメータライズドテスト(色んな値を試すテスト)をサポートしているライブラリは多い

describe("fizzbuzz関数は数を文字列に変換する", () => {
  describe("3の倍数のときは数の代わりにFizzに変換する", () => {
    test.each([
      { input: 3, reason: "同値類の中の最小の3の倍数" },
      { input: 99, reason: "上限の境界値のひとつ内側の値" }
    ])(
      "$reason である $input を渡すと文字列Fizzを返す",
      ({ input, reason }) => {
        assert.equal(fizzbuzz(input), "Fizz");
      }
    );
  });
  describe("5の倍数のときは数の代わりにBuzzに変換する", () => {
    test.each([
      { input: 5, reason: "同値類の中の最小の5の倍数" },
      { input: 100, reason: "上限の境界値" }
    ])(
      "$reason である $input を渡すと文字列Fizzを返す",
      ({ input, reason }) => {
        assert.equal(fizzbuzz(input), "Buzz");
      }
    );
  });
  describe("3と5両方の倍数のときは数の代わりにFizzBuzzに変換する", () => {
    test.each([{ input: 15, reason: "同値類の中の最小の3と5の倍数" }])(
      "$reason である $input を渡すと文字列FizzBuzzを返す",
      ({ input, reason }) => {
        assert.equal(fizzbuzz(input), "FizzBuzz");
      }
    );
  });
  describe("その他の数のときはそのまま文字列に変換する", () => {
    test.each([
      { input: 1, expected: "1", reason: "下限の境界値" },
      { input: 2, expected: "2", reason: "下限の境界値のひとつ内側の値" }
    ])(
      "$reason である $input を渡すと $expected を返す",
      ({ input, expected, reason }) => {
        assert.equal(fizzbuzz(input), expected);
      }
    );
  });

  describe("仕様の範囲外であっても同じ規則が適用される", () => {
    test("上限の境界値のひとつ外側の値101を渡すと文字列101を返す", () => {
      assert.equal(fizzbuzz(101), "101");
    });
    test("下限の境界値のひとつ外側の値0は3の倍数でも5の倍数でもあるので文字列FizzBuzzを返す", () => {
      assert.equal(fizzbuzz(0), "FizzBuzz");
    });
  });
});
