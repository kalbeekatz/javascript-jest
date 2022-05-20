import { strict as assert } from "assert";
import { fizzbuzz } from "./fizzbuzz";

// 模範解答2

// 例えば、プロダクトが大規模化したり失敗できないプロダクトになり品質という観点からTDDするとどうなるか
// テストコードの設計の仕方をテストエンジニアと一緒に書くことになった

// 品質保証を最大化するには仕様の際(今回であれば 1 から 100)を攻める
// 書き手は値を選んだ根拠も書く必要がある
// テストはコードの書き方だけでなく、値の選び方も大事になる
// 0以下や101以上になることは仕様に書かれていない

describe("fizzbuzz関数は数を文字列に変換する", () => {
  describe("3の倍数のときは数の代わりにFizzに変換する", () => {
    test("同値類の中の最小の3の倍数である3を渡すと文字列Fizzを返す", () => {
      assert.equal(fizzbuzz(3), "Fizz");
    });
    test("上限の境界値のひとつ内側の値99は3の倍数でなので渡すと文字列Fizzを返す", () => {
      assert.equal(fizzbuzz(99), "Fizz");
    });
  });
  describe("5の倍数のときは数の代わりにBuzzに変換する", () => {
    test("同値類の中の最小の5の倍数である5を渡すと文字列Buzzを返す", () => {
      assert.equal(fizzbuzz(5), "Buzz");
    });
    test("上限の境界値100は5の倍数なので文字列Buzzを返す", () => {
      assert.equal(fizzbuzz(100), "Buzz");
    });
  });
  describe("3と5両方の倍数のときは数の代わりにFizzBuzzに変換する", () => {
    test("15を渡すと文字列FizzBuzzを返す", () => {
      assert.equal(fizzbuzz(15), "FizzBuzz");
    });
  });
  describe("その他の数のときはそのまま文字列に変換する", () => {
    test("下限の境界値1を渡すと文字列1を返す", () => {
      assert.equal(fizzbuzz(1), "1");
    });
    test("下限の境界値のひとつ内側の値2を渡すと文字列2を返す", () => {
      assert.equal(fizzbuzz(2), "2");
    });
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
