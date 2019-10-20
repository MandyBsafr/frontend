import React, { Component } from 'react';
import ReactCountdown from 'react-countdown-now';
import Safe from 'components/Safe';
import * as styles from './styles';

type Contact = {
  name: string | undefined,
  phone: string | undefined,
};

interface Props {
  id: string,
  checkoutTime: string,
  contactList: Contact[],
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

  markCompleted() {
    const { id } = this.props;
    fetch('https://bsafr-api.herokuapp.com/markSafe', {
      method: 'POST',
      body: JSON.stringify(id),
    });
    this.setState({ completed: true });
  }

  sendMessageToContacts() {
    const { id } = this.props;
    return fetch('https://bsafr-api.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify(id),
    });
  }

  updateSession() {
    const {
      id,
      location,
    } = this.props;

    return fetch(`https://bsafr-api.herokuapp.com/update-location/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        latitude: location ? location.lat : undefined,
        longitude: location ? location.lng : undefined,
      }),
    });
  }

  render() {
    const {
      checkoutTime,
      contactList,
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
          <Button type="safe" onClick={() => this.markCompleted()}>Mark me as safe</Button>
          <Button onClick={() => this.sendMessageToContacts()} type="message">Send alert message now</Button>
          <a href={`tel:${contactList[0].phone}`}><Button type="callContact">Call my emergency contact</Button></a>
          <a href="tel:000"><Button type="call000">Call 000</Button></a>
        </Actions>
      </Container>
    );
  }
}

export default Countdown;
