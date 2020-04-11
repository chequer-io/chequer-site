import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import * as profileImg from 'assets/images/peoples';

export default class ProfileCard extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Card fluid>
        <Image
          src={profileImg[this.props.id + '_img'].img}
        />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          {this.props.extra.map((n, ni) => {
            return (
              <a href={n.url} target="_blank" key={ni}>
                {n.label} {n.desc}
              </a>
            );
          })}
        </Card.Content>
      </Card>
    );
  }
}
