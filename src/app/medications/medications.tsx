import { IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './medications.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Medications() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout medications-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>CURRENT MEDICATIONS</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/Med2.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Calcium 500mg</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>1 tablet(s), 1 time(s), daily, with meal</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/Med2.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Hydrolyzed Collagen</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>2 scoop(s), 1 time(s), daily</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/Med2.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Vitamin B19 1000mg</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>1 pill, 2 time(s), weekly, in the morning</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/Med2.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Vitamin D 100.000 IU</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>1 capsule, 1 time(s), trimonthly, with main meal</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
              </IgrList>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>EXPIRED PRESCRIPTIONS</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/meds-expired.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Hypersol B Nasal Spray</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>1 spray, 3 time(s) / day, each nostril, for 7 days</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/meds-expired.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Prednisone 20mg</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>1 tablet, 2 time(s) / day, with food, for 7 days</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
              </IgrList>
            </div>
          </div>
        </div>
        <div className={classes("row-layout group_8")}>
          <div className={classes("column-layout group_9")}>
            <h6 className={classes("content")}>
              <span>Calcium 500mg</span>
            </h6>
            <div className={classes("row-layout group_10")}>
              <div className={classes("column-layout group_11")}>
                <p className={classes("typography__overline text_1")}>
                  <span>DOSAGE</span>
                </p>
                <div className={classes("row-layout group_10")}>
                  <div className={classes("row-layout group_12")}>
                    <p className={classes("typography__subtitle-2 text_1")}>
                      <span>1</span>
                    </p>
                  </div>
                  <div className={classes("row-layout group_12")}>
                    <p className={classes("typography__subtitle-2 text_1")}>
                      <span>tablet</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes("column-layout group_11")}>
                <p className={classes("typography__overline text_1")}>
                  <span>FREQUENCY</span>
                </p>
                <div className={classes("row-layout group_10")}>
                  <div className={classes("row-layout group_12")}>
                    <p className={classes("typography__subtitle-2 text_1")}>
                      <span>1 time(s)</span>
                    </p>
                  </div>
                  <div className={classes("row-layout group_12")}>
                    <p className={classes("typography__subtitle-2 text_1")}>
                      <span>daily</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes("column-layout group_13")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>INDICATIONS</span>
              </p>
              <p className={classes("typography__body-2 content")}>
                <span>Take by mouth with breakfast.</span>
              </p>
              <p className={classes("typography__body-2 content")}>
                <span>Gador Calcium 500 mg Tablets are Calcium supplements formulated to help support bone strength. Sourced from high quality ingredients, these gluten free Nature Made Calcium 500 mg contain no color added and no artificial flavors. This gluten free Calcium supplement is perfect for adults who are low in Calcium or want an additional dietary supplement with their diet. Adults, take one of these Calcium tablet bone supplements 1 to 2 times daily with water and a meal. </span>
              </p>
              <a href="" className={classes("typography__body-2 hyperlink")}>
                <span>+ View more information</span>
              </a>
            </div>
            <div className={classes("column-layout group_13")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>PRESCRIPTION INFO</span>
              </p>
              <div className={classes("column-layout group_14")}>
                <div className={classes("row-layout group_15")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>Refills Left:</span>
                  </p>
                  <p className={classes("typography__body-2 content")}>
                    <span>4</span>
                  </p>
                </div>
                <div className={classes("row-layout group_15")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>Last Refill:</span>
                  </p>
                  <p className={classes("typography__body-2 content")}>
                    <span>1/10/2023</span>
                  </p>
                </div>
                <div className={classes("row-layout group_15")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>Prescribed by:</span>
                  </p>
                  <p className={classes("typography__body-2 content")}>
                    <span>Dr. Robert Stevens</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={classes("row-layout group_16")}>
              <IgrButton variant="flat" className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>alarm_add</span>
                </span>
                <span key={uuid()}>Set reminder</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton className={classes("button button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>replay</span>
                </span>
                <span key={uuid()}>REQUEST REFILL</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
