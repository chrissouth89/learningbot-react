class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hello human, how are you?"
    );
    this.updateChatbotState(greetingMessage);
  }
  
  help() {
    const helpMessage = this.createChatBotMessage(
      "You can use the buttons or type in the message box to get information on any of the topics that I have available!"
    )
  }
  
  feeling() {
    const feelingMessage = this.createChatBotMessage(
      "I'm great thank you for asking! What can I help you with today?"
    );
    this.updateChatbotState(feelingMessage);
  }

  unknown() {
    const whatDidYouSay = this.createChatBotMessage("I don't understand.");
    this.updateChatbotState(whatDidYouSay);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "You can find resources to help you learn here: ",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handlePythonList = () => {
    const message = this.createChatBotMessage(
      "You can find resources to help you learn here: ",
      {
        widget: "pythonLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleGameDevList = () => {
    const message = this.createChatBotMessage(
      "You can find resources to help you learn here: ",
      {
        widget: "gameDevLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleRubyList = () => {
    const message = this.createChatBotMessage(
      "You can find resources to help you learn here: ",
      {
        widget: "rubyLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleInterviewPrepList = () => {
    const message = this.createChatBotMessage(
      "You can find resources to help you learn here: ",
      {
        widget: "interviewPrepLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // This function is set in the constructor and is passed in from the top level component.
    // The setstate function here actually manipulates the top level state of chatbot so it is important to make sure we preserve previous state.
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}
export default ActionProvider;
