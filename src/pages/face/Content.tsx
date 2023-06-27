import {
  Container as MuiContainer,
  Grid,
  Paper as MuiPaper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { FaceContext } from "../../context/face";
import notfound from "../../images/notfound.png";

const Section = styled("a")`
  width: 100%;
  height: 100%;
  color: #000;
  text-decoration: none;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center center;
  }
  h4 {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  .other {
    padding: 10px;
    bottom: 10px;
  }
`;

const Paper = styled(MuiPaper)`
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const Container = styled(MuiContainer)`
  padding: 30px 0;
`;

export default function Content() {
  const { data } = useContext(FaceContext);
  console.log(data);

  return (
    <Container>
      <Grid container spacing={{ sm: 2, md: 3 }} alignItems="stretch">
        {data?.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper>
              <Section
                href={value?.url ? value.url : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    value?.urlToImage
                      ? value.urlToImage
                      : notfound
                  }
                />
                <div className="other">
                  <span>{value.author}</span>
                  <span> · {true ? "4" : value.publishedAt}分鐘</span>
                </div>

                <h4>{value.title}</h4>
              </Section>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
