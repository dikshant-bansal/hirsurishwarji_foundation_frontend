import React from "react";
import "./MiscellaneousQuestionsEdit.scss";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const MiscellaneousQuestionsEdit = ({ data }) => {
  let formData = {
    pathshala: data?.pathshala,
    religiousEducation: data?.religiousEducation,
    templePooja: data?.templePooja,
    upashraya: data?.upashraya,
    usageKanmool: data?.usageKanmool,
    usageKanmoolStopped: data?.usageKanmoolStopped,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    data[name] = value
  }

  const questionsArray = [
    {question: "Pathshala Children", name: "pathshala"},
    {question: "Religious Education Impart", name: "religiousEducation"},
    {question: "Temple Pooja", name: "templePooja"},
    {question: "Upashraya Visit", name: "upashraya"},
    {question: "Usage of Kanmool", name: "usageKanmool"},
    {question: "Kanmool Usage Stopped", name: "usageKanmoolStopped"},
  ];

  return (
    <div id="MiscellaneousQuestionsEdit" className="MiscellaneousQuestionsEdit">
      <div className="formHeader">Miscellaneous Questions</div>
      <div className="MiscellaneousQuestionsForm">
        {questionsArray.map((question, index) => {
          return (
            <FormControl className="formElements" key={`${question}${index}`}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="questionLabel"
              >
                {question.question}
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={formData && formData[question.name]}
              >
                <FormControlLabel value={true} control={<Radio />} label="Yes" name={question.name} onChange={(event) => handleChange(event)}/>
                <FormControlLabel value={false} control={<Radio />} label="No" name={question.name} onChange={(event) => handleChange(event)}/>
              </RadioGroup>
            </FormControl>
          );
        })}
      </div>
    </div>
  );
};

export default MiscellaneousQuestionsEdit;
