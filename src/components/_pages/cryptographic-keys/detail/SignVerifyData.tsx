import AttributeEditor from "components/Attributes/AttributeEditor";
import Spinner from "components/Spinner";

import { actions, selectors } from "ducks/cryptographic-operations";
import React, { useCallback, useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Form as BootstrapForm, FormGroup, Input, Label } from "reactstrap";
import { AttributeDescriptorModel, AttributeRequestModel } from "types/attributes";
import { CryptographicAlgorithm } from "types/openapi";

import { mutators } from "utils/attributes/attributeEditorMutators";
import { collectFormAttributes } from "utils/attributes/attributes";
import TabLayout from "../../../Layout/TabLayout";

interface Props {
   tokenUuid?: string;
   tokenProfileUuid?: string;
   keyUuid?: string;
   keyItemUuid?: string;
   algorithm?: CryptographicAlgorithm;
   visible: boolean;
   action: "sign" | "verify";
   onClose: () => void;
}


export default function SignVerifyData({
   tokenUuid,
   tokenProfileUuid,
   keyUuid,
   keyItemUuid,
   algorithm,
   visible,
   action,
   onClose
}: Props) {

   const dispatch = useDispatch();

   const isFetchingAttributes = useSelector(selectors.isFetchingSignatureAttributes);

   const attributes = useSelector(selectors.signatureAttributeDescriptors);

   const [groupAttributesCallbackAttributes, setGroupAttributesCallbackAttributes] = useState<AttributeDescriptorModel[]>([]);


   useEffect(

      () => {
         if (!visible) return;
         if (!tokenUuid) return;
         if(!tokenProfileUuid) return;
         if(!keyUuid) return;
         if(!keyItemUuid) return;
         if(!algorithm) return;
         dispatch(actions.listSignatureAttributeDescriptors({ 
            tokenInstanceUuid: tokenUuid,
            tokenProfileUuid: tokenProfileUuid,
            uuid: keyUuid,
            keyItemUuid: keyItemUuid,
            algorithm: algorithm
          }));
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [visible, tokenUuid, dispatch]

   )


   const onSubmit = useCallback(

      (values: any) => {

         if (!tokenUuid) return;

         const attribs: AttributeRequestModel[] = attributes && attributes.length > 0
            ?
            collectFormAttributes("attributes", [...(attributes ?? []), ...groupAttributesCallbackAttributes], values) || []
            :
            []
            ;
         if(action === "sign") {
            dispatch(actions.signData({
               tokenInstanceUuid: tokenUuid,
               keyItemUuid: keyItemUuid || "",
               uuid: keyUuid || "",
               tokenProfileUuid: tokenProfileUuid || "",
               request: {
                  signatureAttributes: attribs,
                  data: [{data: btoa(values.data)}],
               }
            }));
         } else {
            dispatch(actions.verifyData({
               tokenInstanceUuid: tokenUuid,
               keyItemUuid: keyItemUuid || "",
               uuid: keyUuid || "",
               tokenProfileUuid: tokenProfileUuid || "",
               request: {
                  signatureAttributes: attribs,
                  signatures: [{data: btoa(values.signature)}],
                  data: [{data: btoa(values.data)}],
               }
            }));
         }

         onClose();

      },
      [dispatch, attributes, onClose, tokenUuid, groupAttributesCallbackAttributes, action, keyUuid, keyItemUuid, tokenProfileUuid]

   )


   if (!tokenUuid) return <></>;

   return (
      <>
         <Form onSubmit={onSubmit} mutators={{ ...mutators() }} >

            {({ handleSubmit, pristine, submitting, valid }) => (

               <BootstrapForm onSubmit={handleSubmit}>

                  <Field name="data">

                  {({ input, meta }) => (

                     <FormGroup>

                        <Label for="data">Data</Label>

                        <Input
                           {...input}
                           id="data"
                           type="textarea"
                           placeholder={"Data to " + action}
                           valid={!meta.error && meta.touched}
                           invalid={!!meta.error && meta.touched}
                        />

                     </FormGroup>

                  )}

                  </Field>

                  {action === "verify" ? (

                        <Field name="signature">

                        {({ input, meta }) => (

                           <FormGroup>

                              <Label for="signature">Signature</Label>

                              <Input
                                 {...input}
                                 id="signature"
                                 type="textarea"
                                 placeholder={"Signature " + action}
                                 valid={!meta.error && meta.touched}
                                 invalid={!!meta.error && meta.touched}
                              />

                           </FormGroup>

                        )}

                        </Field>

                  ) : <></>}  

                  {!attributes || attributes.length === 0 ? <></> : (

                     <Field name="Attributes">

                        {({ input, meta }) => (

                           <FormGroup>

                               <br />

                               <TabLayout tabs={[
                                   {
                                       title: "Connector Attributes",
                                       content: (<AttributeEditor
                                           id="attributes"
                                           attributeDescriptors={attributes}
                                           groupAttributesCallbackAttributes={groupAttributesCallbackAttributes}
                                           setGroupAttributesCallbackAttributes={setGroupAttributesCallbackAttributes}
                                       />)
                                   }
                               ]} />

                           </FormGroup>

                        )}

                     </Field>

                  )}

                  <div style={{ textAlign: "right" }}>
                     <ButtonGroup>

                        <Button type="submit" color="primary" disabled={pristine || submitting || !valid} onClick={handleSubmit}>
                           {action === "sign" ? "Sign" : "Verify"}
                        </Button>

                        <Button type="button" color="secondary" onClick={onClose}>
                           Cancel
                        </Button>

                     </ButtonGroup>
                  </div>

               </BootstrapForm>

            )}

         </Form>

         <Spinner active={isFetchingAttributes} />
      </>

   )

}