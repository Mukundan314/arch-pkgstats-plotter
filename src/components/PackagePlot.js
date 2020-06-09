import axios from 'axios';
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    packageNames: {
      type: Array,
      default: () => [],
      validator: (value) => (new Set(value)).size === value.length,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  async mounted() {
    this.renderLineChart();
  },
  methods: {
    async renderLineChart() {
      let labels = new Set();

      const datasets = await Promise.all(this.packageNames.map(async (packageName) => {
        const params = {
          startMonth: `${this.startDate.getFullYear()}${String(this.startDate.getMonth() + 1).padStart(2, '0')}`,
          endMonth: `${this.endDate.getFullYear()}${String(this.endDate.getMonth() + 1).padStart(2, '0')}`,
        };

        const url = `https://pkgstats.archlinux.de/api/packages/${packageName}/series`;
        const res = await axios.get(url, { params });

        labels = new Set([
          ...res.data.packagePopularities.map((popularity) => popularity.startMonth),
          ...labels,
        ]);

        return {
          label: packageName,
          data: res.data.packagePopularities.map((popularity) => ({
            x: popularity.startMonth,
            y: popularity.count,
          })),
        };
      }));

      this.renderChart(
        { labels: [...labels].sort(), datasets },
        { responsive: true, maintainAspectRatio: false },
      );
    },
  },
  watch: {
    packageNames() {
      this.renderLineChart();
    },
  },
};
