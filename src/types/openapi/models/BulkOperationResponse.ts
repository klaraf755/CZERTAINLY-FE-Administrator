// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.8.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface BulkOperationResponse
 */
export interface BulkOperationResponse {
    /**
     * Status of the operation
     * @type {string}
     * @memberof BulkOperationResponse
     */
    status: BulkOperationResponseStatusEnum;
    /**
     * Number of items failed
     * @type {number}
     * @memberof BulkOperationResponse
     */
    failedItem: number;
    /**
     * Message for the action
     * @type {string}
     * @memberof BulkOperationResponse
     */
    message: string;
}

/**
 * @export
 * @enum {string}
 */
export enum BulkOperationResponseStatusEnum {
    Success = "SUCCESS",
    Failed = "FAILED",
    Partial = "PARTIAL",
}
