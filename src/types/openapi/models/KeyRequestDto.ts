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
 * @interface KeyRequestDto
 */
export interface KeyRequestDto {
    /**
     * Name of the Cryptographic Key
     * @type {string}
     * @memberof KeyRequestDto
     */
    name: string;
    /**
     * Description of the Cryptographic Key
     * @type {string}
     * @memberof KeyRequestDto
     */
    description: string;
    /**
     * Key Owner
     * @type {string}
     * @memberof KeyRequestDto
     */
    owner?: string;
    /**
     * UUID of the group
     * @type {string}
     * @memberof KeyRequestDto
     */
    groupUuid?: string;
    /**
     * List of Attributes to create a Key
     * @type {Array<RequestAttributeDto>}
     * @memberof KeyRequestDto
     */
    attributes: Array<RequestAttributeDto>;
    /**
     * Custom Attributes for the key
     * @type {Array<RequestAttributeDto>}
     * @memberof KeyRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
}
