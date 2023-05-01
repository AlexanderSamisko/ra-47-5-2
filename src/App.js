import data from "./data";
import './App.css';
import Unit from "./Components/Unit";

function App() {



  return (
    <div className="App">
      <Unit item={data.upperPart} />
      <Unit item={data.newsCurrencyPromoBlock} />
      <Unit item={data.categoriesLogoSearchBlock} />
      <Unit item={data.advertisment} />
      <Unit item={data.topicBlocksList} />



      
      {/* <div className="raw-navigation">
        <ul>
          <li><a>Сейчас в СМИ</a></li>
          <li><a>В Германии</a></li>
          <li><a>Рекомендуем</a></li>
        </ul>
        <a className="current-data">Дата</a>
      </div> */}
      {/* <div className="news-promo-currency-block"> 
        <div className="news-currency-block">
          <ul className="news-block">

          </ul>
          <div  className="currency-more-block">
            <ul className="currency-block">

            </ul>
            <a className="currency more"></a>
          </div>
          
        </div>
        <div className="promo-block">

        </div>
      </div> */}
      {/* <div className="categories-logo-search-block">
          <a className="logo"><img /></a>
          <div className="categories-search-block">
            <div className="categories-more-block">
              <ul className="categories" >

              </ul>
              <a className="categories more"></a>
            </div>
            <div className="search-block">
              <form>

              </form>
              <div className="search-a-like">
                <span>
            
                </span>
                <a className="seacrh-example">

                </a>
              </div>
              
            </div>
        </div>
      </div> */}
      {/* <div className="advirtisment">

      </div> */}
      {/* <ul className="topic-blocks-list"> */}
        {/* <li className="topic-block-list-item">
          <h3 className="topic-block-title">Погода</h3>
          <img />
          <span className="temperature-current"></span>
          <div>
            <span className="temperature-day"></span>
            <span className="temperature-night"></span>
          </div>
        </li> */}
        {/* <li>
          <h3 className="topic-block-title">Погода</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li>
          <h3 className="topic-block-title">Погода</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li>
          <h3 className="topic-block-title">Погода</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li>
          <h3 className="topic-block-title">Погода</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
}

export default App;
