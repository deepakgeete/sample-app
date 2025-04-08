import { React } from "react"

import { Button } from '@progress/kendo-react-buttons';

const ProductFeatures = () => {
    return (
        <>
            <div class="productFeaturesContainer">
                <div class="boldText">
                    {"Our Features you can get"}
                </div>
                <div>
                    <p>{"We offer a variety of interesting features that you can help increase your productivity at work & manage your project easily"}</p>
                </div>
                <div>
                    <Button>
                        {"Get Started"}
                    </Button>
                </div>
            </div>
            <div class="productFeaturesContainer">
                <div class="boldText">
                    {"Collaborative Teams"}
                </div>
                <div class="boldText">
                    {"Cloud Storage"}
                </div>
                <div class="boldText">
                    {"Daily Analytics"}
                </div>
            </div>
        </>
    )
}

export default ProductFeatures;