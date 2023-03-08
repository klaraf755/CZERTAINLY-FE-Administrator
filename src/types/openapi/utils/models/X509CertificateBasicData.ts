// tslint:disable
/**
 * CZERTAINLY Utils Service API
 * REST APIs for utility and helper function to work with certificates
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface X509CertificateBasicData
 */
export interface X509CertificateBasicData {
    /**
     * Subject of the X.509 certificate
     * @type {string}
     * @memberof X509CertificateBasicData
     */
    subject: string;
    /**
     * Issuer of the X.509 certificate
     * @type {string}
     * @memberof X509CertificateBasicData
     */
    issuer: string;
    /**
     * notBefore in epoch / unix format
     * @type {number}
     * @memberof X509CertificateBasicData
     */
    validFrom: number;
    /**
     * notAfter in epoch / unix format
     * @type {number}
     * @memberof X509CertificateBasicData
     */
    validTo: number;
    /**
     * Serial number of the certificate in HEX
     * @type {string}
     * @memberof X509CertificateBasicData
     */
    serialNumber: string;
}