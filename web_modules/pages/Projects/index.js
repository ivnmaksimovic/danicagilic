import React, { Component } from "react"
import ProjectsList from "../../ProjectsList"
import styles from "./index.css"

// temp data
import sandboxSvg from "../../../content/logo/sandbox.min.svg"
import nordiskaSpelSvg from "../../../content/logo/nordiska-spel.min.svg"
import iBarSvg from "../../../content/logo/i-bar.min.svg"
import finTechSvg from "../../../content/logo/fintech.min.svg"
import agrikulturaSvg from "../../../content/logo/agrikultura.min.svg"
import crosscutSvg from "../../../content/logo/crosscut.min.svg"
import deltaIncassoSvg from "../../../content/logo/delta-inkasso.min.svg"
import lakiDahSvg from "../../../content/logo/laki-dah.min.svg"
import logoSvg from "../../../content/logo/logo.min.svg"
import lulaAnaSvg from "../../../content/logo/lula-ana.min.svg"
import misaSvg from "../../../content/logo/misa.min.svg"
import musakaBarSvg from "../../../content/logo/musakabar.min.svg"
import prefabricatedSvg from "../../../content/logo/prefabricated-goat.min.svg"
import skuroSvg from "../../../content/logo/skuro.min.svg"
import snowballInvestSvg from "../../../content/logo/snowball-invest.min.svg"
import stanceSkateShopSvg from "../../../content/logo/stance-skate-shop.min.svg"
import sweetPaySvg from "../../../content/logo/sweet-pay.min.svg"
import yoLottoSvg from "../../../content/logo/yolotto.min.svg"
import youthClothingSvg from "../../../content/logo/youth-clothing.min.svg"
import bambunoSvg from "../../../content/logo/bambuno.min.svg"

export default class Projects extends Component {

  render() {
    const projects = [
      {
        title: "Sandbox",
        svg: sandboxSvg,
      },
      {
        title: "Nordiska spel",
        svg: nordiskaSpelSvg,
      },
      {
        title: "iBar",
        svg: iBarSvg,
      },
      {
        title: "Fin Tech",
        svg: finTechSvg,
      },
      {
        title: "Agrikultura",
        svg: agrikulturaSvg,
      },
      {
        title: "Crosscut",
        svg: crosscutSvg,
      },
      {
        title: "Delta incasso",
        svg: deltaIncassoSvg,
      },
      {
        title: "Laki dah",
        svg: lakiDahSvg,
      },
      {
        title: "Logo",
        svg: logoSvg,
      },
      {
        title: "Lula Ana",
        svg: lulaAnaSvg,
      },
      {
        title: "Misa",
        svg: misaSvg,
      },
      {
        title: "Musaka bar",
        svg: musakaBarSvg,
      },
      {
        title: "Prefabricated goat",
        svg: prefabricatedSvg,
      },
      {
        title: "Skuro",
        svg: skuroSvg,
      },
      {
        title: "Snowball invest",
        svg: snowballInvestSvg,
      },
      {
        title: "Stance Skate Shop",
        svg: stanceSkateShopSvg,
      },
      {
        title: "Sweet Pay",
        svg: sweetPaySvg,
      },
      {
        title: "Yo lotto",
        svg: yoLottoSvg,
      },
      {
        title: "Youth clothing",
        svg: youthClothingSvg,
      },
      {
        title: "Bambuino",
        svg: bambunoSvg,
      },
    ]

    return (
      <div className={ styles.projects }>
        <ProjectsList projects={ projects } />
      </div>
    )
  }
}
