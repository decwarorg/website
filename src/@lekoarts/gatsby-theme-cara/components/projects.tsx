/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import ProjectsMDX from "../sections/projects.mdx"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, BlueViolet 0%, Indigo 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>

        <UpDown>
            <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_blue" left="10%" top="20%" />
            <Svg icon="hexa" width={48} stroke color="icon_blue" left="60%" top="70%" />
            <Svg icon="box" width={6} color="icon_purple" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <Svg icon="triangle" width={12} stroke color="icon_blue" left="90%" top="50%" />
            <Svg icon="circle" width={16} color="icon_purple" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_blue" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_blue" left="28%" top="15%" />
            <Svg icon="circle" width={6} color="icon_blue" left="75%" top="10%" />
            <Svg icon="upDown" hiddenMobile width={8} color="icon_blue" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" hiddenMobile width={24} color="icon_purple" left="5%" top="70%" />
        <Svg icon="circle" width={6} color="icon_blue" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_blue" left="50%" top="60%" />
        <Svg icon="upDown" width={8} color="icon_blue" left="95%" top="90%" />
        <Svg icon="upDown" hiddenMobile width={24} color="icon_purple" left="40%" top="80%" />
        <Svg icon="triangle" width={8} stroke color="icon_purple" left="25%" top="5%" />
        <Svg icon="circle" width={64} color="icon_blue" left="95%" top="5%" />
        <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
        <Svg icon="box" width={6} color="icon_blue" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_blue" left="40%" top="30%" />
        <Svg icon="hexa" width={16} stroke color="icon_purple" left="10%" top="50%" />
        <Svg icon="hexa" width={8} stroke color="icon_purple" left="80%" top="70%" />

    </Divider>
  </div>
)

export default Projects
