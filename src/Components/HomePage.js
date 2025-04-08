import { React } from "react"

import { Button } from '@progress/kendo-react-buttons';

import "../styles.css";

const HomePage = () => {

    return (
        <>
            <div class="headerRowContainer">
                <div class="boldText">
                    {"Biccas"}
                </div>
                <div class="boldText">
                    {"Home"}
                </div>
                <div>
                    {"Products"}
                </div>
                <div>
                    {"FAQ"}
                </div>
                <div>
                    {"Products"}
                </div>
                <div>
                    {"Blog"}
                </div>
                <Button>
                    {"Aboiut Us"}
                </Button>
                <Button>
                    {"Sign Up"}
                </Button>
            </div>
            <div class='paddingTop boldText'>
                {"We're here to Increase yiur Productivity"}
            </div>
            <div class='paddingTop'>
                <p>{"Let's make your work more organize & easily using"}</p>
                <p>{"the Taskie Dashboard with many of the latest"}</p>
                <p>{"features managing work every day"}</p>
            </div>
            <div>
                <Button>
                    {"Try free trial"}
                </Button>
                <Button>
                    {"View Demo"}
                </Button>
            </div>

            <div class="paddingTop centerRowContents boldText">
                {"More than 25000 teams use Collabs"}
            </div>
            <div class="paddingTop optionRowContainer">
                <div>
                    {"Unsplash"}
                </div>
                <div>
                    {"Notion"}
                </div>
                <div>
                    {"Intercom"}
                </div>
                <div>
                    {"Descript"}
                </div>
                <div>
                    {"Grammerly"}
                </div>
            </div>

        </>
    )
}


export default HomePage;