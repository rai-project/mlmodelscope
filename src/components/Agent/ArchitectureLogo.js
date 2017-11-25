import React from "react";
import { Image } from "semantic-ui-react";

import * as logos from "../../assets/logos";

export default function ArchitectureLogo({ architecture, size, avatar }) {
  let logo = null;
  let props = {};
  if (size) {
    props = { ...props, size };
  }
  if (avatar) {
    props = { ...props, avatar };
  }
  switch (architecture.toLowerCase()) {
    case "arm":
    case "arm64":
      logo = <Image {...props} src={logos["arm"]} />;
      break;
    case "x86":
    case "i386":
    case "amd64":
    case "intel":
      logo = <Image {...props} src={logos["intel"]} />;
      break;
    case "ppc":
    case "ppc64":
    case "ppc64le":
    case "powerpc":
      logo = <Image {...props} src={logos["powerpc"]} />;
      break;
    default:
      console.log("invalid architecture " + architecture + " encountered");
      logo = null;
  }
  return logo;
}
