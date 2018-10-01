import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import * as cultureImg from 'assets/images/culture';

export default class Culture extends React.Component<
  iCommonPageProps,
  iCommonPageState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div data-page-content="culture">
        <div className={'core-value'}>
          <Grid doubling container>
            <Grid.Row>
              <Grid.Column textAlign={'center'}>
                <h1>CULTURE</h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid doubling container columns={2}>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment className={'title-card'}>
                  <h1>CORE VALUES</h1>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.FREEDOM + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>FREEDOM</h3>
                    <p>
                      In the software industry, human resource is a core value. We
                      believe that every member of CHEQUER should be able to think freely,
                      work freely, and act freely.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.RESPONSIBILITY + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>RESPONSIBILITY</h3>
                    <p>
                      Software is the fruit of creative and highly sophisticated
                      knowledge. The responsibility of the creator reaches
                      beyond the individual, flows into the whole company, and
                      makes its way to the client. We believe that the company
                      should be held accountable for the work of each
                      individual.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.COMMUNICATION + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>COMMUNICATION</h3>
                    <p>
                      The foundation of all relationships is communication. To
                      promote horizontal and active communication, we strive
                      to make Chequer a company that grants privileges without a
                      corporate ladder. We want to be a company with set responsibilities and
                      titles but no boundaries between the executives and
                      employees.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.PRIVILEGE + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>PRIVILEGE</h3>
                    <p>
                      Certain amounts of privilege expedites decision-making in
                      companies and motivates its members to be more passionate
                      and responsible for the privileges given. Thus, we grant
                      privileges and responsibilities to each member of our crew
                      on all their assignments.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.REWARD + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>REWARD</h3>
                    <p>
                      A company is made up of members. Each member should
                      unceasingly contemplate how his or her dream, vision, and
                      goal fits those of the company. If the goals of the
                      members and the company complement each other, the outcome will be
                      excellence. We want to create a system that assesses
                      members through both an objective and subjective index and
                      appropriately compensate the member.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={'chequer-crew'}>
          <Grid doubling container columns={2}>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment className={'title-card'}>
                  <h1>THE CHEQUER CREW</h1>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.crew1 + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      HONOR AND RESPECT <b>EACH OTHER</b>
                    </h3>
                    <p>They work together, empathize with each other, and dream of success.</p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.crew2 + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      <b>ARE</b> EXPERTS<b> IN THEIR FIELDS</b>
                    </h3>
                    <p>
                      They have professional skills and knowledge in their
                      fields with respect for all coworkers.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.crew3 + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      <b>HAVE</b> HUNGRY MINDS
                    </h3>
                    <p>
                      They are willing to learn and grow, and are eager to
                      obtain more knowledge.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.crew4 + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      ENCOURAGE <b>ONE ANOTHER</b>
                    </h3>
                    <p>
                      They support each other and provide great feedback to
                      help each member flourish.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.crew5 + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      CONSIDER DEADLINES <b>SERIOUSLY</b>
                    </h3>
                    <p>
                      They fully understand autonomy and the responsibility given to
                      them and trust one another at work.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.crew6 + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      RESULT-ORIENTED <b>PEOPLE</b>
                    </h3>
                    <p>
                      They take in, study, and learn from their mistakes
                      so they can succeed and provide better results.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.crew7 + ')',
                    paddingBottom: '100%',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      <b>ARE</b> HONEST <b>PEOPLE</b>
                    </h3>
                    <p>
                      They boldly share ideas and opinions without beating around the bush,
                      and participate in active communication.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ backgroundImage: 'URL(' + cultureImg.crew8 + ')' }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      <b>ARE</b> RELIABLE
                    </h3>
                    <p>
                      They keep to their schedule and the quality of
                      their product is consistent. They communicate with others the
                      the process of their work and are reliable for any task given to them.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={'how-we-work'}>
          <Grid doubling container columns={2}>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment className={'title-card'}>
                  <h1>HOW WE WORK</h1>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.howWeWork0 + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      FLEXIBLE <b>WORK HOURS</b>
                    </h3>
                    <p>
                      No more dealing with rush hour! You won’t find yourself squeezing
                      into overcrowded subway cars or busy buses. We have passion and
                      competence about our work, so we grant the freedom to come
                      and leave work at your leisure. As long as you work
                      40 hours a week, you can choose your own work hours.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.howWeWork1 + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      <b>WORK</b> HARD <b>PLAY</b> HARD
                    </h3>
                    <p>
                      We grant 30 days of paid leave and unlimited number of
                      days of unpaid leave. The Crew can take days off without
                      having to ask for permission. If more off-days are needed,
                      it can be given as unpaid leave. You can work overseas for
                      30 days and travel around the world for 30 days. However,
                      be mindful to not cause any inconveniences to others who
                      are working with you.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.howWeWork2 + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      DYNAMIC <b>YET</b> ORGANIZED
                    </h3>
                    <p>
                      Externally, we do have representatives and decision-makers
                      of the company as board members, but internally, all
                      members are considered equally important under the title of
                      ‘Crew’. For the members to feel free in giving opinions,
                      we don’t call each other by titles but instead use English
                      nicknames. We believe the key to stay on track is
                      communication. Though we do not have leaders that give
                      orders, they can be asigned temporarily when one leads a
                      special project.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.howWeWork3 + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      <b>FREEDOM AND</b> RESPONSIBILITY
                    </h3>
                    <p>
                      You can choose when to work and when to rest, but these
                      choices must be made with responsibility. Making ill use
                      of autonomous corporate culture will not be tolerated.
                      Freedom comes with responsibility.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{
                    backgroundImage: 'URL(' + cultureImg.howWeWork4 + ')',
                  }}
                >
                  <div className={'segment-wrapper'}>
                    <h3>
                      <b>BE A</b> TEAM PLAYER
                    </h3>
                    <p>
                      Start-ups face all sorts of unpredictable situations.
                      There will be times when everyone has to work together 
                      to solve a problem, help with a field that is not
                      their specialty, or answer a call when no one else 
                      is available to pick up the phone. Someone who is not up for
                      being a team player and creates borders in terms of tasks
                      will not fit Chequer’s work environment.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
