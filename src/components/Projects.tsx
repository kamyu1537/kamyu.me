import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <Card>
      <div className="flex flex-col gap-1 text-left text-sm text-black dark:text-slate-300">
        <h3 className="dark:text-white">Javascript</h3>
        <a target="_blank" rel="noreferrer" href="https://kamyu1537.github.io/tgs2lottie-web/">tgs2lottie</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/Capacitor-NfcFEmulator">Capacitor-NfcFEmulator (capacitor plugin)</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/kbinxml-wasm">kbinxml (wasm)</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/lz77-wasm">lz77 (wasm)</a>
        <h3 className="dark:text-white mt-3 pt-1 border-t border-opacity-0 ">Unity</h3>
        <a target="_blank" rel="noreferrer" href="https://github.com/kamyu1537/GTAvaCryptUTS">GTAvaCryptUTS (vrchat)</a>
        <h3 className="dark:text-white mt-3 pt-1 border-t border-opacity-0 ">Discord</h3>
        <a target="_blank" rel="noreferrer" href="https://discord.com/oauth2/authorize?client_id=944816704356249691&scope=bot&permissions=11264">Moji Bot (invite)</a>
      </div>
    </Card>
  )
}

export default Projects;
