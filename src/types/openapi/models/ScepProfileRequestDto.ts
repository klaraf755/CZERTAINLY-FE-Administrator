// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.7.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { RequestAttributeDto } from "./";

/**
 * @export
 * @interface ScepProfileRequestDto
 */
export interface ScepProfileRequestDto {
    /**
     * Description of the SCEP Profile
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    description?: string;
    /**
     * RA Profile UUID
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    raProfileUuid?: string;
    /**
     * List of Attributes to issue Certificate
     * @type {Array<RequestAttributeDto>}
     * @memberof ScepProfileRequestDto
     */
    issueCertificateAttributes: Array<RequestAttributeDto>;
    /**
     * Require manual approval for SCEP requests
     * @type {boolean}
     * @memberof ScepProfileRequestDto
     */
    requireManualApproval?: boolean;
    /**
     * UUID of the Certificate to be used as CA Certificate for SCEP Requests
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    caCertificateUuid: string;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof ScepProfileRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
    /**
     * Minimum expiry days to allow renewal of certificate. Empty or the value \'0\' will be considered as null and half life of the certificate validity will be considered for the protocol
     * @type {number}
     * @memberof ScepProfileRequestDto
     */
    renewalThreshold?: number;
    /**
     * Include CA Certificate in the SCEP Message response
     * @type {boolean}
     * @memberof ScepProfileRequestDto
     */
    includeCaCertificate?: boolean;
    /**
     * Include CA Certificate Chain in the SCEP Message response
     * @type {boolean}
     * @memberof ScepProfileRequestDto
     */
    includeCaCertificateChain?: boolean;
    /**
     * Challenge Password for the SCEP Request
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    challengePassword?: string;
    /**
     * Status of Intune
     * @type {boolean}
     * @memberof ScepProfileRequestDto
     */
    enableIntune?: boolean;
    /**
     * Intune Tenant
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    intuneTenant?: string;
    /**
     * Intune Application ID
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    intuneApplicationId?: string;
    /**
     * Intune Application Key
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    intuneApplicationKey?: string;
    /**
     * Name of the SCEP Profile
     * @type {string}
     * @memberof ScepProfileRequestDto
     */
    name: string;
}
