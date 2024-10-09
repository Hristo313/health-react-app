import { IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';

IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Home() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout home-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div onClick={() => navigate(`/health-indicators`)} className={classes("column-layout group_2")}>
              <img src="/src/assets/HRate-White.svg" className={classes("image")} />
              <p className={classes("typography__subtitle-2 content")}>
                <span>HEART RATE</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <h4 className={classes("content")}>
                    <span>82</span>
                  </h4>
                  <h6 className={classes("content")}>
                    <span>bpm</span>
                  </h6>
                </div>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>+1.12%</span>
                </p>
              </div>
            </div>
            <div onClick={() => navigate(`/health-indicators`)} className={classes("column-layout group_5")}>
              <img src="/src/assets/BPressure-White.svg" className={classes("image_1")} />
              <p className={classes("typography__subtitle-2 content")}>
                <span>BLOOD PRESSURE</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <h4 className={classes("content")}>
                    <span>140</span>
                  </h4>
                  <h4 className={classes("content")}>
                    <span>/</span>
                  </h4>
                  <h4 className={classes("content")}>
                    <span>70</span>
                  </h4>
                  <h6 className={classes("content")}>
                    <span>mmHg</span>
                  </h6>
                </div>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>+1.12%</span>
                </p>
              </div>
            </div>
            <div onClick={() => navigate(`/health-indicators`)} className={classes("column-layout group_6")}>
              <img src="/src/assets/Cholesterol-White.svg" className={classes("image_1")} />
              <p className={classes("typography__subtitle-2 content")}>
                <span>CHOLESTEROL</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <h4 className={classes("content")}>
                    <span>200</span>
                  </h4>
                  <h6 className={classes("content")}>
                    <span>mg/dL</span>
                  </h6>
                </div>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>+1.12%</span>
                </p>
              </div>
            </div>
            <div onClick={() => navigate(`/health-indicators`)} className={classes("column-layout group_7")}>
              <img src="/src/assets/Scale-White.svg" className={classes("image_2")} />
              <p className={classes("typography__subtitle-2 content")}>
                <span>WEIGHT</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <h4 className={classes("content")}>
                    <span>112</span>
                  </h4>
                  <h6 className={classes("content")}>
                    <span>lbs</span>
                  </h6>
                </div>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>+1.12%</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes("row-layout group_8")}>
            <div className={classes("column-layout group_9")}>
              <div className={classes("row-layout group_10")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>CURRENT MEDICATIONS</span>
                  </p>
                </div>
                <div onClick={() => navigate(`/medications`)} className={classes("row-layout group_11")}>
                  <a href="" className={classes("typography__body-2 hyperlink")}>
                    <span>View all</span>
                  </a>
                  <span className={classes("material-icons icon")}>
                    <span key={uuid()}>arrow_forward</span>
                  </span>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/medications`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_12")} key={uuid()}>
                        <div className={classes("row-layout group_13")}>
                          <img src="/src/assets/Med2.svg" className={classes("image_3")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>Calcium 500mg</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>1 tablet(s), 1 time(s), daily, with meal</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/medications`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/medications`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_12")} key={uuid()}>
                        <div className={classes("row-layout group_13")}>
                          <img src="/src/assets/Med2.svg" className={classes("image_3")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>Hydrolyzed Collagen</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>2 scoop(s), 1 time(s), daily</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/medications`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/medications`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_12")} key={uuid()}>
                        <div className={classes("row-layout group_13")}>
                          <img src="/src/assets/Med2.svg" className={classes("image_3")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>Vitamin B19 1000mg</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>1 pill, 2 time(s), weekly, in the morning</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/medications`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/medications`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_12")} key={uuid()}>
                        <div className={classes("row-layout group_13")}>
                          <img src="/src/assets/Med2.svg" className={classes("image_3")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>Vitamin D 100.000 IU</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>1 capsule, 1 time(s), trimonthly, with main meal</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/medications`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
              </IgrList>
            </div>
            <div className={classes("column-layout group_9")}>
              <div className={classes("row-layout group_10")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>UPCOMING APPOINTMENTS</span>
                  </p>
                </div>
                <div onClick={() => navigate(`/appointments`)} className={classes("row-layout group_11")}>
                  <a href="" className={classes("typography__body-2 hyperlink")}>
                    <span>View all</span>
                  </a>
                  <span className={classes("material-icons icon")}>
                    <span key={uuid()}>arrow_forward</span>
                  </span>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/appointments`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_12")} key={uuid()}>
                        <div className={classes("row-layout group_13")}>
                          <img src="/src/assets/appt-upcoming.svg" className={classes("image_4")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>Internal Medicine</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>Tuesday, January 24, 2023 - 2:30pm - Dr. M. Matthews</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/appointments`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/appointments`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_12")} key={uuid()}>
                        <div className={classes("row-layout group_13")}>
                          <img src="/src/assets/appt-upcoming.svg" className={classes("image_4")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>Dermatology</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>Friday, February 24, 2023 - 08:45am - Dr. V. Sawyer</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/appointments`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/appointments`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_12")} key={uuid()}>
                        <div className={classes("row-layout group_13")}>
                          <img src="/src/assets/appt-upcoming.svg" className={classes("image_4")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>Gynaecology</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>Monday, March 6, 2023 - 6:30pm - Dr. J. Dean</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/appointments`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
              </IgrList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
