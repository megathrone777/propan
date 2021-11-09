import { css } from "~/theme";

const slick = css`
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    display: block;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    margin-left: -13px;
    margin-right: -13px;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    display: block;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
  }

  .slick-track:before,
  .slick-track:after {
    content: "";
    display: table;
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;

    > div {
      padding: 0 13px;
    }
  }

  [dir="rtl"] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: inline-block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    border: 1px solid transparent;
    display: block;
    height: auto;
  }

  .slick-arrow {
    background: url("/images/arrow_bg.png") center center no-repeat;
    border: none;
    cursor: pointer;
    height: 55px;
    padding: 0;
    position: absolute;
    text-indent: -9999px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    z-index: 20;

    &.slick-hidden {
      display: none;
    }
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
    transform: translateY(-50%) rotate(180deg);
  }
`;

export { slick };
