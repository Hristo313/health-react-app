import { useCallback, useEffect, useState } from 'react';
import { BPSystolicDiastolicType } from '../models/PatientDashboard/bpsystolic-diastolic-type';
import { CholesterolHDLLDLType } from '../models/PatientDashboard/cholesterol-hdlldltype';
import { getBPSystolicDiastolicList, getCholesterolHDLLDLList, getGlucoseList, getHeartRateList, getTotalCholesterolList, getWeightList } from '../services/patient-dashboard';
import { GlucoseType } from '../models/PatientDashboard/glucose-type';
import { HeartRateType } from '../models/PatientDashboard/heart-rate-type';
import { TotalCholesterolType } from '../models/PatientDashboard/total-cholesterol-type';
import { WeightType } from '../models/PatientDashboard/weight-type';

export const useGetWeightList = () => {
  const [weight, setWeight] = useState<WeightType[]>([]);

  const requestWeight = useCallback(() => {
    let ignore = false;
    getWeightList()
      .then((data) => {
        if (!ignore) {
          setWeight(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestWeight();
  }, [requestWeight]);

  return { requestPatientDashboardWeight: requestWeight, patientDashboardWeight: weight, setPatientDashboardWeight: setWeight };
}

export const useGetHeartRateList = () => {
  const [heartRate, setHeartRate] = useState<HeartRateType[]>([]);

  const requestHeartRate = useCallback(() => {
    let ignore = false;
    getHeartRateList()
      .then((data) => {
        if (!ignore) {
          setHeartRate(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestHeartRate();
  }, [requestHeartRate]);

  return { requestPatientDashboardHeartRate: requestHeartRate, patientDashboardHeartRate: heartRate, setPatientDashboardHeartRate: setHeartRate };
}

export const useGetBPSystolicDiastolicList = () => {
  const [bPSystolicDiastolic, setBPSystolicDiastolic] = useState<BPSystolicDiastolicType[]>([]);

  const requestBPSystolicDiastolic = useCallback(() => {
    let ignore = false;
    getBPSystolicDiastolicList()
      .then((data) => {
        if (!ignore) {
          setBPSystolicDiastolic(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestBPSystolicDiastolic();
  }, [requestBPSystolicDiastolic]);

  return { requestPatientDashboardBPSystolicDiastolic: requestBPSystolicDiastolic, patientDashboardBPSystolicDiastolic: bPSystolicDiastolic, setPatientDashboardBPSystolicDiastolic: setBPSystolicDiastolic };
}

export const useGetGlucoseList = () => {
  const [glucose, setGlucose] = useState<GlucoseType[]>([]);

  const requestGlucose = useCallback(() => {
    let ignore = false;
    getGlucoseList()
      .then((data) => {
        if (!ignore) {
          setGlucose(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestGlucose();
  }, [requestGlucose]);

  return { requestPatientDashboardGlucose: requestGlucose, patientDashboardGlucose: glucose, setPatientDashboardGlucose: setGlucose };
}

export const useGetTotalCholesterolList = () => {
  const [totalCholesterol, setTotalCholesterol] = useState<TotalCholesterolType[]>([]);

  const requestTotalCholesterol = useCallback(() => {
    let ignore = false;
    getTotalCholesterolList()
      .then((data) => {
        if (!ignore) {
          setTotalCholesterol(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTotalCholesterol();
  }, [requestTotalCholesterol]);

  return { requestPatientDashboardTotalCholesterol: requestTotalCholesterol, patientDashboardTotalCholesterol: totalCholesterol, setPatientDashboardTotalCholesterol: setTotalCholesterol };
}

export const useGetCholesterolHDLLDLList = () => {
  const [cholesterolHDLLDL, setCholesterolHDLLDL] = useState<CholesterolHDLLDLType[]>([]);

  const requestCholesterolHDLLDL = useCallback(() => {
    let ignore = false;
    getCholesterolHDLLDLList()
      .then((data) => {
        if (!ignore) {
          setCholesterolHDLLDL(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCholesterolHDLLDL();
  }, [requestCholesterolHDLLDL]);

  return { requestPatientDashboardCholesterolHDLLDL: requestCholesterolHDLLDL, patientDashboardCholesterolHDLLDL: cholesterolHDLLDL, setPatientDashboardCholesterolHDLLDL: setCholesterolHDLLDL };
}
