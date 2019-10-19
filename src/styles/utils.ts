import { css } from 'styled-components';

const widthSizes: {[index: string]: number} = {
  small: 568,
  medium: 768,
  large: 1000,
  xlarge: 1600,
};

export const media = Object.keys(widthSizes).reduce(
  (accumulator, label) => {
    /* eslint-disable */
    accumulator[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${widthSizes[label] / 16}em) {
      ${css(literals, ...args)}
    }`;
    /* eslint-enable */
    return accumulator;
  }, {
    hover: (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (hover: hover) {
      ${css(literals, ...args)}
    }`,
  } as any,
) as Record<keyof typeof widthSizes, (l: TemplateStringsArray, ...args: any[]) => string>;
