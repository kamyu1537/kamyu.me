import React from 'react';

const Card = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <div className="backdrop-blur-xl bg-opacity-70 dark:bg-opacity-70 bg-white rounded-2xl  shadow-2xl text-center dark:bg-slate-900 dark:text-white w-full min-w-[unset] sm:min-w-[32em] px-12 py-5">
      {children}
    </div>
  );
};

export default Card;
