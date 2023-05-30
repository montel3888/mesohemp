import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "react-bootstrap";

const BreadcrumbsStyle = styled.div`
.breadcrumb { margin: 0% 20% 5% 20%; }
@media only screen and (max-width: 767px) {
  .breadcrumb { margin: 0% 0% 5% 0%; }
}
`;

function Breadcrumbs(props) {
  return (
    <BreadcrumbsStyle>
      <Breadcrumb>
        <Breadcrumb.Item href ="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{props.id}</Breadcrumb.Item>
      </Breadcrumb>
    </BreadcrumbsStyle>
  );
}

export default Breadcrumbs;