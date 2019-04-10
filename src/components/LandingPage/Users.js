import React, { Component } from "react";

import { MLModelScope } from "@components/Common";
import withSizes from "react-sizes";
import {
  ModelUser as ModelUserIcon,
  SystemDeveloper as SystemDeveloperIcon,
  ModelDeveloper as ModelDeveloperIcon,
} from "./UserAvatars";
import Panel, { PanelsHeading, LearnMoreButton as LearnMore } from "../Panel";

@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class Users extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <div style={{}}>
        <PanelsHeading>
          <MLModelScope /> Users
        </PanelsHeading>

        <Panel
          isMobile={isMobile}
          style={{
            marginTop: "4rem",
          }}
          position="left"
          title="Data Scientists"
          icon={<ModelUserIcon height="200px" width="200px" />}
          link={<LearnMore link={""} />}
        >
          Find the latest models as published in the literature for your task (be it
          classification, object detection, tracking, machine translation and more) and
          directly run those models using either standard dataset or your own dataset -
          without worrying about the hassle of installing any software. See how those
          models perform and compare with each other and draw your own conclusion.
        </Panel>

        <Panel
          isMobile={isMobile}
          style={{
            marginTop: "4rem",
          }}
          position="right"
          title="Model Builders"
          icon={<ModelDeveloperIcon height="200px" width="200px" />}
          link={<LearnMore link={""} />}
        >
          Expose your model to the public without worrying about non-repeatable results.
          Users see the same result as you would see on their dataset and can provide you
          feedback. All your need to deploy your model is a configuration file.
        </Panel>

        <Panel
          divider={false}
          isMobile={isMobile}
          style={{
            marginTop: "4rem",
          }}
          position="left"
          title="System Developers"
          icon={<SystemDeveloperIcon height="200px" width="200px" />}
          link={<LearnMore link={""} />}
        >
          Gain the insight of system performance bottlenecks across the software and
          hardware stacks, from application pipeline to model pipeline, to framework
          runtime pipeline, to kernel launching pipeline, to library and hardware
          instruction sets, with a rich set of traces collected from running the most
          relevant machine learning models and datasets.
        </Panel>
      </div>
    );
  }
}

export default Users;
