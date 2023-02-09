// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.5.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface UpdateUserRequestDto
 */
export interface UpdateUserRequestDto {
    /**
     * Description of the user
     * @type {string}
     * @memberof UpdateUserRequestDto
     */
    description?: string;
    /**
     * First name of the user
     * @type {string}
     * @memberof UpdateUserRequestDto
     */
    firstName?: string;
    /**
     * Last name of the user
     * @type {string}
     * @memberof UpdateUserRequestDto
     */
    lastName?: string;
    /**
     * Email of the user
     * @type {string}
     * @memberof UpdateUserRequestDto
     */
    email: string;
    /**
     * Base64 Content of the admin certificate
     * @type {string}
     * @memberof UpdateUserRequestDto
     */
    certificateData?: string;
    /**
     * UUID of the existing certificate in the Inventory. Mandatory if certificate is not provided
     * @type {string}
     * @memberof UpdateUserRequestDto
     */
    certificateUuid?: string;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof UpdateUserRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
}
