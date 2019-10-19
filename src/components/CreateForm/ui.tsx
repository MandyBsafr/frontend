import React, { Component } from 'react';
import { Input } from 'antd';
import Button from 'components/Button';
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
  contactList: Contact[]
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

  submit() {
    console.log('Submitted');
  }

  render() {
    const {
      submitted,
      currentSection,
      name,
      phone,
      contactList,
    } = this.state;

    console.log(submitted, currentSection, contactList);

    return (
      <Container>
        <Section>
          <Input placeholder="Your name" value={name} />
        </Section>
        <Section>
          <Input placeholder="Your phone number" value={phone} />
        </Section>
        <Section>
          { contactList.map((c: any, i: number) => (
            <Contact key={`contact_${i.toString()}`}>
              <Input placeholder="Contact Name" value={c.name} />
              <Input placeholder="Contact Phone" value={c.phone} />
              <Button onClick={() => this.addContact()}>Add</Button>
            </Contact>
          ))}
        </Section>
      </Container>
    );
  }
}

export default CreateForm;
