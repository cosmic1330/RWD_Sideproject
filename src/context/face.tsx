import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type Response = {
  urlToImage: string | null;
  title: string | null;
  author: string | null;
  publishedAt: string;
  url: string | null;
};

type initialFaceContext = {
  data: Response[];
  setData: Dispatch<SetStateAction<Response[] | never[]>>;
  search: string | null;
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
  const [data, setData] = useState<Response[] | never[]>([]);
  const [search, setSearch] = useState("");
  return (
    <FaceContext.Provider value={{ data, setData, search, setSearch }}>
      {children}
    </FaceContext.Provider>
  );
}
