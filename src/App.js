import React from 'react'
import './App.css'
import { Helmet } from "react-helmet"
import OpengraphReactComponent from "opengraph-react";


function App() {

  function resetChat() {
    const dfMessenger = document.querySelector('df-messenger');
    dfMessenger.startNewSession({ retainHistory: false });
  }

  return (
    <div className="App">

      <div className="nonchat-components">
        <div className='header'>
          <img src={require('./Assets/header.png')} className='header-img' alt="logo" />
        </div>

        <h1>Want to chat about mental health?</h1>
        <p>
          Mental health is an essential part of our overall well-being.
          It affects how we think, feel, and act. It can be hard to talk about it due to the stigma and discrimination surrounding it.
          If you're interested, we invite you to talk with Dearbud, a mental health chatbot that can make talking about mental health a little bit easier.
        </p>
        <br />
        <br />
        <br />
        <h2>How does it work?</h2>
        <p>
          DearBud is here to listen and provide you with information to further your journey. DearBud is trained on many mental health forums and documents and
          can help describe different mental health issues and forms of psychotherapy. Feel free to vent, ask questions or just say hello!
        </p>
        <br />
        <br />
        <br />
        <h2>More resources</h2>
        <p>
          There are many resources out there to help you with mental health issues. Below are some great resources to read more about.
        </p>
        <OpengraphReactComponent
          site={'https://www.samhsa.gov/find-help/national-helpline'}
          appId={`bb08350b-c313-4eb1-9182-2fe7ae049a69`}
          size={"small"}
        />
        <OpengraphReactComponent
          site={'https://www.cdc.gov/mentalhealth/learn/index.htm'}
          appId={`bb08350b-c313-4eb1-9182-2fe7ae049a69`}
          size={"small"}
        />
        <OpengraphReactComponent
          site={'https://mhanational.org/issues/state-mental-health-america'}
          appId={`bb08350b-c313-4eb1-9182-2fe7ae049a69`}
          size={"small"}
        />
        <OpengraphReactComponent
          site={'https://www.nami.org/Home'}
          appId={`bb08350b-c313-4eb1-9182-2fe7ae049a69`}
          size={"small"}
        />
        <OpengraphReactComponent
          site={'https://www.psychologytoday.com/us'}
          appId={`bb08350b-c313-4eb1-9182-2fe7ae049a69`}
          size={"small"}
        />
        <OpengraphReactComponent
          site={'https://www.samhsa.gov/'}
          appId={`bb08350b-c313-4eb1-9182-2fe7ae049a69`}
          size={"small"}
        />


      </div>

      <div className="chat-components">
        <Helmet>
          <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
        </Helmet>
        <button onClick={resetChat}>Reset Conversation</button>
        <df-messenger
          location="us-central1"
          project-id="chatbot-mentalhealth"
          agent-id="bd07ff89-1227-44e2-a2aa-e75c97f596e2"
          language-code="en">
          <df-messenger-chat
            chat-title="DearBud">
          </df-messenger-chat>
        </df-messenger>

      </div>
    </div>
  );
}

export default App;
