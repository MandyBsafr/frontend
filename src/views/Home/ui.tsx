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
  Intro,
  Logo,
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
        <Logo>Logo</Logo>
        <Intro />
        { !isFormVisible && <Button onClick={() => this.showForm()}>Next</Button> }
        { isFormVisible && <CreateForm /> }
      </Container>
    );
  }
}

export default HomeView;
