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
 * @interface CertificateValidationDto
 */
export interface CertificateValidationDto {
    /**
     * @type {string}
     * @memberof CertificateValidationDto
     */
    status?: CertificateValidationDtoStatusEnum;
    /**
     * @type {string}
     * @memberof CertificateValidationDto
     */
    message?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum CertificateValidationDtoStatusEnum {
    Success = 'success',
    Failed = 'failed',
    Warning = 'warning',
    Revoked = 'revoked',
    NotChecked = 'not_checked',
    Invalid = 'invalid',
    Expiring = 'expiring',
    Expired = 'expired'
}

