import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <Card>
      <div className="flex flex-col gap-1 text-left text-sm text-black dark:text-slate-300">
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/kamyu.me">
          kamyu.me (React TS)
        </a>
        <a target="_blank" rel="noreferrer" href="https://kamyu1537.github.io/tgs2lottie-web/">
          tgs2lottie (TypeScript)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/kbinxml-wasm">
          kbinxml (Rust wasm)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/lz77-wasm">
          lz77 (Rust wasm)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/nfc2card">
          nfc2card (TypeScript)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/Capacitor-NfcFEmulator">
          Capacitor-NfcFEmulator (Java, TypeScript)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/moka-labs/moji-bot">
          Moji Bot (TypeScript)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/kamyu-hfs">
          kamyu hfs (Vue, JavaScript, TypeScript)
        </a>
        <h3 className="dark:text-white mt-3 pt-1 border-t border-opacity-0 ">VRChat</h3>
        <a target="_blank" rel="noreferrer" href="https://vrc-booth.com/">
          vrc-booth (TypeScript, NextJS)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/hr-osc">
          hr-osc (Go)
        </a>
        <a target="_blank" rel="noreferrer" href="https://kamyu1537.booth.pm/items/3851586">
          IKGrabTool (C#)
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/GTAvaCryptUTS">
          GTAvaCryptUTS (C#)
        </a>
      </div>
    </Card>
  );
};

export default Projects;
