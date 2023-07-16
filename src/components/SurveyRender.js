import React from 'react'
import { Survey } from 'survey-react-ui'
import { surveyJson } from './SurrveyModel'
import { Model } from 'survey-core'
function SurveyRender() {
  const model = new Model(surveyJson)
  const middleName = model.getQuestionByName('MiddleName')
  model.onComplete.add((sender, options) => {
    alert(JSON.stringify(sender.data, null, 3))
    console.log(model.getPlainData())
    console.log(JSON.stringify(sender.data, null, 3))
    console.log(middleName)
  })
  return (
    <div>
      <Survey model={model} />;
    </div>
  )
}

export default SurveyRender
