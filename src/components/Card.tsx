import React from 'react';

type Props = {
  children: any;
}
const Card = ({ children }: Props) => {
  return (
    <div className="backdrop-blur-xl bg-opacity-70 dark:bg-opacity-70 bg-white rounded-2xl mx-5 my-3 shadow-2xl px-12 py-5 text-center dark:bg-slate-900 dark:text-white">
      {children}
    </div>
  )
}

export default Card;
