import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  article = [
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Karishma Pranav Bhavsar",
      "title": "Severe solar storm expected to hit Earth on THIS date, likely to trigger northern lights in... | Mint - Mint",
      "description": "NOAA's SWPC predicts Severe Geomagnetic Storm from CMEs with potential to disrupt infrastructure and communications. Aurora sightings anticipated in many places. .",
      "url": "https://www.livemint.com/science/news/severe-solar-storm-expected-to-hit-earth-on-this-date-likely-to-trigger-northern-lights-in-11715318433559.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/10/1600x900/sun-photo_1687934826009_1715321821590.jpg",
      "publishedAt": "2024-05-10T06:19:21Z",
      "content": "National Oceanic and Atmospheric Administration (NOAA)'s Space Weather Prediction Center (SWPC) has issued an alert stating that Severe (G4) Geomagnetic Storm is expected to hit Earth for the first t… [+2758 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Twist In Karnataka Sex Scandal, Woman Claims Was Forced To File False Case - NDTV",
      "description": "The National Commission for Women (NCW) said on Thursday that one of the woman complainants in the case of Prajwal Revanna has claimed that she was forced by a group of people to lodge a false complaint after being threatened with harassment.",
      "url": "https://www.ndtv.com/india-news/twist-in-karnataka-sex-scandal-woman-claims-was-forced-to-file-false-case-5629415",
      "urlToImage": "https://c.ndtvimg.com/2024-05/ipj1a8jg_prajwal-revanna-pti_625x300_05_May_24.jpeg",
      "publishedAt": "2024-05-10T06:14:00Z",
      "content": "Prajwal Revanna, the sitting MP from Karnataka's Hassan, is still on the run.\r\nBengaluru:  In a twist to the sex video scandal in Karnataka involving JDS MP Prajwal Revanna, the National Commission f… [+2622 chars]"
    }
  ];

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    apikey: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      article: this.article,
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsBaap`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKeyStr}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  //async wait kregaga jab tak await ke return na aa jaye
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKeyStr}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: this.state.article.concat(parseData.articles),//purane article ke sath new ko jodne ke liye.
      totalResults: parseData.totalResults,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className='text-center' style={{ margin: '3px', padding: '3px' }}><u>NewsBaap - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</u></h1>
          {this.state.loading && <Spinner />}
          <div className="mb-3 border-bottom d-flex justify-content-end"><strong>Total News
            : {this.state.totalResults}</strong>
          </div>

            <InfiniteScroll
              dataLength={this.state.article.length}
              next={this.fetchMoreData}
              hasMore={this.state.article.length < this.state.totalResults}
              loader={<Spinner />}
            >
              <div className="container">
                <div className="row">
                  {/* this.state.article?.map  = this.state.article? first check array exist then map call*/}
                  {(!this.state.loading) && this.state.article?.map((element) => {
                    element.title = element.title ?? '';
                    element.description = element.description ?? '';
                    return element.title && <div className="col-md-4 my-3" key={element.url}>
                      <NewsItem source={element.source.name ?? 'Unknown'} author={element.author ?? 'Unknown'} date={element.publishedAt} newsUrl={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=300"} />
                    </div>
                  })}
                </div>
              </div>
            </InfiniteScroll>
        </div>
      </>
    )
  }

}

export default News
