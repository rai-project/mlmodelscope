import * as request from "superagent";
import {
    SuperAgentStatic
} from "superagent";

type CallbackHandler = (err: any, res ? : request.Response) => void;
type ModelManifestModel = {
    'base_url': string

    'weights_path': string

    'graph_path': string

    'is_archive': boolean

};
type TypeParameter = {
    'value': protobufStruct

};
type dlframeworkContainerHardware = {
    'gpu': string

    'cpu': string

};
type dlframeworkErrorStatus = {
    'ok': boolean

    'message': string

};
type dlframeworkFrameworkManifest = {
    'name': string

    'version': string

    'container': {}

};
type dlframeworkGetFrameworkManifestsResponse = {
    'manifests': Array < dlframeworkFrameworkManifest >
        | dlframeworkFrameworkManifest

};
type dlframeworkGetFrameworkModelManifestRequest = {
    'framework_name': string

    'framework_version': string

    'model_name': string

    'model_version': string

};
type dlframeworkGetModelManifestRequest = {
    'model_name': string

    'model_version': string

};
type dlframeworkGetModelManifestsResponse = {
    'manifests': Array < dlframeworkModelManifest >
        | dlframeworkModelManifest

};
type dlframeworkModelManifest = {
    'name': string

    'version': string

    'framework': dlframeworkFrameworkManifest

    'container': {}

    'description': string

    'reference': Array < string >
        | string

    'license': string

    'inputs': Array < dlframeworkModelManifestType >
        | dlframeworkModelManifestType

    'output': dlframeworkModelManifestType

    'before_preprocess': string

    'preprocess': string

    'after_preprocess': string

    'before_postprocess': string

    'postprocess': string

    'after_postprocess': string

    'model': ModelManifestModel

    'attributes': {}

};
type dlframeworkModelManifestType = {
    'type': string

    'description': string

    'parameters': {}

};
type dlframeworkPredictRequest = {
    'model_name': string

    'model_version': string

    'framework_name': string

    'framework_version': string

    'limit': number

    'data': string

    'url': string

};
type dlframeworkPredictResponse = {
    'id': string

    'features': Array < dlframeworkPredictionFeature >
        | dlframeworkPredictionFeature

    'error': dlframeworkErrorStatus

};
type dlframeworkPredictionFeature = {
    'index': string

    'name': string

    'probability': number

};
type protobufListValue = {
    'values': Array < protobufValue >
        | protobufValue

};
type protobufNullValue = "NULL_VALUE";
type protobufStruct = {
    'fields': {}

};
type protobufValue = {
    'null_value': protobufNullValue

    'number_value': number

    'string_value': string

    'bool_value': boolean

    'struct_value': protobufStruct

    'list_value': protobufListValue

};

type Logger = {
    log: (line: string) => any
};

/**
 * TODO... fillme.
 * @class DLFramework
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export default class DLFramework {

    private domain: string = "";
    private errorHandlers: CallbackHandler[] = [];

    constructor(domain ? : string, private logger ? : Logger) {
        if (domain) {
            this.domain = domain;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    private request(method: string, url: string, body: any, headers: any, queryParameters: any, form: any, reject: CallbackHandler, resolve: CallbackHandler) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        let req = (request as SuperAgentStatic)(method, url).query(queryParameters);

        Object.keys(headers).forEach(key => {
            req.set(key, headers[key]);
        });

        if (body) {
            req.send(body);
        }

        if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
            req.set('Content-Type', 'application/json');
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        req.end((error, response) => {
            if (error || !response.ok) {
                reject(error);
                this.errorHandlers.forEach(handler => handler(error));
            } else {
                resolve(response);
            }
        });
    }

    GetFrameworkManifestURL(parameters: {
        'frameworkName': string,
        'frameworkVersion' ? : string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/info';

        path = path.replace('{framework_name}', `${parameters['frameworkName']}`);
        if (parameters['frameworkVersion'] !== undefined) {
            queryParameters['framework_version'] = parameters['frameworkVersion'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name DLFramework#GetFrameworkManifest
     * @param {string} frameworkName - TODO... fillme.
     * @param {string} frameworkVersion - TODO... fillme.
     */
    GetFrameworkManifest(parameters: {
        'frameworkName': string,
        'frameworkVersion' ? : string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/info';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{framework_name}', `${parameters['frameworkName']}`);

            if (parameters['frameworkName'] === undefined) {
                reject(new Error('Missing required  parameter: frameworkName'));
                return;
            }

            if (parameters['frameworkVersion'] !== undefined) {
                queryParameters['framework_version'] = parameters['frameworkVersion'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    GetFrameworkModelManifestURL(parameters: {
        'frameworkName': string,
        'modelName': string,
        'body': dlframeworkGetFrameworkModelManifestRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/model/{model_name}/info';

        path = path.replace('{framework_name}', `${parameters['frameworkName']}`);

        path = path.replace('{model_name}', `${parameters['modelName']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name DLFramework#GetFrameworkModelManifest
     * @param {string} frameworkName - TODO... fillme.
     * @param {string} modelName - TODO... fillme.
     * @param {} body - TODO... fillme.
     */
    GetFrameworkModelManifest(parameters: {
        'frameworkName': string,
        'modelName': string,
        'body': dlframeworkGetFrameworkModelManifestRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/model/{model_name}/info';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{framework_name}', `${parameters['frameworkName']}`);

            if (parameters['frameworkName'] === undefined) {
                reject(new Error('Missing required  parameter: frameworkName'));
                return;
            }

            path = path.replace('{model_name}', `${parameters['modelName']}`);

            if (parameters['modelName'] === undefined) {
                reject(new Error('Missing required  parameter: modelName'));
                return;
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    PredictURL(parameters: {
        'frameworkName': string,
        'modelName': string,
        'body': dlframeworkPredictRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/model/{model_name}/predict';

        path = path.replace('{framework_name}', `${parameters['frameworkName']}`);

        path = path.replace('{model_name}', `${parameters['modelName']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name DLFramework#Predict
     * @param {string} frameworkName - TODO... fillme.
     * @param {string} modelName - TODO... fillme.
     * @param {} body - TODO... fillme.
     */
    Predict(parameters: {
        'frameworkName': string,
        'modelName': string,
        'body': dlframeworkPredictRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/model/{model_name}/predict';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{framework_name}', `${parameters['frameworkName']}`);

            if (parameters['frameworkName'] === undefined) {
                reject(new Error('Missing required  parameter: frameworkName'));
                return;
            }

            path = path.replace('{model_name}', `${parameters['modelName']}`);

            if (parameters['modelName'] === undefined) {
                reject(new Error('Missing required  parameter: modelName'));
                return;
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    GetFrameworkModelsURL(parameters: {
        'frameworkName': string,
        'frameworkVersion' ? : string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/models';

        path = path.replace('{framework_name}', `${parameters['frameworkName']}`);
        if (parameters['frameworkVersion'] !== undefined) {
            queryParameters['framework_version'] = parameters['frameworkVersion'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name DLFramework#GetFrameworkModels
     * @param {string} frameworkName - TODO... fillme.
     * @param {string} frameworkVersion - TODO... fillme.
     */
    GetFrameworkModels(parameters: {
        'frameworkName': string,
        'frameworkVersion' ? : string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/framework/{framework_name}/models';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{framework_name}', `${parameters['frameworkName']}`);

            if (parameters['frameworkName'] === undefined) {
                reject(new Error('Missing required  parameter: frameworkName'));
                return;
            }

            if (parameters['frameworkVersion'] !== undefined) {
                queryParameters['framework_version'] = parameters['frameworkVersion'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    GetFrameworkManifestsURL(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/frameworks';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name DLFramework#GetFrameworkManifests
     */
    GetFrameworkManifests(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/frameworks';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    GetModelManifestURL(parameters: {
        'modelName': string,
        'body': dlframeworkGetModelManifestRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/model/{model_name}/info';

        path = path.replace('{model_name}', `${parameters['modelName']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name DLFramework#GetModelManifest
     * @param {string} modelName - TODO... fillme.
     * @param {} body - TODO... fillme.
     */
    GetModelManifest(parameters: {
        'modelName': string,
        'body': dlframeworkGetModelManifestRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/model/{model_name}/info';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{model_name}', `${parameters['modelName']}`);

            if (parameters['modelName'] === undefined) {
                reject(new Error('Missing required  parameter: modelName'));
                return;
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    GetModelManifestsURL(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/models';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name DLFramework#GetModelManifests
     */
    GetModelManifests(parameters: {
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/v1/models';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

}