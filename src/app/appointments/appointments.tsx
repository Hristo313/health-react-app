import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './appointments.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Appointments() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const cancelApptDialog = useRef<IgrDialog>(null);

  return (
    <>
      <div className={classes("row-layout appointments-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>UPCOMING APPOINTMENTS</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Internal Medicine</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>Tuesday, January 24, 2023 - 2:30pm - Dr. M. Matthews</span>
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
                        <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Dermatology</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>Friday, February 24, 2023 - 08:45am - Dr. V. Sawyer</span>
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
                        <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Gynaecology</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>Monday, March 6, 2023 - 6:30pm - Dr. J. Dean</span>
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
                    <span>RECENT</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Oftalmology</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>Thursday, January 12, 2023 - Dr. H. Chandler</span>
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
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Traumatology</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>Friday, December 16, 2022 - Dr. J. Dean</span>
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
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Otorhinolaryngology</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>Tuesday, December 13, 2022 - Dr. H. McNamara</span>
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
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>Internal Medicine</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>Monday, November 28, 2022 - Dr. M. Matthews</span>
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
          <div className={classes("column-layout group_1")}>
            <h6 className={classes("content")}>
              <span>Dermatology Appointment</span>
            </h6>
            <div className={classes("column-layout group_9")}>
              <div className={classes("row-layout group_10")}>
                <IgrAvatar src="/src/assets/Avatar4.png" shape="circle" className={classes("avatar")}></IgrAvatar>
                <div className={classes("column-layout group_11")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>Dr. Michael Matthews</span>
                  </p>
                  <p className={classes("typography__body-2 text_1")}>
                    <span>Internal Medicine</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div slot="start" key={uuid()}>
                    <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_1")} key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>calendar_today</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Tuesday, January 24, 2023</div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div slot="start" key={uuid()}>
                    <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_2")} key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>access_time</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>2:30pm - 2:45pm</div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div slot="start" key={uuid()}>
                    <IgrAvatar shape="circle" className={classes("avatar_1 avatar_1_3")} key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>location_on</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Plainsboro Clinic </div>
                  <div slot="subtitle" key={uuid()}>1 Plainsboro Rd. Plainsboro, NJ 08536</div>
                </IgrListItem>
              </IgrList>
            </div>
            <div className={classes("column-layout group_9")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>REQUIREMENTS</span>
              </p>
              <div className={classes("column-layout group_12")}>
                <p className={classes("typography__body-2 content")}>
                  <span>- Recommended shower before appointment.</span>
                </p>
                <p className={classes("typography__body-2 content")}>
                  <span>- Wear loose comfortable clothing.</span>
                </p>
                <p className={classes("typography__body-2 content")}>
                  <span>- Avoid using makeup or nail polish before appointment.</span>
                </p>
                <p className={classes("typography__body-2 content")}>
                  <span>- Don't try any new skin care products in the days prior to your appointment.</span>
                </p>
                <p className={classes("typography__body-2 content")}>
                  <span>- Take your medications as scheduled. Your dermatologist needs to know their effects on your skin.
                </span>
                </p>
              </div>
            </div>
            <div className={classes("row-layout group_13")}>
              <IgrButton variant="flat" clicked={() => cancelApptDialog?.current?.toggle()} className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>close</span>
                </span>
                <span key={uuid()}>CANCEL</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton className={classes("button button_2")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>calendar_today</span>
                </span>
                <span key={uuid()}>Add to Calendar</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={cancelApptDialog}>
          <h5 slot="title" key={uuid()}>
            <span>Appointment Cancellation</span>
          </h5>
          <p className={classes("typography__body-1 text_1")} key={uuid()}>
            <span>Are you sure you want to cancel your appointment?</span>
          </p>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" clicked={() => cancelApptDialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>No, go back</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" clicked={() => cancelApptDialog?.current?.toggle()} className={classes("button_1 button_1_1")} key={uuid()}>
              <span key={uuid()}>Yes, cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
