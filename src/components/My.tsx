import React from 'react';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { ImNpm, ImTwitter } from 'react-icons/im';
import Card from './Card';

const My = () => {
  return (
    <Card>
      <div className="w-32 h-32 bg-gray-300 overflow-hidden rounded-full mb-3 mx-auto">
        <img className="w-full h-full object-cover" alt="" title="gravatar" src="https://www.gravatar.com/avatar/5b3ec40d9f3d438f67d71da1b3a6eb6b.png" />
      </div>
      <div className="text-lg">kamyu</div>
      <div className="text-slate-400 dark:text-slate-600 text-xs">@kamyu1537</div>

      <div className="text-sm mt-4 text-slate-600">
        <p className="dark:text-slate-400">full stack developer</p>
        <p className="text-xs text-slate-400 dark:text-slate-600">html, css, javascript, typescript, c#, java, kotlin, go, rust etc.</p>
      </div>

      <div className="flex gap-3 justify-center mt-7 pt-3 border-t text-slate-800 dark:text-slate-300">
        <a href="https://github.com/kamyu1537" target="_blank" rel="noreferrer"><AiFillGithub /></a>
        <a href="https://gitlab.com/kamyu" target="_blank" rel="noreferrer"><AiFillGitlab /></a>
        <a href="https://npmjs.org/~kamyu" target="_blank" rel="noreferrer"><ImNpm /></a>
        <a href="https://twitter.com/kamyu1537" target="_blank" rel="noreferrer"><ImTwitter /></a>
      </div>
    </Card>
  )
}

export default My;
