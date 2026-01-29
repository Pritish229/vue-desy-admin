<template>
  <div class="space-y-8">

    <!-- HEADER STATS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <div class="stat bg-base-100 shadow rounded-2xl">
        <div class="stat-figure text-primary">
          <img class="w-12 h-12 rounded-full" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" />
        </div>
        <div class="stat-title">Wallet Balance</div>
        <div class="stat-value text-primary">$865,200</div>
        <div class="stat-desc text-success">↗︎ 20.9k this week</div>
      </div>

      <div class="stat bg-base-100 shadow rounded-2xl">
        <div class="stat-figure text-secondary">
          <img class="w-12 h-12 rounded-full" src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
        </div>
        <div class="stat-title">Invested</div>
        <div class="stat-value text-secondary">$4.32M</div>
        <div class="stat-desc">Total portfolio</div>
      </div>

      <div class="stat bg-base-100 shadow rounded-2xl">
        <div class="stat-figure text-success">
          <span class="badge badge-success">+12%</span>
        </div>
        <div class="stat-title">Profit Ratio</div>
        <div class="stat-value">12.57%</div>
        <div class="stat-desc text-success">↗︎ Growing</div>
      </div>

      <div class="stat bg-base-100 shadow rounded-2xl">
        <div class="stat-figure text-info">
          <span class="badge badge-info">Active</span>
        </div>
        <div class="stat-title">Trades</div>
        <div class="stat-value">6,258</div>
        <div class="stat-desc text-error">↘︎ 29 less today</div>
      </div>
    </div>

    <!-- HERO ROW -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">

      <!-- MARKET BAR CHART -->
      <div class="xl:col-span-2 card bg-base-100 shadow rounded-2xl p-6 h-[420px] flex flex-col">
        <div class="flex justify-between mb-4">
          <h2 class="text-lg font-semibold">Market Overview</h2>
          <div class="space-x-2">
            <button class="btn btn-xs btn-primary">ALL</button>
            <button class="btn btn-xs btn-ghost">1M</button>
            <button class="btn btn-xs btn-ghost">1Y</button>
          </div>
        </div>

        <div class="flex-1 min-h-0">
          <canvas ref="marketChart"></canvas>
        </div>
      </div>

      <!-- 3D CARD HOVER -->
      <div class="card bg-base-100 shadow rounded-2xl p-6 group perspective h-[420px] flex flex-col justify-between">
        <h2 class="text-lg font-semibold">Featured Asset</h2>

        <div
          class="relative w-full h-[260px] transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:-rotate-x-6">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            class="absolute inset-0 m-auto w-32 drop-shadow-2xl"
          />
        </div>

        <div class="text-center">
          <div class="font-bold text-xl">Bitcoin</div>
          <div class="text-success">+4.8% today</div>
        </div>
      </div>

    </div>

    <!-- PROGRESS + TABLE -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">

      <!-- PROGRESS CARD -->
      <div class="card bg-base-100 shadow rounded-2xl p-6">
        <h2 class="text-lg font-semibold mb-4">Portfolio Progress</h2>

        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Bitcoin</span>
              <span>80%</span>
            </div>
            <progress class="progress progress-primary w-full" value="80" max="100"></progress>
          </div>

          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Ethereum</span>
              <span>55%</span>
            </div>
            <progress class="progress progress-secondary w-full" value="55" max="100"></progress>
          </div>

          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Litecoin</span>
              <span>35%</span>
            </div>
            <progress class="progress progress-info w-full" value="35" max="100"></progress>
          </div>
        </div>
      </div>

      <!-- TABLE CARD -->
      <div class="card bg-base-100 shadow rounded-2xl p-6">
        <div class="flex justify-between mb-4">
          <h2 class="text-lg font-semibold">Recent Transactions</h2>
          <button class="btn btn-sm btn-outline">View All</button>
        </div>

        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bitcoin</td>
                <td>Buy</td>
                <td>$1,250</td>
                <td><span class="badge badge-success">Completed</span></td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>Sell</td>
                <td>$840</td>
                <td><span class="badge badge-warning">Pending</span></td>
              </tr>
              <tr>
                <td>Litecoin</td>
                <td>Buy</td>
                <td>$430</td>
                <td><span class="badge badge-success">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'

const marketChart = ref(null)
let chartInstance = null
let observer = null

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light'
}

function isDarkTheme(theme) {
  return theme === 'dark' || theme === 'night'
}

function buildOptions(theme) {
  const dark = isDarkTheme(theme)

  const gridColor = dark ? 'rgba(255,255,255,0.08)' : '#f1f5f9'
  const tickColor = dark ? 'rgba(255,255,255,0.6)' : '#475569'

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: tickColor
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: gridColor,
          drawBorder: false
        },
        ticks: {
          color: tickColor,
          callback: value => value + 'K'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: tickColor
        }
      }
    }
  }
}

function renderChart() {
  const theme = getTheme()

  if (chartInstance) {
    chartInstance.destroy()
  }

  const ctx = marketChart.value.getContext('2d')

  const btcGradient = ctx.createLinearGradient(0, 0, 0, 400)
  btcGradient.addColorStop(0, '#fbbf24')
  btcGradient.addColorStop(1, '#f59e0b')

  const ethGradient = ctx.createLinearGradient(0, 0, 0, 400)
  ethGradient.addColorStop(0, '#818cf8')
  ethGradient.addColorStop(1, '#4f46e5')

  chartInstance = new Chart(marketChart.value, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Bitcoin Volume',
          data: [120, 190, 90, 150, 80, 170, 210],
          backgroundColor: btcGradient,
          hoverBackgroundColor: '#fde68a',
          borderRadius: 8
        },
        {
          label: 'Ethereum Volume',
          data: [60, 110, 70, 100, 50, 130, 160],
          backgroundColor: ethGradient,
          hoverBackgroundColor: '#a5b4fc',
          borderRadius: 8
        }
      ]
    },
    options: buildOptions(theme)
  })
}

onMounted(() => {
  renderChart()

  observer = new MutationObserver(() => {
    renderChart()
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (chartInstance) chartInstance.destroy()
})
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.rotate-y-12 {
  transform: rotateY(12deg);
}

.-rotate-x-6 {
  transform: rotateX(-6deg);
}
</style>
