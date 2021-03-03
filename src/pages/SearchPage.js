import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import {
  SearchOutlined,
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Live api call
  const { data } = useGoogleSearch(term);

  // Test api data (Tesla)
  //const data = response;

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://blog.kakaocdn.net/dn/I81mL/btqOeBlgX7S/hlI2ssuZfmGbvUG2ncC4LK/img.png"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <Description />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <Image />
                <Link to="/all">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/all">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <Room />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/all">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <span className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="thumbnail"
                    />
                  )}
                {item.displayLink} ▼
              </span>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
