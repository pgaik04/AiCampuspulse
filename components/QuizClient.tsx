'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizClient({ assessment }: { assessment: any }) {
  const router = useRouter();
  const storageKey = `campuspulse-quiz-start-${assessment.id}`;
  const answersStorageKey = `campuspulse-quiz-answers-${assessment.id}`;
  const totalSeconds = assessment.durationMin * 60;

  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(assessment.questions.length).fill(-1)
  );
  const [confirm, setConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  const startTimeRef = useRef<number | null>(null);
  const answersRef = useRef<number[]>(answers);
  const submittingRef = useRef(false);

  // Restore an active quiz after a refresh in the same browser session.
  useEffect(() => {
    const savedStart = sessionStorage.getItem(storageKey);
    if (!savedStart) return;

    const start = Number(savedStart);
    if (!Number.isFinite(start)) return;

    const savedAnswers = sessionStorage.getItem(answersStorageKey);
    if (savedAnswers) {
      try {
        const parsed = JSON.parse(savedAnswers);
        if (Array.isArray(parsed) && parsed.length === assessment.questions.length) {
          answersRef.current = parsed;
          setAnswers(parsed);
        }
      } catch {
        // Ignore malformed session data and start with empty answers.
      }
    }

    startTimeRef.current = start;
    const elapsed = Math.floor((Date.now() - start) / 1000);
    const remaining = Math.max(totalSeconds - elapsed, 0);

    if (remaining > 0) {
      setTimeLeft(remaining);
      setStarted(true);
    } else {
      setTimeLeft(0);
      setStarted(true);
    }
  }, [storageKey, answersStorageKey, totalSeconds, assessment.questions.length]);

  const submit = async () => {
    if (submittingRef.current) return;

    submittingRef.current = true;
    setSubmitting(true);

    const start = startTimeRef.current;
    const elapsedSeconds = start
      ? Math.floor((Date.now() - start) / 1000)
      : 0;

    const timeTakenSec = Math.min(
      Math.max(elapsedSeconds, 0),
      totalSeconds
    );

    try {
      const r = await fetch(`/api/assessments/${assessment.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: answersRef.current, timeTakenSec }),
      });

      if (!r.ok) {
        throw new Error('Unable to submit assessment');
      }

      const data = await r.json();
      sessionStorage.removeItem(storageKey);
      sessionStorage.removeItem(answersStorageKey);
      router.push(`/results/${data.resultId}`);
    } catch (error) {
      console.error(error);
      submittingRef.current = false;
      setSubmitting(false);
      alert('Unable to submit the quiz. Please try again.');
    }
  };

  // Real countdown based on elapsed wall-clock time, not one-second increments.
  useEffect(() => {
    if (!started || startTimeRef.current === null || submitting) return;

    const updateTimer = () => {
      const elapsed = Math.floor(
        (Date.now() - startTimeRef.current!) / 1000
      );
      const remaining = Math.max(totalSeconds - elapsed, 0);
      setTimeLeft(remaining);

      if (remaining === 0) {
        void submit();
      }
    };

    updateTimer();
    const timer = window.setInterval(updateTimer, 250);

    return () => window.clearInterval(timer);
  }, [started, totalSeconds, submitting]);

  const startQuiz = () => {
    const start = Date.now();
    const initialAnswers = Array(assessment.questions.length).fill(-1);

    startTimeRef.current = start;
    answersRef.current = initialAnswers;
    sessionStorage.setItem(storageKey, String(start));
    sessionStorage.setItem(answersStorageKey, JSON.stringify(initialAnswers));
    setAnswers(initialAnswers);
    setTimeLeft(totalSeconds);
    setStarted(true);
  };

  const choose = (index: number) => {
    const next = [...answers];
    next[current] = index;
    answersRef.current = next;
    sessionStorage.setItem(answersStorageKey, JSON.stringify(next));
    setAnswers(next);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const q = assessment.questions[current];

  if (!started) {
    return (
      <>
        <button className="secondary" onClick={() => router.back()}>
          ← Back
        </button>

        <section className="card" style={{ marginTop: 15 }}>
          <div className="hero">
            <div className="iconbox">{assessment.icon}</div>
            <div>
              <h1 className="page-title">{assessment.title} Quiz</h1>
              <p className="muted">{assessment.description}</p>
            </div>
          </div>

          <div className="meta">
            <div>⏱ <b>{assessment.durationMin} minutes</b></div>
            <div>▤ <b>{assessment.questions.length} questions</b></div>
            <div>☆ <b>Passing {assessment.passingScore}%</b></div>
          </div>

          <div className="instructions">
            <b>Instructions</b>
            <ol>
              <li>Choose one answer for each question.</li>
              <li>Use Previous and Next to review answers.</li>
              <li>Your score is calculated from correct answers.</li>
              <li>The timer starts when you click Start Quiz.</li>
              <li>Once submitted, answers cannot be changed.</li>
            </ol>
          </div>

          <button
            className="primary"
            style={{ width: '100%' }}
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </section>
      </>
    );
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 15 }}>
        <div>
          <h1 className="page-title">{assessment.title}</h1>
          <p className="muted">
            Question {current + 1} of {assessment.questions.length}
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: '10px 15px',
            fontWeight: 700,
            color: timeLeft <= 60 ? '#d23c43' : undefined,
            minWidth: 95,
            textAlign: 'center',
          }}
          aria-live="polite"
        >
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      <div className="card question">
        <div className="progress">
          <span
            style={{
              width: `${((current + 1) / assessment.questions.length) * 100}%`,
            }}
          />
        </div>

        <h2 style={{ fontSize: 19, marginTop: 22 }}>{q.text}</h2>

        {(q.options as string[]).map((option, index) => (
          <div
            className={`option ${answers[current] === index ? 'selected' : ''}`}
            onClick={() => choose(index)}
            key={option}
          >
            <input
              type="radio"
              checked={answers[current] === index}
              readOnly
            />{' '}
            <b>{String.fromCharCode(65 + index)}.</b> {option}
          </div>
        ))}

        <div className="question-nav">
          <button
            className="secondary"
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </button>

          {current < assessment.questions.length - 1 ? (
            <button
              className="primary"
              onClick={() => setCurrent(current + 1)}
            >
              Next
            </button>
          ) : (
            <button
              className="primary"
              onClick={() => setConfirm(true)}
              disabled={submitting}
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>

      {confirm && (
        <div className="modal-wrap">
          <div className="modal">
            <h2 style={{ marginTop: 0 }}>Confirm Submit</h2>
            <p className="muted">
              Are you sure you want to submit? You answered{' '}
              {answers.filter((x) => x >= 0).length} of{' '}
              {assessment.questions.length} questions. You will not be able to
              make changes after submission.
            </p>

            <div className="modal-actions">
              <button
                className="secondary"
                disabled={submitting}
                onClick={() => setConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="primary"
                disabled={submitting}
                onClick={submit}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
