import "./App.css";
import React from "react";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";

const App = () => {
  const logValues = (values) => {
    window.alert(JSON.stringify(values, 0, 2));
  };

  const focusOnError = createDecorator();

  return (
    <div className="App">
      <main>
        <h1>React Final Form</h1>

        <Form
          decorators={[focusOnError]}
          onSubmit={logValues}
          validate={(values) => {
            const errors = {};
            if (values.username === undefined) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            if (!values.confirm) {
              errors.confirm = "Required";
            } else if (values.confirm !== values.password) {
              errors.confirm = "Must match";
            }
            if (values.position === undefined) {
              errors.position = "Required";
            }
            if (!values.terms) {
              errors.terms = "Required";
            }
            if (!values.interested) {
              errors.interested = "Required";
            }

            return errors;
          }}
        >
          {({ handleSubmit, submitting, form, pristine }) => (
            <form className="form" onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <div className={meta.active && "active" }>
                    <label>Username</label>
                    <input
                      {...input}
                      className="Input"
                      type="text"
                      placeholder="Username"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div className={meta.active && "active" }>
                    <label>Password</label>
                    <input
                      {...input}
                      className="Input"
                      type="password"
                      placeholder="Password"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <div className={meta.active && "active" }>
                    <label>Confirm</label>
                    <input
                      {...input}
                      className="Input"
                      type="password"
                      placeholder="Confirm"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="position" type="select">
                {({ input, meta }) => (
                  <div className={meta.active && "active" }>
                    <label>Position</label>
                    <select {...input}>
                      <option value="">-- Position --</option>
                      <option value="writer">Writer</option>
                      <option value="engineer">Engineer</option>
                      <option value="analyst">Analyst</option>
                      <option value="hr">HR</option>
                    </select>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="terms" type="checkbox">
                {({ input, meta }) => (
                  <div className={meta.active && "active" }>
                    <label>Agree with terms</label> <input {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <h3>Want more offers?</h3>
              <Field name="interested" type="radio" value="interested">
                {({ input, meta }) => (
                  <div className={meta.active && "active" }>
                    <label>Yes</label>
                    <input {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="interested" type="radio" value="not-interested">
                {({ input, meta }) => (
                  <div className={meta.active && "active" }>
                    <label>No</label>
                    <input {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="button-container">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                  className="reset"
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </Form>
      </main>
    </div>
  );
};

export default App;
