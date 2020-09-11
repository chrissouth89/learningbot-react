import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Learning Bot",
  initialMessages: [
    createChatBotMessage(
      "Hello human, I am here to assist you. What would you like to learn about today?",
      {
        widget: "learningOptions",
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "pythonLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Python",
            url:
              "https://www.freecodecamp.org/learn/scientific-computing-with-python/python-for-everybody/",
            id: 1,
          },
          {
            text: "Learn Python",
            url: "https://www.learnpython.org/",
            id: 2,
          },
          {
            text: "Python Tutorials",
            url: "https://wiki.python.org/moin/BeginnersGuide/Programmers",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "gameDevLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Udemy game dev",
            url: "https://www.udemy.com/topic/game-development/free/",
            id: 1,
          },
          {
            text: "Game dev from Harvard",
            url:
              "https://www.freecodecamp.org/news/learn-game-development-from-harvard/",
            id: 2,
          },
          {
            text: "Coursera Game Dev",
            url: "https://www.coursera.org/courses?query=game%20development",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "rubyLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Codecademy ruby course",
            url: "https://www.codecademy.com/learn/learn-ruby",
            id: 1,
          },
          {
            text: "Udemy ruby course",
            url:
              "https://www.udemy.com/course/ruby-for-absolute-beginners/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-UaVCsR2gXmHknpzqyUjzKA&utm_medium=udemyads&utm_source=aff-campaign",
            id: 2,
          },
          {
            text: "Rails tutorial book",
            url: "https://www.railstutorial.org/book",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "interviewPrepLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "FCC-JS Prep Questions",
            url:
              "https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/",
            id: 1,
          },
          {
            text: "GeeksforGeeks Prep Questions",
            url:
              "https://www.geeksforgeeks.org/interview-preparation-for-software-developer/",
            id: 2,
          },
          {
            text: "Cracking the Coding Interview",
            url:
              "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
            id: 3,
          },
          {
            widgetName: "help",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
              options: [
                {
                  text: "help",
                  url: "You can use the buttons or type in the message box to get information on any of the topics that I have available!",
                  id: 1,
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default config;
