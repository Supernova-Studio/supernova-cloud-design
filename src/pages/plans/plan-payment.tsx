// Imports
import * as React from 'react'

import { FormPayment } from '../../components/form-payment'

type PlanPaymentProps = {}

export class PlanPayment extends React.PureComponent<PlanPaymentProps, {}> {
    state = {
        isYearly: false
    }

    // Render the app
    render() {
        return (
            <FormPayment />
        )
    }
}
