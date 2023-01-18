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
    ComplianceRulesResponseDto,
} from './';

/**
 * @export
 * @interface ComplianceRulesListResponseDto
 */
export interface ComplianceRulesListResponseDto {
    /**
     * Name of the Compliance Provider
     * @type {string}
     * @memberof ComplianceRulesListResponseDto
     */
    connectorName: string;
    /**
     * UUID of the Compliance Provider
     * @type {string}
     * @memberof ComplianceRulesListResponseDto
     */
    connectorUuid: string;
    /**
     * Kind of the Compliance Provider
     * @type {string}
     * @memberof ComplianceRulesListResponseDto
     */
    kind: string;
    /**
     * Rules from Compliance Provider
     * @type {Array<ComplianceRulesResponseDto>}
     * @memberof ComplianceRulesListResponseDto
     */
    rules: Array<ComplianceRulesResponseDto>;
}