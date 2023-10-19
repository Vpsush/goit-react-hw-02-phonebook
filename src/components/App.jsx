import { nanoid } from 'nanoid';

export class App extends Comment {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        React homework template
      </div>
    );
  }
}
