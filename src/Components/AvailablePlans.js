import { React } from "react"

import { Button } from '@progress/kendo-react-buttons';

const AvailablePlans = () => {
    return (
        <div class="centerRowContents">
            <div class="container">
                <div class="availablePlansContainer boldText">
                    {"Choose Plan That's right for you"}
                </div>
                <div>
                    <Button>
                        {"Monthly"}
                    </Button>
                    <Button>
                        {"Yearly"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AvailablePlans;