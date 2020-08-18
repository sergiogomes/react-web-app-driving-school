import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../styles/utils.module.css";
import { ToastContainer, toast } from "../components/toast/toast";
import Alert from "../components/alert/alert";
import { getStudents, saveStudent } from "../actions/students";

class Students extends React.Component {
  static async getInitialProps() {
    const students = await getStudents();
    return { students };
  }

  onNotify(id, type, title, message) {
    toast.notify(message, {
      title: title,
      type: type,
      targetId: id,
    });
  }

  save(event) {
    event.preventDefault();

    const { students } = this.props;
    const name = event.target.value;

    if (students.length >= 5) {
      this.onNotify("toast-comp", "error", "Error", "Students limit reached.");
      return;
    }

    const student = {
      id: new Date().getTime(),
      name: name,
    };
    students.push(student);
    const promisse = saveStudent(student);

    promisse.then(
      (result) => {
        if (result) this.onNotify("toast-comp", "success", "Success!", result);
      },
      (error) => console.error(error)
    );
  }

  render() {
    const { students } = this.props;

    return (
      <React.Fragment>
        <ToastContainer id="toast-comp" />

        <Head>
          <title>Students</title>
        </Head>
        <div className="max-w-full rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div
              className="font-bold text-xl mb-2"
              className={utilStyles.headerContainer}
            >
              <FontAwesomeIcon icon="user-graduate" />
              <div className={utilStyles.space}></div>
              <span>Students</span>
            </div>
            <div>
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Student's Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Name"
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          this.save(event);
                        }
                      }}
                    />
                    <p className="text-gray-600 text-xs italic">
                      Press Enter to save
                    </p>
                  </div>
                </div>

                {students && students.length === 5 && (
                  <Alert
                    type="warning"
                    title="Warning"
                    message="Limit of 5 students reached."
                  />
                )}
              </form>

              {students &&
                students.map((student) => {
                  return (
                    <div className="px-6 py-4" key={student.id}>
                      <p className="text-gray-700 text-base">
                        <span>{student.name}</span>
                        <br />
                        <small className={utilStyles.lightText}>
                          {student.id}
                        </small>
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
