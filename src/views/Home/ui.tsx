import React, { Component } from 'react';
import Button from 'components/Button';
import CreateForm from 'components/CreateForm';
import * as styles from './styles';

interface Props {}

interface LocalState {
  isFormVisible: boolean,
}

const {
  Container,
  Copy,
  Heading,
  Image,
  Intro,
  OrangeText,
} = styles;

class HomeView extends Component<Props, LocalState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isFormVisible: false,
    };
  }

  showForm() {
    this.setState({ isFormVisible: true });
  }

  render() {
    const { isFormVisible } = this.state;
    return (
      <Container>
        { !isFormVisible && (
          <>
            <Intro>
              <Image />
              <Heading>We are <OrangeText>Bsafr</OrangeText></Heading>
              <Copy>
                <p>We’re here to help you feel safe in the world we live in.</p>
                <p>
                  All you need to do is set an alert time and add your emergency contact.
                  If you don’t respond by your set alert time, we’ll track your location and
                  alert your emergency contact of your situation.
                </p>
              </Copy>
            </Intro>
            <Button onClick={() => this.showForm()}>I want to feel safe</Button>
          </>
        )}
        { isFormVisible && <CreateForm /> }
      </Container>
    );
  }
}

export default HomeView;
