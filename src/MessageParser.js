class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()

      if (lowerCaseMessage.includes("hello")) {
          this.actionProvider.greet()
      } else if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      } else if (lowerCaseMessage.includes("python")) {
        this.actionProvider.handlePythonList();
      } else if (lowerCaseMessage.includes("game development")) {
        this.actionProvider.handleGameDevList();
      } else if (lowerCaseMessage.includes("ruby")) {
        this.actionProvider.handleRubyList();
      } else if (lowerCaseMessage.includes("interview prep")) {
        this.actionProvider.handleInterviewPrepList();
      } else {
        this.actionProvider.unknown();
      }

    }
  }
  
export default MessageParser;