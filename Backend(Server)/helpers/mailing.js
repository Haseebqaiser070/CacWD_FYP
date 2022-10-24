const nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "cacfyp@gmail.com",
    pass: "wchaurlbodzacfam",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports.signupMail = (email, password) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Signup Successful",
    text:
      "Your account has been created. Below are your login credentials. \n\nLogin Credentials " +
      "\nEmail: " +
      email +
      "\nPassword: " +
      password,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.TaskAssigned = (e,email) => {
  console.log("sfs", e);
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Task Assignment",
    text:
      "Assigned Task Type :" +
      e.taskType +
      " Assigned Course : " +
      e.Course?.Name +
      " Deadline: " +
      e.Deadline,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


module.exports.TaskReturned = (e,email) => {
  console.log("sfs", e);
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Task Returned",
    text:
      "Returned Task : " +
      e.taskType +
      " Status : " +
      e.Status 
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.TaskLock= (e,email) => {
  console.log("sfs", e);
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Task Lock",
    text:
      "Task : " +
      e.taskType +
      " Status : " +
      e.Status 
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.CourseAssign= (e,email) => {
  console.log("sfs", e);
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Course Assigned",
    text:
      "Assigned Course: " +
      e.Course +
      " Program : " +
      e.Program +
      " Section : " +
      e.Section
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.ResetAvailability= (email) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Reset Availability",
    text:"New Semester has Started. Please Set Your Availabilities"
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


module.exports.TaskLock= (e,email) => {
  console.log("sfs", e);
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Task Revision",
    text:
      "Returned Task For Revision : " +
      e.taskType +
      " Status : " +
      e.Status 
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.MeetingDetails = (email,time,title) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Meeting Scheduled",
    text:
      "Meeting Title :" +
      title +
      ", Meeting Time : " +
      time
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("sdada", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.reportMail = (email, path) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Report Email",
    attachment: path,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.declineMail = (email) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Declined Rebuttle Email",
    text: "Your Rebuttle has been Declined by the Supervisor. Contact Office for further details",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.resetPasswordMail = (email, token) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Reset Password",
    html: `<p>You requested for reset password, kindly use this <a href="${process.env.REACT_APP_URL}/ResetPassword/${token}">link</a> to reset your password</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
