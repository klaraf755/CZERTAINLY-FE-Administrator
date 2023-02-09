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
    AccountStatus,
} from './';

/**
 * @export
 * @interface AcmeAccountResponseDto
 */
export interface AcmeAccountResponseDto {
    /**
     * ID of the Account
     * @type {string}
     * @memberof AcmeAccountResponseDto
     */
    accountId: string;
    /**
     * UUID of the Account
     * @type {string}
     * @memberof AcmeAccountResponseDto
     */
    uuid: string;
    /**
     * Enabled flag. enabled=true, disabled=false
     * @type {boolean}
     * @memberof AcmeAccountResponseDto
     */
    enabled: boolean;
    /**
     * Order count for the Account
     * @type {number}
     * @memberof AcmeAccountResponseDto
     */
    totalOrders: number;
    /**
     * Number of successful Orders
     * @type {number}
     * @memberof AcmeAccountResponseDto
     */
    successfulOrders: number;
    /**
     * Number of failed Orders
     * @type {number}
     * @memberof AcmeAccountResponseDto
     */
    failedOrders: number;
    /**
     * Number of pending Orders
     * @type {number}
     * @memberof AcmeAccountResponseDto
     */
    pendingOrders: number;
    /**
     * Number of valid Orders
     * @type {number}
     * @memberof AcmeAccountResponseDto
     */
    validOrders: number;
    /**
     * Number of processing Orders
     * @type {number}
     * @memberof AcmeAccountResponseDto
     */
    processingOrders: number;
    /**
     * @type {AccountStatus}
     * @memberof AcmeAccountResponseDto
     */
    status: AccountStatus;
    /**
     * Contact information
     * @type {Array<string>}
     * @memberof AcmeAccountResponseDto
     */
    contact: Array<string>;
    /**
     * Terms of Service Agreed
     * @type {boolean}
     * @memberof AcmeAccountResponseDto
     */
    termsOfServiceAgreed: boolean;
    /**
     * Name of the RA Profile
     * @type {string}
     * @memberof AcmeAccountResponseDto
     */
    raProfileName: string;
    /**
     * UUID of the RA Profile
     * @type {string}
     * @memberof AcmeAccountResponseDto
     */
    raProfileUuid: string;
    /**
     * Name of the ACME Profile
     * @type {string}
     * @memberof AcmeAccountResponseDto
     */
    acmeProfileName: string;
    /**
     * UUID of the ACME Profile
     * @type {string}
     * @memberof AcmeAccountResponseDto
     */
    acmeProfileUuid: string;
}
