import React, { Component } from "react";
import { Layout, Divider } from "antd";
import Helmet from "react-helmet";
import News from "../components/News";
import news from "../docs/news.json";
import yeast from "yeast";
const { Content } = Layout;

export default class NewsPage extends Component {
  render() {
    console.log(news);
    return (
      <Content style={{ marginTop: "60px", marginLeft: "40px", padding: "30px" }}>
        <Helmet title="News" meta={[{ property: "og:title", content: "News" }]} />
        {
          news.map(data => {
            return(
              <React.Fragment>
                <News key={yeast()} data={data} />
              </React.Fragment>
            )
          })
        }
      </Content>
    )
  }
}