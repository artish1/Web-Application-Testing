import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { hit, addBall, addFoul, addStrike } from "./helpers";

it("renders without crashing", () => {
  const wrapper = render(<App />);
  wrapper.getByText(/Baseball Management/i);
});

describe("handling data", () => {
  test("can increment strike", () => {
    const gameData = {
      balls: 0,
      strikes: 0
    };
    expect(addStrike(gameData).strikes).toBe(1);
  });

  test("can increment balls", () => {
    const gameData = {
      balls: 0,
      strikes: 0
    };
    expect(addBall(gameData).balls).toBe(1);
  });
  test("will reset scores on 3 strikes", () => {
    const gameData = {
      balls: 2,
      strikes: 2
    };
    const comparisonData = {
      balls: 0,
      strikes: 0
    };
    expect(addStrike(gameData)).toStrictEqual(comparisonData);
  });

  test("will reset scores on 4 balls", () => {
    const gameData = {
      balls: 3,
      strikes: 2
    };

    const comparisonData = {
      balls: 0,
      strikes: 0
    };
    expect(addBall(gameData)).toStrictEqual(comparisonData);
  });

  test("will reset scores on hit", () => {
    const gameData = {
      balls: 1,
      strikes: 1
    };

    const comparisonData = {
      balls: 0,
      strikes: 0
    };
    expect(hit(gameData)).toStrictEqual(comparisonData);
  });

  test("will add strike on foul if strike < 2", () => {
    const gameData = {
      balls: 1,
      strikes: 0
    };

    const comparisonData = {
      balls: 1,
      strikes: 1
    };
    expect(addFoul(gameData)).toStrictEqual(comparisonData);
  });

  test("will not add strike on foul if strike === 2", () => {
    const gameData = {
      balls: 1,
      strikes: 2
    };

    const comparisonData = {
      balls: 1,
      strikes: 2
    };
    expect(addFoul(gameData)).toStrictEqual(comparisonData);
  });
});
