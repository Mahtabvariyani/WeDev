"use client";
import Image from "next/image";
import { useState } from "react";
import Editor from "@monaco-editor/react";

interface Props {
  name: string;
  imgUrl: string;
  type?: string;
}

function SemiProfi({ name, imgUrl }: Props) {
  const [output, setOutput] = useState<string>("");
  const [code, setCode] = useState<string>(
    `function calculateAverage(numbers) {
      if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array of numbers.');
      }
  
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      const average = sum / numbers.length;
  
      return average;
    }
  
    // Example usage:
    const numberArray = [10, 20, 30, 40, 50];
    const avg = calculateAverage(numberArray);
    console.log(\`The average is: \${avg}\`);
    `
  );

  function handleCodeRun() {
    const timeoutDuration = 5000;
    let isTimedOut = false;

    const timeoutId = setTimeout(() => {
      isTimedOut = true;
      setOutput("Timeout Error: Code execution took too long.");
    }, timeoutDuration);

    try {
      const capturedOutput: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args: any[]) => {
        capturedOutput.push(args.map((arg) => JSON.stringify(arg)).join(" "));
        originalConsoleLog(...args);
      };

      eval(code);
      if (!isTimedOut) {
        setOutput(`${capturedOutput.join("\n")}`);
      }

      console.log = originalConsoleLog;
    } catch (error) {
      setOutput(`${error}`);
    } finally {
      clearTimeout(timeoutId);
    }
  }
  return (
    <>
      <div className="flex flex-col  bg-zinc-900 text-white codeEditor">
        <div className="relative h-20 w-20 object-cover">
          <Image
            src={imgUrl}
            alt="logo"
            fill
            className="rounded-full object-cover shadow-2xl"
          />
        </div>
        <h5 className="text-left text-heading3-bold text-light-1">
          {" "}
          hey {name} enjoy hacking
        </h5>
        <div className="flex gap-2 p-2">
          <button
            className="grow p-2 bg-zinc-800 rounded-lg hover:opacity-80"
            onClick={handleCodeRun}
          >
            Run
          </button>
          <button
            className="grow p-2 bg-zinc-800 hover:opacity-80"
            onClick={() => {
              setCode("");
              setOutput("");
            }}
          >
            Clear
          </button>
        </div>
        <Editor
          language="javascript"
          height={"40vh"}
          defaultLanguage="javascript"
          theme={"vs-dark"}
          loading={"Editor is loading..."}
          value={code}
          onChange={(e) => {
            if (e) setCode(e);
          }}
        />
        <pre className="bg-zinc-900 p-4 overflow-y-scroll">{output}</pre>
      </div>
    </>
  );
}

export default SemiProfi;
