import * as React from 'react';
import {Container} from 'semantic-ui-react';

export class CompanyVision extends React.Component<any, any> {
    constructor(props) {
        super(props);

    }

    public render() {

        return (
            <div data-page-content="company-vision">
                <Container style={{height: this.props.height}}>
                    <article>
                        <h1>VISION</h1>
                        <h2>
                            innovate business work productivities with technologies
                        </h2>

                        <p>
                            MISSION :<br/>
                            We make professional software development
                            more productive and enjoyable experience.
                        </p>

                        <p>
                            GOAL :<br/>
                            We make professional software development more productive
                            and enjoyable experience. We make professional software development
                            more productive and enjoyable experience.
                        </p>
                    </article>
                </Container>
            </div>
        )
    }
}