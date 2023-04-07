import React from "react";

function Footer() {
  return (
    <div className="footer_section_1">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="items_footer">
              <li className="item_footer">World News</li>
              <li className="item_footer">Hightlights</li>
              <li className="item_footer">Technology</li>
              <li className="item_footer">Travel</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="items_footer">
              <li className="item_footer">Latin America & Caribbean</li>
              <li className="item_footer">Economy & Business</li>
              <li className="item_footer">Most Popular World</li>
              <li className="item_footer">Sports</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="items_footer">
              <li className="item_footer">Science & Environment</li>
              <li className="item_footer">Health</li>
              <li className="item_footer">Views</li>
              <li className="item_footer">About Times of Earth</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <p className="muted_text_footer">
          Copyright © 1999-2022, THE TIMES OF EARTH. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
