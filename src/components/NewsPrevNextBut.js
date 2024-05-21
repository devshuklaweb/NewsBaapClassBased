import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';

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
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TOI News Desk",
      "title": "Activist Narendra Dabholkar murder case: 2 get life imprisonment, 3 acquitted - The Times of India",
      "description": "India News: Pune special court pronounced the verdict in the Dabholkar murder trial, almost 11 years after the veteran rationalist was gunned down on August 20, 2",
      "url": "https://timesofindia.indiatimes.com/india/activist-narendra-dabholkar-murder-case-2-get-life-imprisonment-3-acquitted/articleshow/110000459.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-110000699,width-1070,height-580,imgsize-793781,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-05-10T06:07:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Business Standard"
      },
      "author": "Harsh Shivam",
      "title": "WhatsApp gets a design makeover with new colour palette, icons, and more - Business Standard",
      "description": "WhatsApp New Update: Now rolling out to Android and iOS platforms, the WhatsApp redesign features more neutral colours and features rounded in-app icons and illustrations",
      "url": "https://www.business-standard.com/technology/apps/whatsapp-gets-a-design-makeover-with-new-colour-palette-icons-and-more-124051000258_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/10/thumb/featurecrop/400X400/1715318455-6991.png",
      "publishedAt": "2024-05-10T05:30:25Z",
      "content": "Now rolling out to Android and iOS platforms, the WhatsApp redesign features more neutral colours and features rounded in-app icons and illustrations\r\nWhatsApp update (Image: WhatsApp)\r\nHarsh ShivamN… [+2038 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "The Indian Express",
      "title": "TN SSLC 10th Result 2024 Live Updates: Result declared at tnresults.nic.in; Ariyalur best district - The Indian Express",
      "description": null,
      "url": "https://indianexpress.com/article/education/tn-sslc-10th-result-2024-live-updates-tamil-nadu-sslc-10th-toppers-list-direct-link-dge-tn-gov-in-tnresults-nic-in-9317887/",
      "urlToImage": null,
      "publishedAt": "2024-05-10T05:20:09Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "DNA India"
      },
      "author": "Ayushmann Chawla",
      "title": "Stunning images of deep space captured by NASA - DNA India",
      "description": "Take a look at stunning images of deep space captured by NASA",
      "url": "https://www.dnaindia.com/web-stories/viral/stunning-images-of-deep-space-captured-by-nasa-1715317143529",
      "urlToImage": null,
      "publishedAt": "2024-05-10T05:18:55Z",
      "content": "May 10, 2024, 10:48 AM IST"
    },
    {
      "source": {
        "id": "the-hindu",
        "name": "The Hindu"
      },
      "author": "The Hindu",
      "title": "ICMR releases 17 dietary guidelines, says 56.4% of disease burden in India due to unhealthy diets - The Hindu",
      "description": null,
      "url": "https://www.thehindu.com/sci-tech/health/icmr-releases-17-dietary-guidelines-says-564-of-disease-burden-in-india-due-to-unhealthy-diets/article68160148.ece",
      "urlToImage": null,
      "publishedAt": "2024-05-10T04:53:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Diya Sharma",
      "title": "Garena Free Fire MAX redeem codes for May 10, 2024: Win cool skins, pets, and other rewards - Moneycontrol",
      "description": "The codes can significantly enhance gameplay and assist players in progressing through levels and defeating others in the game",
      "url": "https://www.moneycontrol.com/technology/garena-free-fire-max-redeem-codes-for-may-10-2024-win-exciting-rewards-daily-like-cool-skins-pets-and-more-article-12718943.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/05/20240510044515_garena2.jpg",
      "publishedAt": "2024-05-10T04:50:16Z",
      "content": "111 Dots Studio, the developer of Garena Free Fire MAX, has just released new redeem codes for today, Friday, May 10, 2024. Players looking to unlock exclusive items can access these codes on the off… [+1408 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricbuzz"
      },
      "author": null,
      "title": "BCCI to release advertisement for new coach soon, reveals Jay Shah - Cricbuzz",
      "description": "The BCCI secretary was non-committal on the continuation of the Impact Player rule in the IPL, stating that it will be decided after consultation with captains and coaches",
      "url": "https://www.cricbuzz.com/cricket-news/130386/bcci-to-release-advertisement-for-new-coach-soon-reveals-jay-shah",
      "urlToImage": "http://www.cricbuzz.comhttps://static.cricbuzz.com/a/img/v1/600x400/i1/c471519/rahul-dravids-tenure-ends-in.jpg",
      "publishedAt": "2024-05-10T04:31:46Z",
      "content": "Rahul Dravid's tenure ends in June and Jay Shah said he can apply for the position again if he wishes to do so © BCCI\r\nThe Board of Control for Cricket in India (BCCI) will soon release an advertisem… [+2984 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Jagan Mohan Reddy Says 4% Muslim Reservation \"Will Remain\" In Andhra Pradesh - NDTV",
      "description": "Amid the ongoing debate between BJP and the Opposition leaders about the reservation and minority quota, Andhra Pradesh Chief Minister YS Jagan Mohan Reddy said 4 per cent of Muslim reservations \"will remain\".",
      "url": "https://www.ndtv.com/india-news/jagan-mohan-reddy-says-4-muslim-reservation-will-remain-in-andhra-pradesh-5629932",
      "urlToImage": "https://c.ndtvimg.com/2024-05/scoa9qjo_jagan-mohan-reddy_625x300_10_May_24.jpeg?ver-20240506.08",
      "publishedAt": "2024-05-10T03:53:33Z",
      "content": "File photo\r\nKurnool (Andhra Pradesh): Amid the ongoing debate between BJP and the Opposition leaders about the reservation and minority quota, Andhra Pradesh Chief Minister YS Jagan Mohan Reddy said … [+2577 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WION"
      },
      "author": null,
      "title": "Boeing Starliner`s launch may end up in `something catastrophic`, warns NASA contractor - WION",
      "description": "A NASA contractor has appealed to the space agency to stop the upcoming Boeing Starliner launch because of serious safety concerns being raised with the wares of the aerospace company.\n\nIn a press release, NASA contractor and president of ValveTech, which sup…",
      "url": "https://www.wionews.com/science/boeing-starliners-launch-may-end-up-in-something-catastrophic-warns-nasa-contractor-719915",
      "urlToImage": "https://cdn.wionews.com/sites/default/files/2024/05/10/430499-boeing-starliner.png",
      "publishedAt": "2024-05-10T03:40:01Z",
      "content": "A NASA contractor has appealed to the space agency to stop the upcoming Boeing Starliner launch because of serious safety concerns being raised with the wares of the aerospace company.\r\nIn a press re… [+2907 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "The Indian Express",
      "title": "Disquiet in LSG over not-so-happy chat in public between owner Sanjiv Goenka and captain KL Rahul after crushing defeat - The Indian Express",
      "description": null,
      "url": "https://indianexpress.com/article/sports/ipl/disquiet-in-lsg-over-not-so-happy-chat-in-public-between-sanjiv-goenka-kl-rahul-9319489/",
      "urlToImage": null,
      "publishedAt": "2024-05-10T02:51:09Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Akshaya Tritiya: List Of Items You Can Buy Other Than Gold To Bring Good Luck - NDTV",
      "description": "Akshaya Tritiya 2024: Akshaya Tritiya is an annual Jain and Hindu spring festival. This year, the festival falls today, May 10, Friday. Also known as Akti or Akha Teej, this day is believed to be one of the most auspicious occasions.",
      "url": "https://www.ndtv.com/offbeat/akshaya-tritiya-list-of-items-you-can-buy-other-than-gold-to-bring-good-luck-5629634",
      "urlToImage": "https://c.ndtvimg.com/2024-05/7rne9uio_akshaya-tritiya_625x300_08_May_24.jpg",
      "publishedAt": "2024-05-10T02:35:40Z",
      "content": "Akshaya Tritiya 2024: People buy gold, silver, properties and other valuable things on this day.\r\nAkshaya Tritiya is an annual Jain and Hindu spring festival. This year, the festival falls today, May… [+2322 chars]"
    },
    {
      "source": {
        "id": "the-hindu",
        "name": "The Hindu"
      },
      "author": "The Hindu",
      "title": "Findings of EAC-PM working paper being misreported, says Population Foundation of India - The Hindu",
      "description": null,
      "url": "https://www.thehindu.com/news/national/findings-in-eac-pm-working-paper-being-misreported-interpretations-inaccurate-misleading-says-population-foundation-of-india/article68158346.ece",
      "urlToImage": null,
      "publishedAt": "2024-05-10T02:27:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "In Diplomatic Win, 5 Indian Sailors On Ship Seized By Iran Released - NDTV",
      "description": "In a diplomatic breakthrough, five of the Indian sailors on board an Israeli-linked vessel seized by Tehran were released on Thursday and have departed from Iran, the Indian embassy in Iran said.",
      "url": "https://www.ndtv.com/india-news/5-indian-sailors-on-ship-seized-by-iran-released-departed-for-india-5627745",
      "urlToImage": "https://c.ndtvimg.com/2018-11/ni1f5jm4_ship-generic_625x300_21_November_18.jpg",
      "publishedAt": "2024-05-10T02:27:00Z",
      "content": "The Israel-linked cargo ship was seized by Iran on April 13 (Representational)\r\nTehran: In a diplomatic breakthrough, five of the Indian sailors on board an Israeli-linked vessel seized by Tehran wer… [+3076 chars]"
    }
  ];

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      article: this.article,
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsBaap`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews() {

    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?apiKey=2121b7a810f14aafa636ce4bec429501&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
  }

  //async wait kregaga jab tak await ke return na aa jaye
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className='text-center' style={{ margin: '3px', padding: '3px' }}><u>NewsBaap - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</u></h1>

          <div className="mb-3 border-bottom d-flex justify-content-end"><strong>Active Page: {this.state.page}</strong></div>
          {this.state.loading && <Spinner />}

          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" rel="noreferrer" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))} type="button" rel="noreferrer" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>

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
        <div className="container d-flex justify-content-between p-3 border-top">
          <button disabled={this.state.page <= 1} type="button" rel="noreferrer" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={(this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" rel="noreferrer" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }

}

export default News
