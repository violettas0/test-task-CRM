import React from "react";
import { CRMServiceConsumer } from '../crm-service-context'

const withCRMService = (Wrapped) => {
    return (props) => {
        return (
            <CRMServiceConsumer>
                {
                    (CRMService) => {
                        return (
                            <Wrapped {...props} CRMService={CRMService}/>
                        )
                    }
                }
            </CRMServiceConsumer>
        )
    }
};

export default withCRMService;

