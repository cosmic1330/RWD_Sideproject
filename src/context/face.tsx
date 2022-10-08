import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Response = {
  urlToImage: string;
  title: string;
  author: string;
  publishedAt: string;
  url: string;
};

type initialFaceContext = {
  data: Response[];
  setData: Dispatch<SetStateAction<never[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const init = {
  data: [],
  setData: () => {},
  search: "",
  setSearch: () => {},
};

type Prop = {
  children: ReactNode;
};
export const FaceContext = createContext<initialFaceContext>(init);

export function FaceContextProvider({ children }: Prop) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <FaceContext.Provider value={{ data, setData, search, setSearch }}>
      {children}
    </FaceContext.Provider>
  );
}
