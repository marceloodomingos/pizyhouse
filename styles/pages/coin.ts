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
    overflow: hidden auto;
    flex-direction: column;
    > div {
      flex: 1;
    }
    .info-coin {
      max-width: unset;
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
    position: sticky;
    top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
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
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        span {
          width: 60%;
          text-transform: capitalize;
          text-align: left;
          color: var(--white);
          line-height: 100%;
        }
        p {
          position: relative;
          width: 40%;
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
    g {
      width: 100%;
      height: 100%;
    }
  }
`;
