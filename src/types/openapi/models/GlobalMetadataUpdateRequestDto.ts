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

/**
 * @export
 * @interface GlobalMetadataUpdateRequestDto
 */
export interface GlobalMetadataUpdateRequestDto {
    /**
     * Attribute description
     * @type {string}
     * @memberof GlobalMetadataUpdateRequestDto
     */
    description: string;
    /**
     * Friendly name of the the Attribute
     * @type {string}
     * @memberof GlobalMetadataUpdateRequestDto
     */
    label: string;
    /**
     * Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.
     * @type {boolean}
     * @memberof GlobalMetadataUpdateRequestDto
     */
    visible?: boolean;
    /**
     * Group of the Attribute, used for the logical grouping of the Attribute
     * @type {string}
     * @memberof GlobalMetadataUpdateRequestDto
     */
    group?: string;
}
