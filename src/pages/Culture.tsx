import * as React from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import * as cultureImg from '../assets/images/culture';

export class Culture extends React.Component<iCommonPageProps, iCommonPageState> {
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
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>FREEDOM</h3>
                    <p>
                      In software industry, human resource is the core value. We believe that every member of CHEQUER should think freely, work freely, and act freely.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.FREEDOM} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>RESPONSIBILITY</h3>
                    <p>
                      Software is the fruit of creative and highly sophisticated knowledge. 
                      The responsibility of the creator reaches beyond the individual, flows into the whole company, and makes its way to the client. We believe that the company should be held accountable for the work of each individual.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.RESPONSIBILITY} />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>COMMUNICATION</h3>
                    <p>
                      The basis of all relationships is communication. 
                      To promote horizontal and active communication, we are aiming to make Chequer a company that grants privileges but no corporate ladder and a company with responsibilities and titles but no boundaries between the executives and employees.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.COMMUNICATION} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>PRIVILEGE</h3>
                    <p>
                      Certain amount of privilege expedites decision-making in companies and motivates its members to be more passionate and responsible for the privileges given. Thus, we grant privileges and responsibilities to each member of the crew on all their assignments.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.PRIVILEGE} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>REWARD</h3>
                    <p>
                      Company is made up of members. 
                      Each member should unceasingly contemplate how his or her dream, vision, and goal fits those of the company. 
                      If the goals of the members and the company agree, the outcome will be tremendous. 
                      We are trying to create a system that assesses members through both an objective and subjective index and appropriately compensate the member.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.REWARD} />
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
                  <h1>CHEQUER CREW</h1>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3><b>THE CREW ARE</b> DETERMINED PEOPLE</h3>
                    <p>
                      They do not compare themselves with those who work at companies that are bigger or overseas.
                      They have an unwavering belief that Chequer will become the world’s leading IT company.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew0} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>HONOR ONE ANOTHER <b>FOR THE SUCCESSFUL RESULT</b></h3>
                    <p>
                      Together they work,
                      sympathize,
                      and dream of success.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew1} />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3><b>자기 분야에 누구보다</b> 뛰어난 전문성<b>을 가지고 있습니다</b></h3>
                    <p>
                      체커크루는 자신의 분야에 뛰어난 전문성을 가지고 있으며 본인이 탁월한 만큼 상대방 또한 존중할줄 아는 사람입니다.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew2} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3><b>STEEP</b> LEARNING <b>CURVE</b></h3>
                    <p>
                      They are willing to learn and grow, and they quickly obtain knowledge.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew3} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>ENCOURAGE <b>ONE ANOTHER</b></h3>
                    <p>
                      Company is made up of members.
                      Each member should unceasingly contemplate how his or her dream, vision, and goal fits those of the company.
                      If the goals of the members and the company agree, the outcome will be tremendous. We are trying to create a system that assesses members through both an objective and subjective index and appropriately compensate the member.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew4} />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>CONSIDER DEADLINES <b>SERIOUSLY</b></h3>
                    <p>
                      They fully understand autonomy
                      and responsibility given
                      to them and trust
                      one another at work.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew5} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>RESULT-ORIENTED <b>PEOPLE</b></h3>
                    <p>
                      They take in, study, and learn from their mistakes. This makes them possible to succeed.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew6} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>HONEST <b>PEOPLE</b></h3>
                    <p>
                      They boldly share ideas and opinions and enjoy active communication.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew7} />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={1}>
              <Grid.Column>
                <Segment className={'row-segment'}>
                  <div className={'segment-wrapper'}>
                    <h3><b>THE CREW ARE</b> RELIABLE</h3>
                    <p>
                      They work at a certain time of a day
                      and the quality of their product is consistent.
                      They let others know of what they are doing and are reliable for any task to be given.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.crew8} />
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
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>FLEXIBLE
                      <b>WORK HOURS</b></h3>
                    <p>
                      Done with the rush hour! You won’t find yourself squeezing into overcrowded subway cars.
                      We have passion and competence over our work, so we grant the freedom to come and leave work at your preferred time.
                      As long as you work 40 hours a week, you can be flexible with your work hours.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.howWeWork0} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3><b>WORK</b> HARD <b>PLAY</b> HARD</h3>
                    <p>
                      We grant 30 days of paid leave and unlimited number of days of unpaid leave.
                      The Crew can take days off without having to ask for permission.
                      If more off-days are needed, it can be given as unpaid leave. You can work overseas for 30 days and travel around the world for 30 days. However,
                      be mindful to not cause any inconveniences to others who are working with you.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.howWeWork1} />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>DYNAMIC <b>YET</b> ORGANIZED</h3>
                    <p>
                      Externally, we do have representatives and decision-makers of the company as board members,
                      but internally, all members are considered equally important under the name ‘Crew’. For the members to feel free in giving opinions,
                      we don’t call each other by titles but call by English nicknames. We believe the key to stay on track is communication.
                      Though we do not have leaders that give orders, leaders can temporarily be formed when one leads a special project.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.howWeWork2} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>모든 선택과 결정에는 스스로의 책임이 따릅니다.</h3>
                    <p>
                      출/퇴근 및 근무시간, 휴가의 자유로움에 책임이 따릅니다. 좋은 문화와 시스템을 악용하거나 이기적인 행동을 한다면 모든 크루가 눈살을 찌푸리게 될 것이고 결국 회사에서 퇴출당하게 됩니다. 자유로움과 동시에 스스로 가져야 할 책임감이 매우 큽니다.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.howWeWork3} />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <div className={'segment-wrapper'}>
                    <h3>일의 범위를 나누지 않습니다</h3>
                    <p>
                      스타트업은 하루에도 예측하지 못하는 다양한 이벤트가 발생하고 갑작스럽게 진행되는 일들이 많이 생겨납니다. 당장 벌어진 문제를 해결하기 위해 모두가 힘을 합쳐야 할 때도 있고,
                      자신의 비전문분야에 도움을 주어야 할 때도 있고, 가끔은 아무도 없는 사무실에 고객의 전화가 걸려올 때 전화를 받아야 하는 경우도 생깁니다. “난 OO니까 OO만 할래” 같은 생각을 가졌다면 우리 회사에서 일하기 무척 어려운 사람입니다.
                    </p>
                  </div>
                  <div className={'segment-img'}>
                    <img src={cultureImg.howWeWork4} />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>


          </Grid>

        </div>

      </div>
    )
  }
}