import { QuizQuestion } from "./types";

// TODO (US-08): fetch this from the Career Assessment API instead of a static
// array, e.g. `const questions = await fetch("/api/assessment/questions")`.
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    category: "technical",
    prompt:
      "A tool you're using stops working right before a deadline. What do you do first?",
    options: [
      { id: "a", text: "Check the documentation or error logs" },
      { id: "b", text: "Message a friend and wait for a reply" },
      { id: "c", text: "Restart everything and hope it fixes itself" },
      { id: "d", text: "Switch to a different tool entirely" },
    ],
  },
  {
    id: "q2",
    category: "soft",
    prompt:
      "A groupmate isn't pulling their weight on a shared project. How do you handle it?",
    options: [
      { id: "a", text: "Talk to them directly about splitting the work fairly" },
      { id: "b", text: "Quietly redo their part yourself" },
      { id: "c", text: "Report them to the professor right away" },
      { id: "d", text: "Wait and see if it resolves itself" },
    ],
  },
  {
    id: "q3",
    category: "aptitude",
    prompt: "Which number comes next: 2, 6, 12, 20, 30, ...?",
    options: [
      { id: "a", text: "40" },
      { id: "b", text: "42" },
      { id: "c", text: "36" },
      { id: "d", text: "44" },
    ],
  },
  {
    id: "q4",
    category: "technical",
    prompt:
      "You need to learn a new tool for an assignment due in two days. What's your approach?",
    options: [
      { id: "a", text: "Find the official docs and build something small first" },
      { id: "b", text: "Watch a few long tutorials start to finish" },
      { id: "c", text: "Ask an AI tool to do it and hope it works" },
      { id: "d", text: "Wait until the last night to start" },
    ],
  },
  {
    id: "q5",
    category: "soft",
    prompt: "During a presentation, you lose your train of thought. What do you do?",
    options: [
      { id: "a", text: "Pause, take a breath, and continue from your notes" },
      { id: "b", text: "Keep talking and hope no one notices" },
      { id: "c", text: "Apologize repeatedly and rush through" },
      { id: "d", text: "Hand it off to a teammate" },
    ],
  },
  {
    id: "q6",
    category: "aptitude",
    prompt:
      "A train travels 60 km in 45 minutes. How far does it travel in 2 hours at the same speed?",
    options: [
      { id: "a", text: "150 km" },
      { id: "b", text: "120 km" },
      { id: "c", text: "160 km" },
      { id: "d", text: "180 km" },
    ],
  },
];
