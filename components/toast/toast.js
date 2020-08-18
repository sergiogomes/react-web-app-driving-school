import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

const config = {
  success: {
    primaryColor: "#38a169",
    secondaryColor: "#f0fff4",
    label: "Success notification!",
  },
  info: {
    primaryColor: "#2b6cb0",
    secondaryColor: "#ebf8ff",
    label: "Info notification!",
  },
  error: {
    primaryColor: "#c53030",
    secondaryColor: "#fff5f5",
    label: "Error notification!",
  },
  warn: {
    primaryColor: "#c05621",
    secondaryColor: "#fffaf0",
    label: "Warning notification!",
  },
};

class ToastTop extends React.Component {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      let tId = this.props.targetId;
      this.remove(tId);
    }, this.props.duration * 1000);
  }
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  remove = (id) => {
    unmountComponentAtNode(document.getElementById(id));
    if (this.props.onRemove) {
      this.props.onRemove();
    }
  };
  render() {
    let props = this.props;
    return (
      <div className="toast-message-container">
        <div id="toast-message" className="toast-message">
          <div className="title">{props.title || config[props.type].label}</div>
          <div>{props.message}</div>
        </div>

        <style jsx>{`
          .toast-message {
            flex: 1;
            background-color: ${config[props.type].secondaryColor};
            padding: 16px 16px;
            border-radius: 0.25rem;
            border-width: 1px;
            color: ${config[props.type].primaryColor};
            font-size: 1rem;
          }
          .side-bar {
            padding: 10px;
            border-radius: 4px 0px 0px 4px;
            background: green;
            background-color: ${config[props.type].primaryColor};
          }
          .title {
            margin-bottom: 8px;
            color: ${config[props.type].primaryColor};
            font-weight: bold;
          }
          .toast-action-button {
            font-style: normal;
            font-weight: bold;
            font-size: 1rem;
            line-height: 23px;
          }
        `}</style>
        <style jsx>{`
          @keyframes SlideInOutTop {
            0% {
              transform: translateY(-40px);
              opacity: 0;
            }
            ${props.transitionPercentage}% {
              transform: translateY(0px);
              opacity: 1;
            }
            ${100 - props.transitionPercentage}% {
              transform: translateY(0px);
              opacity: 1;
            }
            100% {
              transform: translateY(-40px);
              opacity: 0;
            }
          }

          .toast-message-container {
            color: #444;
            width: 23rem;
            max-width: 23rem;
            box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
              0 9px 46px 8px rgba(0, 0, 0, 0.12),
              0 11px 15px -7px rgba(0, 0, 0, 0.2);
            margin: 0px 1rem;
            border-color: ${config[props.type].primaryColor};
            border-radius: 0.25rem;
            border-width: 1px;
            animation: SlideInOutTop ${props.duration}s ease-in-out;
          }
          @media (max-width: 400px) {
            .toast-message-container {
              width: 300px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export const toast = {
  remove: (id) => {
    let comId = id || "toast-container";
    let doc = document.getElementById(comId);
    if (doc) unmountComponentAtNode(doc);
  },
  notify: (message, options = null) => {
    let duration = 5;
    let type = "info";
    let targetId = "toast-container";
    let title = null;
    let onRemove = null;
    if (options) {
      if (options.type) {
        type = options.type;
      }
      if (options.targetId) {
        targetId = options.targetId;
      }
      if (options.title) {
        title = options.title;
      }
      if (options.onRemove) {
        onRemove = options.onRemove;
      }
    }
    let trasitionPercentage = 0.3 * (100 / duration);
    render(
      <ToastTop
        message={message}
        slideIn={true}
        type={type || "info"}
        transitionPercentage={trasitionPercentage}
        targetId={targetId}
        title={title}
        onRemove={onRemove}
        duration={duration}
      />,
      document.getElementById(targetId)
    );
  },
};

// Toast container
export const ToastContainer = (props) => {
  let id = props.id || "toast-container";
  return (
    <div id={id} className="toast-container">
      <style jsx>{`
        .toast-container {
          position: fixed;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          left: 0px;
          height: 0px;
          z-index: 2;
        }
        .toast-container {
          position: fixed;
          width: 100%;
          top: 46px
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          left: 0px;
        }
      `}</style>
    </div>
  );
};
