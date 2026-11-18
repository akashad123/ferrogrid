import React from 'react';
import { ServiceDetailTemplate } from '@/components/sections/ServiceDetailTemplate';
import { SERVICE_PAGES_DATA } from '@/data/servicePagesData';

export const ServiceEcoFriendlyHutsPage: React.FC = () => {
  const data = SERVICE_PAGES_DATA['service-eco-friendly-huts.html'];
  return <ServiceDetailTemplate data={data} />;
};
