import { environment } from "src/environments/environment";

export const ENDPOINTS = [
    {
      method: 'GET',
      baseURL: environment.baseUrl + '/pub/v1/record',
      recordId: '{apiID}',
      key: '{urlEncodedAPIKey}'
  
    },
    {
      method: 'GET',
      baseURL: environment.baseUrl + '/pub/v1/record',
      recordId: '{apiID}',
      path: 'experience',
      key: '{urlEncodedAPIKey}'
  
    },
    {
      method: 'GET',
      baseURL: environment.baseUrl + '/pub/v1/record',
      recordId: '{apiID}',
      path: 'education',
      key: '{urlEncodedAPIKey}'
  
    },
    {
      method: 'GET',
      baseURL: environment.baseUrl + '/pub/v1/record',
      recordId: '{apiID}',
      path: 'personal',
      key: '{urlEncodedAPIKey}'
  
    },
    {
      method: 'GET',
      baseURL: environment.baseUrl + '/pub/v1/record',
      recordId: '{apiID}',
      path: 'projects',
      key: '{urlEncodedAPIKey}'
  
    },
    {
        method: 'GET',
        baseURL: environment.baseUrl + '/pub/v1/record',
        recordId: '{apiID}',
        path: 'skills',
        key: '{urlEncodedAPIKey}'
    
      },
    
  ]