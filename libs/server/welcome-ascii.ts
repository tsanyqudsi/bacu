import { AddressInfo } from "node:net";
import * as yc from "yoctocolors";
import { founder } from "./founder";

export const welcomeScript = (addressInfo: AddressInfo) => {
  console.log(yc.cyanBright(`--------------||- ${yc.magentaBright(yc.bold('bacu'))} is ${yc.redBright('crafted with ♥️')} -||--------------`));
  console.log(yc.cyanBright(`---- You can access the server at ${yc.bold(yc.magenta(`http://${addressInfo.address}:${addressInfo.port}`))} ----`));
  console.log(yc.cyanBright('----------------------------------------------------------'))
}