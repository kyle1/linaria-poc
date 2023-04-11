import Head from "next/head";
import { css } from "@linaria/core";

import { Button } from "@/components/Button";
import { useState } from "react";

const container = css`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 50px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const title = css`
  font-size: 100px;
`;

const counter = css`
  display: flex;
  justify-content: center;
  font-size: 100px;
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Head>
        <title>Next App with Linaria</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={container}>
          <div>
            <div className={title}>Counter</div>
            {/*
          See "Dynamic styles with css tag" documentation:
          https://github.com/callstack/linaria/blob/master/docs/DYNAMIC_STYLES.md
          */}
            <div
              className={counter}
              style={{ color: count >= 0 ? "#16bd3d" : "red" }}
            >
              {count}
            </div>
            <div className={buttonContainer}>
              <Button
                color="#076c88"
                onClick={() => setCount((count) => count + 1)}
              >
                Increase
              </Button>
            </div>
            <div className={buttonContainer}>
              <Button
                color="#076c88"
                onClick={() => setCount((count) => count - 1)}
              >
                Decrease
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
