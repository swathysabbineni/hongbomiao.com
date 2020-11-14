import { CollectorMetricExporter } from '@opentelemetry/exporter-collector';
import { MeterProvider } from '@opentelemetry/metrics';
import isDevelopment from '../../shared/utils/isDevelopment';

const metricExporter = new CollectorMetricExporter({
  serviceName: 'hm-server-metric-service',
});

const metricProvider = isDevelopment()
  ? new MeterProvider({
      exporter: metricExporter,
      interval: 5e3, // 5s
    })
  : new MeterProvider();

const meter = metricProvider.getMeter('hm-server-meter');

export default meter;
