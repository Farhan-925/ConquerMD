// src/components/home/PrecisionMetrics.jsx
import { MetricBar } from "./precision-metrices/MetricBar";
import Text from "./precision-metrices/Text";

export function PrecisionMetrics() {
  return (
    <section className="bg-[#0B0B0B] text-white pt-16 md:pt-20 flex flex-col items-center justify-center">
      <Text />
      <MetricBar />
    </section>
  );
}