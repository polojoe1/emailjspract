import './App.css';
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react'

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n7g5q8m', 'template_nni8uxo', form.current, 'coB0c1m05Tf4j2jKx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="App">
      <form ref={form} onSubmit={sendEmail}>
        <br />
        <label htmlFor="subject">Subject: </label>
        <input type="text" name='subject' />
        <br />
        <br />
        <label htmlFor="name">Name: </label>
        <input type="text" name='name' />
        <br />
        <br />
        
        <textarea name="message" id="" placeholder='message here' cols="30" rows="10"></textarea>
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
