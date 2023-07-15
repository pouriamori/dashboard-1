export const statsData = [
  {
    title: 'Sales',
    barValue: 70,
    value: '89,200',

    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Monthly sales',
          data: [20, 50, 30, 80, 90, 50, 60, 60, 100, 110, 80, 120],
          backgroundColor: '#F87171',
          borderColor: 'black',
          borderWidth: 1.5,
          borderRadius: 10,

        }
      ]
    }
  },
  {
    title: 'Inventory',
    barValue: 64,
    value: '180,650',

    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Monthly inventory',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          backgroundColor: '#3B82F6',
          borderColor: 'black',
          borderWidth: 1.5,
          borderRadius: 10,

        }
      ]
    }

  },
  {
    title: 'Costs',
    barValue: 85,
    value: '50,000',

    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Monthly fee',
          data: [10, 40, 30, 70, 50, 60, 120, 80, 30, 70, 110, 20],
          backgroundColor: '#78716C',
          borderColor: 'black',
          borderWidth: 1.5,
          borderRadius: 10,

        }
      ]
    }

  },

];


export const ordersData = [
  {
    product: 'Phillips',
    id: '1876005',
    date: '2022/2/7',
    status: 'Accepted',
    class: 'orders-approved'
  },
  {
    product: 'Zara',
    id: '1898001',
    date: '2022/2/6',
    status: 'Compleating',
    class: 'orders-pending'
  },
  {
    product: 'Casio',
    id: '1855007',
    date: '2022/2/6',
    status: 'Rejected',
    class: 'orders-rejected'
  },
  {
    product: 'Apple',
    id: '1899003',
    date: '2022/2/5',
    status: 'Delivered',
    class: 'orders-delivered'
  },
  {
    product: 'Samsung',
    id: '1899009',
    date: '2022/2/5',
    status: 'Accepted',
    class: 'orders-approved'
  },
];