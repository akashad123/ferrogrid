import React from 'react';
import { ServiceDetailTemplate } from '@/components/sections/ServiceDetailTemplate';
import { SERVICE_PAGES_DATA } from '@/data/servicePagesData';

export const ServiceWaterFeaturesPage: React.FC = () => {
  const data = SERVICE_PAGES_DATA['service-water-features.html'];
  return <ServiceDetailTemplate data={data} />;
};
