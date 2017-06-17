/* eslint-disable */
/*jshint esversion: 6 */
/*global fetch, btoa */
import Q from "q";
/**
 * TODO... fillme.
 * @class DLFramework
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
let DLFramework = (function() {
  "use strict";
  function DLFramework(options) {
    let domain = typeof options === "object" ? options.domain : options;
    this.domain = domain ? domain : "";
    if (this.domain.length === 0) {
      throw new Error("Domain parameter must be specified as a string.");
    }
  }

  function serializeQueryParams(parameters) {
    let str = [];
    for (let p in parameters) {
      if (parameters.hasOwnProperty(p)) {
        str.push(
          encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p])
        );
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
     * HTTP Request
     * @method
     * @name DLFramework#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
  DLFramework.prototype.request = function(
    method,
    url,
    parameters,
    body,
    headers,
    queryParameters,
    form,
    deferred
  ) {
    const queryParams = queryParameters && Object.keys(queryParameters).length
      ? serializeQueryParams(queryParameters)
      : null;
    const urlWithParams = url + (queryParams ? "?" + queryParams : "");

    if (body && !Object.keys(body).length) {
      body = undefined;
    }

    fetch(urlWithParams, {
      method,
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        deferred.resolve(body);
      })
      .catch(error => {
        deferred.reject(error);
      });
  };

  /**
     * 
     * @method
     * @name DLFramework#GetFrameworkManifest
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.frameworkName - TODO... fillme.
     * @param {string} parameters.frameworkVersion - TODO... fillme.
     */
  DLFramework.prototype.GetFrameworkManifest = function(parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    let deferred = Q.defer();
    let domain = this.domain,
      path = "/v1/framework/{framework_name}/info";
    let body = {},
      queryParameters = {},
      headers = {},
      form = {};

    headers["Accept"] = ["application/json"];
    headers["Content-Type"] = ["application/json"];

    path = path.replace("{framework_name}", parameters["frameworkName"]);

    if (parameters["frameworkName"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: frameworkName"));
      return deferred.promise;
    }

    if (parameters["frameworkVersion"] !== undefined) {
      queryParameters["framework_version"] = parameters["frameworkVersion"];
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request(
      "GET",
      domain + path,
      parameters,
      body,
      headers,
      queryParameters,
      form,
      deferred
    );

    return deferred.promise;
  };
  /**
     * 
     * @method
     * @name DLFramework#GetFrameworkModelManifest
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.frameworkName - TODO... fillme.
     * @param {string} parameters.modelName - TODO... fillme.
     * @param {} parameters.body - TODO... fillme.
     */
  DLFramework.prototype.GetFrameworkModelManifest = function(parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    let deferred = Q.defer();
    let domain = this.domain,
      path = "/v1/framework/{framework_name}/model/{model_name}/info";
    let body = {},
      queryParameters = {},
      headers = {},
      form = {};

    headers["Accept"] = ["application/json"];
    headers["Content-Type"] = ["application/json"];

    path = path.replace("{framework_name}", parameters["frameworkName"]);

    if (parameters["frameworkName"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: frameworkName"));
      return deferred.promise;
    }

    path = path.replace("{model_name}", parameters["modelName"]);

    if (parameters["modelName"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: modelName"));
      return deferred.promise;
    }

    if (parameters["body"] !== undefined) {
      body = parameters["body"];
    }

    if (parameters["body"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: body"));
      return deferred.promise;
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request(
      "POST",
      domain + path,
      parameters,
      body,
      headers,
      queryParameters,
      form,
      deferred
    );

    return deferred.promise;
  };
  /**
     * 
     * @method
     * @name DLFramework#Predict
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.frameworkName - TODO... fillme.
     * @param {string} parameters.modelName - TODO... fillme.
     * @param {} parameters.body - TODO... fillme.
     */
  DLFramework.prototype.Predict = function(parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    let deferred = Q.defer();
    let domain = this.domain,
      path = "/v1/framework/{framework_name}/model/{model_name}/predict";
    let body = {},
      queryParameters = {},
      headers = {},
      form = {};

    headers["Accept"] = ["application/json"];
    headers["Content-Type"] = ["application/json"];

    path = path.replace("{framework_name}", parameters["frameworkName"]);

    if (parameters["frameworkName"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: frameworkName"));
      return deferred.promise;
    }

    path = path.replace("{model_name}", parameters["modelName"]);

    if (parameters["modelName"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: modelName"));
      return deferred.promise;
    }

    if (parameters["body"] !== undefined) {
      body = parameters["body"];
    }

    if (parameters["body"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: body"));
      return deferred.promise;
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request(
      "POST",
      domain + path,
      parameters,
      body,
      headers,
      queryParameters,
      form,
      deferred
    );

    return deferred.promise;
  };
  /**
     * 
     * @method
     * @name DLFramework#GetFrameworkModels
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.frameworkName - TODO... fillme.
     * @param {string} parameters.frameworkVersion - TODO... fillme.
     */
  DLFramework.prototype.GetFrameworkModels = function(parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    let deferred = Q.defer();
    let domain = this.domain,
      path = "/v1/framework/{framework_name}/models";
    let body = {},
      queryParameters = {},
      headers = {},
      form = {};

    headers["Accept"] = ["application/json"];
    headers["Content-Type"] = ["application/json"];

    path = path.replace("{framework_name}", parameters["frameworkName"]);

    if (parameters["frameworkName"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: frameworkName"));
      return deferred.promise;
    }

    if (parameters["frameworkVersion"] !== undefined) {
      queryParameters["framework_version"] = parameters["frameworkVersion"];
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request(
      "GET",
      domain + path,
      parameters,
      body,
      headers,
      queryParameters,
      form,
      deferred
    );

    return deferred.promise;
  };
  /**
     * 
     * @method
     * @name DLFramework#GetFrameworkManifests
     * @param {object} parameters - method options and parameters
     */
  DLFramework.prototype.GetFrameworkManifests = function(parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    let deferred = Q.defer();
    let domain = this.domain,
      path = "/v1/frameworks";
    let body = {},
      queryParameters = {},
      headers = {},
      form = {};

    headers["Accept"] = ["application/json"];
    headers["Content-Type"] = ["application/json"];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request(
      "GET",
      domain + path,
      parameters,
      body,
      headers,
      queryParameters,
      form,
      deferred
    );

    return deferred.promise;
  };
  /**
     * 
     * @method
     * @name DLFramework#GetModelManifest
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.modelName - TODO... fillme.
     * @param {} parameters.body - TODO... fillme.
     */
  DLFramework.prototype.GetModelManifest = function(parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    let deferred = Q.defer();
    let domain = this.domain,
      path = "/v1/model/{model_name}/info";
    let body = {},
      queryParameters = {},
      headers = {},
      form = {};

    headers["Accept"] = ["application/json"];
    headers["Content-Type"] = ["application/json"];

    path = path.replace("{model_name}", parameters["modelName"]);

    if (parameters["modelName"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: modelName"));
      return deferred.promise;
    }

    if (parameters["body"] !== undefined) {
      body = parameters["body"];
    }

    if (parameters["body"] === undefined) {
      deferred.reject(new Error("Missing required  parameter: body"));
      return deferred.promise;
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request(
      "POST",
      domain + path,
      parameters,
      body,
      headers,
      queryParameters,
      form,
      deferred
    );

    return deferred.promise;
  };
  /**
     * 
     * @method
     * @name DLFramework#GetModelManifests
     * @param {object} parameters - method options and parameters
     */
  DLFramework.prototype.GetModelManifests = function(parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    let deferred = Q.defer();
    let domain = this.domain,
      path = "/v1/models";
    let body = {},
      queryParameters = {},
      headers = {},
      form = {};

    headers["Accept"] = ["application/json"];
    headers["Content-Type"] = ["application/json"];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request(
      "GET",
      domain + path,
      parameters,
      body,
      headers,
      queryParameters,
      form,
      deferred
    );

    return deferred.promise;
  };

  return DLFramework;
})();

exports.DLFramework = DLFramework;
