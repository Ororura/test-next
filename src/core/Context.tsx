import React, { FC, createContext, useState } from "react";

export interface IData {
  value: number;
}

export interface IContextType {
  data: IData;
}

export const Context = createContext({});

export const ContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<IData>({ value: 0 });
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
