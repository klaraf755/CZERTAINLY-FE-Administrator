// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.6.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum CertificateValidationStatus {
    Success = 'success',
    Failed = 'failed',
    Warning = 'warning',
    Revoked = 'revoked',
    NotChecked = 'not_checked',
    Invalid = 'invalid',
    Expiring = 'expiring',
    Expired = 'expired'
}
