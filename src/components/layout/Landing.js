import React from "react";
import { Link, Redirect } from "react-router-dom";

import Typewriter from "react-simple-typewriter";
import ImageOne from "../../img/images/banners/4.png";
import ImageTwo from "../../img/images/banners/artist_hero_1.png";
import ImageThree from "../../img/images/album-website/Greta Van Fleet- Black Smoke Rising.jpg";
import ImageFour from "../../img/images/album-website/Ruel – Dazed & Confused.jpg";
import ImageFive from "../../img/images/album-website/Dua Lipa - Unreleased.jpg";
import ImageSix from "../../img/images/album-website/Peng_Black_Girls.jpg";
import ImageSeven from "../../img/images/album-website/LUCKY DAYE FT CHRONIXX & MEDISUN - ROLL SOME MO.jpg";
import ImageEight from "../../img/images/album-website/Charles Bradley - Changes.jpg";
import ImageNine from "../../img/images/banners/multimedia-icon-upload-orange-shadow.png";
import ImageTen from "../../img/images/banners/multimedia-icon-upload-2-orange.png";
import ImageEleven from "../../img/images/banners/ecommerce-money-orange.png";
import ImageTwelve from "../../img/images/banners/artist_hero_2.png";
import { Helmet } from "react-helmet";

const Landing = () => {
  return (
    // <section className="landing">
    //   <div className="dark-overlay">
    //     <div className="landing-inner">
    //       <h1 className="x-large">Developer Connector</h1>
    //       <p className="lead">
    //         Create a developer profile/portfolio, share posts and get help from
    //         other developers
    //       </p>
    //       <div className="buttons">
    //         <Link to="/register" className="btn btn-primary">
    //           Sign Up
    //         </Link>
    //         <Link to="/login" className="btn btn-light">
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <!-- hero section -->
    <React.Fragment>
      <Helmet>
        <title>Zilah Music Publishing</title>
        <meta name="description" content="Upload your music to the world" />
      </Helmet>
      <div class="main">
        <div class="main_container black-text">
          <div class="main_content">
            <h2
              id="text"
              style={{
                fontFamily: "Gotham",
              }}
            >
              THE FUTURE OF{" "}
            </h2>
            <h2 id="text">
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "Gotham",
                }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={200}
                  delaySpeed={1000}
                  words={["MUSIC", "ART", "TALENT", "PUBLISHING"]}
                />
              </span>
            </h2>

            <div class="ld-fancy-heading mask-text col-lg-5">
              <p class="text-white font-size-21">
                <span>
                  Zilah Music Publishing is a licensing & publishing company. We
                  represent the works of composers, music producers, indie
                  bands, singers and rappers. Zilah Music Publishing works with
                  music libraries for TV, ad agencies, video games, film &
                  television. We also represent a growing roster of celebrity
                  talent.{" "}
                </span>
              </p>
            </div>

            {/* <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div> */}

            {/* <!-- /.ld-fancy-heading --> */}

            {/* <div class="ld-fancy-heading">
              <p class="text-white font-size-18">
                <span class="inner-text">
                  <i
                    class="bx bxl-youtube fa-2x mr-3 mb-4"
                    style={{
                      color: "#ffffff",
                    }}
                  ></i>
                  <span class="opacity-06">PLAY</span>
                </span>
              </p>
            </div> */}
            {/* <!-- <button class="main_btn"><a href="/">Get Started</a></button> --> */}
          </div>
          <div class="main_img-container">
            <img src={ImageOne} alt="pic" class="rotate" id="main_img" />
          </div>
        </div>
      </div>
      {/* // <!-- Release your music 
// around the world --> */}
      <div class="music-push">
        <div class="main_container black-text">
          <div class="main_content mobile-margin">
            <div class="ld-fancy-heading mask-text col-lg-5">
              <p class="text-white font-size-21 black-text">
                <span
                  class="ld-fh-txt"
                  style={{
                    lineheight: "1.9em",
                  }}
                >
                  <div class="music-push__content">
                    <h2 class="inside-text">
                      Release your music around the world
                    </h2>
                    <p class="black-text">
                      We’ve made it easy to stream and sell your songs on the
                      world’s biggest music platforms. Reach more fans. Push
                      your music further.
                    </p>
                    {/* <!-- <button class="music-push__btn"><a href="#">Schedule Call</a></button> --> */}
                    {/* </a> */}
                  </div>
                </span>
              </p>
            </div>
            {/* <!-- /.ld-fancy-heading --> */}
          </div>
          <div class="main_img-container">
            <img src={ImageTwo} alt="pic" id="artist_img" />
          </div>
        </div>
      </div>

      {/* // <!-- Try-Now Banner --> */}
      <section class="try-now">
        <div class="container-1">
          <div class="box-1">
            <h2 class="promo-seller_content_title black-text">Try Now</h2>
          </div>
          <div class="box-2">
            <p class="promo-seller_content_title">
              <Link
                to="/upload/#upload-music"
                class="btn-txt round btn btn-light btn-bordered"
              >
                Submit Music
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section class="vc_row pt-pb-160">
        <div class="container">
          <div class="row">
            <div class="flex-row lqd-column mb-5 mb-md-0 ca-initvalues-applied lqd-animations-done pt-90">
              <div class="cards mobile-margin">
                <img src={ImageThree} alt="" class="card__image" />
                <img src={ImageFour} alt="" class="card__image" />
                <img src={ImageFive} alt="" class="card__image" />
                <img src={ImageSix} alt="" class="card__image" />
                <img src={ImageSeven} alt="" class="card__image" />
                <img src={ImageEight} alt="" class="card__image" />
              </div>
              <div class="card__content">
                <h1>Amplify Your Sound</h1>
                <h2>
                  We delivery your music worldwide to significant marketplace.
                </h2>
                <p>
                  <i
                    class="bx bx-chevron-right"
                    style={{
                      color: "#fca311",
                    }}
                  ></i>
                  <a href="/services">Learn More Featured </a>
                </p>
              </div>
            </div>

            <div class="main_content pt-160 mobile-margin">
              <h2
                id="text"
                style={{
                  fontFamily: "Gotham",
                }}
              >
                Amplify your sound
                <br />
                Get featured
              </h2>
              <h3
                class="small-text"
                style={{
                  fontFamily: "Gotham",
                }}
              >
                The eastiest way to music distribution
              </h3>
            </div>

            <div class="div-block-25 pt-pb-160">
              <div class="div-block-23 card__content">
                <img
                  src={ImageNine}
                  width="84"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
                <h1>
                  License
                  <br />
                </h1>
              </div>
              <div class="div-block-22 card__content">
                <img
                  src={ImageTen}
                  width="84"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
                <h1>
                  Distribute
                  <br />
                </h1>
              </div>
              <div class="div-block-24 card__content">
                <img
                  src={ImageEleven}
                  width="84"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
                <h1>
                  Monetize
                  <br />
                </h1>
              </div>
            </div>
            <h2
              class="o-typo--fs-large animated"
              data-in-viewport=""
              data-animation-type="headline"
              style={{
                opacity: "1",
                transform: "translate(0%, -100%) matrix(1, 0, 0, 1, 0, 90)",
                willchange: "auto",
              }}
            >
              We’re on a mission to transform artist
              <br />
              by giving assistance to control your own works.
            </h2>

            <div class="main_content pt-160 mobile-margin">
              <h2
                id="text"
                style={{
                  fontFamily: "Gotham",
                }}
              >
                Grow your fans
                <br />
                Grow your royalties
              </h2>
              <h3 class="small-text title-right">
                We work with digital stores to sell your songs worldwide.
              </h3>
            </div>

            <div class="Artists_wrapper pt-160">
              <div class="Artists_artistsCluster">
                <div class="Artists_artists__50zY8">
                  <div class="lazyload">
                    <div
                      class="Artist_artist__2zGCA Artist_artist2__ZdGL1"
                      // data-style="background: url(assets/images/banners/artist_hero_2.png) center top / cover no-repeat;"
                      style={{
                        background:
                          "url(assets/images/banners/artist_hero_2.png) center top / cover no-repeat",
                      }}
                    >
                      <img
                        src={ImageTwelve}
                        alt="pic"
                        id="main_img"
                        style={{
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="Artists_tagsCluster__3cJJQ Artists_highlight0__3_7uU">
                <ul class="Artists_mobileTags__21xmh">
                  <li class="Artists_tag__gNcQp fill-color">
                    Reggae Soul Pop Funk Dance
                  </li>
                  <li class="Artists_tag__gNcQp Artists_highlight__168Aj">
                    LATIN Rock R&B{" "}
                  </li>
                  <li class="Artists_tag__gNcQp fill-color">
                    {" "}
                    Dancehall Jazz Blues{" "}
                  </li>
                  <li class="Artists_tag__gNcQp">
                    Blues Oldies Rap/hip-hop Dance
                  </li>
                </ul>
                <ul class="Artists_tagCol__22SdQ Artists_desktopTags__XrNgL">
                  <li class="Artists_tag__gNcQp fill-color">
                    Reggae Soul Pop Funk Dance
                  </li>
                  <li class="Artists_tag__gNcQp Artists_highlight__168Aj">
                    LATIN Rock R&B{" "}
                  </li>
                  <li class="Artists_tag__gNcQp fill-color">
                    {" "}
                    Dancehall Jazz Blues{" "}
                  </li>
                  <li class="Artists_tag__gNcQp">
                    Blues Oldies Rap/hip-hop Dance
                  </li>
                </ul>
              </div>
            </div>

            <div class="sk-faq--light pt-160">
              <h3 class="sk-faq__header">Questions</h3>
              <div class="wrapper">
                {/* <!-- Accordion Heading One --> */}
                <div class="parent-tab">
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="tab"
                    id="tab-1"
                    checked
                  />
                  <label for="tab-1">
                    <span>When do I need a license?</span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    <p>
                      The music license is the "license", "license agreement"
                      and or "synchronisation" is the contract that allows you
                      to use, reproduce music in a synchronised way for your
                      production.
                    </p>
                  </div>
                </div>

                {/* <!-- Accordion Heading Two --> */}
                <div class="parent-tab">
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="tab"
                    id="tab-2"
                  />
                  <label for="tab-2">
                    <span>What does the license cover?</span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    <p>
                      The license only covers licensed music agreements from
                      right holders. It does not cover public performances
                      royalties, which are paid by broadcaster, cable,
                      content,commercials,podcast,video on demand,distributor,
                      publishing or manufacturer.
                    </p>
                  </div>
                </div>

                {/* <!-- Accordion Heading Three --> */}
                <div class="parent-tab tab-3">
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="tab"
                    id="tab-3"
                  />
                  <label for="tab-3" class="tab-3">
                    <span>Can I monetize my song? </span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    {/* <!-- Sub Heading One --> */}
                    <div class="child-tab">
                      <input type="checkbox" name="sub-tab" id="tab-4" />
                      <label for="tab-4">
                        <span>How?</span>
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>
                      </label>
                      <div class="sub-content">
                        <p>
                          Yes. We maximize your music revenue based on your
                          sound recordings and composition through traditional
                          and non-traditional revenue streams.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Sub Heading Two --> */}
                    <div class="child-tab">
                      <input type="checkbox" name="sub-tab" id="tab-5" />
                      <label for="tab-5">
                        <span>Artist</span>
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>
                      </label>
                      <div class="sub-content">
                        <p>
                          Recordings sold in physical form like vinyl , DVD, or
                          CD.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Sub Heading Three --> */}
                    <div class="child-tab">
                      <input type="checkbox" name="sub-tab" id="tab-7" />
                      <label for="tab-7">
                        <span>Music Monetization:</span>
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>
                      </label>
                      <div class="sub-content">
                        <p>
                          Videos,Social Media, Virtual Reality, Merchandise,
                          Lyrics,sync license, commercials.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Heading Four --> */}
                <div class="parent-tab">
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="tab"
                    id="tab-6"
                  />
                  <label for="tab-6">
                    <span>Will you tell me when my music is licensed?</span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    <p>
                      You will be notified on your quarterly performance rights
                      royalty payment statement.
                    </p>
                  </div>
                </div>
                {/* <!-- Accordion Heading Thirty --> */}
                <div class="parent-tab">
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="tab"
                    id="tab-30"
                  />
                  <label for="tab-30">
                    <span>What are PRO organizations</span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    <p>
                      PROs are societies responsible for collecting income on
                      behalf of songwriters and music publishers when a song is
                      publicly broadcast. We work with notable performance
                      rights organizations such as ASCAP, BMI, SESAC,THE FOX
                      HARRY AGENCY, Soundexchange etc.
                    </p>
                  </div>
                </div>
              </div>
              <a class="btn-txt round btn btn-warning btn-bordered" href="/faq">
                Learn More
              </a>
            </div>
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
    </React.Fragment>
  );
};

{
  /* //  hero section  */
}

export default Landing;
