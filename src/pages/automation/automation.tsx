import { useEffect, useState } from "react";
import AutomationForm from "./automation-form";
import AutomationGrid from "./automation-grid";
import '../../styles/components/automation.scss'


function Automation() {
  const [pageView, setPageView] = useState('form')
  const [editData, setEditData] = useState<any>({})
  const [isEditMode, setIsEditMode] = useState<any>(false)

  useEffect(() => {
  }, [])


  return (
    <div>
      {
        pageView === 'grid' ?
          <div>
            <AutomationGrid
              setPageViewFun={(val: any, gridData: any) => {
                setEditData(gridData)
                setPageView(val)
              }}
            />
          </div>
          :
          <div>
            <AutomationForm
              setPageViewFun={(val: any) => {
                setPageView(val)
              }}
              editData={editData}
              isEditMode={isEditMode}
            />
          </div>
      }
    </div>

  )
}

export default Automation;