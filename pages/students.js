import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ToastContainer, toast } from "../components/toast/toast";
import Alert from "../components/alert/alert";
import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import { getLocalStorage, postLocalStorage } from "../storage/localStorage";

let students = [];
getStudents().then(
  (result) => {
    if (result) {
      students = result;
    } else {
      students = [];
    }
  },
  (error) => {
    console.error(error);
  }
);

export default function Students() {
  return (
    <>
      <ToastContainer id="toast-comp" />

      <Layout>
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
                          saveStudent(event);
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
      </Layout>
    </>
  );
}

export function onNotify(id, type, title, message) {
  toast.notify(message, {
    title: title,
    type: type,
    targetId: id,
  });
}

export async function getStudents() {
  const promisse = getLocalStorage("Student");
  return promisse.then(
    (result) => {
      const data = JSON.parse(result);
      if (data) {
        return data;
      } else {
        return null;
      }
    },
    (error) => {
      console.error(error);
    }
  );
}

export function saveStudent(event) {
  event.preventDefault();
  const name = event.target.value;
  if (students.length === 5) {
    onNotify("toast-comp", "error", "Error", "Students limit reached.");
  } else {
    const student = {
      id: new Date().getTime(),
      name: name,
    };
    students.push(student);
    const promisse = postLocalStorage("Student", students);

    promisse.then(
      (result) => {
        if (result) {
          onNotify("toast-comp", "success", "Success!", result);
          return result;
        } else {
          return null;
        }
      },
      (error) => {
        console.error(error);
        return null;
      }
    );
  }
}
