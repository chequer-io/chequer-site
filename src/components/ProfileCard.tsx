import * as React from 'react'
import {Card, Image} from 'semantic-ui-react'
import * as profileImg from '../assets/images/peoples';

export class ProfileCard extends React.Component<any, any> {
  constructor(props) {
    super(props);


  }

  public render() {
    return (
      <Card>
        <Image src={profileImg[this.props.id]} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>{this.props.job}</Card.Meta>
          <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.props.extra.map((n, ni) => {
            return <a href={n.url} target='_blank' key={ni}>
              {n.label}
            </a>
          }) }
        </Card.Content>
      </Card>
    )
  }
}
