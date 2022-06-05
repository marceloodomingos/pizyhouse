import styled from "styled-components";

export const CryptoInfos = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 16px auto;
  gap: 8px;
  @media (max-width: 1200px) {
    height: max-content;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    > div {
      flex: 1;
    }
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(130, 87, 229, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background: #8257e5;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #996dff;
  }
  .info-coin {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
    min-height: 700px;
    background: var(--shape);
    border-radius: 4px;
    padding: 16px 8px;
    .coin {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 100%;
      width: 100%;
      height: 100%;
      gap: 8px;
      padding: 0 8px;
      /* border-bottom: 1px solid;
        border-image: linear-gradient(
            to right,
            transparent,
            var(--shape-dark),
            transparent
          )
          1; */
      span {
        font-size: 24px;
      }
      p {
        text-transform: lowercase;
        color: var(--text);
      }
      img {
        width: 100%;
        max-width: 100px;
        border-radius: 4px;
      }
      .current-price {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 8px 0;
        span {
          font-size: 16px;
          text-transform: capitalize;
          font-weight: normal;
        }
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--white);
          background: var(--primary);
          padding: 8px;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: normal;
          gap: 4px;
          width: 100%;
        }
      }
    }
    .stats {
      width: 100%;
      padding: 16px 8px;
      dt {
        text-align: left;
        width: 100%;
        margin: 16px auto;
        padding-bottom: 4px;
        font-weight: bold;
        text-transform: capitalize;
        color: var(--primary);
        border-image: linear-gradient(to right, var(--primary), transparent) 1;
        border-bottom: 1px solid;
      }
      li {
        width: 100%;
        display: grid;
        grid-template-columns: 60fr 40fr;
        align-items: center;
        justify-content: right;
        list-style-type: none;
        > span {
          /* width: 60%; */
          text-transform: capitalize;
          text-align: left;
          color: var(--white);
          line-height: 120%;
          margin: 4px 0;
        }
        > p {
          position: relative;
          /* width: 40%; */
          text-align: right;
          color: var(--text);
          &.market_cap_rank {
            padding-right: 8px;
            &:before {
              content: "º";
              position: absolute;
              right: 0;
            }
          }
          &.market_cap_change {
            padding-right: 12px;
            &:before {
              content: "%";
              position: absolute;
              right: 0;
            }
          }
        }
      }
    }
    @media (max-width: 1200px) {
      max-width: unset;
      margin-bottom: 16px;
      min-height: unset;
    }
  }
  .graph {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: calc(100% - 328px);
    /* height: 100%; */
    background: var(--shape);
    border-radius: 4px;
    padding: 8px;
    overflow: hidden;
    > div {
      width: 100%;
      height: 100%;
      > svg {
        width: 100%;
        height: 100%;
        stroke: var(--primary);
      }
      .apexcharts-toolbar {
        justify-content: flex-end;
        align-items: center;
        align-content: center;
        width: 100%;
        padding: unset;
        /* display: none; */
        .apexcharts-zoom-icon,
        .apexcharts-zoomin-icon,
        .apexcharts-zoomout-icon,
        .apexcharts-reset-icon,
        .apexcharts-pan-icon,
        .apexcharts-selection-icon,
        .apexcharts-menu-icon,
        .apexcharts-toolbar-custom-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(1);
          width: 100%;
          max-width: 24px;
          height: 100%;
          max-height: 24px;
          border-radius: 4px;
          transition: var(--transition);
          padding: 4px;
          svg {
            width: 100%;
            height: 100%;
            fill: var(--primary);
            color: var(--primary);
            stroke: unset;
            transition: var(--transition);
          }
          &:hover {
            background: var(--shape-light);
            svg {
              fill: var(--tertiary);
              color: var(--tertiary);
            }
          }
          &.apexcharts-selected {
            background: var(--shape-dark);
          }
        }
        .apexcharts-menu-icon {
          display: none;
        }
      }
      .apexcharts-line {
        path {
          color: var(--primary);
        }
      }
      .apexcharts-svg.apexcharts-zoomable.hovering-zoom {
        cursor: zoom-in;
      }
      .apexcharts-title-text {
        font-weight: bold;
      }
      .apexcharts-gridlines-horizontal line {
        stroke: var(--text);
        opacity: 0.25;
      }
      .apexcharts-tooltip.apexcharts-theme-light {
        color: #fff;
        background: rgba(18, 18, 20, 0.8);
      }
      @media (min-width: 1200px) {
        .apexcharts-inner,
        .apexcharts-graphical {
          transform: translateX(-50%) translateY(-15%) scale(1.75);
          transform-origin: top left;
          width: 100%;
          height: 100%;
        }
      }
      .apexcharts-active,
      .apexcharts-tooltip,
      .apexcharts-xaxistooltip,
      .apexcharts-yaxistooltip {
        display: none;
      }
      .apexcharts-legend {
        display: none;
      }
      .apexcharts-gridlines-horizontal {
        line:nth-child(1) {
          display: none;
        }
      }
      text {
        fill: var(--text);
        > tspan {
          width: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    @media (max-width: 1200px) {
      max-width: unset;
      .apexcharts-inner,
      .apexcharts-graphical {
        transform: translateX(-25%) scale(1.4);
        transform-origin: middle center;
        width: 100%;
        height: 100%;
      }
      tspan {
        display: none;
      }
    }
    @media (max-width: 500px) {
      .apexcharts-toolbar {
        display: none;
      }
    }
    @media (max-width: 400px) {
      display: none;
    }
  }
`;
