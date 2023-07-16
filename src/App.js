import React from 'react'
import 'survey-core/defaultV2.min.css'
import SurveyRender from './components/SurveyRender'
import { reigisterCustomInput } from './components/Registration/CustomComponentRegister'
reigisterCustomInput()
function App() {
  return (
    <div>
      <SurveyRender />
    </div>
  )
}

export default App
