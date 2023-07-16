import React from 'react'
import { ElementFactory, Question, Serializer } from 'survey-core'
import CustomInput from '../custom/CustomInput'
import {
  SurveyQuestionElementBase,
  ReactQuestionFactory,
} from 'survey-react-ui'

const CUSTOM_TYPE = 'custom-input'

export class QuestionCustomInputModel extends Question {
  getType() {
    return CUSTOM_TYPE
  }
}

// Add question type metadata for further serialization into JSON
Serializer.addClass(
  CUSTOM_TYPE,
  [],
  function () {
    return new QuestionCustomInputModel('')
  },
  'question'
)

export function reigisterCustomInput() {
  ElementFactory.Instance.registerElement(CUSTOM_TYPE, (name) => {
    return new QuestionCustomInputModel(name)
  })
}

// A class that renders questions of the new type in the UI
export class SurveyQuestionCustomInput extends SurveyQuestionElementBase {
  constructor(props) {
    super(props)
    this.state = { value: this.question.value }
  }
  get question() {
    return this.questionBase
  }
  get value() {
    return this.question.value
  }
  //important line
  handleValueChange = (data) => {
    console.log(data)
    this.question.value = data
  }
  // Support the read-only and design modes
  get style() {
    return this.question.getPropertyValue('readOnly') ||
      this.question.isDesignMode
      ? { pointerEvents: 'none' }
      : undefined
  }
  //important here......
  renderCustomComponent() {
    return <CustomInput value={this.value} onChange={this.handleValueChange} />
  }

  renderElement() {
    return <div style={this.style}>{this.renderCustomComponent()}</div>
  }
}

// Register `SurveyQuestionColorPicker` as a class that renders `color-picker` questions
ReactQuestionFactory.Instance.registerQuestion(CUSTOM_TYPE, (props) => {
  return React.createElement(SurveyQuestionCustomInput, props)
})
