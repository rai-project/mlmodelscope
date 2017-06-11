// package: carml.org.mxnet
// file: github.com/rai-project/dlframework/mxnet/mxnet.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";

export class ErrorStatus extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorStatus): ErrorStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorStatus;
  static deserializeBinaryFromReader(message: ErrorStatus, reader: jspb.BinaryReader): ErrorStatus;
}

export namespace ErrorStatus {
  export type AsObject = {
    ok: boolean,
    message: string,
  }
}

export class ContainerArchicture extends jspb.Message {
  getGpu(): string;
  setGpu(value: string): void;

  getCpu(): string;
  setCpu(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerArchicture.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerArchicture): ContainerArchicture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerArchicture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerArchicture;
  static deserializeBinaryFromReader(message: ContainerArchicture, reader: jspb.BinaryReader): ContainerArchicture;
}

export namespace ContainerArchicture {
  export type AsObject = {
    gpu: string,
    cpu: string,
  }
}

export class Model extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
  }

  export class Input extends jspb.Message {
    getType(): string;
    setType(value: string): void;

    clearDimensionsList(): void;
    getDimensionsList(): Array<number>;
    setDimensionsList(value: Array<number>): void;
    addDimensions(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
  }

  export namespace Input {
    export type AsObject = {
      type: string,
      dimensionsList: Array<number>,
    }
  }

  export class Output extends jspb.Message {
    getType(): string;
    setType(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      type: string,
    }
  }

  export class Information extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getContainerMap(): jspb.Map<string, ContainerArchicture>;
    clearContainerMap(): void;
    getFramework(): string;
    setFramework(value: string): void;

    getVersion(): string;
    setVersion(value: string): void;

    getType(): string;
    setType(value: string): void;

    getDatasetName(): string;
    setDatasetName(value: string): void;

    getGraphUrl(): string;
    setGraphUrl(value: string): void;

    getWeightsUrl(): string;
    setWeightsUrl(value: string): void;

    getFeaturesUrl(): string;
    setFeaturesUrl(value: string): void;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Model.Input | undefined;
    setInput(value?: Model.Input): void;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Model.Output | undefined;
    setOutput(value?: Model.Output): void;

    clearMeanImageList(): void;
    getMeanImageList(): Array<number>;
    setMeanImageList(value: Array<number>): void;
    addMeanImage(value: number, index?: number): number;

    clearReferencesList(): void;
    getReferencesList(): Array<string>;
    setReferencesList(value: Array<string>): void;
    addReferences(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Information.AsObject;
    static toObject(includeInstance: boolean, msg: Information): Information.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Information, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Information;
    static deserializeBinaryFromReader(message: Information, reader: jspb.BinaryReader): Information;
  }

  export namespace Information {
    export type AsObject = {
      name: string,
      description: string,
      containerMap: Array<[string, ContainerArchicture.AsObject]>,
      framework: string,
      version: string,
      type: string,
      datasetName: string,
      graphUrl: string,
      weightsUrl: string,
      featuresUrl: string,
      input?: Model.Input.AsObject,
      output?: Model.Output.AsObject,
      meanImageList: Array<number>,
      referencesList: Array<string>,
    }
  }

  export class Graph extends jspb.Message {
    clearNodesList(): void;
    getNodesList(): Array<Model.Graph.Node>;
    setNodesList(value: Array<Model.Graph.Node>): void;
    addNodes(value?: Model.Graph.Node, index?: number): Model.Graph.Node;

    clearArgNodesList(): void;
    getArgNodesList(): Array<number>;
    setArgNodesList(value: Array<number>): void;
    addArgNodes(value: number, index?: number): number;

    clearNodeRowPtrList(): void;
    getNodeRowPtrList(): Array<number>;
    setNodeRowPtrList(value: Array<number>): void;
    addNodeRowPtr(value: number, index?: number): number;

    clearHeadsList(): void;
    getHeadsList(): Array<Model.Graph.NodeEntry>;
    setHeadsList(value: Array<Model.Graph.NodeEntry>): void;
    addHeads(value?: Model.Graph.NodeEntry, index?: number): Model.Graph.NodeEntry;

    hasAttrs(): boolean;
    clearAttrs(): void;
    getAttrs(): Model.Graph.Attributes | undefined;
    setAttrs(value?: Model.Graph.Attributes): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Graph.AsObject;
    static toObject(includeInstance: boolean, msg: Graph): Graph.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Graph, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Graph;
    static deserializeBinaryFromReader(message: Graph, reader: jspb.BinaryReader): Graph;
  }

  export namespace Graph {
    export type AsObject = {
      nodesList: Array<Model.Graph.Node.AsObject>,
      argNodesList: Array<number>,
      nodeRowPtrList: Array<number>,
      headsList: Array<Model.Graph.NodeEntry.AsObject>,
      attrs?: Model.Graph.Attributes.AsObject,
    }

    export class NodeEntry extends jspb.Message {
      getNodeId(): number;
      setNodeId(value: number): void;

      getIndex(): number;
      setIndex(value: number): void;

      getVersion(): number;
      setVersion(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): NodeEntry.AsObject;
      static toObject(includeInstance: boolean, msg: NodeEntry): NodeEntry.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: NodeEntry, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): NodeEntry;
      static deserializeBinaryFromReader(message: NodeEntry, reader: jspb.BinaryReader): NodeEntry;
    }

    export namespace NodeEntry {
      export type AsObject = {
        nodeId: number,
        index: number,
        version: number,
      }
    }

    export class Node extends jspb.Message {
      getOp(): string;
      setOp(value: string): void;

      getParamMap(): jspb.Map<string, string>;
      clearParamMap(): void;
      getName(): string;
      setName(value: string): void;

      clearInputsList(): void;
      getInputsList(): Array<Model.Graph.NodeEntry>;
      setInputsList(value: Array<Model.Graph.NodeEntry>): void;
      addInputs(value?: Model.Graph.NodeEntry, index?: number): Model.Graph.NodeEntry;

      getBackwardSourceId(): number;
      setBackwardSourceId(value: number): void;

      clearControlDepsList(): void;
      getControlDepsList(): Array<number>;
      setControlDepsList(value: Array<number>): void;
      addControlDeps(value: number, index?: number): number;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Node.AsObject;
      static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Node;
      static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
    }

    export namespace Node {
      export type AsObject = {
        op: string,
        paramMap: Array<[string, string]>,
        name: string,
        inputsList: Array<Model.Graph.NodeEntry.AsObject>,
        backwardSourceId: number,
        controlDepsList: Array<number>,
      }
    }

    export class Attributes extends jspb.Message {
      getAttrsMap(): jspb.Map<string, string>;
      clearAttrsMap(): void;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Attributes.AsObject;
      static toObject(includeInstance: boolean, msg: Attributes): Attributes.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Attributes, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Attributes;
      static deserializeBinaryFromReader(message: Attributes, reader: jspb.BinaryReader): Attributes;
    }

    export namespace Attributes {
      export type AsObject = {
        attrsMap: Array<[string, string]>,
      }
    }
  }
}

export class ModelInformations extends jspb.Message {
  clearInfoList(): void;
  getInfoList(): Array<Model.Information>;
  setInfoList(value: Array<Model.Information>): void;
  addInfo(value?: Model.Information, index?: number): Model.Information;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInformations.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInformations): ModelInformations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModelInformations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInformations;
  static deserializeBinaryFromReader(message: ModelInformations, reader: jspb.BinaryReader): ModelInformations;
}

export namespace ModelInformations {
  export type AsObject = {
    infoList: Array<Model.Information.AsObject>,
  }
}

export class MXNetInferenceRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MXNetInferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MXNetInferenceRequest): MXNetInferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MXNetInferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MXNetInferenceRequest;
  static deserializeBinaryFromReader(message: MXNetInferenceRequest, reader: jspb.BinaryReader): MXNetInferenceRequest;
}

export namespace MXNetInferenceRequest {
  export type AsObject = {
    id: string,
    modelName: string,
    url: string,
    data: Uint8Array | string,
  }
}

export class Feature extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getName(): string;
  setName(value: string): void;

  getProbability(): number;
  setProbability(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    index: number,
    name: string,
    probability: number,
  }
}

export class MXNetInferenceResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): void;
  addFeatures(value?: Feature, index?: number): Feature;

  hasError(): boolean;
  clearError(): void;
  getError(): ErrorStatus | undefined;
  setError(value?: ErrorStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MXNetInferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MXNetInferenceResponse): MXNetInferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MXNetInferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MXNetInferenceResponse;
  static deserializeBinaryFromReader(message: MXNetInferenceResponse, reader: jspb.BinaryReader): MXNetInferenceResponse;
}

export namespace MXNetInferenceResponse {
  export type AsObject = {
    id: string,
    featuresList: Array<Feature.AsObject>,
    error?: ErrorStatus.AsObject,
  }
}

export class MXNetModelInformationRequest extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MXNetModelInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MXNetModelInformationRequest): MXNetModelInformationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MXNetModelInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MXNetModelInformationRequest;
  static deserializeBinaryFromReader(message: MXNetModelInformationRequest, reader: jspb.BinaryReader): MXNetModelInformationRequest;
}

export namespace MXNetModelInformationRequest {
  export type AsObject = {
    modelName: string,
  }
}

export class Null extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Null.AsObject;
  static toObject(includeInstance: boolean, msg: Null): Null.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Null, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Null;
  static deserializeBinaryFromReader(message: Null, reader: jspb.BinaryReader): Null;
}

export namespace Null {
  export type AsObject = {
  }
}

