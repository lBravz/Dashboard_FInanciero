
const transactions = [
    { date: '2025-01-05', description: 'Pago de sueldo', amount: 1200 },
    { date: '2025-01-04', description: 'Compra en supermercado', amount: -80 },
    { date: '2025-01-03', description: 'Pago de alquiler', amount: -500 },
    { date: '2025-01-02', description: 'Venta de productos', amount: 350 },
    { date: '2025-01-01', description: 'Pago de servicios', amount: -50 }
];


function updateDashboard() {
    const ingresos = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
    const gastos = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
    const ahorro = ingresos + gastos;

   
    document.getElementById('totalIngresos').textContent = `$${ingresos.toFixed(2)}`;
    document.getElementById('totalGastos').textContent = `$${Math.abs(gastos).toFixed(2)}`;
    document.getElementById('ahorroDisponible').textContent = `$${ahorro.toFixed(2)}`;

  
    const transactionsTableBody = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];
    transactionsTableBody.innerHTML = '';

    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount > 0 ? `+${transaction.amount.toFixed(2)}` : `${transaction.amount.toFixed(2)}`}</td>
        `;
        transactionsTableBody.appendChild(row);
    });
}


updateDashboard();
