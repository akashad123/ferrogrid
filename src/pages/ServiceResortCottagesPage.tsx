import React from 'react';
import { ServiceDetailTemplate } from '@/components/sections/ServiceDetailTemplate';
import { SERVICE_PAGES_DATA } from '@/data/servicePagesData';

export const ServiceResortCottagesPage: React.FC = () => {
  const data = SERVICE_PAGES_DATA['service-resort-cottages.html'];
  return <ServiceDetailTemplate data={data} />;
};
