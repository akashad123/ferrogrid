import React from 'react';
import { ServiceDetailTemplate } from '@/components/sections/ServiceDetailTemplate';
import { SERVICE_PAGES_DATA } from '@/data/servicePagesData';

export const ServiceFarmStayBuildingsPage: React.FC = () => {
  const data = SERVICE_PAGES_DATA['service-farm-stay-buildings.html'];
  return <ServiceDetailTemplate data={data} />;
};
