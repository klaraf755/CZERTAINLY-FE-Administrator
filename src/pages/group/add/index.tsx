import { useMemo } from "react";
import { Container } from "reactstrap";

import GroupForm from "components/Forms/GroupForm";

export default function RaProfilesAdd() {

   const title = useMemo(
      () => (
         <h5>
            Add <span className="fw-semi-bold">Group</span>
         </h5>
      ),
      []
   );

   return (
      <Container className="themed-container" fluid>
         <GroupForm title={title} />
      </Container>
   );

}
