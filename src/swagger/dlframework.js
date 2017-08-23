/* eslint-disable */
/*jshint esversion: 6 */
/*global fetch, btoa */

"use strict";

import uuid from "uuid/v4";
import {
  convertObjectWithTemplates,
  processResponse
} from "@cerebral/http/lib/utils";

function serializeQueryParams(parameters) {
  let str = [];
  for (let p in parameters) {
    if (parameters.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]));
    }
  }
  return str.join("&");
}

function mergeQueryParams(parameters, queryParameters) {
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      let parameter = parameters.$queryParameters[parameterName];
      queryParameters[parameterName] = parameter;
    });
  }
  return queryParameters;
}

/**
 * The result is a prediction feature stream.
 * @method
 * @name DLFramework#Dataset
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body -
 */
export function Dataset(params) {
  let urlPath = "/v1/predict/dataset";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  headers["X-Request-ID"] = uuid();

  return function DatasetRequest({ http, path, resolve }) {
    let parameters = params;

    if (parameters === undefined) {
      parameters = {};
    }

    if (parameters["body"] !== undefined) {
      body = resolve.value(parameters["body"]);
    }

    if (parameters["body"] === undefined) {
      throw new Error("Missing required  parameter: body");
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams =
      queryParameters && Object.keys(queryParameters).length
        ? "?" + serializeQueryParams(queryParameters)
        : "";
    const resolvedURL = resolve.value(urlPath) + queryParams;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParameters,
        method: "POST",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}

/**
 * The result is a prediction feature stream for each image.
 * @method
 * @name DLFramework#Images
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - (streaming inputs)
 */
export function Images(params) {
  let urlPath = "/v1/predict/images";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  headers["X-Request-ID"] = uuid();

  return function ImagesRequest({ http, path, resolve }) {
    let parameters = params;

    if (parameters === undefined) {
      parameters = {};
    }

    if (parameters["body"] !== undefined) {
      body = resolve.value(parameters["body"]);
    }

    if (parameters["body"] === undefined) {
      throw new Error("Missing required  parameter: body");
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams =
      queryParameters && Object.keys(queryParameters).length
        ? "?" + serializeQueryParams(queryParameters)
        : "";
    const resolvedURL = resolve.value(urlPath) + queryParams;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParameters,
        method: "POST",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}

/**
 * The result is a prediction feature stream for each url.
 * @method
 * @name DLFramework#URLs
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - (streaming inputs)
 */
export function URLs(params) {
  let urlPath = "/v1/predict/urls";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  headers["X-Request-ID"] = uuid();

  return function URLsRequest({ http, path, resolve }) {
    let parameters = params;

    if (parameters === undefined) {
      parameters = {};
    }

    if (parameters["body"] !== undefined) {
      body = resolve.value(parameters["body"]);
    }

    if (parameters["body"] === undefined) {
      throw new Error("Missing required  parameter: body");
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams =
      queryParameters && Object.keys(queryParameters).length
        ? "?" + serializeQueryParams(queryParameters)
        : "";
    const resolvedURL = resolve.value(urlPath) + queryParams;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParameters,
        method: "POST",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}

/**
 *
 * @method
 * @name DLFramework#FrameworkAgents
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName -
 * @param {string} parameters.frameworkVersion -
 */
export function FrameworkAgents(params) {
  let urlPath = "/v1/registry/frameworks/agent";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  headers["X-Request-ID"] = uuid();

  return function FrameworkAgentsRequest({ http, path, resolve }) {
    let parameters = params;

    if (parameters === undefined) {
      parameters = {};
    }

    if (parameters["frameworkName"] !== undefined) {
      queryParameters["framework_name"] = resolve.value(
        parameters["frameworkName"]
      );
    }

    if (parameters["frameworkVersion"] !== undefined) {
      queryParameters["framework_version"] = resolve.value(
        parameters["frameworkVersion"]
      );
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams =
      queryParameters && Object.keys(queryParameters).length
        ? "?" + serializeQueryParams(queryParameters)
        : "";
    const resolvedURL = resolve.value(urlPath) + queryParams;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParameters,
        method: "GET",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}

/**
 *
 * @method
 * @name DLFramework#FrameworkManifests
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName -
 * @param {string} parameters.frameworkVersion -
 */
export function FrameworkManifests(params) {
  let urlPath = "/v1/registry/frameworks/manifest";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  headers["X-Request-ID"] = uuid();

  return function FrameworkManifestsRequest({ http, path, resolve }) {
    let parameters = params;

    if (parameters === undefined) {
      parameters = {};
    }

    if (parameters["frameworkName"] !== undefined) {
      queryParameters["framework_name"] = resolve.value(
        parameters["frameworkName"]
      );
    }

    if (parameters["frameworkVersion"] !== undefined) {
      queryParameters["framework_version"] = resolve.value(
        parameters["frameworkVersion"]
      );
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams =
      queryParameters && Object.keys(queryParameters).length
        ? "?" + serializeQueryParams(queryParameters)
        : "";
    const resolvedURL = resolve.value(urlPath) + queryParams;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParameters,
        method: "GET",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}

/**
 *
 * @method
 * @name DLFramework#ModelAgents
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName -
 * @param {string} parameters.frameworkVersion -
 * @param {string} parameters.modelName -
 * @param {string} parameters.modelVersion -
 */
export function ModelAgents(params) {
  let urlPath = "/v1/registry/models/agent";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  headers["X-Request-ID"] = uuid();

  return function ModelAgentsRequest({ http, path, resolve }) {
    let parameters = params;

    if (parameters === undefined) {
      parameters = {};
    }

    if (parameters["frameworkName"] !== undefined) {
      queryParameters["framework_name"] = resolve.value(
        parameters["frameworkName"]
      );
    }

    if (parameters["frameworkVersion"] !== undefined) {
      queryParameters["framework_version"] = resolve.value(
        parameters["frameworkVersion"]
      );
    }

    if (parameters["modelName"] !== undefined) {
      queryParameters["model_name"] = resolve.value(parameters["modelName"]);
    }

    if (parameters["modelVersion"] !== undefined) {
      queryParameters["model_version"] = resolve.value(
        parameters["modelVersion"]
      );
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams =
      queryParameters && Object.keys(queryParameters).length
        ? "?" + serializeQueryParams(queryParameters)
        : "";
    const resolvedURL = resolve.value(urlPath) + queryParams;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParameters,
        method: "GET",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}

/**
 *
 * @method
 * @name DLFramework#ModelManifests
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName -
 * @param {string} parameters.frameworkVersion -
 * @param {string} parameters.modelName -
 * @param {string} parameters.modelVersion -
 */
export function ModelManifests(params) {
  let urlPath = "/v1/registry/models/manifest";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  headers["X-Request-ID"] = uuid();

  return function ModelManifestsRequest({ http, path, resolve }) {
    let parameters = params;

    if (parameters === undefined) {
      parameters = {};
    }

    if (parameters["frameworkName"] !== undefined) {
      queryParameters["framework_name"] = resolve.value(
        parameters["frameworkName"]
      );
    }

    if (parameters["frameworkVersion"] !== undefined) {
      queryParameters["framework_version"] = resolve.value(
        parameters["frameworkVersion"]
      );
    }

    if (parameters["modelName"] !== undefined) {
      queryParameters["model_name"] = resolve.value(parameters["modelName"]);
    }

    if (parameters["modelVersion"] !== undefined) {
      queryParameters["model_version"] = resolve.value(
        parameters["modelVersion"]
      );
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams =
      queryParameters && Object.keys(queryParameters).length
        ? "?" + serializeQueryParams(queryParameters)
        : "";
    const resolvedURL = resolve.value(urlPath) + queryParams;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParameters,
        method: "GET",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}
