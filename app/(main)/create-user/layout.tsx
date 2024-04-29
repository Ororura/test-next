import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div>Верхний слой</div>
      {children}
    </>
  );
};

export default Layout;
