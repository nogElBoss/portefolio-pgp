import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Heading Font';
        src: url('./fonts/NuancesNormal-BlackTrial.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'Numbers Font';
        src: url('./fonts/NeueMetanaNext-SemiBold.otf');
        font-display: swap;
      }
      @font-face {
        font-family: 'Body Font';
        src: url('./fonts/Montserrat-Regular.ttf');
        font-display: swap;
      }
      `}
  />
)

export default Fonts
