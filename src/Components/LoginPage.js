import { React } from "react"

import { TextBox } from '@progress/kendo-react-inputs'
import { Button } from '@progress/kendo-react-buttons';

const LoginPage = () => {

    return (
        <div class="centerRowContents">
            <div class="container">
                <div class="boldText">
                    {"Get Started"}
                </div>
                <div>
                    <p>Email</p>
                    <TextBox placeholder="Enter your email" />
                    <p>Message</p>
                    <TextBox placeholder="What are you say?" />
                </div>
                <div class="paddingTop">
                    <Button>
                        {"Request Demo"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;