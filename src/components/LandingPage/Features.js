import React, { Component } from "react";

import withSizes from "react-sizes";
import Panel, { Link, LearnMoreButton as LearnMore } from "../Panel";
import { ReactComponent as MachineIcon } from "@icons/machine.svg";
import { ReactComponent as DecisionIcon } from "@icons/decision.svg";
import { ReactComponent as GearIcon } from "@icons/gear.svg";
import { ReactComponent as CircuitIcon } from "@icons/circuit.svg";
import { ReactComponent as GrowthIcon } from "@icons/growth.svg";
import { ReactComponent as TubeIcon } from "@icons/tube.svg";

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
          icon={
            <MachineIcon
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                overflow: "visible",
              }}
            />
          }
          link={<LearnMore link={""} />}
        >
          Bring together dispersed ML tools into one platform to explore the accuracy and
          performance across frameworks, models, and systems.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="right"
          title={"Reproducible and Versioned."}
          icon={
            <DecisionIcon
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                overflow: "visible",
              }}
            />
          }
          link={<LearnMore link={""} />}
        >
          Specify the software, hardware, and model evaluation requirements and run using
          well-defined pre- and post-processing operations to maintain reproducibility of
          your experiments.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="left"
          title="Local and Remote Measurements."
          icon={
            <GearIcon
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                overflow: "visible",
              }}
            />
          }
          link={<LearnMore link={""} />}
        >
          Perform local and remote evaluations using the integrated website or
          command-line. Embed it in your C, Python, or Java program by using the REST API
          or by compiling it as a library.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="right"
          title={"Framework and System Agnostic."}
          icon={
            <GrowthIcon
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                overflow: "visible",
              }}
            />
          }
          link={<LearnMore link={""} />}
        >
          Builtin framework support for{" "}
          <Link href={"https://github.com/rai-project/tensorflow"}>TensorFlow</Link>,
          <Link href={"https://github.com/rai-project/tflite"}>TFLite</Link>,{" "}
          <Link href={"https://github.com/rai-project/pytorch"}>PyTorch</Link>, MXNet,
          <Link href={"https://github.com/rai-project/caffe2"}>Caffe2</Link>,{" "}
          <Link href={"https://github.com/rai-project/tensorrt"}>TensorRT</Link>,{" "}
          <Link href={"https://github.com/rai-project/caffe"}>Caffe</Link>, and{" "}
          <Link href={"https://github.com/rai-project/cntk"}>CNTK</Link> and Support for
          Linux, macOS, Windows, Android, and iOS on ARM, Power, and X86 with CPU, GPU, or
          FPGA acceleration.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="left"
          title="Extensible and Customizable."
          icon={
            <TubeIcon
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                overflow: "visible",
              }}
            />
          }
          link={<LearnMore link={""} />}
        >
          Add support to systems, performance counters, models, and frameworks with
          minimal code changes.
        </Panel>

        <Panel
          isMobile={isMobile}
          divider={false}
          position="right"
          title={"Built-in Models and Datasets."}
          icon={
            <CircuitIcon
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                overflow: "visible",
              }}
            />
          }
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
