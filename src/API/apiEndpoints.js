export const API_ENDPOINTS = {
    // USERS: '/users',
    AUTH: {
      LOGIN: '/api/auth/login',
      REGISTER: '/api/auth/create',
      LOGOUT: '/api/auth/logout',
      ISOUTH: '/api/auth/is-outh',
      VERIFY: '/api/auth/verify',
      SEND_OTP: '/api/auth/send-otp',
      VERIFY_OTP: '/api/auth/verify-otp',
      CHANGE_PASSWORD: '/api/auth/change-password',
      EDIT_PROFILE: '/api/auth/edit-profile',
    },
    USERS: {
      ALLUSERS: '/api/admin/user-list',
      CHANGE_STATUS: '/api/admin/toggle-user-status',
    },
    CARS: {
      ADD_CAR: '/api/cars/create',
      ALL_CARS: '/api/cars/all-cars',
      ALL_CARS_USER: '/api/cars/all-cars-user',
      ONE_CAR: '/api/cars/oneCar',
      DELETE_CAR: '/api/cars/delete',
      EDIT_CAR: '/api/cars/edit-car',
      CHANGE_STATUS: '/api/cars/chageStatus',
    },
    SHOWROOM: {
      ALL_SHOWROOM: '/api/admin/all-showroom',
      ADD_SHOWROOM: '/api/admin/add-showroom',
      DELETE_SHOWROOM: '/api/admin/delete',
    },
    BOOKING: {
      ALL_BOOKING: '/api/booking/all-bookings',
      ADD_BOOKING: '/api/booking/create',
      CHANGE_STATUS: '/api/booking/change-status',
      DELETE_BOOKING: '/api/booking/delete',
      DATE_CHECK: '/api/booking/check-date',
    },
    ADMINS: {
      ALL_ADMINS: '/api/admin/admin-list',
      ADD_ADMIN: '/api/admin/create-admin',
      DASHBOARD: '/api/admin/dashboard',
    },
    PAYMENT: {
      CREATE_ORDER: '/api/booking/create-order',
      VERIFY_PAYMENT: '/api/booking/verify-payment',
      ALL_PAYMENTS: '/api/booking/payments',
    },
    NOTIFICATION: {
      ADMIN_NOTIFICATION: '/api/notification/admin-notification',
      USER_NOTIFICATION: '/api/notification/user-notification',
      MAKE_READ: '/api/notification/make-us-read',
    },
    MESSAGE:{
      GET_MESSAGES: '/api/admin/message',
      SEND_MESSAGE: '/api/admin/message',
    },
    USER:{
      GET_ALLDATA: '/api/user/user-data'
    }
  };