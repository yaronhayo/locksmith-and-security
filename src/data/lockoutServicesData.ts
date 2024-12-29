import { ServicesData } from "@/types/lockoutServices";
import { businessLockoutData } from "./services/businessLockoutData";
import { businessLockChangeData } from "./services/businessLockChangeData";
import { carLockoutData } from "./services/carLockoutData";
import { houseLockoutData } from "./services/houseLockoutData";
import { lockChangeData } from "./services/lockChangeData";
import { lockRekeyData } from "./services/lockRekeyData";
import { newCarKeyData } from "./services/newCarKeyData";
import { carKeyProgramData } from "./services/carKeyProgramData";

export const servicesData: ServicesData = {
  'business-lockout': businessLockoutData,
  'business-lock-change': businessLockChangeData,
  'car-lockout': carLockoutData,
  'house-lockout': houseLockoutData,
  'lock-change': lockChangeData,
  'lock-rekey': lockRekeyData,
  'new-car-key': newCarKeyData,
  'car-key-program': carKeyProgramData
};