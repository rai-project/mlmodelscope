// package: carml.org.web
// file: proto/carml.org/inference/inference.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as github_com_rai_project_dlframework_mxnet_model_pb from "../../../github.com/rai-project/dlframework/mxnet/model_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../github.com/gogo/protobuf/gogoproto/gogo_pb";

export class InferenceRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InferenceRequest): InferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferenceRequest;
  static deserializeBinaryFromReader(message: InferenceRequest, reader: jspb.BinaryReader): InferenceRequest;
}

export namespace InferenceRequest {
  export type AsObject = {
    id: string,
  }
}

export class InferenceResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): ErrorStatus | undefined;
  setError(value?: ErrorStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InferenceResponse): InferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferenceResponse;
  static deserializeBinaryFromReader(message: InferenceResponse, reader: jspb.BinaryReader): InferenceResponse;
}

export namespace InferenceResponse {
  export type AsObject = {
    id: string,
    error?: ErrorStatus.AsObject,
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

export class ErrorStatus extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  clearDetailsList(): void;
  getDetailsList(): Array<google_protobuf_any_pb.Any>;
  setDetailsList(value: Array<google_protobuf_any_pb.Any>): void;
  addDetails(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

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
    message: string,
    detailsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class GetModelInformationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelInformationRequest): GetModelInformationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelInformationRequest;
  static deserializeBinaryFromReader(message: GetModelInformationRequest, reader: jspb.BinaryReader): GetModelInformationRequest;
}

export namespace GetModelInformationRequest {
  export type AsObject = {
    name: string,
  }
}

