import { AddressInfo } from "node:net";
import * as yc from "yoctocolors";

export const welcomeScript = (addressInfo: AddressInfo) => {
  console.log(
    yc.red("                     _                              _  _         _     _     "),
  );
  console.log(
    yc.red("                    (_)                            | || |       | |   | |    "),
  );
  console.log(
    yc.red("  __ _   ___   __ _  _  ___  __  __  _ __ ___    __| || | _ __  | | __| |__  "),
  );
  console.log(
    yc.red(" / _` | / _ \\ / _` || |/ __| \\ \\/ / | '_ ` _ \\  / _` || || '_ \\ | |/ /| '_ \\ "),
  );
  console.log(
    yc.yellow("| (_| ||  __/| (_| || |\\__ \\  >  <  | | | | | || (_| || || | | ||   < | | | |"),
  );
  console.log(
    yc.blue(" \\__,_| \\___| \\__, ||_||___/ /_/\\_\\ |_| |_| |_| \\__,_||_||_| |_||_|\\_\\|_| |_|"),
  );
  console.log(
    yc.blue("               __/ |                                                         "),
  );
  console.log(
    yc.blue("              |___/                                                          "),
  );
  console.log('')
  console.log(yc.cyanBright(`--------------||- ${yc.magentaBright(yc.bold('Daizi'))} is ${yc.redBright('Coded with ♥️')} -||---------------`));
  console.log(yc.cyanBright(`---- You can access the server at ${yc.bold(yc.magenta(`http://${addressInfo.address}:${addressInfo.port}`))} ----`));
  console.log(yc.cyanBright('----------------------------------------------------------'))
}