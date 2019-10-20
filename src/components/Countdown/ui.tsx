import React, { Component } from 'react';
import ReactCountdown from 'react-countdown-now';
import Safe from 'components/Safe';
import * as styles from './styles';

interface Props {
  id: string,
  checkoutTime: string,
  location?: {
    lat: number | undefined,
    lng: number | undefined,
  },
}

interface LocalState {
  completed: boolean,
}

const {
  Actions,
  Button,
  Container,
  Heading,
  Text,
} = styles;

const UPDATE_INTERVAL_SECONDS = 300;

class Countdown extends Component<Props, LocalState> {
  private boundUpdateSession: () => void;

  constructor(props: Props) {
    super(props);

    this.boundUpdateSession = this.updateSession.bind(this);

    this.state = {
      completed: false,
    };
  }

  componentDidMount() {
    setInterval(this.boundUpdateSession, UPDATE_INTERVAL_SECONDS * 100);
  }

  setCompleted() {
    this.setState({ completed: true });
  }

  updateSession() {
    const {
      id,
      location,
    } = this.props;

    console.log('UPDATE SESSION: ', id, location);
  }

  render() {
    const {
      checkoutTime,
    } = this.props;

    const { completed } = this.state;

    if (completed) return <Safe />;

    return (
      <Container>
        <Heading>
          <Text>Time left till alert</Text>
          <ReactCountdown date={checkoutTime} />
        </Heading>
        <Actions>
          <Button type="safe" onClick={() => this.setState({ completed: true })}>Mark me as safe</Button>
          <Button type="message">Send alert message now</Button>
          <Button type="callContact">Call my emergency contact</Button>
          <Button type="call000">Call 000</Button>
        </Actions>
      </Container>
    );
  }
}

export default Countdown;
