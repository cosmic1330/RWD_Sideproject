import { List as MuiList } from "@mui/material";
import { default as MuiListItemButton } from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BusinessIcon,
  EntertainmentIcon,
  GeneralIcon,
  HealthIcon,
  HotNewIcon,
  ScienceIcon,
  SportsIcon,
  TechnologyIcon,
} from "../../components/icons";
import { FaceContext, Response } from "../../context/face";

const CssNavbar = styled("nav")`
  width: 200px;
  min-width: 200px;
  min-height: calc(100vh - 144px);
  border-right: 1px solid #ddd;
`;
const ListItemButton = styled(MuiListItemButton)`
  margin-bottom: 8px;
  border-radius: 100px;
  padding: 5px 10px;
  gap: 10px;
`;

const List = styled(MuiList)`
  padding: 10px;
`;

type Params = {
  q?: string | null;
  category?: string;
  country?: string;
};

const list = [
  { type: "Hot", icon: <HotNewIcon /> },
  { type: "Business", icon: <BusinessIcon /> },
  { type: "Entertainment", icon: <EntertainmentIcon /> },
  { type: "General", icon: <GeneralIcon /> },
  { type: "Health", icon: <HealthIcon /> },
  { type: "Science", icon: <ScienceIcon /> },
  { type: "Sports", icon: <SportsIcon /> },
  { type: "Technology", icon: <TechnologyIcon /> },
];

export default function Navbar() {
  const { setData, search } = useContext(FaceContext);
  const [selected, setSelected] = useState(0);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let params: Params = { country: "tw" };
    if (search) params["q"] = search;
    if (category && category !== "Hot") {
      params["category"] = category;
    }
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?apiKey=6267ac9d385a400f8c539f3e1a1e9a64",
        { params }
      )
      .then((response: any) => {
        console.log(response.data);
        setData(response.data["articles"]);
      })
      .catch((error) => {
        console.log(error);
        const fakeArticles: Response[] = [
          {
            author: null,
            title: "【Fake】《Neon White》：繼《吸血鬼倖存者》的下個精神時光屋",
            url: "https://news.google.com/__i/rss/rd/articles/CBMiKmh0dHBzOi8vd3d3LnRoZW5ld3NsZW5zLmNvbS9hcnRpY2xlLzE3NDQxNNIBAA?oc=5",
            urlToImage: null,
            publishedAt: "2022-10-08T23:56:01Z",
          },
        ];
        setData(fakeArticles);
      });
  }, [selected, search]);

  return (
    <CssNavbar>
      <List>
        {list.map(({ type, icon }, index) => (
          <ListItemButton
            selected={selected === index}
            onClick={() => {
              setSelected(index);
              navigate(`/face/${type}`);
            }}
          >
            {icon}
            <ListItemText primary={type} />
          </ListItemButton>
        ))}
      </List>
    </CssNavbar>
  );
}
