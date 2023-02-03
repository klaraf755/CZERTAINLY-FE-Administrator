import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Container } from "reactstrap";

import { actions, selectors } from "ducks/cryptographic-keys";

import Widget from "components/Widget";
import CustomTable, { TableDataRow, TableHeader } from "components/CustomTable";
import WidgetButtons, { WidgetButtonProps } from "components/WidgetButtons";
import Dialog from "components/Dialog";
import { KeyCompromiseReason, KeyUsage } from "types/openapi";
import Select from "react-select";
import { dateFormatter } from "utils/dateUtil";
import KeyStateCircle from "../KeyStateCircle";
import KeyStatusCircle from "../KeyStatusCircle";

function CryptographicKeyList() {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const checkedRows = useSelector(selectors.checkedRows);
   const cryptographicKeys = useSelector(selectors.cryptographicKeys);

   const isFetching = useSelector(selectors.isFetchingList);
   const isBulkDeleting = useSelector(selectors.isBulkDeleting);
   const isBulkEnabling = useSelector(selectors.isBulkEnabling);
   const isBulkDisabling = useSelector(selectors.isBulkDisabling);
   const isBulkUpdatingKeyUsage = useSelector(selectors.isBulkUpdatingKeyUsage);
   const isBulkCompromising = useSelector(selectors.isBulkCompromising);
   const isBulkDestroying = useSelector(selectors.isBulkDestroying);


   const isBusy = isFetching || isBulkDeleting || isBulkEnabling || isBulkDisabling || isBulkUpdatingKeyUsage || isBulkCompromising || isBulkDestroying;

   const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

   const [confirmCompromise, setConfirmCompromise] = useState<boolean>(false);

   const [confirmDestroy, setConfirmDestroy] = useState<boolean>(false);

   const [keyUsageUpdate, setKeyUsageUpdate] = useState<boolean>(false);

   const [keyUsages, setKeyUsages] = useState<KeyUsage[]>([]);

   const [compromiseReason, setCompromiseReason] = useState<KeyCompromiseReason>();


   useEffect(() => {

      dispatch(actions.setCheckedRows({ checkedRows: [] }));
      dispatch(actions.clearDeleteErrorMessages())
      dispatch(actions.listCryptographicKeys({}));

   }, [dispatch]);


   const onAddClick = useCallback(

      () => {
         navigate(`./add`);
      },
      [navigate]

   );


   const onEnableClick = useCallback(

      () => {
         dispatch(actions.bulkEnableCryptographicKeyItems({ uuids: checkedRows }));
      },
      [checkedRows, dispatch]

   );


   const onDisableClick = useCallback(

      () => {
         dispatch(actions.bulkDisableCryptographicKeyItems({ uuids: checkedRows }));
      },
      [checkedRows, dispatch]

   );


   const onDeleteConfirmed = useCallback(

      () => {
         dispatch(actions.bulkDeleteCryptographicKeyItems({ uuids: checkedRows }));
         setConfirmDelete(false);
      },
      [checkedRows, dispatch]

   );


   const onUpdateKeyUsageConfirmed = useCallback(

      () => {
         dispatch(actions.bulkUpdateKeyItemUsage({ usage: {usage: keyUsages, uuids: checkedRows} }));
         setKeyUsageUpdate(false);
      },
      [checkedRows, dispatch, keyUsages]

   );

   const onCompromise = useCallback(

      () => {
         if(!compromiseReason) return;
         dispatch(actions.bulkCompromiseCryptographicKeyItems({ request: { reason: compromiseReason, uuids: checkedRows }}));
         setConfirmCompromise(false);
      },
      [checkedRows, dispatch, compromiseReason]

   );

   const onDestroy = useCallback(

      () => {
         dispatch(actions.bulkDestroyCryptographicKeyItems({ uuids: checkedRows }));
         setConfirmDestroy(false);
      },
      [checkedRows, dispatch]

   );


   const setCheckedRows = useCallback(

      (rows: (string | number)[]) => {
         dispatch(actions.setCheckedRows({ checkedRows: rows as string[] }));
      },
      [dispatch]

   );


   const buttons: WidgetButtonProps[] = useMemo(
      () => [
         { icon: "plus", disabled: false, tooltip: "Create", onClick: () => { onAddClick(); } },
         { icon: "trash", disabled: checkedRows.length === 0, tooltip: "Delete", onClick: () => { setConfirmDelete(true); } },
         { icon: "check", disabled: checkedRows.length === 0, tooltip: "Enable", onClick: () => { onEnableClick() } },
         { icon: "times", disabled: checkedRows.length === 0, tooltip: "Disable", onClick: () => { onDisableClick() } },
         { icon: "key", disabled: checkedRows.length === 0, tooltip: "Update Key Usage", onClick: () => { setKeyUsageUpdate(true) } },
         { icon: "handshake", disabled: checkedRows.length === 0, tooltip: "Compromised", onClick: () => { setConfirmCompromise(true) } },
         { icon: "bomb", disabled: checkedRows.length === 0, tooltip: "Destroy", onClick: () => { setConfirmDestroy(true) } },
      ],
      [checkedRows, onAddClick, onEnableClick, onDisableClick, setKeyUsageUpdate]
   );

   const keyUsageOptions = [
      { value: KeyUsage.Sign, label: "Signing" },
      { value: KeyUsage.Verify, label: "Verifying" },
      { value: KeyUsage.Encrypt, label: "Encrypting" },
      { value: KeyUsage.Decrypt, label: "Decrypting" },
      { value: KeyUsage.Wrap, label: "Wrapping Key" },
      { value: KeyUsage.Unwrap, label: "Unwrapping Key" },
   ]


   const title = useMemo(
      () => (
         <div>

            <div className="fa-pull-right mt-n-xs">
               <WidgetButtons buttons={buttons} />
            </div>

            <h5 className="mt-0">
               List of <span className="fw-semi-bold">Keys</span>
            </h5>

         </div>
      ),
      [buttons]
   );

   const keyUsageBody = 
         <div>
            
            <div className="form-group">
               <label className="form-label">Key Usage</label>
               <Select
                              isMulti = {true}
                              id="field"
                              options={keyUsageOptions}
                              onChange={(e) => {
                                 setKeyUsages(e.map((item) => item.value));
                              }}
                              isClearable={true}
                           />
            </div>

         </div>




   const cryptographicKeysTableHeaders: TableHeader[] = useMemo(

      () => [
         {
            id: "status",
            content: "Status",
            align: "center",
            width: "1%",
         },
         {
            id: "state",
            content: "State",
            align: "center",
            width: "1%",
         },
         {
            id: "keyName",
            content: "Name",
            width: "15%",
         },
         {
            id: "type",
            content: "Type",
            width: "15%",
         },
         {
            id: "algorithm",
            align: "center",
            content: "Algorithm",
            sortable: true,
            width: "15%",
         },
         {
            id: "size",
            align: "center",
            content: "Size",
            sortable: true,
            width: "15%",
         },
         {
            id: "format",
            align: "center",
            content: "Format",
            sortable: true,
            width: "15%",
         },
         {
            id: "creationTime",
            align: "center",
            content: "Creation Date",
            sortable: true,
            width: "15%",
         },
         {
            id: "group",
            align: "center",
            content: "Group",
            sortable: true,
            width: "15%",
         },
         {
            id: "owner",
            align: "center",
            content: "Owner",
            sortable: true,
            width: "15%",
         },
         {
            id: "tokenProfile",
            align: "center",
            content: "Token Profile",
            sortable: true,
            width: "15%",
         },
         {
            id: "tokenInstance",
            align: "center",
            content: "Token Instance",
            sortable: true,
            width: "15%",
         },
         {
            id: "associations",
            align: "center",
            content: "Associations",
            sortable: true,
            width: "15%",
         }
      ],
      []
   );


   const profilesTableData = (): TableDataRow[] => {
      var responseList: TableDataRow[] = [];
      for(let key in cryptographicKeys)   {
         for(let item in cryptographicKeys[key].items) {
            responseList.push({
               id: cryptographicKeys[key].items[item].uuid,
               columns: [
                  
                  <KeyStatusCircle status={cryptographicKeys[key].items[item].enabled}/>,

                  <KeyStateCircle state={cryptographicKeys[key].items[item].state}/>,

                  <span style={{ whiteSpace: "nowrap" }}><Link to={`./detail/${cryptographicKeys[key].tokenInstanceUuid || "unknown"}/${cryptographicKeys[key].uuid}`}>{cryptographicKeys[key].items[item].name}</Link></span>,
                  
                  <Badge color="secondary">{cryptographicKeys[key].items[item].type}</Badge>,

                  cryptographicKeys[key].items[item].cryptographicAlgorithm,

                  cryptographicKeys[key].items[item].length?.toString() || "unknown",

                  cryptographicKeys[key].items[item].format || "unknown",

                  <span style={{ whiteSpace: "nowrap" }}>{dateFormatter(cryptographicKeys[key].creationTime) || ""}</span>,

                  cryptographicKeys[key].group?.name || "",

                  cryptographicKeys[key].owner || "",

                  <Badge color="secondary">{cryptographicKeys[key].tokenProfileName}</Badge>,

                  <Badge color="primary">{cryptographicKeys[key].tokenInstanceName}</Badge>,

                  cryptographicKeys[key].associations?.toString() || "",
                  
               ]
            })
         }}
         return responseList;
      }

      const optionForCompromise = () => {
         var options = [];
         for (const reason in KeyCompromiseReason) {
            const myReason: KeyCompromiseReason = KeyCompromiseReason[reason as keyof typeof KeyCompromiseReason];
            options.push({ value: myReason, label: myReason });
         }
         return options;
        }


   return (

      <Container className="themed-container" fluid>

         <Widget title={title} busy={isBusy}>

            <br />
            <CustomTable
               headers={cryptographicKeysTableHeaders}
               data={profilesTableData()}
               onCheckedRowsChanged={setCheckedRows}
               canSearch={true}
               hasCheckboxes={true}
               hasPagination={true}
               // hasDetails={true}
            />

         </Widget>

         <Dialog
            isOpen={confirmDelete}
            caption={`Delete ${checkedRows.length > 1 ? "Keys" : "Key"}`}
            body={`You are about to delete ${checkedRows.length > 1 ? "a Key" : "Keys"}. Is this what you want to do?`}
            toggle={() => setConfirmDelete(false)}
            buttons={[
               { color: "danger", onClick: onDeleteConfirmed, body: "Yes, Delete" },
               { color: "secondary", onClick: () => setConfirmDelete(false), body: "Cancel" },
            ]}
         />

         <Dialog
            isOpen={confirmCompromise}
            caption={`${checkedRows.length > 1 ? "Keys" : "Key"} Compromised?`}
            body={
               <div>
                  <p>You are about to mark the Key as compromised. Is this what you want to do?</p>
                  <p><b>Warning:</b> This action cannot be undone.</p>
                  <Select
                     name="compromiseReason"
                     id="compromiseReason"
                     options={optionForCompromise()}
                     onChange={(e) => setCompromiseReason(e?.value)}
                  />
               </div>
            }
            toggle={() => setConfirmCompromise(false)}
            buttons={[
               { color: "danger", onClick: onCompromise, body: "Yes" },
               { color: "secondary", onClick: () => setConfirmCompromise(false), body: "Cancel" },
            ]}
         />

         <Dialog
            isOpen={confirmDestroy}
            caption={`Destroy ${checkedRows.length > 1 ? "Keys" : "Key"}`}
            body={`You are about to destroy ${checkedRows.length > 1 ? "a Key" : "Keys"}. Is this what you want to do?`}
            toggle={() => setConfirmDelete(false)}
            buttons={[
               { color: "danger", onClick: onDestroy, body: "Yes, Destroy" },
               { color: "secondary", onClick: () => setConfirmDelete(false), body: "Cancel" },
            ]}
         />

         <Dialog
            isOpen={keyUsageUpdate}
            caption={`Update Key Usage`}
            body={keyUsageBody}
            toggle={() => setKeyUsageUpdate(false)}
            buttons={[
               { color: "primary", onClick: onUpdateKeyUsageConfirmed, body: "Update" },
               { color: "secondary", onClick: () => setKeyUsageUpdate(false), body: "Cancel" },
            ]}
         />

      </Container>
   );
}

export default CryptographicKeyList;