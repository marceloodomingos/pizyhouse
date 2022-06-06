import styled from "styled-components";

export const AnalyzeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--shape);
  border-radius: 4px;
  padding: 24px;
  overflow: hidden;
  .select-coin {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(130, 87, 229);
    border-radius: 4px;
    background: unset;
    padding: 0 16px;
    margin-bottom: 16px;
    color: var(--text);
    outline: none;
    option {
      height: 30px;
      border: 1px solid #cbcbcb;
      padding-left: 17px;
      padding-top: 12px;
    }
  }
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
    .apexcharts-candlestick-series {
      transform: translateX(-30%) scaleX(1.25);
      transform-origin: middle center;
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
      transform: translateX(-10%) translateY(-15%) scale(1.5);
      transform-origin: middle center;
      width: 100%;
      height: 100%;
    }
    .apexcharts-candlestick-series {
      transform: translateX(-75%) scaleX(2);
      transform-origin: middle center;
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
`;
