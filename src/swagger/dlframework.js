/* eslint-disable */
/*jshint esversion: 6 */
/*global fetch, btoa */

"use strict";

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
 * 
 * @method
 * @name DLFramework#GetFrameworkManifest
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.frameworkVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function GetFrameworkManifest(parameters) {
  if (parameters === undefined) {
    parameters = {};
  }
  let urlPath = "/v1/framework/{framework_name}/info";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  urlPath = urlPath.replace("{framework_name}", parameters["frameworkName"]);

  if (parameters["frameworkName"] === undefined) {
    throw new Error("Missing required  parameter: frameworkName");
  }

  if (parameters["frameworkVersion"] !== undefined) {
    queryParameters["framework_version"] = parameters["frameworkVersion"];
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  return function GetFrameworkManifestRequest({ http, path, resolve }) {
    const resolvedURL = resolve.value(urlPath);
    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams = convertObjectWithTemplates(queryParameters, resolve);
    // const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null ;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParams,
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
 * @name DLFramework#GetFrameworkModelManifest
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.modelName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function GetFrameworkModelManifest(parameters) {
  if (parameters === undefined) {
    parameters = {};
  }
  let urlPath = "/v1/framework/{framework_name}/model/{model_name}/info";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  urlPath = urlPath.replace("{framework_name}", parameters["frameworkName"]);

  if (parameters["frameworkName"] === undefined) {
    throw new Error("Missing required  parameter: frameworkName");
  }

  urlPath = urlPath.replace("{model_name}", parameters["modelName"]);

  if (parameters["modelName"] === undefined) {
    throw new Error("Missing required  parameter: modelName");
  }

  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  return function GetFrameworkModelManifestRequest({ http, path, resolve }) {
    const resolvedURL = resolve.value(urlPath);
    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams = convertObjectWithTemplates(queryParameters, resolve);
    // const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null ;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParams,
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
 * @name DLFramework#Predict
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.modelName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Predict(parameters) {
  if (parameters === undefined) {
    parameters = {};
  }
  let urlPath = "/v1/framework/{framework_name}/model/{model_name}/predict";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  urlPath = urlPath.replace("{framework_name}", parameters["frameworkName"]);

  if (parameters["frameworkName"] === undefined) {
    throw new Error("Missing required  parameter: frameworkName");
  }

  urlPath = urlPath.replace("{model_name}", parameters["modelName"]);

  if (parameters["modelName"] === undefined) {
    throw new Error("Missing required  parameter: modelName");
  }

  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  return function PredictRequest({ http, path, resolve }) {
    const resolvedURL = resolve.value(urlPath);
    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams = convertObjectWithTemplates(queryParameters, resolve);
    // const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null ;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParams,
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
 * @name DLFramework#GetFrameworkModels
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.frameworkVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function GetFrameworkModels(parameters) {
  if (parameters === undefined) {
    parameters = {};
  }
  let urlPath = "/v1/framework/{framework_name}/models";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  urlPath = urlPath.replace("{framework_name}", parameters["frameworkName"]);

  if (parameters["frameworkName"] === undefined) {
    throw new Error("Missing required  parameter: frameworkName");
  }

  if (parameters["frameworkVersion"] !== undefined) {
    queryParameters["framework_version"] = parameters["frameworkVersion"];
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  return function GetFrameworkModelsRequest({ http, path, resolve }) {
    const resolvedURL = resolve.value(urlPath);
    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams = convertObjectWithTemplates(queryParameters, resolve);
    // const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null ;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParams,
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
 * @name DLFramework#GetFrameworkManifests
 * @param {object} parameters - method options and parameters
 */
export function GetFrameworkManifests(parameters) {
  if (parameters === undefined) {
    parameters = {};
  }
  let urlPath = "/v1/frameworks";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  queryParameters = mergeQueryParams(parameters, queryParameters);

  return function GetFrameworkManifestsRequest({ http, path, resolve }) {
    const resolvedURL = resolve.value(urlPath);
    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams = convertObjectWithTemplates(queryParameters, resolve);
    // const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null ;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParams,
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
 * @name DLFramework#GetModelManifest
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.modelName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function GetModelManifest(parameters) {
  if (parameters === undefined) {
    parameters = {};
  }
  let urlPath = "/v1/model/{model_name}/info";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  urlPath = urlPath.replace("{model_name}", parameters["modelName"]);

  if (parameters["modelName"] === undefined) {
    throw new Error("Missing required  parameter: modelName");
  }

  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  return function GetModelManifestRequest({ http, path, resolve }) {
    const resolvedURL = resolve.value(urlPath);
    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams = convertObjectWithTemplates(queryParameters, resolve);
    // const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null ;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParams,
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
 * @name DLFramework#GetModelManifests
 * @param {object} parameters - method options and parameters
 */
export function GetModelManifests(parameters) {
  if (parameters === undefined) {
    parameters = {};
  }
  let urlPath = "/v1/models";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  headers["Accept"] = ["application/json"];
  headers["Content-Type"] = ["application/json"];

  queryParameters = mergeQueryParams(parameters, queryParameters);

  return function GetModelManifestsRequest({ http, path, resolve }) {
    const resolvedURL = resolve.value(urlPath);
    let resolvedBody = undefined;
    if (body && Object.keys(body).length) {
      resolvedBody = convertObjectWithTemplates(body, resolve);
    }

    const queryParams = convertObjectWithTemplates(queryParameters, resolve);
    // const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null ;

    return processResponse(
      http.request({
        url: resolvedURL,
        query: queryParams,
        method: "GET",
        headers,
        body: resolvedBody
      }),
      path
    );
  };
}
