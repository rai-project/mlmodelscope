// package: carml.org.dlframework
// file: github.com/rai-project/dlframework/dlframework.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../github.com/gogo/protobuf/gogoproto/gogo_pb";

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

export class ContainerHardware extends jspb.Message {
  getGpu(): string;
  setGpu(value: string): void;

  getCpu(): string;
  setCpu(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerHardware.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerHardware): ContainerHardware.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerHardware, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerHardware;
  static deserializeBinaryFromReader(message: ContainerHardware, reader: jspb.BinaryReader): ContainerHardware;
}

export namespace ContainerHardware {
  export type AsObject = {
    gpu: string,
    cpu: string,
  }
}

export class FrameworkManifest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getContainerMap(): jspb.Map<string, ContainerHardware>;
  clearContainerMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameworkManifest.AsObject;
  static toObject(includeInstance: boolean, msg: FrameworkManifest): FrameworkManifest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameworkManifest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameworkManifest;
  static deserializeBinaryFromReader(message: FrameworkManifest, reader: jspb.BinaryReader): FrameworkManifest;
}

export namespace FrameworkManifest {
  export type AsObject = {
    name: string,
    version: string,
    containerMap: Array<[string, ContainerHardware.AsObject]>,
  }
}

export class ModelManifest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  hasFramework(): boolean;
  clearFramework(): void;
  getFramework(): FrameworkManifest | undefined;
  setFramework(value?: FrameworkManifest): void;

  getContainerMap(): jspb.Map<string, ContainerHardware>;
  clearContainerMap(): void;
  getDescription(): string;
  setDescription(value: string): void;

  clearReferenceList(): void;
  getReferenceList(): Array<string>;
  setReferenceList(value: Array<string>): void;
  addReference(value: string, index?: number): string;

  getLicense(): string;
  setLicense(value: string): void;

  clearInputsList(): void;
  getInputsList(): Array<ModelManifest.Type>;
  setInputsList(value: Array<ModelManifest.Type>): void;
  addInputs(value?: ModelManifest.Type, index?: number): ModelManifest.Type;

  hasOutput(): boolean;
  clearOutput(): void;
  getOutput(): ModelManifest.Type | undefined;
  setOutput(value?: ModelManifest.Type): void;

  getBeforePreprocess(): string;
  setBeforePreprocess(value: string): void;

  getPreprocess(): string;
  setPreprocess(value: string): void;

  getAfterPreprocess(): string;
  setAfterPreprocess(value: string): void;

  getBeforePostprocess(): string;
  setBeforePostprocess(value: string): void;

  getPostprocess(): string;
  setPostprocess(value: string): void;

  getAfterPostprocess(): string;
  setAfterPostprocess(value: string): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): ModelManifest.Model | undefined;
  setModel(value?: ModelManifest.Model): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelManifest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelManifest): ModelManifest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModelManifest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelManifest;
  static deserializeBinaryFromReader(message: ModelManifest, reader: jspb.BinaryReader): ModelManifest;
}

export namespace ModelManifest {
  export type AsObject = {
    name: string,
    version: string,
    framework?: FrameworkManifest.AsObject,
    containerMap: Array<[string, ContainerHardware.AsObject]>,
    description: string,
    referenceList: Array<string>,
    license: string,
    inputsList: Array<ModelManifest.Type.AsObject>,
    output?: ModelManifest.Type.AsObject,
    beforePreprocess: string,
    preprocess: string,
    afterPreprocess: string,
    beforePostprocess: string,
    postprocess: string,
    afterPostprocess: string,
    model?: ModelManifest.Model.AsObject,
    attributesMap: Array<[string, string]>,
  }

  export class Type extends jspb.Message {
    getType(): string;
    setType(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getParametersMap(): jspb.Map<string, ModelManifest.Type.Parameter>;
    clearParametersMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Type.AsObject;
    static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Type;
    static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
  }

  export namespace Type {
    export type AsObject = {
      type: string,
      description: string,
      parametersMap: Array<[string, ModelManifest.Type.Parameter.AsObject]>,
    }

    export class Parameter extends jspb.Message {
      hasValue(): boolean;
      clearValue(): void;
      getValue(): google_protobuf_struct_pb.Struct | undefined;
      setValue(value?: google_protobuf_struct_pb.Struct): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Parameter.AsObject;
      static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Parameter;
      static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
    }

    export namespace Parameter {
      export type AsObject = {
        value?: google_protobuf_struct_pb.Struct.AsObject,
      }
    }
  }

  export class Model extends jspb.Message {
    getBaseUrl(): string;
    setBaseUrl(value: string): void;

    getWeightsPath(): string;
    setWeightsPath(value: string): void;

    getGraphPath(): string;
    setGraphPath(value: string): void;

    getIsArchive(): boolean;
    setIsArchive(value: boolean): void;

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
      baseUrl: string,
      weightsPath: string,
      graphPath: string,
      isArchive: boolean,
    }
  }
}

export class GetModelManifestsResponse extends jspb.Message {
  clearManifestsList(): void;
  getManifestsList(): Array<ModelManifest>;
  setManifestsList(value: Array<ModelManifest>): void;
  addManifests(value?: ModelManifest, index?: number): ModelManifest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelManifestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelManifestsResponse): GetModelManifestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelManifestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelManifestsResponse;
  static deserializeBinaryFromReader(message: GetModelManifestsResponse, reader: jspb.BinaryReader): GetModelManifestsResponse;
}

export namespace GetModelManifestsResponse {
  export type AsObject = {
    manifestsList: Array<ModelManifest.AsObject>,
  }
}

export class GetFrameworkManifestsResponse extends jspb.Message {
  clearManifestsList(): void;
  getManifestsList(): Array<FrameworkManifest>;
  setManifestsList(value: Array<FrameworkManifest>): void;
  addManifests(value?: FrameworkManifest, index?: number): FrameworkManifest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFrameworkManifestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFrameworkManifestsResponse): GetFrameworkManifestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFrameworkManifestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFrameworkManifestsResponse;
  static deserializeBinaryFromReader(message: GetFrameworkManifestsResponse, reader: jspb.BinaryReader): GetFrameworkManifestsResponse;
}

export namespace GetFrameworkManifestsResponse {
  export type AsObject = {
    manifestsList: Array<FrameworkManifest.AsObject>,
  }
}

export class GetFrameworkModelManifestRequest extends jspb.Message {
  getFrameworkName(): string;
  setFrameworkName(value: string): void;

  getFrameworkVersion(): string;
  setFrameworkVersion(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFrameworkModelManifestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFrameworkModelManifestRequest): GetFrameworkModelManifestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFrameworkModelManifestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFrameworkModelManifestRequest;
  static deserializeBinaryFromReader(message: GetFrameworkModelManifestRequest, reader: jspb.BinaryReader): GetFrameworkModelManifestRequest;
}

export namespace GetFrameworkModelManifestRequest {
  export type AsObject = {
    frameworkName: string,
    frameworkVersion: string,
    modelName: string,
    modelVersion: string,
  }
}

export class GetModelManifestRequest extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelManifestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelManifestRequest): GetModelManifestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelManifestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelManifestRequest;
  static deserializeBinaryFromReader(message: GetModelManifestRequest, reader: jspb.BinaryReader): GetModelManifestRequest;
}

export namespace GetModelManifestRequest {
  export type AsObject = {
    modelName: string,
    modelVersion: string,
  }
}

export class GetFrameworkManifestRequest extends jspb.Message {
  getFrameworkName(): string;
  setFrameworkName(value: string): void;

  getFrameworkVersion(): string;
  setFrameworkVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFrameworkManifestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFrameworkManifestRequest): GetFrameworkManifestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFrameworkManifestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFrameworkManifestRequest;
  static deserializeBinaryFromReader(message: GetFrameworkManifestRequest, reader: jspb.BinaryReader): GetFrameworkManifestRequest;
}

export namespace GetFrameworkManifestRequest {
  export type AsObject = {
    frameworkName: string,
    frameworkVersion: string,
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

export class PredictRequest extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  getFrameworkName(): string;
  setFrameworkName(value: string): void;

  getFrameworkVersion(): string;
  setFrameworkVersion(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string;
  setUrl(value: string): void;

  getInputCase(): PredictRequest.InputCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictRequest;
  static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
  export type AsObject = {
    modelName: string,
    modelVersion: string,
    frameworkName: string,
    frameworkVersion: string,
    limit: number,
    data: Uint8Array | string,
    url: string,
  }

  export enum InputCase {
    INPUT_NOT_SET = 0,
    DATA = 6,
    URL = 7,
  }
}

export class PredictionFeature extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getName(): string;
  setName(value: string): void;

  getProbability(): number;
  setProbability(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionFeature.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionFeature): PredictionFeature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionFeature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionFeature;
  static deserializeBinaryFromReader(message: PredictionFeature, reader: jspb.BinaryReader): PredictionFeature;
}

export namespace PredictionFeature {
  export type AsObject = {
    index: number,
    name: string,
    probability: number,
  }
}

export class PredictResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<PredictionFeature>;
  setFeaturesList(value: Array<PredictionFeature>): void;
  addFeatures(value?: PredictionFeature, index?: number): PredictionFeature;

  hasError(): boolean;
  clearError(): void;
  getError(): ErrorStatus | undefined;
  setError(value?: ErrorStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictResponse): PredictResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictResponse;
  static deserializeBinaryFromReader(message: PredictResponse, reader: jspb.BinaryReader): PredictResponse;
}

export namespace PredictResponse {
  export type AsObject = {
    id: string,
    featuresList: Array<PredictionFeature.AsObject>,
    error?: ErrorStatus.AsObject,
  }
}

