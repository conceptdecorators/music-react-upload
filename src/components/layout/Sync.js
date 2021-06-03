import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { FaSpotify } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa";
import { SiDeezer } from "react-icons/si";

const Sync = () => {
  return (
    <React.Fragment>
      <div class="sync-image">
        <div class="hero-container" id="text">
          <h1>
            <span>Sync</span>
          </h1>
        </div>
      </div>
      <div class="main"></div>

      <div class="service-container pt-pb-160">
        <p class="text-white medium-text services-social pt-90" id="text">
          {" "}
          Synchronization Opportunities{" "}
        </p>
        <p class="text-white medium-text pt-90">
          {" "}
          We work to secure sync placements for our catalog of music to our
          network of skilled music supervisors within television film, media,
          content creators, games and more.{" "}
        </p>
      </div>

      <div class="service-container">
        <div
          id="text"
          class="text-white"
          style={{
            fontweight: "800",
          }}
        >
          Background Music
        </div>
        <p class="text-white medium-text pt-90">
          Zilah Music Publishing is a quick and easy way to license background
          music. We take the worry out so you don't have to waste time sifting
          through hours of music losing precious production time.Our music
          creative process for sync license is simple for licensors delivering
          the best match for your project.
        </p>
      </div>
      <div class="service-container pt-pb-160">
        <p class="text-white medium-text services-social">
          {" "}
          For artists, bands, composers, songwriters and labels{" "}
        </p>
        <p class="text-white medium-text pt-90">
          {" "}
          We place music in TV, Advertising, Film, and Video Games. We make it
          easy to get your music heard by using our online platform. We have
          established relationships with some of the industries top
          entertainment companies, placing your music directly to music
          supervisors, film, television, music producer & video game companies
          from around the world.{" "}
        </p>
        <p class="text-white medium-text pt-90">Listen On: </p>
        <p class="text-white medium-text pt-90">
          {" "}
          <FaSpotify />
          <span class="services-social">Spotify</span> <SiDeezer />
          <span
            class="services-social
            "
          >
            Deezer
          </span>{" "}
          <FaMixcloud />
          <span class="services-social">Mixcloud</span>{" "}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Sync;
