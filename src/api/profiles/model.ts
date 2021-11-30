import { AttributeResponse } from "models/attributes";
import { Observable } from "rxjs";

export interface RaProfileResponse {
  uuid: string;
  name: string;
  enabled: boolean;
  caInstanceUuid: string;
  description: string;
  caInstanceName: string;
}

export interface RaProfileDetailResponse {
  uuid: string;
  name: string;
  description?: string;
  caInstanceUuid: string;
  attributes?: AttributeResponse[];
  enabled: boolean;
  caInstanceName: string;
}

export interface RaProfileAuthorizationsReponse {
  uuid: string;
}

export interface EntityProfileResponse {
  id: number;
  name: string;
}

export interface ProfilesManagementApi {
  createRaProfile(
    caInstanceUuid: string,
    name: string,
    description: string,
    attributes: AttributeResponse[]
  ): Observable<string>;
  deleteRaProfile(uuid: string | number): Observable<void>;
  enableRaProfile(uuid: string | number): Observable<void>;
  disableRaProfile(uuid: string | number): Observable<void>;
  bulkDeleteRaProfile(uuid: (string | number)[]): Observable<void>;
  bulkEnableRaProfile(uuid: (string | number)[]): Observable<void>;
  bulkDisableRaProfile(uuid: (string | number)[]): Observable<void>;
  getRaProfilesList(): Observable<RaProfileResponse[]>;
  getAttributes(authorityUuid: string): Observable<AttributeResponse[]>;
  getRaProfileDetail(uuid: string): Observable<RaProfileDetailResponse>;
  getAuthorizedClients(
    uuid: string
  ): Observable<RaProfileAuthorizationsReponse[]>;
  updateRaProfile(
    caInstanceUuid: string,
    uuid: string,
    name: string,
    description: string,
    attributes: AttributeResponse[]
  ): Observable<RaProfileDetailResponse>;
}
