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
 * @interface CertificateContentDto
 */
export interface CertificateContentDto {
    /**
     * UUID of the Certificate
     * @type {string}
     * @memberof CertificateContentDto
     */
    uuid: string;
    /**
     * Certificate common name
     * @type {string}
     * @memberof CertificateContentDto
     */
    commonName: string;
    /**
     * Certificate serial number
     * @type {string}
     * @memberof CertificateContentDto
     */
    serialNumber: string;
    /**
     * Base64 encoded Certificate content
     * @type {string}
     * @memberof CertificateContentDto
     */
    certificateContent: string;
}
