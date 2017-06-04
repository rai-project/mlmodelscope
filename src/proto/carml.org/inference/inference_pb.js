/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

var google_protobuf_any_pb = require("google-protobuf/google/protobuf/any_pb.js");
goog.exportSymbol("proto.carml.org.docker.ErrorStatus", null, global);
goog.exportSymbol("proto.carml.org.docker.InferenceRequest", null, global);
goog.exportSymbol("proto.carml.org.docker.InferenceResponse", null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.carml.org.docker.InferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carml.org.docker.InferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.carml.org.docker.InferenceRequest.displayName =
    "proto.carml.org.docker.InferenceRequest";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.carml.org.docker.InferenceRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.carml.org.docker.InferenceRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carml.org.docker.InferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
  proto.carml.org.docker.InferenceRequest.toObject = function(
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, "")
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.carml.org.docker.InferenceRequest}
 */
proto.carml.org.docker.InferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carml.org.docker.InferenceRequest();
  return proto.carml.org.docker.InferenceRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carml.org.docker.InferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carml.org.docker.InferenceRequest}
 */
proto.carml.org.docker.InferenceRequest.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value /** @type {string} */ = reader.readString();
        msg.setId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.carml.org.docker.InferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carml.org.docker.InferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carml.org.docker.InferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.carml.org.docker.InferenceRequest.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.carml.org.docker.InferenceRequest.prototype.getId = function() {
  return /** @type {string} */ jspb.Message.getFieldWithDefault(this, 1, "");
};

/** @param {string} value */
proto.carml.org.docker.InferenceRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.carml.org.docker.InferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carml.org.docker.InferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.carml.org.docker.InferenceResponse.displayName =
    "proto.carml.org.docker.InferenceResponse";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.carml.org.docker.InferenceResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.carml.org.docker.InferenceResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carml.org.docker.InferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
  proto.carml.org.docker.InferenceResponse.toObject = function(
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ""),
        error:
          (f = msg.getError()) &&
            proto.carml.org.docker.ErrorStatus.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.carml.org.docker.InferenceResponse}
 */
proto.carml.org.docker.InferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carml.org.docker.InferenceResponse();
  return proto.carml.org.docker.InferenceResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carml.org.docker.InferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carml.org.docker.InferenceResponse}
 */
proto.carml.org.docker.InferenceResponse.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value /** @type {string} */ = reader.readString();
        msg.setId(value);
        break;
      case 3:
        var value = new proto.carml.org.docker.ErrorStatus();
        reader.readMessage(
          value,
          proto.carml.org.docker.ErrorStatus.deserializeBinaryFromReader
        );
        msg.setError(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.carml.org.docker.InferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carml.org.docker.InferenceResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carml.org.docker.InferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.carml.org.docker.InferenceResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.carml.org.docker.ErrorStatus.serializeBinaryToWriter
    );
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.carml.org.docker.InferenceResponse.prototype.getId = function() {
  return /** @type {string} */ jspb.Message.getFieldWithDefault(this, 1, "");
};

/** @param {string} value */
proto.carml.org.docker.InferenceResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional ErrorStatus error = 3;
 * @return {?proto.carml.org.docker.ErrorStatus}
 */
proto.carml.org.docker.InferenceResponse.prototype.getError = function() {
  return /** @type{?proto.carml.org.docker.ErrorStatus} */ jspb.Message.getWrapperField(
    this,
    proto.carml.org.docker.ErrorStatus,
    3
  );
};

/** @param {?proto.carml.org.docker.ErrorStatus|undefined} value */
proto.carml.org.docker.InferenceResponse.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.carml.org.docker.InferenceResponse.prototype.clearError = function() {
  this.setError(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.carml.org.docker.InferenceResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.carml.org.docker.ErrorStatus = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.carml.org.docker.ErrorStatus.repeatedFields_,
    null
  );
};
goog.inherits(proto.carml.org.docker.ErrorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.carml.org.docker.ErrorStatus.displayName =
    "proto.carml.org.docker.ErrorStatus";
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.carml.org.docker.ErrorStatus.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.carml.org.docker.ErrorStatus.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.carml.org.docker.ErrorStatus.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carml.org.docker.ErrorStatus} msg The msg instance to transform.
 * @return {!Object}
 */
  proto.carml.org.docker.ErrorStatus.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        message: jspb.Message.getFieldWithDefault(msg, 1, ""),
        detailsList: jspb.Message.toObjectList(
          msg.getDetailsList(),
          google_protobuf_any_pb.Any.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.carml.org.docker.ErrorStatus}
 */
proto.carml.org.docker.ErrorStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carml.org.docker.ErrorStatus();
  return proto.carml.org.docker.ErrorStatus.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carml.org.docker.ErrorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carml.org.docker.ErrorStatus}
 */
proto.carml.org.docker.ErrorStatus.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value /** @type {string} */ = reader.readString();
        msg.setMessage(value);
        break;
      case 2:
        var value = new google_protobuf_any_pb.Any();
        reader.readMessage(
          value,
          google_protobuf_any_pb.Any.deserializeBinaryFromReader
        );
        msg.addDetails(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.carml.org.docker.ErrorStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carml.org.docker.ErrorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carml.org.docker.ErrorStatus} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.carml.org.docker.ErrorStatus.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};

/**
 * optional string message = 1;
 * @return {string}
 */
proto.carml.org.docker.ErrorStatus.prototype.getMessage = function() {
  return /** @type {string} */ jspb.Message.getFieldWithDefault(this, 1, "");
};

/** @param {string} value */
proto.carml.org.docker.ErrorStatus.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * repeated google.protobuf.Any details = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.carml.org.docker.ErrorStatus.prototype.getDetailsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ jspb.Message.getRepeatedWrapperField(
    this,
    google_protobuf_any_pb.Any,
    2
  );
};

/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.carml.org.docker.ErrorStatus.prototype.setDetailsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.carml.org.docker.ErrorStatus.prototype.addDetails = function(
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.protobuf.Any,
    opt_index
  );
};

proto.carml.org.docker.ErrorStatus.prototype.clearDetailsList = function() {
  this.setDetailsList([]);
};

goog.object.extend(exports, proto.carml.org.docker);
