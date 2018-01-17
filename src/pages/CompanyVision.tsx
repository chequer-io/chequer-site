import * as React from 'react';

export class CompanyVision extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="company-vision">

        <h1>VISION</h1>

        <article>
          <h2>
            PROFESSIONAL - INNOTATIVE - FLEXIBLE
          </h2>

          <p>
            MISSION :<br />
            We make professional software development
            more productive and enjoyable experience.
          </p>

          <p>
            GOAL :<br />
            We make professional software development more productive
            and enjoyable experience. We make professional software development
            more productive and enjoyable experience.
          </p>
        </article>

      </div>
    )
  }
}