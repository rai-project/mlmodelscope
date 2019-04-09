import React, { Component } from "react";

import yeast from "yeast";
import { MLModelScope } from "@components/Common";
import withSizes from "react-sizes";
import {
  ModelUser as ModelUserIcon,
  SystemDeveloper as SystemDeveloperIcon,
  ModelDeveloper as ModelDeveloperIcon,
} from "./UserAvatars";
import Panel from "./Panel";
import { Button, Icon } from "antd";

const primaryColor = "#1A263A";

const LearnMore = function({ link }) {
  return (
    <Button ghost type="dashed" href={link}>
      <div style={{ color: primaryColor }}>
        Learn More
        <Icon type="right" />
      </div>
    </Button>
  );
};

@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class Features extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <>
        <Panel
          isMobile={isMobile}
          style={{
            marginTop: "4rem",
          }}
          position="left"
          title="Built for ML Evaluation."
          icon={<ModelUserIcon width="10rem" height="10rem" />}
          link={<LearnMore link={""} />}
        >
          Bring together dispersed ML tools into one platform to explore the performance
          across frameworks, models, and systems.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="right"
          title={"Reproducible and Versioned."}
          icon={<ModelUserIcon width="10rem" height="10rem" />}
          link={<LearnMore link={""} />}
        >
          Specify the software, hardware, and model evaluation requirements and versions
          through a manifest file and run within a Docker container using well-defined
          pre- and post-processing operations.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="left"
          title="Local and Remote Measurements."
          icon={<ModelUserIcon width="10rem" height="10rem" />}
          link={<LearnMore link={""} />}
        >
          Bring together dispersed tools into one platform to explore the performance of
          different frameworks, models, and systems.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="right"
          title={"Framework and System Agnostic."}
          icon={<ModelUserIcon width="10rem" height="10rem" />}
          link={<LearnMore link={""} />}
        >
          Builtin framework support for TensorFlow, TFLite, PyTorch, MXNet, Caffe2,
          TensorRT, Caffe, and CNTK. Run on Linux, macOS, Windows, Android, and iOS on
          ARM, Power, and X86 while leveraging CPU, GPU, or FPGA acceleration.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="left"
          title="Extensible and Customizable."
          icon={<ModelUserIcon width="10rem" height="10rem" />}
          link={<LearnMore link={""} />}
        >
          Bring together dispersed tools into one platform to explore the performance of
          different frameworks, models, and systems.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="right"
          title={"Built-in Models and Datasets."}
          icon={<ModelUserIcon width="10rem" height="10rem" />}
          link={<LearnMore link={""} />}
        >
          Find the latest models as published within MLModelScope (be it classification,
          object detection, tracking, machine translation and more) and directly run those
          models using either standard dataset or your own dataset.
        </Panel>
      </>
    );
  }
}

export default Features;
