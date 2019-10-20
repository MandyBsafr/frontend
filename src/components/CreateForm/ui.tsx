import React, { Component, Fragment } from 'react';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import { Icon } from 'antd';
import Button from 'components/Button';
import Countdown from 'components/Countdown';
// import Map from 'components/Map';
import moment, { Moment } from 'moment';
import * as styles from './styles';

type Contact = {
  name: string | undefined,
  phone: string | undefined,
};

interface Props {}

interface LocalState {
  id: string | undefined,
  submitted: boolean,
  currentSection: number,
  location?: {
    lat: undefined,
    lng: undefined,
  },
  name: string | undefined,
  phone: string | undefined,
  contactList: Contact[],
  checkoutTime: string | undefined,
}

const {
  BackButton,
  ConfirmValue,
  Contact,
  Container,
  Details,
  Input,
  Label,
  OrangeText,
  Section,
  TimePicker,
} = styles;

class CreateForm extends Component<Props & GeolocatedProps, LocalState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      id: undefined,
      submitted: false,
      currentSection: 1,
      name: undefined,
      phone: undefined,
      location: {
        lat: undefined,
        lng: undefined,
      },
      contactList: [{
        name: undefined,
        phone: undefined,
      }],
      checkoutTime: moment().utc().format(),
    };
  }

  addContact() {
    const { contactList } = this.state;
    this.setState({
      contactList: [
        ...contactList,
        {
          name: undefined,
          phone: undefined,
        },
      ],
    });
  }

  nextSection() {
    const { currentSection } = this.state;
    this.setState({ currentSection: currentSection + 1 });
  }

  previousSection() {
    const { currentSection } = this.state;
    this.setState({ currentSection: currentSection - 1 });
  }

  async submit() {
    const {
      location,
      name,
      phone,
      contactList,
      checkoutTime,
    } = this.state;

    const response = await fetch('https://bsafr-api.herokuapp.com/users/create', {
      method: 'POST',
      body: JSON.stringify({
        latitude: location ? location.lat : undefined,
        longitude: location ? location.lng : undefined,
        name,
        number: phone,
        contactList: contactList.map((c: any) => ({
          name: c.name,
          number: c.phone,
        })),
        checkOut: checkoutTime,
      }),
    });

    this.setState({ submitted: true, id: await response.json() });
  }

  render() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = this.props;
    const {
      id,
      submitted,
      currentSection,
      location,
      name,
      phone,
      contactList,
      checkoutTime,
    } = this.state;

    if (submitted && id && checkoutTime && contactList) {
      return (
        <Countdown
          id={id}
          location={location}
          checkoutTime={checkoutTime}
          contactList={contactList}
        />
      );
    }

    return (
      <Container>
        <BackButton onClick={() => this.previousSection()}>
          <Icon type="arrow-left" />
        </BackButton>
        <Section isActive={currentSection === 1}>
          <Input
            placeholder="Enter your name"
            defaultValue={name}
            onChange={(e: any) => this.setState({ name: e.target.value })}
          />
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 2}>
          <Input
            placeholder="Enter your number"
            defaultValue={phone}
            onChange={(e: any) => this.setState({ phone: e.target.value })}
          />
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 3}>
          { contactList.map((c: any, i: number) => (
            <Fragment key={`contact_name_${i.toString()}`}>
              <Label><OrangeText>Enter</OrangeText> your emergency contact's</Label>
              <Input
                placeholder="Name"
                defaultValue={c.name}
                onChange={(e: any) => this.setState({
                  contactList: contactList.map((contact: Contact, n: number) => {
                    if (n === i) {
                      return {
                        ...contact,
                        name: e.target.value,
                      };
                    }
                    return contact;
                  }),
                })}
              />
            </Fragment>
          ))}
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 4}>
          { contactList.map((c: any, i: number) => (
            <Fragment key={`contact_phone_${i.toString()}`}>
              <Label><OrangeText>Enter</OrangeText> your emergency contact's</Label>
              <Input
                placeholder="Phone Number"
                defaultValue={c.phone}
                onChange={(e: any) => this.setState({
                  contactList: contactList.map((contact: Contact, n: number) => {
                    if (n === i) {
                      return {
                        ...contact,
                        phone: e.target.value,
                      };
                    }
                    return contact;
                  }),
                })}
              />
            </Fragment>
          ))}
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 5}>
          <Label>Set your alert time</Label>
          <TimePicker
            defaultValue={moment()}
            size="large"
            format="HH:mm"
            onChange={
              (time: Moment) => this.setState({ checkoutTime: time.clone().utc().format() })
            }
          />
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 6}>
          <Label>You're ready to <OrangeText>Bsafr</OrangeText></Label>
          <Details>
            Your alert time is
            <ConfirmValue>
              <OrangeText>{moment(checkoutTime).format('HH:mm')}</OrangeText>
            </ConfirmValue>
          </Details>
          <Details>
            Your emergency contact is
            <ConfirmValue>
              <OrangeText>{contactList[0].name}</OrangeText>
            </ConfirmValue>
            <ConfirmValue>
              <OrangeText>{contactList[0].phone}</OrangeText>
            </ConfirmValue>
          </Details>
          {
            isGeolocationAvailable
            && isGeolocationEnabled
            && coords
            && <Details>Location Tracking Enabled</Details>
          }
          <Button onClick={() => this.submit()}>Confirm</Button>
        </Section>
      </Container>
    );
  }
}
//
// <Section isActive={currentSection === 5}>
//   { isGeolocationAvailable && isGeolocationEnabled && coords && (
//     <Map
//       center={{
//         lat: coords.latitude,
//         lng: coords.longitude,
//       }}
//       zoom={11}
//     />
//   )}
//   <Button onClick={() => this.nextSection()}>Next</Button>
// </Section>

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(CreateForm);
