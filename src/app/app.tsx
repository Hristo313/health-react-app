import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule, IgrStep, IgrStepper, IgrStepperModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();
IgrStepperModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);
  const stepper = useRef<IgrStepper>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout main-navigation")}>
          <IgrNavbar className={classes("navbar")}>
            <div className={classes("row-layout group")} key={uuid()}>
              <div onClick={() => navigate(`/home`)} className={classes("row-layout group_1")}>
                <img src="/src/assets/logo2.svg" className={classes("image")} />
                <p className={classes("typography__subtitle-2 text")}>
                  <span>HEALTHCARE ASSISTANT</span>
                </p>
              </div>
            </div>
            <div slot="end" className={classes("row-layout group_2")} key={uuid()}>
              <div className={classes("row-layout group_1")}>
                <IgrAvatar src="/src/assets/Avatar13.png" shape="circle" className={classes("avatar")}></IgrAvatar>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>Sandy Anderson</span>
                </p>
              </div>
              <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()} className={classes("icon-button")}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>menu</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
          </IgrNavbar>
        </div>
        <div className={classes("row-layout bottom-container")}>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
          <IgrNavDrawer position="end" ref={navDrawer} className={classes("nav-drawer")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/home`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Home</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/medications`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>healing</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Medications</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/health-indicators`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Health Indicators</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/appointments`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>calendar_today</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Appointments</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/profile`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Medical Profile</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/emergency`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>error</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Emergency</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
        </div>
        <IgrStepper titlePosition="bottom" ref={stepper} className={classes("stepper")}>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text_1")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group_3")} key={uuid()}>
                <IgrButton clicked={() => stepper?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Address</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text_1")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group_3")} key={uuid()}>
                <IgrButton clicked={() => stepper?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton clicked={() => stepper?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text_1")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group_3")} key={uuid()}>
                <IgrButton clicked={() => stepper?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton clicked={() => stepper?.current?.reset()} className={classes("button")}>
                  <span key={uuid()}>Reset</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Wrap</p>
            <p slot="subtitle" key={uuid()}>(Optional)</p>
          </IgrStep>
        </IgrStepper>
      </div>
    </>
  );
}
