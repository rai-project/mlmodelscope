/* eslint-disable */
/*jshint esversion: 6 */
/*global fetch, btoa */

"use strict"

import uuid from "uuid/v4";
import {
    has,
    includes,
    assign
} from "lodash";

const baseURL = process.env.REACT_APP_NETLIFY_API_URL || ""

function serializeQueryParams(parameters) {
    let str = [];
    for (let p in parameters) {
        if (parameters.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(parameters[p]));
        }
    }
    return str.join('&');
}

function mergeQueryParams(parameters, queryParameters) {
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters)
            .forEach(function(parameterName) {
                let parameter = parameters.$queryParameters[parameterName];
                queryParameters[parameterName] = parameter;
            });
    }
    return queryParameters;
}

const propagationHeaders = [
    "x-request-id",
    "x-powered-by",
    "x-b3-flags",
    "x-b3-traceid",
    "x-b3-spanid",
    "x-b3-sampled"
]

function processHeaders(headers) {
    let res = {};
    for (let key of headers.keys()) {
        if (includes(propagationHeaders, key)) {
            res[key] = headers.get(key)
        }
    }
    return {
        headers: res
    };
}

/**
 * Close a predictor clear it's memory.
 * @method
 * @name DLFramework#Close
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function Close(params) {
    let urlPath = baseURL + '/api/predict/close';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * The result is a prediction feature list.
 * @method
 * @name DLFramework#Dataset
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function Dataset(params) {
    let urlPath = baseURL + '/api/predict/dataset';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * The result is a prediction feature list for each image.
 * @method
 * @name DLFramework#Images
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function Images(params) {
    let urlPath = baseURL + '/api/predict/images';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * Opens a predictor and returns an id where the predictor
is accessible. The id can be used to perform inference
requests.
 * @method
 * @name DLFramework#Open
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function Open(params) {
    let urlPath = baseURL + '/api/predict/open';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * Clear method clears the internal cache of the predictors
 * @method
 * @name DLFramework#Reset
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function Reset(params) {
    let urlPath = baseURL + '/api/predict/reset';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * The result is a prediction feature stream.
 * @method
 * @name DLFramework#DatasetStream
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function DatasetStream(params) {
    let urlPath = baseURL + '/api/predict/stream/dataset';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * The result is a prediction feature stream for each image.
 * @method
 * @name DLFramework#ImagesStream
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function ImagesStream(params) {
    let urlPath = baseURL + '/api/predict/stream/images';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * The result is a prediction feature stream for each url.
 * @method
 * @name DLFramework#URLsStream
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function URLsStream(params) {
    let urlPath = baseURL + '/api/predict/stream/urls';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * The result is a prediction feature stream for each url.
 * @method
 * @name DLFramework#URLs
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function URLs(params) {
    let urlPath = baseURL + '/api/predict/urls';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * 
 * @method
 * @name DLFramework#FrameworkAgents
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.frameworkVersion - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function FrameworkAgents(params) {
    let urlPath = baseURL + '/api/registry/frameworks/agent';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['frameworkName'] !== undefined) {
        queryParameters['framework_name'] = parameters['frameworkName'];
    }

    if (parameters['frameworkVersion'] !== undefined) {
        queryParameters['framework_version'] = parameters['frameworkVersion'];
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'GET',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * 
 * @method
 * @name DLFramework#FrameworkManifests
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.frameworkVersion - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function FrameworkManifests(params) {
    let urlPath = baseURL + '/api/registry/frameworks/manifest';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['frameworkName'] !== undefined) {
        queryParameters['framework_name'] = parameters['frameworkName'];
    }

    if (parameters['frameworkVersion'] !== undefined) {
        queryParameters['framework_version'] = parameters['frameworkVersion'];
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'GET',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * 
 * @method
 * @name DLFramework#ModelAgents
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.frameworkVersion - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.modelName - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.modelVersion - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function ModelAgents(params) {
    let urlPath = baseURL + '/api/registry/models/agent';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['frameworkName'] !== undefined) {
        queryParameters['framework_name'] = parameters['frameworkName'];
    }

    if (parameters['frameworkVersion'] !== undefined) {
        queryParameters['framework_version'] = parameters['frameworkVersion'];
    }

    if (parameters['modelName'] !== undefined) {
        queryParameters['model_name'] = parameters['modelName'];
    }

    if (parameters['modelVersion'] !== undefined) {
        queryParameters['model_version'] = parameters['modelVersion'];
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'GET',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * 
 * @method
 * @name DLFramework#ModelManifests
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.frameworkVersion - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.modelName - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 * @param {string} parameters.modelVersion - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function ModelManifests(params) {
    let urlPath = baseURL + '/api/registry/models/manifest';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['frameworkName'] !== undefined) {
        queryParameters['framework_name'] = parameters['frameworkName'];
    }

    if (parameters['frameworkVersion'] !== undefined) {
        queryParameters['framework_version'] = parameters['frameworkVersion'];
    }

    if (parameters['modelName'] !== undefined) {
        queryParameters['model_name'] = parameters['modelName'];
    }

    if (parameters['modelVersion'] !== undefined) {
        queryParameters['model_version'] = parameters['modelVersion'];
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'GET',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * Login to MLModelScope platform
 * @method
 * @name DLFramework#Login
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function Login(params) {
    let urlPath = baseURL + '/api/auth/login';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};

/**
 * Signup to MLModelScope platform
 * @method
 * @name DLFramework#Signup
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - MLModelScope is a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.
 */
export async function Signup(params) {
    let urlPath = baseURL + '/api/auth/signup';
    let body = {},
        queryParameters = {},
        headers = {},
        form = {};

    if (params && params.headers) {
        headers = params.headers;
    }

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if (has(params, "requestId")) {
        headers['X-Request-ID'] = params.requestId;
    } else if (has(params, "X-Request-ID")) {
        headers['X-Request-ID'] = params["X-Request-ID"];
    } else {
        headers['X-Request-ID'] = uuid();
    }

    if (!has(headers, "Content-Type")) {
        headers["Content-Type"] = "application/json; charset=utf-8";
    }

    let parameters = params;

    if (parameters === undefined) {
        parameters = {};
    }

    if (parameters['body'] !== undefined) {
        parameters['body'] = JSON.stringify(parameters['body']);
    }

    if (parameters['body'] === undefined) {
        throw new Error('Missing required  parameter: body');
    }

    queryParameters = mergeQueryParams(parameters, queryParameters);

    const queryParams =
        queryParameters && Object.keys(queryParameters).length ?
        "?" + serializeQueryParams(queryParameters) :
        "";

    const creds = {
        credentials: 'include',
        cache: 'no-cache',
        mode: 'cors'
    };
    const options = {
        method: 'POST',
        headers,
        ...parameters,
        ...creds,
    };

    const response = await fetch(urlPath + queryParams, options);
    const json = await response.json()

    return {
        ...processHeaders(response.headers),
        ...json
    }
};