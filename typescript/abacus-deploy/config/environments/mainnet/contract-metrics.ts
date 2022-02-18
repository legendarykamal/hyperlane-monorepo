import { ContractMetricsConfig } from '../../../src/config/contract-metrics';

export const contractMetrics: ContractMetricsConfig = {
  namespace: 'optics-production-community',
  environment: 'mainnet',
  docker: {
    repo: 'gcr.io/clabs-optics/optics-monitor',
    tag: '7c31c8623301f73fce69171695288119971295d1',
  },
};