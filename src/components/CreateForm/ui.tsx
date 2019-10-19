import React, { Component } from 'react';
import { Input, TimePicker } from 'antd';
import Button from 'components/Button';
import moment, { Moment } from 'moment';
import * as styles from './styles';

type Contact = {
  name: string | undefined,
  phone: string | undefined,
};

interface Props {}

interface LocalState {
  submitted: boolean,
  currentSection: number,
  name: string | undefined,
  phone: string | undefined,
  contactList: Contact[],
  checkoutTime: string | undefined,
}

const {
  Contact,
  Container,
  Section,
} = styles;

class CreateForm extends Component<Props, LocalState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      submitted: false,
      currentSection: 1,
      name: undefined,
      phone: undefined,
      contactList: [{
        name: undefined,
        phone: undefined,
      }],
      checkoutTime: undefined,
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

  submit() {
    console.log('Submitted', this.state);
  }

  render() {
    const {
      submitted,
      currentSection,
      name,
      phone,
      contactList,
    } = this.state;

    if (submitted) return <div>Yay</div>;

    return (
      <Container>
        <Section isActive={currentSection === 1}>
          <Input
            placeholder="Your name"
            defaultValue={name}
            onChange={(e: any) => this.setState({ name: e.target.value })}
          />
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 2}>
          <Input
            placeholder="Your phone number"
            defaultValue={phone}
            onChange={(e: any) => this.setState({ phone: e.target.value })}
          />
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 3}>
          { contactList.map((c: any, i: number) => (
            <Contact key={`contact_${i.toString()}`}>
              <Input
                placeholder="Contact Name"
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
              <Input
                placeholder="Contact Phone"
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
              <Button onClick={() => this.addContact()}>Add</Button>
            </Contact>
          ))}
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 4}>
          Check out time:
          <TimePicker
            defaultValue={moment()}
            size="large"
            onChange={(time: Moment) => this.setState({ checkoutTime: time.utc().format() })}
          />
          <Button onClick={() => this.nextSection()}>Next</Button>
        </Section>
        <Section isActive={currentSection === 5}>
          <Button onClick={() => this.submit()}>Confirm</Button>
        </Section>
      </Container>
    );
  }
}

export default CreateForm;
