import { css } from '@emotion/react';
import { AminPaksLogo, LinkedInLogo, TwitterLogo } from './logos';

const styles = css`
  background: #353e58 url('/background0.jpg') no-repeat center top;
  background-size: cover;

  @media screen and (min-height: 800px) {
    background-position: center 30%;
  }
`;

const container = css`
  @media screen and (min-height: 380px) {
    margin-top: 20vh;
  }
  background-image: linear-gradient(
    180deg,
    rgba(53, 62, 88, 0.6) 0%,
    rgba(90, 99, 129, 0.8) 50%,
    rgba(111, 115, 147, 0.6) 100%
  );
`;

const nameStyles = css`
  & > span {
    &:nth-of-type(1) {
      width: 92px;

      svg {
        width: 92px;
      }
    }
    &:nth-of-type(2) {
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

const taglineStyles = css`
  &::before {
    display: block;
    content: '';
    left: 50%;
    bottom: -6px;
    width: 12px;
    height: 12px;
    transform: translateX(-50%);
    background: currentColor;
    position: absolute;
  }
`;

const linksStyle = css`
  & a {
    svg {
      width: 44px;
    }
  }
`;

export const App = () => {
  return (
    <div css={styles} className="lg:p-4 min-h-screen text-white flex flex-col">
      <div css={container} className="block w-full lg:w-auto ml-auto mr-auto p-4 text-center">
        <div css={nameStyles} className="mb-8 mt-4 relative">
          <span className="ml-auto mr-auto block">
            <AminPaksLogo />
          </span>
          <span className="uppercase font-bold text-4xl sm:text-5xl">Amin Pakseresht</span>
        </div>
        <div
          css={taglineStyles}
          className="relative font-thin text-4xl border-t border-b pt-6 pb-6"
        >
          Front End Engineer
        </div>
        <div css={linksStyle} className="flex justify-center items-center mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/apakseresht/" rel="noreferrer" target="_blank">
            <LinkedInLogo />
          </a>
          <a href="https://twitter.com/aminpakseresht/" rel="noreferrer" target="_blank">
            <TwitterLogo />
          </a>
        </div>
      </div>
    </div>
  );
};
