const developerSkills = [
    { skill: "JavaScript", level: "Expert" },
    { skill: "HTML/CSS", level: "Advanced" },
    { skill: "React", level: "Intermediate" },
    { skill: "Node.js", level: "Advanced" },
    { skill: "SQL", level: "Intermediate" }
  ];

  module.exports = {
    getAll: function () {
      return developerSkills
    },
    getOne: function () {
      return developerSkills[index]
    }
  }
