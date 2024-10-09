import { IgrCategoryChart, IgrCategoryChartModule } from '@infragistics/igniteui-react-charts';
import { useGetBPSystolicDiastolicList, useGetCholesterolHDLLDLList, useGetGlucoseList, useGetHeartRateList, useGetTotalCholesterolList, useGetWeightList } from '../hooks/patient-dashboard-hooks';
import styles from './health-indicators.module.css';
import createClassTransformer from '../style-utils';

IgrCategoryChartModule.register();

export default function HealthIndicators() {
  const classes = createClassTransformer(styles);
  const { patientDashboardWeight } = useGetWeightList();
  const { patientDashboardHeartRate } = useGetHeartRateList();
  const { patientDashboardBPSystolicDiastolic } = useGetBPSystolicDiastolicList();
  const { patientDashboardGlucose } = useGetGlucoseList();
  const { patientDashboardTotalCholesterol } = useGetTotalCholesterolList();
  const { patientDashboardCholesterolHDLLDL } = useGetCholesterolHDLLDLList();

  return (
    <>
      <div className={classes("row-layout health-indicators-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-2 text")}>
              <span>HEALTH INDICATORS</span>
            </p>
            <div className={classes("row-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <div className={classes("column-layout group_4")}>
                  <div className={classes("row-layout group_5")}>
                    <img src="/src/assets/Scale_Color.svg" className={classes("image")} />
                    <div className={classes("row-layout group_6")}>
                      <p className={classes("typography__subtitle-2 text_1")}>
                        <span>WEIGHT</span>
                      </p>
                      <h6 className={classes("h6")}>
                        <span>112</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 text_2")}>
                        <span>lbs</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("group_8")}>
                      <IgrCategoryChart dataSource={patientDashboardWeight} chartType="Column" yAxisInterval="10" yAxisMinimumValue="95" yAxisMaximumValue="125" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                    </div>
                  </div>
                </div>
                <div className={classes("column-layout group_4")}>
                  <div className={classes("row-layout group_5")}>
                    <img src="/src/assets/HRate_Color.svg" className={classes("image")} />
                    <div className={classes("row-layout group_6")}>
                      <p className={classes("typography__subtitle-2 text_1")}>
                        <span>HEART RATE</span>
                      </p>
                      <h6 className={classes("h6")}>
                        <span>90</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 text_2")}>
                        <span>bpm</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("group_9")}>
                      <IgrCategoryChart dataSource={patientDashboardHeartRate} chartType="Line" yAxisInterval="10" yAxisMinimumValue="60" yAxisMaximumValue="90" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes("column-layout group_3")}>
                <div className={classes("column-layout group_10")}>
                  <div className={classes("row-layout group_5")}>
                    <img src="/src/assets/BPressure_Color.svg" className={classes("image")} />
                    <div className={classes("row-layout group_6")}>
                      <p className={classes("typography__subtitle-2 text_1")}>
                        <span>BLOOD PRESSURE</span>
                      </p>
                      <h6 className={classes("h6")}>
                        <span>140</span>
                      </h6>
                      <h6 className={classes("h6_1")}>
                        <span>/</span>
                      </h6>
                      <h6 className={classes("h6")}>
                        <span>70</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 text_2")}>
                        <span>mmHg</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("group_11")}>
                      <IgrCategoryChart dataSource={patientDashboardBPSystolicDiastolic} chartType="Line" yAxisInterval="20" yAxisMinimumValue="70" yAxisMaximumValue="160" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                    </div>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <div className={classes("row-layout group_5")}>
                    <img src="/src/assets/blood-sugar.svg" className={classes("image")} />
                    <div className={classes("row-layout group_6")}>
                      <p className={classes("typography__subtitle-2 text_1")}>
                        <span>BLOOD SUGAR</span>
                      </p>
                      <h6 className={classes("h6")}>
                        <span>85</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 text_2")}>
                        <span>mg/dL</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("group_9")}>
                      <IgrCategoryChart dataSource={patientDashboardGlucose} chartType="Area" yAxisInterval="5" yAxisMinimumValue="80" yAxisMaximumValue="100" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes("column-layout group_3")}>
                <div className={classes("column-layout group_10")}>
                  <div className={classes("row-layout group_5")}>
                    <img src="/src/assets/Cholesterol_Color.svg" className={classes("image")} />
                    <div className={classes("row-layout group_6")}>
                      <p className={classes("typography__subtitle-2 text_1")}>
                        <span>TOTAL CHOLESTEROL</span>
                      </p>
                      <h6 className={classes("h6")}>
                        <span>200</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 text_2")}>
                        <span>mg/dL</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("group_12")}>
                      <IgrCategoryChart dataSource={patientDashboardTotalCholesterol} chartType="Area" yAxisInterval="20" yAxisMinimumValue="160" yAxisMaximumValue="230" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                    </div>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <div className={classes("row-layout group_5")}>
                    <img src="/src/assets/Cholesterol_Color.svg" className={classes("image")} />
                    <div className={classes("row-layout group_6")}>
                      <p className={classes("typography__subtitle-2 text_1")}>
                        <span>CHOLESTEROL HDL / LDL</span>
                      </p>
                      <h6 className={classes("h6")}>
                        <span>80</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 text_2")}>
                        <span>mg/dL</span>
                      </p>
                      <h6 className={classes("h6_1")}>
                        <span>-</span>
                      </h6>
                      <h6 className={classes("h6")}>
                        <span>85</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 text_2")}>
                        <span>mg/dL</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("group_13")}>
                      <IgrCategoryChart dataSource={patientDashboardCholesterolHDLLDL} chartType="Spline" yAxisInterval="20" yAxisMinimumValue="50" yAxisMaximumValue="150" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
