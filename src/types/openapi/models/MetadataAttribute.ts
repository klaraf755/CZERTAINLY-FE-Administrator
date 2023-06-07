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

import type { AttributeContentType, AttributeType, BaseAttributeContentDto, MetadataAttributeProperties } from "./";

/**
 * Info attribute contains content that is for metadata. Its content can not be edited and is not send in requests to store.
 * @export
 * @interface MetadataAttribute
 */
export interface MetadataAttribute {
    /**
     * UUID of the Attribute for unique identification
     * @type {string}
     * @memberof MetadataAttribute
     */
    uuid: string;
    /**
     * Name of the Attribute that is used for identification
     * @type {string}
     * @memberof MetadataAttribute
     */
    name: string;
    /**
     * Optional description of the Attribute, should contain helper text on what is expected
     * @type {string}
     * @memberof MetadataAttribute
     */
    description?: string;
    /**
     * Content of the Attribute
     * @type {Array<BaseAttributeContentDto>}
     * @memberof MetadataAttribute
     */
    content: Array<BaseAttributeContentDto>;
    /**
     * @type {AttributeType}
     * @memberof MetadataAttribute
     */
    type: AttributeType;
    /**
     * @type {AttributeContentType}
     * @memberof MetadataAttribute
     */
    contentType: AttributeContentType;
    /**
     * @type {MetadataAttributeProperties}
     * @memberof MetadataAttribute
     */
    properties: MetadataAttributeProperties;
}
