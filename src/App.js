import { useContext } from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl';
import { Context } from './components/Wrapper';

function App() {
  const context = useContext(Context);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Deiziane Silva</h1>
        <h2>
          <FormattedMessage
            id='app.role'
            defaultMessage='Front-end Developer'
          />
        </h2>
        <p>
          <FormattedMessage
            id='app.greetings'
            defaultMessage='Hi, welcome to my page. 👋'
          />
        </p>
        <p>
          <FormattedMessage
            id='app.content'
            values={{ company: 'Lorem Ipsum', br: <br /> }}
          />
        </p>

        <div style={{ display: 'flex', gap: '.5rem' }}>
          <button value='en-US' onClick={context.selectLanguage}>
            EN
          </button>
          <button value='pt-BR' onClick={context.selectLanguage}>
            PT
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
